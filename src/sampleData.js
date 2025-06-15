// Sample test phrases for the bingo card maker
// This file contains various test cases from your existing test files

export const samplePhrases = {
  simple: [
    'hello',
    'alyssa',
    'i believe in you',
    'hang in there',
    'sweet baby',
    'dobby',
    'voldemort',
    'cowabunga',
    'balrog',
    'you shall not pass',
    'the skin of our teeth',
    'perfectly fine'
  ],
  
  motivational: [
    'Dream big, start small.',
    'Believe in yourself.',
    'Keep moving forward.',
    'You are stronger than you think.',
    'The best is yet to come.',
    'Stay positive, work hard.',
    'Never stop learning.',
    'Your potential is limitless.',
    'Be the change you seek.',
    'Make today count.',
    'Progress, not perfection.',
    'One step at a time.',
    'Never give up.',
    'Your only limit is you.',
    'Live with purpose.',
    'Choose joy.',
    'Embrace the journey.',
    'Success starts with belief.',
    'Find strength in challenges.',
    'Keep going, you\'re almost there.',
    'Believe in the power of now.',
    'Turn dreams into plans.',
    'Every day is a fresh start.',
    'You are capable of amazing things.',
    'Success is a journey, not a destination.',
    'Challenges make you stronger.',
    'Focus on solutions, not problems.',
    'Your attitude determines your direction.',
    'Small steps lead to big changes.',
    'Persistence pays off.'
  ],
  
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
    'Impulse buy at checkout'
  ]
};

export const formatPhrasesForTextarea = (phrases) => {
  return phrases.join('\n');
};
