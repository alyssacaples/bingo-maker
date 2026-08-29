import { useState } from 'react';
import { X, Bug, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const BugReportModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    description: '',
    stepsToReproduce: '',
    userEmail: '',
    severity: 'general-website'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getBrowserInfo = () => {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      timestamp: new Date().toISOString()
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration - these values are safe to expose publicly
    const serviceId = 'service_1peme0q';
    const templateId = 'template_khikxtg';
    const publicKey = 'eiigGPFYkbAapsJE7';


    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration error - this should not happen with hardcoded values');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const browserInfo = getBrowserInfo();
      
      const templateParams = {
        description: formData.description,
        steps_to_reproduce: formData.stepsToReproduce,
        user_email: formData.userEmail || 'Anonymous',
        severity: formData.severity,
        browser_info: JSON.stringify(browserInfo, null, 2),
        app_url: window.location.href
      };


      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('EmailJS response:', result);
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({ description: '', stepsToReproduce: '', userEmail: '', severity: 'general-website' });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to send bug report:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-ink/60 flex items-center justify-center z-50 p-4">
      <div className="bg-surface border-2 border-ink max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-ink bg-ground-2">
          <div className="flex items-center space-x-3">
            <Bug className="w-4 h-4 text-accent" />
            <h2 className="font-display text-[14px] uppercase text-ink">Report a Bug</h2>
          </div>
          <button
            onClick={onClose}
            className="text-ink-2 hover:text-ink"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitStatus === 'success' && (
            <div className="border border-ink p-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-ink text-sm">Bug report sent successfully! Thank you for your feedback.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="border border-accent p-3">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-4 h-4 text-accent" />
                <span className="text-ink text-sm font-semibold">Failed to send report</span>
              </div>
            </div>
          )}

          <div>
            <label className="title-input-label">
              Bug Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="input-field resize-none"
              placeholder="Describe what went wrong, what you expected to happen, and any error messages you saw..."
            />
          </div>

          <div>
            <label className="title-input-label">
              Steps to Reproduce
            </label>
            <textarea
              name="stepsToReproduce"
              value={formData.stepsToReproduce}
              onChange={handleInputChange}
              rows={3}
              className="input-field resize-none"
              placeholder="1. First I clicked...&#10;2. Then I typed...&#10;3. The error occurred when..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="title-input-label">
                Website Area
              </label>
              <select
                name="severity"
                value={formData.severity}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="pdf-output">Affects PDF Output</option>
                <option value="general-website">General Website Use</option>
                <option value="input-parsing">Affects Input Parsing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="title-input-label">
                Your Email (optional)
              </label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleInputChange}
                className="input-field"
                placeholder="your@email.com"
              />
              <p className="font-mono text-[10px] text-ink-2 mt-1">For follow-up questions only</p>
            </div>
          </div>

          <div className="bg-ground-2 border border-rule p-3">
            <p className="text-[13px] text-ink-2">
              <strong>Automatic Info:</strong> Browser details and app state will be included to help us debug the issue.
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
              disabled={isSubmitting || !formData.description.trim()}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-on-accent border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Report
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BugReportModal;
