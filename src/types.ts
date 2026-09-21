export type Platform = 
  | 'PC' 
  | 'PlayStation 5' 
  | 'PlayStation 4' 
  | 'PlayStation 3'
  | 'Xbox Series X/S' 
  | 'Xbox One' 
  | 'Xbox 360'
  | 'Nintendo Switch' 
  | 'Android' 
  | 'iOS';

export type Genre = 
  | 'Action-Adventure'
  | 'RPG'
  | 'FPS & Shooter'
  | 'Racing'
  | 'Survival Horror'
  | 'Strategy'
  | 'Fighting'
  | 'Sports'
  | 'Indie'
  | 'Puzzle';

export interface SystemSpecs {
  os: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
}

export interface Game {
  id: string;
  title: string;
  genre: Genre;
  subGenres: string[];
  platforms: Platform[];
  releaseYear: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  engine: string;
  rating: number; // 0 - 100 Metacritic / critical consensus score
  ageRating: string;
  modes: string[];
  shortDescription: string;
  synopsis: string;
  keyFeatures: string[];
  systemRequirements?: {
    minimum: SystemSpecs;
    recommended: SystemSpecs;
  };
  coverImage: string;
  bannerImage: string;
  screenshots: string[];
  featured?: boolean;
  tags: string[];
}
