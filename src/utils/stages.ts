export const Stages = {
  NOVICE: {
    id: 'novice',
    title: 'Novice (Introduction)',
    ageRange: [3, 5] as [number, number]
  },
  BEGINNER: {
    id: 'beginner',
    title: 'Beginner (Foundational)',
    ageRange: [6, 10] as [number, number]
  },
  INTERMEDIATE: {
    id: 'intermediate',
    title: 'Intermediate (Application)',
    ageRange: [11, 13] as [number, number]
  },
  COMPETENT: {
    id: 'competent',
    title: 'Competent (In-Depth)',
    ageRange: [14, 18] as [number, number]
  },
  EXPERT: {
    id: 'expert',
    title: 'Expert (Advanced)',
    ageRange: [19, 100] as [number, number]
  }
} as const;

