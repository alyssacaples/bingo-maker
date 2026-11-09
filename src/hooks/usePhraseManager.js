import { useState, useCallback, useMemo } from 'react';
import { templateTitles, samplePhrases } from '../data/templates';

// Two phrases count as the same square if they differ only in case or in the
// amount of whitespace between words. Pasting out of a doc or a spreadsheet is
// the normal way phrases arrive here, and that is exactly where "Office party"
// and "office  party" come from. Comparing raw strings would miss both.
const normalize = (phrase) => phrase.trim().replace(/\s+/g, ' ').toLowerCase();

const usePhraseManager = () => {
  const [phraseInput, setPhraseInput] = useState('');
  const [phrases, setPhrases] = useState([]);

  // Holds the text as it was before a dedupe, so removing repeats is
  // recoverable. Setting a textarea's value from code wipes the browser's own
  // undo stack, so without this the only way back from a mistaken dedupe would
  // be retyping the lines by hand.
  const [undoSnapshot, setUndoSnapshot] = useState(null);
  const [lastRemovedCount, setLastRemovedCount] = useState(0);

  const parsePhrases = useCallback((input) => {
    if (!input.trim()) return [];
    
    // First try line breaks (most common and preferred)
    if (input.includes('\n')) {
      return input.split('\n')
        .map(phrase => phrase.trim())
        .filter(phrase => phrase.length > 0);
    }
    
    // Then try semicolons
    if (input.includes(';')) {
      return input.split(';')
        .map(phrase => phrase.trim())
        .filter(phrase => phrase.length > 0);
    }
    
    // Finally try commas
    if (input.includes(',')) {
      return input.split(',')
        .map(phrase => phrase.trim())
        .filter(phrase => phrase.length > 0);
    }
    
    // If no delimiters, treat as single phrase
    return [input.trim()];
  }, []);

  // Deliberately reported rather than applied. Parsing silently dropping lines
  // would mean the phrase count under the heading disagreed with what the
  // person can see in the textarea, and someone who repeated a phrase on
  // purpose would never find out why it vanished.
  const { duplicateCount, uniquePhraseCount } = useMemo(() => {
    const seen = new Set();
    let duplicates = 0;
    for (const phrase of phrases) {
      const key = normalize(phrase);
      if (seen.has(key)) duplicates += 1;
      else seen.add(key);
    }
    return { duplicateCount: duplicates, uniquePhraseCount: seen.size };
  }, [phrases]);

  const handlePhraseInputChange = useCallback((value) => {
    setPhraseInput(value);
    setPhrases(parsePhrases(value));
    // Any edit makes the snapshot stale: restoring it would throw away work
    // done since the dedupe.
    setUndoSnapshot(null);
    setLastRemovedCount(0);
  }, [parsePhrases]);

  // Keeps the first occurrence of each phrase, as typed, and rewrites the
  // textarea to match. The result is newline separated whatever came in, which
  // is the delimiter parsePhrases prefers anyway.
  const dedupePhrases = useCallback(() => {
    const seen = new Set();
    const kept = [];
    for (const phrase of phrases) {
      const key = normalize(phrase);
      if (seen.has(key)) continue;
      seen.add(key);
      kept.push(phrase);
    }

    const removed = phrases.length - kept.length;
    if (removed === 0) return;

    setUndoSnapshot(phraseInput);
    setLastRemovedCount(removed);
    setPhraseInput(kept.join('\n'));
    setPhrases(kept);
  }, [phrases, phraseInput]);

  const undoDedupe = useCallback(() => {
    if (undoSnapshot === null) return;
    setPhraseInput(undoSnapshot);
    setPhrases(parsePhrases(undoSnapshot));
    setUndoSnapshot(null);
    setLastRemovedCount(0);
  }, [undoSnapshot, parsePhrases]);

  const addSamplePhrases = useCallback((type = 'icebreakers') => {
    const selectedPhrases = samplePhrases[type] || samplePhrases.icebreakers;
    const sampleText = selectedPhrases.join('\n');
    setPhraseInput(sampleText);
    setPhrases(selectedPhrases);
    setUndoSnapshot(null);
    setLastRemovedCount(0);
    
    // Return the suggested title for this template
    return templateTitles[type] || 'BINGO!';
  }, []);

  const getSuggestedTitle = useCallback((type) => {
    return templateTitles[type] || 'BINGO!';
  }, []);

  const clearAll = useCallback(() => {
    setPhraseInput('');
    setPhrases([]);
    setUndoSnapshot(null);
    setLastRemovedCount(0);
  }, []);

  return {
    phraseInput,
    phrases,
    handlePhraseInputChange,
    addSamplePhrases,
    getSuggestedTitle,
    clearAll,
    duplicateCount,
    uniquePhraseCount,
    dedupePhrases,
    undoDedupe,
    canUndoDedupe: undoSnapshot !== null,
    lastRemovedCount
  };
};

export default usePhraseManager;
