import { Font } from '@react-pdf/renderer';

// Archivo and JetBrains Mono, the site's own faces, made available to the
// printed card so a downloaded PDF matches the site it came from.
//
// @react-pdf ships only the 14 PDF core fonts (Helvetica, Times, Courier and
// their variants). Anything else has to be registered with a real font file.
// The files come from @fontsource rather than a remote URL on purpose: a
// registration pointing at fonts.gstatic.com would make PDF generation depend
// on a network fetch at the moment someone clicks Download, and those URLs are
// versioned and change.
//
// Vite resolves these imports to hashed URLs in the built assets, so they are
// same-origin and cached like any other asset.
import archivo400 from '@fontsource/archivo/files/archivo-latin-400-normal.woff';
import archivo700 from '@fontsource/archivo/files/archivo-latin-700-normal.woff';
import mono400 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff';

// woff rather than woff2: fontkit can decode both, but woff2 decompression
// pulls in a wasm path that has been unreliable in the browser build. woff is
// larger by roughly a third and simply works.
let registered = false;

export function registerPdfFonts() {
  if (registered) return;
  try {
    Font.register({
      family: 'Archivo',
      fonts: [
        { src: archivo400, fontWeight: 400 },
        { src: archivo700, fontWeight: 700 },
      ],
    });
    Font.register({ family: 'JetBrains Mono', fonts: [{ src: mono400, fontWeight: 400 }] });
    registered = true;
  } catch (err) {
    // A failed registration must not take the download with it. The card falls
    // back to the core fonts, which are always present.
    console.error('PDF font registration failed, falling back to core fonts:', err);
  }
}
