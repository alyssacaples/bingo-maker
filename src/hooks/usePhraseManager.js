import { useState, useCallback } from 'react';
import { templateTitles, samplePhrases } from '../data/templates';

const usePhraseManager = () => {
  const [phraseInput, setPhraseInput] = useState('');
  const [phrases, setPhrases] = useState([]);

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

  const handlePhraseInputChange = useCallback((value) => {
    setPhraseInput(value);
    setPhrases(parsePhrases(value));
  }, [parsePhrases]);

  const addSamplePhrases = useCallback((type = 'icebreakers') => {
    const selectedPhrases = samplePhrases[type] || samplePhrases.icebreakers;
    const sampleText = selectedPhrases.join('\n');
    setPhraseInput(sampleText);
    setPhrases(selectedPhrases);
    
    // Return the suggested title for this template
    return templateTitles[type] || 'BINGO!';
  }, []);

  const getSuggestedTitle = useCallback((type) => {
    return templateTitles[type] || 'BINGO!';
  }, []);

  const clearAll = useCallback(() => {
    setPhraseInput('');
    setPhrases([]);
  }, []);

  return {
    phraseInput,
    phrases,
    handlePhraseInputChange,
    addSamplePhrases,
    getSuggestedTitle,
    clearAll
  };
};

export default usePhraseManager;
