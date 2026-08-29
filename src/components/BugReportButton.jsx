import { useState } from 'react';
import { Bug } from 'lucide-react';
import BugReportModal from './BugReportModal';

const BugReportButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 bg-surface hover:bg-ground-2 text-ink border border-ink p-2.5 z-40"
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
