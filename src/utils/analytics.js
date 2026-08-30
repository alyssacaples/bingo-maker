// GA4 event tracking.
//
// The gtag snippet is loaded in index.html. Everything here is deliberately
// defensive: a meaningful share of visitors block analytics, and a missing
// gtag must never be able to throw inside a click handler and swallow the
// action the user actually wanted.
//
// GA4 gives us sessions, pageviews and geography for free. These events cover
// the things it cannot infer: which templates get used, who reaches a PDF,
// and which outbound links earn.

/**
 * Send a GA4 event. No-ops when analytics is unavailable.
 * @param {string} name   GA4 event name (snake_case, <=40 chars)
 * @param {object} params Event parameters (values <=100 chars)
 */
export function track(name, params = {}) {
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params);
  } catch {
    // Analytics is never worth breaking a page over.
  }
}

// Named wrappers, so event names live in one place instead of being retyped
// as string literals at each call site and quietly drifting apart.

export const trackTemplateView = (slug, title) =>
  track('template_view', { template_slug: slug, template_title: title });

export const trackTemplateSelect = (title, category) =>
  track('template_select', { template_title: title, template_category: category });

export const trackPdfPreview = (title, gridSize) =>
  track('pdf_preview_open', { template_title: title, grid_size: gridSize });

export const trackPdfDownload = (title, gridSize, copies, phraseCount) =>
  track('pdf_download', {
    template_title: title,
    grid_size: gridSize,
    copies,
    phrase_count: phraseCount,
  });

export const trackAffiliateClick = (destination, title) =>
  track('affiliate_click', { destination, template_title: title });

export const trackEmailSignup = (source) =>
  track('email_signup', { source });
