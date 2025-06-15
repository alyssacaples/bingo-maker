import { useState, useCallback } from 'react';

const usePhraseManager = () => {
  const [phraseInput, setPhraseInput] = useState('');
  const [phrases, setPhrases] = useState([]);

  // Sample data embedded directly to avoid import issues
  const samplePhrases = {
    shopping: [
      'Free parking at mall',
      'Someone cuts in line',
      'Baby crying loudly',
      'Person on phone in quiet area',
      'Elevator takes forever',
      'Can\'t find what you need',
      'Long checkout line',
      'Forgot shopping list',
      'Price check needed',
      'Cart with wobbly wheel',
      'Someone blocking aisle',
      'Coupon doesn\'t work',
      'Item not in stock',
      'Kids running around',
      'Overhead announcement',
      'Self-checkout error',
      'Someone cuts you off',
      'Parking spot taken',
      'Door won\'t open easily',
      'Credit card declined',
      'Wrong size selected',
      'Employee nowhere to find',
      'Long wait for help',
      'Forget where you parked',
      'Impulse buy at checkout',
      'Slow cashier',
      'Screaming toddler',
      'Can\'t reach top shelf',
      'Spill in aisle',
      'Register malfunction',
      'Bathroom out of order',
      'Store too hot/cold',
      'Product placement changed',
      'Missing price tag',
      'Samples being offered'
    ],
    motivational: [
      'Dream big, start small',
      'Believe in yourself',
      'Keep moving forward',
      'You are stronger than you think',
      'The best is yet to come',
      'Stay positive, work hard',
      'Never stop learning',
      'Your potential is limitless',
      'Be the change you seek',
      'Make today count',
      'Progress, not perfection',
      'One step at a time',
      'Never give up',
      'Your only limit is you',
      'Live with purpose',
      'Choose joy',
      'Embrace the journey',
      'Create your own sunshine',
      'Be fearless',
      'Chase your dreams',
      'Every day is a gift',
      'You\'ve got this',
      'Stay humble, hustle hard',
      'Rise above the storm',
      'Be kind to yourself',
      'Focus on solutions',
      'Trust the process',
      'Growth requires discomfort',
      'Turn pain into power',
      'Your comeback starts now'
    ],
    simple: Array.from({length: 101}, (_, i) => i).slice(1).map(i => `${i}`)
  };

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

  const addSamplePhrases = useCallback((type = 'shopping') => {
    const selectedPhrases = samplePhrases[type] || samplePhrases.shopping;
    const sampleText = selectedPhrases.join('\n');
    setPhraseInput(sampleText);
    setPhrases(selectedPhrases);
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
    clearAll
  };
};

export default usePhraseManager;
