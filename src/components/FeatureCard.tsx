import React from 'react';
import { TvIcon, ArrowDownTrayIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap = {
  tv: TvIcon,
  download: ArrowDownTrayIcon,
  device: DevicePhoneMobileIcon,
  kids: UserGroupIcon
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <div className="bg-netflix-gray rounded-lg p-8 flex flex-col items-center text-center">
      <IconComponent className="w-16 h-16 text-netflix-red mb-6" />
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;