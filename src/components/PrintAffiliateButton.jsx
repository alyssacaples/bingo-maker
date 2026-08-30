import { Package } from 'lucide-react';
import { printAffiliate } from '../config/integrations';
import { trackAffiliateClick } from '../utils/analytics';

// Outbound link to a print-on-demand service, for people who want their cards
// printed properly rather than run off a home printer.
//
// Renders nothing until the affiliate programme is configured, so the site
// never sends traffic away for free. See src/config/integrations.js.
const PrintAffiliateButton = ({ title }) => {
  if (!printAffiliate.enabled || !printAffiliate.url) return null;

  return (
    <div className="card">
      <div className="card-header">Printing</div>
      <div className="card-body">
        <a
          href={printAffiliate.url}
          target="_blank"
          // noopener/noreferrer on any target="_blank": without it the
          // destination gets a handle on this window via window.opener.
          rel="noopener noreferrer sponsored"
          onClick={() => trackAffiliateClick(printAffiliate.destination, title)}
          className="btn-secondary w-full"
        >
          <Package className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
          {printAffiliate.label}
        </a>
        <p className="text-[12px] text-ink-2 mt-2 mb-0">
          Heavier card stock, cut and shipped. Downloading the PDF above stays free.
        </p>
      </div>
    </div>
  );
};

export default PrintAffiliateButton;
