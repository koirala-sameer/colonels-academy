// src/types/index.ts
export type Organization = 'army' | 'police' | 'apf';

export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
}

export interface Mentor {
  name: string;
  rank: string;
  specialty: string;
  image: string; // URL
}