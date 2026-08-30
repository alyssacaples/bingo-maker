import { useState, useCallback, lazy, Suspense } from 'react';
import { Download, Eye } from 'lucide-react';

const PDFSection = lazy(() => import('./PDFSection'));

// @react-pdf/renderer is ~1.38MB (445kB gzipped). It used to start downloading
// 46ms into every page load, on the homepage with zero phrases entered and on
// every pre-rendered template page. React.lazy() was already in place but bought
// nothing, because the component rendered unconditionally and React fetches a
// lazy chunk the moment it mounts.
//
// Now it waits for someone who actually intends to make a PDF. Hover, focus and
// touch all count as intent and start the fetch, so on a real click the chunk is
// usually already in flight or done. That keeps the bytes off the critical path
// for the search visitors who read a template page and leave, which is most of
// them, without adding a wait for the people who came to print something.
const PDFSectionLoader = ({ onPreviewIntent, ...props }) => {
  const [wanted, setWanted] = useState(false);
  const [autoPreview, setAutoPreview] = useState(false);

  const arm = useCallback(() => setWanted(true), []);

  if (wanted) {
    return (
      <Suspense
        fallback={
          <div className="card">
            <div className="card-body text-center font-mono text-[10px] text-ink-2 py-6">
              Loading PDF tools...
            </div>
          </div>
        }
      >
        <PDFSection {...props} autoOpenPreview={autoPreview} />
      </Suspense>
    );
  }

  const { hasEnoughPhrases, requiredCells, gridSize, freeSpace, phrases } = props;

  // Stand-in for PDFGenerator's own markup. Same classes, so arming the loader
  // swaps it out without the layout moving.
  return (
    <div className="card">
      <div className="card-body space-y-2">
        {hasEnoughPhrases ? (
          <div
            onPointerEnter={arm}
            onTouchStart={arm}
            onFocusCapture={arm}
            className="space-y-2"
          >
            <button onClick={arm} className="btn-download">
              <span className="inline-flex items-center">
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                Download cards
              </span>
            </button>

            <button
              onClick={() => {
                // Tracked here rather than in PDFGenerator: this click is the
                // intent, and the modal that opens once the chunk lands is the
                // same event, not a second one.
                if (onPreviewIntent) onPreviewIntent();
                setAutoPreview(true);
                arm();
              }}
              className="btn-secondary w-full"
            >
              <Eye className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
              Preview &amp; customize
            </button>
          </div>
        ) : (
          <div className="border border-rule p-3">
            <p className="font-display text-[12px] uppercase text-accent m-0">
              Need {requiredCells} phrases
            </p>
            <p className="text-[13px] text-ink-2 mt-1 mb-0">
              A {gridSize}×{gridSize} grid{freeSpace ? ' with free space' : ''} needs {requiredCells}.
              You have {phrases.length}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFSectionLoader;
