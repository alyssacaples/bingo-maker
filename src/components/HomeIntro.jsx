import { templateTitles } from '../data/templates';
import { templateContent } from '../data/templateContent';
import { popularTemplates } from '../data/popularTemplates';
import { trackTemplateSelect } from '../utils/analytics';

// One line of explanation and three shortcuts, sitting between the masthead and
// the tool on the homepage only. Deliberately not a card: this is a caption for
// the page, and anything with a header and a border reads as another panel to
// work through before reaching the actual generator.
//
// Once a template is loaded the person is mid-task and does not need the pitch,
// so App passes show={false} and this renders nothing.
const HomeIntro = ({ show, onSelectTemplate }) => {
  if (!show) return null;

  // A slug with no authored content has no page behind it, so a stale entry
  // here degrades to a shorter row rather than a link into nothing.
  const shortlist = popularTemplates.filter(
    (slug) => templateTitles[slug] && templateContent[slug]
  );

  return (
    <section className="mb-6" aria-labelledby="home-intro-heading">
      <h2 id="home-intro-heading" className="sr-only">
        About MakeBingoCard
      </h2>

      <p className="text-[15px] text-ink-2 max-w-[70ch] mt-0 mb-3">
        Free Printable Bingo card generator for your next party, classroom
        activity, or office get-together. Use one of the templates or make your
        own, and then customize the sheets.
      </p>

      {shortlist.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <span className="title-input-label mb-0">Most popular</span>
          {shortlist.map((slug) => (
            <button
              key={slug}
              type="button"
              onClick={() => {
                // Reported here rather than in App: App's handler also runs on
                // a template page load, which is a view, not a select.
                trackTemplateSelect(slug, templateTitles[slug]);
                onSelectTemplate(slug);
              }}
              className="btn-secondary text-[13px] py-1 px-2.5"
            >
              {templateTitles[slug].replace(/\s*Bingo!?$/, '')}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default HomeIntro;
