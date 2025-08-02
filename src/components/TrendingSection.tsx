import React from 'react';
import ContentCard from './ContentCard';

interface TrendingContent {
  id: number;
  title: string;
  imageUrl: string;
}

const trendingContent: TrendingContent[] = [
  {
    id: 1,
    title: "Squid Game",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZV4NmkRBbtoq8O_5Aro81rbq4CRwiku0decuhWlpXGKK4pGsQ9LDCWu_Yf0jv8z5goKbOMQxZ-7ZJDxzXDBbkQcobG_TzvyQsNq6FqbmzhZ-z2jB5kKb1mk6-4mwpXXdznp.jpg?r=609"
  },
  {
    id: 2,
    title: "Happy Gilmore 2",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZYaym2wRejqcfwxAuqiird6z85ysSelKSL7M4CldU__m-3GH9hQVVrvTAfpWhzihUZ3-C1GAnAFm-1ulChGLlk11kAw1jn93BujbDif95xnV9H3NuUCzegVeQRuuZdpZUgS.jpg?r=711"
  },
  {
    id: 3,
    title: "My Oxford Year",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRNJ2qmi9ye_7YAmR0wjwswjEIhlg1ARzQ0EGN3VJa-70jy2AciJ5Nrt8WFchFzt1psoBz8Mk0B4g9rlzlnJAkwkeUWTJ_376OA80_8PevHot0SVocvDhn8YuEqDIiwipeHl.jpg?r=5ca"
  },
  {
    id: 4,
    title: "KPop Demon Hunters",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXYdBAe3X5R0Lhv1g-jeMi3UePskTmxzdJIMOmTgOGNcPOxd6t12a0cC67mLL3YGEuhv-kVZCC8KVWaZxl7F3rJ5BPH2jta5Q6xfSzWnMyhevoNXvzKY4Losqv9_LvD7Cbq8.jpg?r=49b"
  },
  {
    id: 5,
    title: "UNTAMED",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVUf4bSnz8w1CVd3WFMaasjpYYQdILcccmXBEc7kxxAQOStobeTltMVjQwIPlfDM15ybPtJFJ09u0C04w4Z6FiSgEVx2yUUg4rxg8pFCYXEl-RtkqJ-qFSzHJlTdmr75ymGb.jpg?r=b67"
  },
  {
    id: 6,
    title: "Kaulitz & Kaulitz",
    imageUrl: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdOVgnVMdmdnLla02gK3h-q015E-ddCSwLImml7bot5C987CmEwzVIJ4LOHEYLIk6KdPiP7D7RNQwyiEj3Q6pQY1duippPVpw6ZPnWFVs42SIcRNj74YV-7mQh4d8IrWmlxt.jpg?r=923"
  }
];

const TrendingSection: React.FC = () => {
  return (
    <section className="bg-netflix-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
        <div className="flex gap-4 overflow-x-auto pb-6">
          {trendingContent.map((content) => (
            <ContentCard
              key={content.id}
              number={content.id}
              title={content.title}
              imageUrl={content.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;