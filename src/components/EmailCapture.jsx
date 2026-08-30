import { useState } from 'react';
import { Mail } from 'lucide-react';
import { emailCapture } from '../config/integrations';
import { trackEmailSignup } from '../utils/analytics';

// "A new template every Friday" list signup.
//
// Renders nothing until a provider is configured. A form that accepts an
// address and drops it is worse than no form, because the success message
// is a lie people act on. See src/config/integrations.js.
const EmailCapture = ({ source = 'sidebar' }) => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error

  if (!emailCapture.enabled || !emailCapture.endpoint) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || state === 'sending') return;

    setState('sending');
    try {
      // URLSearchParams, not FormData: this sends application/x-www-form-urlencoded,
      // which is what the Buttondown / ConvertKit / Mailchimp embed endpoints
      // accept. FormData would send multipart/form-data, which they reject, and
      // no-cors would hide that rejection behind a success message.
      const body = new URLSearchParams();
      body.append(emailCapture.fieldName, email.trim());

      // no-cors because the free tiers don't send CORS headers on their form
      // endpoints. The response is opaque either way, so this can only report
      // network-level failure, the same as the provider's own embedded form.
      await fetch(emailCapture.endpoint, { method: 'POST', mode: 'no-cors', body });

      trackEmailSignup(source);
      setState('done');
      setEmail('');
    } catch {
      setState('error');
    }
  };

  return (
    <div className="card">
      <div className="card-header">Every Friday</div>
      <div className="card-body">
        {state === 'done' ? (
          <p className="text-[13px] text-ink m-0">
            You&apos;re in. A new template lands in your inbox on Friday.
          </p>
        ) : (
          <>
            <p className="text-[13px] text-ink-2 mt-0 mb-3">
              One new bingo template a week. No other mail, unsubscribe in a click.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <label className="title-input-label" htmlFor="email-capture">
                Email
              </label>
              <input
                id="email-capture"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <button
                type="submit"
                className="btn-secondary w-full"
                disabled={state === 'sending'}
              >
                <Mail className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                {state === 'sending' ? 'Signing you up...' : 'Send me one a week'}
              </button>
            </form>
            {state === 'error' && (
              <p className="text-[12px] text-accent mt-2 mb-0">
                That didn&apos;t go through. Try again in a moment.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EmailCapture;
