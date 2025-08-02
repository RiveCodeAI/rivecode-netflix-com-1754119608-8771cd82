import React from 'react';

interface ContentCardProps {
  number: number;
  title: string;
  imageUrl: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ number, title, imageUrl }) => {
  return (
    <div className="relative flex-shrink-0 w-[200px] group cursor-pointer">
      <div className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center text-2xl font-bold text-white z-10">
        {number}
      </div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="mt-2 text-sm text-white font-medium truncate">{title}</h3>
    </div>
  );
};

export default ContentCard;