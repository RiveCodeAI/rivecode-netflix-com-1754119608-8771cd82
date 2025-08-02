import React from 'react';
import EmailSignupForm from './EmailSignupForm';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl mb-6">
          Starts at €4.99. Cancel anytime.
        </p>
        <p className="text-lg mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <EmailSignupForm />
      </div>
    </section>
  );
};

export default HeroSection;