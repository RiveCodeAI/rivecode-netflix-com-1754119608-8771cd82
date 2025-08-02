import React, { useState } from 'react';

const EmailSignupForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <h3 className="text-xl mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full px-4 py-4 bg-black/40 border border-[#737373] rounded-sm text-white placeholder-[#737373] focus:outline-none focus:border-white"
          />
        </div>
        <button
          type="submit"
          className="bg-netflix-red hover:bg-[#f40612] text-white px-8 py-4 rounded-sm text-2xl flex items-center justify-center whitespace-nowrap"
        >
          Get Started
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default EmailSignupForm;