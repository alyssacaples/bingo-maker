#!/usr/bin/env node
// Runs after `vite build`. For every template that has authored SEO content
// (src/data/templateContent.js), generates a static, crawler-readable page
// at dist/templates/<slug>/index.html — the template's name, intro
// paragraph, board items, and FAQ are all in the raw HTML response, no JS
// execution required. Also regenerates public/sitemap.xml and
// public/.well-known/llms.txt from the same data so they can never drift
// out of sync with what's actually been shipped.
//
// Templates in src/data/templates.js that don't yet have a templateContent
// entry are simply skipped (not an error) — that's the expected in-progress
// state while content is authored in batches. A templateContent entry with
// bad/missing data (not "not yet written") is what fails the build.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as cheerio from 'cheerio';
import { templateTitles, samplePhrases } from '../src/data/templates.js';
import { templateContent } from '../src/data/templateContent.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const distIndexPath = join(distDir, 'index.html');
const publicDir = join(root, 'public');

const SITE_URL = 'https://makebingocard.com';
const LLMS_TXT_MAX = 50;

// --- Validate every slug we're about to generate a page for ---
const slugsToGenerate = Object.keys(templateContent);
const errors = [];
for (const slug of slugsToGenerate) {
  const c = templateContent[slug];
  if (!templateTitles[slug]) errors.push(`${slug}: has templateContent but no templateTitles entry`);
  if (!samplePhrases[slug] || samplePhrases[slug].length === 0) errors.push(`${slug}: samplePhrases is empty/missing`);
  if (!c.intro || c.intro.trim().length === 0) errors.push(`${slug}: missing intro`);
  if (!Array.isArray(c.faq) || c.faq.length !== 4) errors.push(`${slug}: faq must have exactly 4 { q, a } entries`);
  if (!Array.isArray(c.related) || c.related.length < 5) errors.push(`${slug}: related must list at least 5 slugs`);
  for (const r of c.related || []) {
    if (!templateTitles[r]) errors.push(`${slug}: related slug "${r}" doesn't exist in templateTitles`);
  }
}
if (errors.length > 0) {
  console.error(`\ngenerate-template-pages: ${errors.length} data problem(s), aborting build:\n`);
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
}

if (!existsSync(distIndexPath)) {
  console.error('generate-template-pages: dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

const notYetAuthored = Object.keys(templateTitles).filter(s => !templateContent[s]);
console.log(`generate-template-pages: generating ${slugsToGenerate.length}/${Object.keys(templateTitles).length} template pages (${notYetAuthored.length} not yet authored, skipped for now).`);

const baseHtml = readFileSync(distIndexPath, 'utf-8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function plainTitle(title) {
  return title.replace(/!$/, '');
}

function buildJsonLd(slug, title, content) {
  const url = `${SITE_URL}/templates/${slug}`;
  const dateIso = new Date().toISOString().slice(0, 10);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: content.intro,
    datePublished: dateIso,
    dateModified: dateIso,
    author: { '@type': 'Person', name: 'Alyssa' },
    publisher: { '@type': 'Organization', name: 'Bingo Card Maker', url: SITE_URL },
    mainEntityOfPage: url,
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${title}`,
    step: [
      { '@type': 'HowToStep', text: 'Print the card or open it on your phone.' },
      { '@type': 'HowToStep', text: 'Mark a square whenever that item happens.' },
      { '@type': 'HowToStep', text: 'Get 5 in a row — across, down, or diagonal — to win.' },
    ],
  };

  return [article, faqPage, howTo];
}

function buildContentHtml(slug, title, content, phrases) {
  const relatedLinks = content.related
    .filter(r => templateTitles[r])
    .map(r => `<li><a href="/templates/${r}">${escapeHtml(plainTitle(templateTitles[r]))}</a></li>`)
    .join('\n        ');

  const boardItems = phrases
    .map(p => `<li>${escapeHtml(p)}</li>`)
    .join('\n        ');

  const faqItems = content.faq
    .map(({ q, a }) => `
      <div class="static-faq-item">
        <h3>${escapeHtml(q)}</h3>
        <p>${escapeHtml(a)}</p>
      </div>`)
    .join('\n');

  return `
  <div id="static-content" class="static-content">
    <div class="static-card">
      <div class="static-card-header">About this template</div>
      <div class="static-card-body">
        <h1>${escapeHtml(plainTitle(title))}</h1>
        <p class="static-intro">${escapeHtml(content.intro)}</p>

        <h2>All ${phrases.length} board items</h2>
        <ul class="static-board-items">
        ${boardItems}
        </ul>

        <h2>How to use this bingo card</h2>
        <ol class="static-howto">
          <li>Print the card or open it on your phone.</li>
          <li>Mark a square whenever that item happens.</li>
          <li>Get 5 in a row — across, down, or diagonal — to win.</li>
        </ol>

        <h2>FAQ</h2>
        ${faqItems}

        <h2>Related templates</h2>
        <ul class="static-related">
        ${relatedLinks}
        </ul>
      </div>
    </div>
  </div>`;
}

function setMetaTag($, selector, createAttrs, content) {
  let el = $(selector);
  if (el.length === 0) {
    el = $('<meta>');
    Object.entries(createAttrs).forEach(([k, v]) => el.attr(k, v));
    $('head').append(el);
  }
  el.attr('content', content);
}

let generated = 0;
for (const slug of slugsToGenerate) {
  const title = templateTitles[slug];
  const content = templateContent[slug];
  const phrases = samplePhrases[slug];
  const url = `${SITE_URL}/templates/${slug}`;
  const fullTitle = `${plainTitle(title)} - Free Bingo Card Maker`;

  const $ = cheerio.load(baseHtml);

  $('title').text(fullTitle);

  setMetaTag($, 'meta[name="description"]', { name: 'description' }, content.intro);
  setMetaTag($, 'meta[property="og:title"]', { property: 'og:title' }, fullTitle);
  setMetaTag($, 'meta[property="og:description"]', { property: 'og:description' }, content.intro);
  setMetaTag($, 'meta[property="og:url"]', { property: 'og:url' }, url);
  setMetaTag($, 'meta[name="twitter:title"]', { name: 'twitter:title' }, fullTitle);
  setMetaTag($, 'meta[name="twitter:description"]', { name: 'twitter:description' }, content.intro);

  let canonical = $('link[rel="canonical"]');
  if (canonical.length === 0) {
    canonical = $('<link rel="canonical">');
    $('head').append(canonical);
  }
  canonical.attr('href', url);

  buildJsonLd(slug, title, content).forEach(block => {
    $('head').append(`<script type="application/ld+json">${JSON.stringify(block)}</script>`);
  });

  // Placed after #root, not before: with JS disabled #root is empty, so
  // this is still the first real content a non-JS crawler sees in the raw
  // HTML. With JS enabled, real visitors see the actual branded app first
  // (header, generator) and this reads as a normal "about this card" /
  // FAQ section underneath it, not a wall of text bolted on top of the site.
  $('#root').after(buildContentHtml(slug, title, content, phrases));

  const outDir = join(distDir, 'templates', slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), $.html());
  generated++;
}

console.log(`generate-template-pages: wrote ${generated} pages to dist/templates/`);

// --- Regenerate sitemap.xml (homepage + one entry per generated template) ---
const sitemapUrls = [
  { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
  ...slugsToGenerate.map(slug => ({
    loc: `${SITE_URL}/templates/${slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(publicDir, 'sitemap.xml'), sitemapXml);
writeFileSync(join(distDir, 'sitemap.xml'), sitemapXml);
console.log(`generate-template-pages: wrote sitemap.xml with ${sitemapUrls.length} URLs`);

// --- Regenerate /.well-known/llms.txt (top N templates, one-line summaries) ---
// No traffic data exists yet to rank by. v1 heuristic: prefer templates with
// broad search intent over hyper-personal one-offs, then take the first
// LLMS_TXT_MAX in that order. Easy to replace with a real ranking once
// analytics exist (see requirements doc item 1.6 / 6.5).
const personalSlugPattern = /^(alyssa-|garmin-|battling-seattle-freeze$)/;
const llmsSlugs = [...slugsToGenerate]
  .sort((a, b) => Number(personalSlugPattern.test(a)) - Number(personalSlugPattern.test(b)))
  .slice(0, LLMS_TXT_MAX);

const llmsTxt = `# Bingo Card Maker

> Free printable bingo card generator with ${Object.keys(templateTitles).length}+ ready-made templates — travel, holidays, hobbies, and more. No signup required.

## Templates

${llmsSlugs.map(slug => `- [${plainTitle(templateTitles[slug])}](${SITE_URL}/templates/${slug}): ${templateContent[slug].intro}`).join('\n')}
`;

const wellKnownDir = join(publicDir, '.well-known');
mkdirSync(wellKnownDir, { recursive: true });
writeFileSync(join(wellKnownDir, 'llms.txt'), llmsTxt);

const wellKnownDistDir = join(distDir, '.well-known');
mkdirSync(wellKnownDistDir, { recursive: true });
writeFileSync(join(wellKnownDistDir, 'llms.txt'), llmsTxt);
console.log(`generate-template-pages: wrote llms.txt with ${llmsSlugs.length} templates`);
