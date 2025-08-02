import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "tv"
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: "download"
  },
  {
    id: 3,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "device"
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "kids"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="bg-netflix-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">More Reasons to Join</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;