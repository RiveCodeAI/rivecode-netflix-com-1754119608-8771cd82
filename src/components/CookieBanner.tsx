import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
  onClose: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onReject, onClose }) => {
  return (
    <div className="fixed bottom-0 w-full bg-white text-black p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <button onClick={onClose} className="absolute top-4 right-4">
          <XMarkIcon className="h-6 w-6" />
        </button>
        <p className="text-sm">
          Netflix and third parties use cookies and similar technologies on this website to collect information about your browsing activities, which we use to analyse your use of the website, personalise our services, and customise online advertisements. You can accept, reject, or personalise your choices by selecting 'Learn more.' Netflix supports the Digital Advertising Alliance Principles.
        </p>
        <div className="flex gap-4">
          <button onClick={() => {}} className="px-4 py-2 border border-black rounded">
            Learn more
          </button>
          <button onClick={onReject} className="px-4 py-2 bg-netflix-red text-white rounded">
            Reject
          </button>
          <button onClick={onAccept} className="px-4 py-2 bg-netflix-red text-white rounded">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;