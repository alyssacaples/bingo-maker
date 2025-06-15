import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, Eye } from 'lucide-react';
import PDFPreview from './PDFPreview';

const PDFGenerator = ({ 
  hasEnoughPhrases, 
  requiredCells, 
  gridSize, 
  freeSpace, 
  phrases, 
  title, 
  BingoDocument 
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-body space-y-3">
          {hasEnoughPhrases ? (
            <>
              <button
                onClick={() => setShowPreview(true)}
                className="btn-secondary w-full text-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Preview PDF
              </button>
              
              <PDFDownloadLink
                document={<BingoDocument />}
                fileName={`${(title || 'bingo').toLowerCase().replace(/\s+/g, '-')}-cards.pdf`}
                className="btn-primary w-full text-center animate-bounce-gentle"
              >
                {({ loading }) => (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    {loading ? 'Generating PDF...' : 'Download Bingo Cards'}
                  </>
                )}
              </PDFDownloadLink>
            </>
          ) : (
            <div className="text-center">
              <div className="text-red-600 text-sm mb-2 font-medium">
                Need at least {requiredCells} phrases
              </div>
              <div className="text-gray-500 text-xs">
                for {gridSize}×{gridSize} grid{freeSpace && ' (with free space)'}
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Currently have: {phrases.length} phrases
              </div>
            </div>
          )}
        </div>
      </div>

      <PDFPreview
        BingoDocument={BingoDocument}
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
      />
    </>
  );
};

export default PDFGenerator;
