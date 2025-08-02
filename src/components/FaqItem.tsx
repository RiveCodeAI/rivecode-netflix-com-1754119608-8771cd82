import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className="w-full bg-netflix-gray text-white p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl">{question}</span>
        <ChevronUpIcon 
          className={`w-8 h-8 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
        />
      </button>
      {isOpen && (
        <div className="bg-netflix-gray mt-px p-6">
          <p className="text-white text-2xl">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;