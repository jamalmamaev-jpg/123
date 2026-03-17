export interface Resort {
  id: string;
  slug: string;
  name: string;
  location: string;
  region: string;
  image: string;
  description: string;
  skiAreaSize: number; // in km
  lifts: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  rating: number;
  priceLevel: '€' | '€€' | '€€€' | '€€€€';
  stats: {
    blue: number;
    red: number;
    black: number;
  };
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  resortId: string;
  image: string;
  rating: number;
  price: number;
  location: string;
  distanceToLift: string;
  amenities: string[];
  description: string;
}

export interface Package {
  id: string;
  resortName: string;
  nights: number;
  price: number;
  provider: 'SnowTrex' | 'Expedia' | 'Booking.com';
  image: string;
  includes: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  provider: 'GetYourGuide';
}

export const resorts: Resort[] = [
  {
    id: '1',
    slug: 'st-anton',
    name: 'St. Anton am Arlberg',
    location: 'Tyrol, Austria',
    region: 'Tyrol',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000',
    description: 'Known as the "cradle of alpine skiing," St. Anton offers world-class terrain and legendary après-ski.',
    skiAreaSize: 305,
    lifts: 88,
    difficulty: 'Expert',
    rating: 4.9,
    priceLevel: '€€€€',
    stats: { blue: 131, red: 123, black: 51 }
  },
  {
    id: '2',
    slug: 'ischgl',
    name: 'Ischgl',
    location: 'Paznaun Valley, Tyrol',
    region: 'Tyrol',
    image: 'https://images.unsplash.com/photo-1517153295259-74ed0d4159a5?auto=format&fit=crop&q=80&w=1000',
    description: 'High-altitude skiing with a vibrant lifestyle and the famous "Top of the Mountain" concerts.',
    skiAreaSize: 239,
    lifts: 45,
    difficulty: 'Advanced',
    rating: 4.8,
    priceLevel: '€€€€',
    stats: { blue: 47, red: 143, black: 49 }
  },
  {
    id: '3',
    slug: 'saalbach',
    name: 'Saalbach Hinterglemm',
    location: 'Salzburg, Austria',
    region: 'Salzburg',
    image: 'https://images.unsplash.com/photo-1482867996988-29ec3aee81a1?auto=format&fit=crop&q=80&w=1000',
    description: 'One of the most diverse ski circuses in the Alps, perfect for families and intermediate skiers.',
    skiAreaSize: 270,
    lifts: 70,
    difficulty: 'Intermediate',
    rating: 4.7,
    priceLevel: '€€€',
    stats: { blue: 140, red: 112, black: 18 }
  },
  {
    id: '4',
    slug: 'kitzbuhel',
    name: 'Kitzbühel',
    location: 'Tyrol, Austria',
    region: 'Tyrol',
    image: 'https://images.unsplash.com/photo-1546726747-cd917359c331?auto=format&fit=crop&q=80&w=1000',
    description: 'Home to the legendary Hahnenkamm race, Kitzbühel blends tradition with luxury.',
    skiAreaSize: 233,
    lifts: 57,
    difficulty: 'Advanced',
    rating: 4.9,
    priceLevel: '€€€€',
    stats: { blue: 101, red: 61, black: 17 }
  }
];

export const hotels: Hotel[] = [
  {
    id: 'h1',
    slug: 'hotel-arlberg',
    name: 'Hotel Arlberg St. Anton',
    resortId: '1',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
    rating: 5,
    price: 450,
    location: 'St. Anton Village Center',
    distanceToLift: '50m to Galzigbahn',
    amenities: ['Spa', 'Fine Dining', 'Ski-in/Ski-out', 'Pool'],
    description: 'A luxury retreat in the heart of St. Anton, offering unparalleled service and alpine charm.'
  },
  {
    id: 'h2',
    slug: 'trofana-royal',
    name: 'Trofana Royal Ischgl',
    resortId: '2',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    rating: 5,
    price: 520,
    location: 'Ischgl Center',
    distanceToLift: '100m to Silvrettabahn',
    amenities: ['Michelin Star Restaurant', 'Royal Spa', 'Wine Cellar'],
    description: 'One of the leading hotels in the world, located in the vibrant heart of Ischgl.'
  }
];

export const packages: Package[] = [
  {
    id: 'p1',
    resortName: 'St. Anton am Arlberg',
    nights: 7,
    price: 1299,
    provider: 'SnowTrex',
    image: 'https://images.unsplash.com/photo-1520113526767-444cb5fbaf5a?auto=format&fit=crop&q=80&w=1000',
    includes: ['Ski Pass', 'Half Board', 'Equipment Rental']
  },
  {
    id: 'p2',
    resortName: 'Ischgl',
    nights: 5,
    price: 950,
    provider: 'Expedia',
    image: 'https://images.unsplash.com/photo-1486915307544-b1ae7d33115e?auto=format&fit=crop&q=80&w=1000',
    includes: ['Flights', 'Hotel Transfer', 'Breakfast']
  }
];

export const activities: Activity[] = [
  {
    id: 'a1',
    name: 'Tandem Paragliding in St. Anton',
    description: 'Soar above the snow-capped peaks of the Arlberg region with a professional pilot.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1533387558684-6297b78191cf?auto=format&fit=crop&q=80&w=1000',
    provider: 'GetYourGuide'
  },
  {
    id: 'a2',
    name: 'Night Sledding in Ischgl',
    description: 'Experience the thrill of a 7km floodlit toboggan run under the stars.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=1000',
    provider: 'GetYourGuide'
  }
];