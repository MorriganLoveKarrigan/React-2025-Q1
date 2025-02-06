import type { LocationInfo } from '@/shared/types/location.ts';

type CharacterGender = 'Male' | 'Female' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
