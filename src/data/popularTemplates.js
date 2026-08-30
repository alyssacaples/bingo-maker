// The shortlist shown on the homepage.
//
// Curated by hand, not measured. GA4 only started recording `template_view`
// and `template_select` this month, so there is no popularity data yet. Once
// there is a few weeks of it, this list should be replaced by the actual top
// slugs rather than a guess.
//
// Every slug here must exist in templateContent.js, or it will render a link
// to a page that was never generated. The homepage guards against that at
// render time, and the build guards the same rule for related strips.
// Keep this to three. It is a single inline row under the intro line, not a
// browse page: the full library is already one scroll down.
export const popularTemplates = [
  'icebreakers',
  'thanksgiving',
  'office-party',
];
