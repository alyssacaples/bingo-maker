/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // NOTE: always `extend`, never replace `theme.colors` — plenty of gray-*/blue-*
    // utilities are still referenced, and replacing the root palette silently drops
    // bare `border` to currentColor.
    extend: {
      colors: {
        // UI tokens. Defined as RGB channels in src/index.css so both the
        // `bg-ground` and `bg-ground/50` forms work, and so a single var swap
        // re-themes the whole app with no `dark:` variants anywhere.
        ground:     'rgb(var(--ground) / <alpha-value>)',
        'ground-2': 'rgb(var(--ground-2) / <alpha-value>)',
        surface:    'rgb(var(--surface) / <alpha-value>)',
        ink:        'rgb(var(--ink) / <alpha-value>)',
        'ink-2':    'rgb(var(--ink-2) / <alpha-value>)',
        rule:       'rgb(var(--rule) / <alpha-value>)',
        accent:     'rgb(var(--accent) / <alpha-value>)',
        marker:     'rgb(var(--marker) / <alpha-value>)',
        // Foreground for accent fills. Flips with the theme because the
        // accent does; see the note in src/index.css.
        'on-accent': 'rgb(var(--on-accent) / <alpha-value>)',

        // Artifact colors — deliberately IDENTICAL in light and dark. These
        // stand for the physical printed card. Theming them would misrepresent
        // what actually comes out of the printer.
        paper:       'rgb(var(--paper) / <alpha-value>)',
        'paper-ink': 'rgb(var(--paper-ink) / <alpha-value>)',

        // `primary-*` is already referenced in ~20 places but was never defined,
        // so those classes were silently dead. Aliasing them to the accent makes
        // them correct instead of deleting them one by one.
        primary: {
          200: 'rgb(var(--accent) / 0.28)',
          500: 'rgb(var(--accent) / <alpha-value>)',
          600: 'rgb(var(--accent) / <alpha-value>)',
        },
      },

      fontFamily: {
        // One family across the whole site. Archivo Black was a separate
        // single-weight family that duplicated Archivo's own 900, so the page
        // was carrying two typefaces to say one thing. `display` is kept as a
        // semantic alias rather than deleted, so call sites still read as
        // headings; the ladder now comes from weight: 900 h1, 800 CTA,
        // 700 card header, 400 everything else.
        display: ['Archivo', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        sans: ['Archivo', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      // One line fixes all 35 bare `border` / `border-t` sites, which would
      // otherwise stay gray-200 and glow wrong in dark mode.
      borderColor: {
        DEFAULT: 'rgb(var(--rule) / <alpha-value>)',
      },

      // Must NOT use <alpha-value>: this DEFAULT is read through addDefaults(),
      // which bypasses color parsing and would emit the literal placeholder.
      ringOffsetColor: {
        DEFAULT: 'rgb(var(--ground))',
      },

      ringColor: {
        DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
      },

      // Printed matter has hard corners. Keeps us off "rounded-lg on everything".
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
      },

      boxShadow: {
        // Solid offset, letterpress-style. No blurred drop shadows.
        stamp: '4px 4px 0 rgb(var(--paper-ink))',
        'stamp-lg': '6px 6px 0 rgb(var(--paper-ink))',
        none: 'none',
      },
    },
  },
  plugins: [],
}
