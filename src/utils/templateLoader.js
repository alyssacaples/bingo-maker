// Utility function to load bingo templates from text files
// This would typically be done server-side, but for a static app we'll embed the content

const loadTemplateContent = async (filename) => {
  try {
    const response = await fetch(`/tests/${filename}`);
    if (!response.ok) throw new Error(`Failed to load ${filename}`);
    const text = await response.text();
    return text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  } catch (error) {
    console.warn(`Could not load template ${filename}:`, error);
    return [];
  }
};

export { loadTemplateContent };
