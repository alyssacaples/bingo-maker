// Third-party integration config.
//
// Both features below are built and tested but ship switched OFF, because each
// needs an account that doesn't exist yet. Turning one on is a change to this
// file only; no component needs touching.

// ---------------------------------------------------------------------------
// 3.4 — "Order as printed cards" affiliate button
// ---------------------------------------------------------------------------
// Set `enabled: true` once you've joined a print affiliate programme and put
// your tagged URL in `url`. Until then the button is not rendered at all: an
// untagged link would send traffic to a print service and earn nothing.
export const printAffiliate = {
  enabled: false,
  // Zazzle, Printify and Gelato all run affiliate programmes. Whichever you
  // pick, paste the full tracking URL here.
  url: '',
  // Shown on the button. Keep it plain.
  label: 'Order as printed cards',
  // Used as the GA4 `destination` parameter so print clicks can be told apart
  // from any other outbound link later.
  destination: 'print-affiliate',
};

// ---------------------------------------------------------------------------
// 3.5 — "A new template every Friday" email capture
// ---------------------------------------------------------------------------
// Set `enabled: true` and fill in `endpoint` once you have a list. The form is
// deliberately inert until then: a signup box that accepts an address and
// silently drops it is worse than no signup box, because people believe it.
//
// Buttondown, ConvertKit and Mailchimp all expose a plain form-POST endpoint on
// their free tiers, which is all this needs. Nothing here sends mail; it only
// collects addresses into the list you point it at.
export const emailCapture = {
  enabled: false,
  // The provider's form-action URL.
  endpoint: '',
  // The field name the provider expects for the address. Buttondown uses
  // "email", Mailchimp uses "EMAIL", ConvertKit uses "email_address".
  fieldName: 'email',
};
