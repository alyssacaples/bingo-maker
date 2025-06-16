import React, { useState } from 'react';
import { Bug } from 'lucide-react';
import BugReportModal from './BugReportModal';

const BugReportButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-500 hover:bg-gray-600 text-white p-2.5 rounded-full shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105 z-40 opacity-70 hover:opacity-100"
        title="Report a Bug"
      >
        <Bug className="w-4 h-4" />
      </button>

      <BugReportModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default BugReportButton;
