export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: 'tv' | 'download' | 'device' | 'kids';
}

export const FEATURES: Feature[] = [
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