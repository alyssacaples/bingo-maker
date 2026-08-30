import { useEffect } from 'react';

const AdBanner = ({ slot, style = {}, adFormat = "auto", className = "" }) => {
  useEffect(() => {
    if (!slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <div
      className={`text-center bg-paper border border-rule p-2 ${className}`}
      // Ad creatives are always light artwork. Opting the subtree out of a dark
      // root keeps them on paper instead of glaring off the dark ground.
      style={{ margin: '20px 0', colorScheme: 'light', ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4296265389249858"
        data-ad-slot={slot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
