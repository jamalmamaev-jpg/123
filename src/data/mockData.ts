export const resorts = [
  {
    id: "st-anton",
    slug: "st-anton-am-arlberg",
    name: "St. Anton am Arlberg",
    location: "Tyrol",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000",
    size: "305 km",
    difficulty: "Advanced",
    rating: 4.9,
    priceLevel: "$$$",
    lifts: 88,
    description: "Known as the 'cradle of alpine skiing', St. Anton offers some of the most challenging and beautiful terrain in the world.",
    stats: { blue: "131km", red: "123km", black: "51km" }
  },
  {
    id: "ischgl",
    slug: "ischgl-silvretta",
    name: "Ischgl",
    location: "Tyrol",
    image: "https://images.unsplash.com/photo-1517153295259-74ed0969671f?auto=format&fit=crop&q=80&w=1000",
    size: "239 km",
    difficulty: "Intermediate",
    rating: 4.8,
    priceLevel: "$$$",
    lifts: 45,
    description: "Ischgl is famous for its high-altitude skiing and legendary après-ski scene.",
    stats: { blue: "47km", red: "143km", black: "49km" }
  },
  {
    id: "saalbach",
    slug: "saalbach-hinterglemm",
    name: "Saalbach Hinterglemm",
    location: "Salzburg",
    image: "https://images.unsplash.com/photo-1482867996988-29ec3aee816d?auto=format&fit=crop&q=80&w=1000",
    size: "270 km",
    difficulty: "Beginner",
    rating: 4.7,
    priceLevel: "$$",
    lifts: 70,
    description: "One of the largest and most diverse ski areas in Austria, perfect for families and long cruises.",
    stats: { blue: "140km", red: "112km", black: "18km" }
  }
];

export const hotels = [
  {
    id: "hotel-arlberg",
    slug: "hotel-arlberg-st-anton",
    name: "Hotel Arlberg",
    resort: "St. Anton",
    location: "St. Anton Village",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    rating: 5,
    price: 450,
    distanceToLift: "50m",
    amenities: ["Spa", "Pool", "Ski-in/Ski-out", "Fine Dining"]
  },
  {
    id: "trofana-royal",
    slug: "trofana-royal-ischgl",
    name: "Trofana Royal",
    resort: "Ischgl",
    location: "Ischgl Center",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    rating: 5,
    price: 580,
    distanceToLift: "100m",
    amenities: ["Michelin Star Restaurant", "Luxury Spa", "Wine Cellar"]
  }
];

export const packages = [
  {
    id: "pkg-1",
    name: "Arlberg Adventure Week",
    resort: "St. Anton",
    nights: 7,
    price: 1299,
    provider: "SnowTrex",
    image: "https://images.unsplash.com/photo-1520903074185-8eca362b3dce?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "pkg-2",
    name: "Ischgl Party & Powder",
    resort: "Ischgl",
    nights: 4,
    price: 849,
    provider: "Expedia",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&q=80&w=1000"
  }
];

export const activities = [
  {
    id: "act-1",
    name: "Private Ski Lesson",
    description: "Master the slopes with a certified Austrian instructor.",
    price: 120,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1000",
    provider: "GetYourGuide"
  },
  {
    id: "act-2",
    name: "Tandem Paragliding",
    description: "Soar over the snow-capped peaks of the Alps.",
    price: 180,
    image: "https://images.unsplash.com/photo-1533387558684-6297b78191cf?auto=format&fit=crop&q=80&w=1000",
    provider: "GetYourGuide"
  }
];

export const guides = [
  {
    id: "guide-1",
    title: "Top 5 Ski Resorts for Families",
    excerpt: "Discover the most kid-friendly slopes and ski schools in Austria.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1000",
    date: "Oct 12, 2023"
  },
  {
    id: "guide-2",
    title: "Ischgl vs St. Anton: Which is for you?",
    excerpt: "A deep dive into the terrain, nightlife, and atmosphere of two giants.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1000",
    date: "Nov 05, 2023"
  }
];