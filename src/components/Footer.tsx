import React from 'react';
import LanguageSelector from './LanguageSelector';

const Footer: React.FC = () => {
  const footerLinks = [
    ['FAQ', 'Help Center', 'Account', 'Media Center'],
    ['Investor Relations', 'Jobs', 'Netflix Shop', 'Redeem Gift Cards'],
    ['Buy Gift Cards', 'Ways to Watch', 'Terms of Use', 'Privacy'],
    ['Cookie Preferences', 'Impressum', 'Contact Us', 'Speed Test'],
    ['Legal Guarantee', 'Legal Notices', 'Only on Netflix', 'Ad Choices']
  ];

  return (
    <footer className="bg-black text-[#737373] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">Questions? Contact us.</div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((column, i) => (
            <ul key={i}>
              {column.map((link, j) => (
                <li key={j} className="mb-3">
                  <a href="#" className="hover:underline text-sm">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <LanguageSelector />
        
        <p className="mt-6 text-sm">Netflix Germany</p>
        
        <p className="mt-4 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;