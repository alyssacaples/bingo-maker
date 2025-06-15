import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Eye, X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const PDFPreview = ({ BingoDocument, isOpen, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && BingoDocument) {
      generatePreview();
    }
    
    // Cleanup when component unmounts or closes
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [isOpen, BingoDocument]);

  const generatePreview = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const doc = <BingoDocument />;
      const asPdf = pdf(doc);
      const blob = await asPdf.toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      console.error('Error generating preview:', err);
      setError('Failed to generate preview');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'bingo-cards-preview.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl max-h-[95vh] w-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">PDF Preview</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {pdfUrl && (
              <button
                onClick={handleDownload}
                className="btn-secondary text-sm"
                title="Download this preview"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <div className="text-gray-600">Generating preview...</div>
                <div className="text-sm text-gray-500 mt-1">This may take a moment</div>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-red-600 mb-2">⚠️ Preview Error</div>
                <div className="text-gray-600">{error}</div>
                <button
                  onClick={generatePreview}
                  className="mt-4 btn-secondary text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : pdfUrl ? (
            <div className="h-full p-4">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border rounded-lg shadow-inner"
                title="PDF Preview"
                style={{ minHeight: '70vh' }}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-gray-500">Unable to generate preview</div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        {pdfUrl && (
          <div className="border-t bg-gray-50 px-4 py-3 rounded-b-lg">
            <div className="text-sm text-gray-600 text-center">
              💡 Tip: Use the PDF viewer controls above to navigate between pages and zoom
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPreview;