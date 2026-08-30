// Font choices offered in the customization panel.
//
// Deliberately separate from pdfFonts.js, which imports Font from
// @react-pdf/renderer to register them. CardCustomization needs these lists,
// and when they lived alongside that import the whole PDF library was pulled
// into the main bundle: 331kB became 573kB and the lazy chunk stopped being
// lazy. Nothing here imports @react-pdf, so it stays cheap.
//
// The values must match the families registered in pdfFonts.js.
// Both dropdowns in the customization panel read from here, so the site faces
// cannot appear in one and not the other.
export const TITLE_FONT_OPTIONS = [
  { value: 'Archivo', label: 'Archivo (site font)' },
  { value: 'Helvetica-Bold', label: 'Helvetica Bold' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Times-Roman', label: 'Times Roman' },
  { value: 'Courier', label: 'Courier' },
  { value: 'JetBrains Mono', label: 'JetBrains Mono' },
];

export const CELL_FONT_OPTIONS = [
  { value: 'Archivo', label: 'Archivo (site font)' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Times-Roman', label: 'Times Roman' },
  { value: 'Courier', label: 'Courier' },
  { value: 'JetBrains Mono', label: 'JetBrains Mono' },
];
