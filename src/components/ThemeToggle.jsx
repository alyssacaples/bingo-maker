import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

// Three states, not two. A plain light/dark toggle permanently traps the user
// out of "follow my OS" after the first click.
const MODES = ['system', 'light', 'dark'];
const ICONS = { system: Monitor, light: Sun, dark: Moon };

const ThemeToggle = () => {
  const [mode, setMode] = useState('system');

  // The inline script in index.html already applied the saved theme before
  // first paint; this only syncs React's copy of it.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') setMode(saved);
    } catch {
      /* Safari private mode throws on read; system default is fine */
    }
  }, []);

  const cycle = () => {
    const next = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
    setMode(next);
    try {
      if (next === 'system') {
        localStorage.removeItem('theme');
        document.documentElement.removeAttribute('data-theme');
      } else {
        localStorage.setItem('theme', next);
        document.documentElement.setAttribute('data-theme', next);
      }
    } catch {
      /* storage unavailable: the attribute still applies for this session */
    }
  };

  const Icon = ICONS[mode];

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex items-center gap-1.5 px-2 py-1 border border-rule
                 font-mono text-[10px] tracking-[0.06em] text-ink hover:bg-ground-2"
      aria-label={`Color theme: ${mode}. Activate to change.`}
      title={`Theme: ${mode}`}
    >
      <Icon className="w-3 h-3" aria-hidden="true" />
      <span className="hidden sm:inline">{mode}</span>
    </button>
  );
};

export default ThemeToggle;
