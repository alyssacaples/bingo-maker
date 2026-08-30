import { useEffect, useRef } from 'react';

// Shared modal behaviour for the PDF preview and the bug report form.
//
// Both were open-and-trapped: the X button was the only way out, Escape did
// nothing, clicking the backdrop did nothing, focus stayed on <body> behind the
// dialog, and the page kept scrolling underneath.
//
// Returns a ref to put on the dialog panel. Focus moves into the panel on open
// and returns to whatever opened it on close.
export default function useModalBehavior(isOpen, onClose) {
  const panelRef = useRef(null);
  const restoreFocusTo = useRef(null);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Stop the page behind the dialog from scrolling. The previous inline value
  // is restored rather than blanked, so nothing else that sets it is clobbered.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Move focus in on open, put it back on close.
  useEffect(() => {
    if (!isOpen) return;
    restoreFocusTo.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const panel = panelRef.current;
    if (panel) {
      const first = panel.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (first || panel).focus?.();
    }

    return () => {
      restoreFocusTo.current?.focus?.();
    };
  }, [isOpen]);

  // Keep Tab inside the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;

      const focusable = [
        ...panel.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ),
      ].filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Close when the backdrop itself is clicked, but not when a click inside the
  // panel bubbles up to it.
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return { panelRef, onBackdropClick };
}
