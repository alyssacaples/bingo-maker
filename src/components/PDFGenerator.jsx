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
  subtitle,
  setSubtitle,
  BingoDocument,
  titleFont,
  setTitleFont,
  titleColor,
  setTitleColor,
  cellFont,
  setCellFont,
  backgroundColor,
  setBackgroundColor,
  useGradient,
  setUseGradient,
  gradientColor1,
  setGradientColor1,
  gradientColor2,
  setGradientColor2,
  borderColor,
  setBorderColor,
  freeSpaceBackgroundColor,
  setFreeSpaceBackgroundColor,
  freeSpaceFontColor,
  setFreeSpaceFontColor
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
                fileName={`${title || 'Bingo'}_Cards.pdf`}
                className="btn-download animate-bounce-gentle hover-float"
              >
                {({ loading }) => (
                  loading ? 'Preparing PDF...' : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Bingo Cards
                    </>
                  )
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
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        titleFont={titleFont}
        setTitleFont={setTitleFont}
        titleColor={titleColor}
        setTitleColor={setTitleColor}
        cellFont={cellFont}
        setCellFont={setCellFont}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        useGradient={useGradient}
        setUseGradient={setUseGradient}
        gradientColor1={gradientColor1}
        setGradientColor1={setGradientColor1}
        gradientColor2={gradientColor2}
        setGradientColor2={setGradientColor2}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        freeSpaceBackgroundColor={freeSpaceBackgroundColor}
        setFreeSpaceBackgroundColor={setFreeSpaceBackgroundColor}
        freeSpaceFontColor={freeSpaceFontColor}
        setFreeSpaceFontColor={setFreeSpaceFontColor}
      />
    </>
  );
};

export default PDFGenerator;
