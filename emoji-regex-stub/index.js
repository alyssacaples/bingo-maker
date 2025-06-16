// Stub replacement for emoji-regex
// Provides the same exports as the original but returns empty regexes

// Default export - matches the original emoji-regex structure
export default function() {
  return /(?:)/; // Empty regex that matches nothing
}

// Named exports that some packages might expect
export function emojiRegex() {
  return /(?:)/;
}

// For CommonJS compatibility
module.exports = function() {
  return /(?:)/;
};

module.exports.default = module.exports;
module.exports.emojiRegex = function() {
  return /(?:)/;
};
