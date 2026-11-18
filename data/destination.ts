export type Destination = {
    id:number;
    name:string;
    description:string;
    image:string;
    category:string;
    country:string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    description:
      "Discover tropical beaches, beautiful temples and peaceful surroundings.",
    image:
      "https://img.magnific.com/free-photo/beautiful-diamond-beach-penida-island-bali-indonesia_181624-29626.jpg?semt=ais_hybrid&w=740&q=80",
    category: "Beach",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Swiss Alps",
    description:
      "Experience beautiful mountains, fresh air and amazing nature.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900",
    category: "Mountain",
    country: "Switzerland",
  },
  {
    id: 3,
    name: "Kyoto",
    description:
      "Explore traditional culture, ancient temples and beautiful streets.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900",
    category: "Cultural",
    country: "Japan",
  },
  {
    id: 4,
    name: "Maldives",
    description:
      "Enjoy crystal-clear water, luxury resorts and beautiful beaches.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900",
    category: "Beach",
    country: "Maldives",
  },
  {
    id: 5,
    name: "Manali",
    description:
      "Explore snow-covered mountains and peaceful mountain villages.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
    category: "Mountain",
    country: "India",
  },
  {
    id: 6,
    name: "Paris",
    description:
      "Discover historical architecture, museums and beautiful streets.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900",
    category: "City",
    country: "France",
  },
  {
    id: 7,
    name: "Goa",
    description:
      "Enjoy coastal views, relaxing beaches and local food.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
    category: "Beach",
    country: "India",
  },
  {
    id: 8,
    name: "New York",
    description:
      "Experience a vibrant city with famous landmarks and attractions.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=900",
    category: "City",
    country: "United States",
  },
  {
    id: 9,
    name: "Varanasi",
    description:
      "Experience India's heritage, temples and traditional culture.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/d7/3b/21/caption.jpg?w=500&h=400&s=1",
    category: "Cultural",
    country: "India",
  },
];