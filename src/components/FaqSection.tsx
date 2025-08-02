import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    id: 1,
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans start at €4.99 a month. No extra costs, no contracts."
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks."
  },
  {
    id: 5,
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
  }
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="bg-netflix-black py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-netflix-gray">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-white text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="text-xl">{faq.question}</span>
                <ChevronUpIcon
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 text-white text-lg border-t border-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;