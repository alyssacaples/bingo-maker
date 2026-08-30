// Shared by the build-time page generator and by App's runtime metadata effect.
//
// It has to be shared, because the two used to disagree: the generator wrote a
// specific description into the HTML and React then replaced it with a generic
// line that was identical on all 159 templates apart from the name. Crawlers
// that execute JS saw the generic one, which is the opposite of the intent.
//
// The intro is a 50 to 100 word direct-answer paragraph, right for the page body
// and roughly triple what a search snippet holds, so it gets trimmed here.
const META_MAX = 155;

// Words that read as broken when a cut lands right after them.
const DANGLING = new Set([
  'and', 'or', 'but', 'from', 'to', 'with', 'for', 'of', 'in', 'on', 'at',
  'by', 'as', 'the', 'a', 'an', 'plus', 'like',
]);

export function metaDescription(intro) {
  const text = String(intro).replace(/\s+/g, ' ').trim();
  if (text.length <= META_MAX) return text;

  // The house intro formula opens with the claim, then a colon or a "from X to
  // Y" list of examples. Either is a clean place to stop.
  for (const brk of [text.indexOf(':'), text.indexOf(', from ')]) {
    if (brk >= 80 && brk <= META_MAX) return text.slice(0, brk).trim() + '.';
  }

  // Otherwise cut at a word boundary, then walk back over any trailing
  // connective so the sentence does not end on "and" or "from".
  let words = text.slice(0, META_MAX).split(' ');
  words.pop(); // the word the cut landed inside
  while (words.length && DANGLING.has(words[words.length - 1].toLowerCase().replace(/[^a-z]/g, ''))) {
    words.pop();
  }

  // No ellipsis: search engines add their own, and it only eats characters.
  return words.join(' ').replace(/[,;:]$/, '') + '.';
}
