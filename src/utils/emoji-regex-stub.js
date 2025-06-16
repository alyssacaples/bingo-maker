// Stub replacement for emoji-regex to avoid CommonJS issues
// This provides minimal functionality that dependencies expect

// Default export - a simple regex that matches nothing in most cases
export default function() {
  return /(?:)/; // Empty regex that matches nothing
}

// Named exports that some packages might expect
export function emojiRegex() {
  return /(?:)/;
}

// For packages that might use the module as a regex directly
export const regex = /(?:)/;
