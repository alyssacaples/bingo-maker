import ThemeToggle from './ThemeToggle';

const Header = ({ activeTitle, templateMeta }) => {
  const hasActiveTitle =
    activeTitle && activeTitle !== 'BINGO' && activeTitle.trim() !== '';

  return (
    <>
      <div className="bg-surface border-b border-rule sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center gap-3">
          <a
            href="/"
            className="font-display text-[14px] uppercase tracking-[-0.01em] text-ink no-underline"
          >
            Make Bingo Card
          </a>
          <span className="flex-1" />
          <ThemeToggle />
        </div>
      </div>

      <div className="header-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="header-title">
            {hasActiveTitle ? (
              activeTitle
            ) : (
              <>
                Make a <span className="header-mark">bingo card</span>
              </>
            )}
          </h1>
          {/* Only shown when it carries real metadata. The homepage gets no
              subtitle: a middot-separated feature list reads as filler. */}
          {templateMeta ? (
            <p className="header-subtitle">{templateMeta}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
