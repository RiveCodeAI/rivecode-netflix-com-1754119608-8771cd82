import React from 'react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 flex items-center justify-between px-4 py-6">
      <img 
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1a7-75a7-a8b7-f85133e4c823/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
        className="h-8"
      />
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <button className="bg-netflix-red text-white px-4 py-1 rounded-md">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;