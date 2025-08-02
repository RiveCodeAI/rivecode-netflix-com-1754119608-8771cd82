import React from 'react';
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const LanguageSelector: React.FC = () => {
  return (
    <div className="relative inline-block">
      <select 
        className="appearance-none bg-transparent border border-[#737373] text-white py-2 pl-10 pr-8 rounded-sm focus:outline-none focus:border-white"
        defaultValue="en"
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
      <GlobeAltIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
      <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
    </div>
  );
};

export default LanguageSelector;