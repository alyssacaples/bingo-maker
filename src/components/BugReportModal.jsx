import React, { useState } from 'react';
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

    // Debug logging (can be removed later)
    console.log('EmailJS Configuration:');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Public Key:', publicKey.substring(0, 10) + '...');

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

      console.log('Sending email with params:', templateParams);

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Bug className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold text-gray-900">Report a Bug</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-800 text-sm">Bug report sent successfully! Thank you for your feedback.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-800 text-sm font-medium">Failed to send report</span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <p className="text-xs text-gray-500 mt-1">For follow-up questions only</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
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
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
