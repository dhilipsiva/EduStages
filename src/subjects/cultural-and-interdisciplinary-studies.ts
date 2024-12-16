// src/subjects/cultural-and-interdisciplinary-studies.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to the basics of culture, diversity, and traditions through storytelling, music, and art. They begin exploring the idea of how people live differently around the world.",
      topics: [
        "Introduction to cultural diversity: food, clothing, and festivals",
        "Basic traditions and celebrations from different cultures",
        "Storytelling from around the world: folk tales and myths",
        "Exploring music and art from other cultures",
        "Basic maps: where people live and their unique ways of life"
      ],
      blogposts: [
        "https://example.com/introduction-to-cultural-diversity",
        "https://example.com/folk-tales-for-children"
      ],
      pdfs: [
        "https://example.com/resources/novice-cultural-studies-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=xuYShSCez1U", // Cultural diversity for kids
        "https://www.youtube.com/watch?v=w5G3GePdVQ4"  // Festivals and traditions
      ],
      otherResources: [
        "https://example.com/interactive-cultural-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore cultural practices, languages, and global interconnections. They begin comparing their own culture with others and learning respect for differences.",
      topics: [
        "Understanding different languages and scripts",
        "Cultural practices: marriage, ceremonies, and storytelling",
        "Introduction to global connections: trade, travel, and food",
        "Comparing local and international cultures",
        "Respecting cultural differences and empathy"
      ],
      blogposts: [
        "https://example.com/understanding-global-connections",
        "https://example.com/beginner-cultural-comparisons"
      ],
      pdfs: [
        "https://example.com/resources/beginner-cultural-studies-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=1dh0fhINIfY", // Global connections explained
        "https://www.youtube.com/watch?v=48PInmRIh1U"  // Respecting cultural differences
      ],
      otherResources: [
        "https://www.nationalgeographic.org/education"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students begin exploring complex cultural concepts like migration, social movements, and interdisciplinary links between arts, science, and technology.",
      topics: [
        "Cultural impact of migration and colonization",
        "Global social movements and their cultural significance",
        "Interdisciplinary connections: art inspired by science and technology",
        "Cultural history: how traditions evolve over time",
        "Understanding cultural preservation and heritage"
      ],
      blogposts: [
        "https://example.com/history-of-migration",
        "https://example.com/cultural-preservation-basics"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-cultural-studies-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=w9zSlI9T6gI", // Migration and culture
        "https://www.youtube.com/watch?v=CeuhdkrYDuA"  // Social movements and culture
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities/world-history"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students explore interdisciplinary topics in depth, such as global cultural trends, artistic influences across regions, and the ethical implications of cultural exchange.",
      topics: [
        "Global cultural trends and globalization’s impact",
        "Artistic and literary influences across regions",
        "Ethics of cultural exchange and appropriation",
        "Understanding interdisciplinary studies: blending disciplines",
        "Cultural identity in a globalized world"
      ],
      blogposts: [
        "https://example.com/cultural-identity-and-globalization",
        "https://example.com/artistic-crossovers"
      ],
      pdfs: [
        "https://example.com/resources/competent-cultural-studies-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Fr7eTCFDe2s", // Global cultural trends
        "https://www.youtube.com/watch?v=8xKu6rZyM1U"  // Ethics of cultural exchange
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities/art-history-basics"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students engage in deep research and critical thinking about cultural evolution, interdisciplinary innovations, and the role of culture in addressing global challenges.",
      topics: [
        "Cultural evolution: past, present, and future",
        "Interdisciplinary innovations: how culture, science, and art intersect",
        "The role of culture in addressing global challenges",
        "Advanced study of world heritage and cultural preservation",
        "Cultural policy and governance: ethics and leadership"
      ],
      blogposts: [
        "https://example.com/cultural-evolution-explained",
        "https://example.com/culture-in-global-challenges"
      ],
      pdfs: [
        "https://example.com/resources/expert-cultural-studies-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=kFhG-ZzLNN4", // Cultural evolution
        "https://www.youtube.com/watch?v=sSTX0lCYO7U"  // Cultural policies and governance
      ],
      otherResources: [
        "https://www.unesco.org/en/cultural-heritage"
      ]
    }
  }
};

