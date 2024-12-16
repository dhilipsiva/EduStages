// src/subjects/social-studies-and-humanities.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to basic social and cultural concepts, including family, community, and cultural traditions. They also begin exploring maps and simple history stories.",
      topics: [
        "Understanding family and community roles",
        "Introduction to cultural traditions and celebrations",
        "Basic geography: maps, continents, and oceans",
        "Simple historical stories: famous figures and events"
      ],
      blogposts: [
        "https://example.com/introduction-to-community",
        "https://example.com/basic-geography-for-kids"
      ],
      pdfs: [
        "https://example.com/resources/novice-social-studies-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=dF3Y-tTQ5AQ", // Community and family roles
        "https://www.youtube.com/watch?v=Hp6ds98G78I"  // Basic geography
      ],
      otherResources: [
        "https://example.com/simple-history-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore historical timelines, basic civics, and world geography. They also learn about early human civilizations and their impact on society.",
      topics: [
        "Introduction to historical timelines and key events",
        "Basic civics: rules, laws, and leadership",
        "World geography: countries, capitals, and landmarks",
        "Early human civilizations: Mesopotamia, Egypt, Indus Valley"
      ],
      blogposts: [
        "https://example.com/understanding-historical-timelines",
        "https://example.com/basics-of-civics"
      ],
      pdfs: [
        "https://example.com/resources/beginner-social-studies-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Q3Ao3w6dSYo", // Historical timelines
        "https://www.youtube.com/watch?v=3G4lDdhG1sA"  // Early civilizations
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students dive deeper into world history, geography, and cultural studies. They also begin studying government systems and economics.",
      topics: [
        "World history: major events and eras (Renaissance, Industrial Revolution)",
        "Detailed study of world geography: physical and political maps",
        "Understanding government systems: democracy, monarchy, dictatorship",
        "Introduction to economics: trade, money, and resources"
      ],
      blogposts: [
        "https://example.com/world-history-major-events",
        "https://example.com/understanding-governments"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-social-studies-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Wg8K0-7gf8A", // World history overview
        "https://www.youtube.com/watch?v=vE6ZZv1aw1w"  // Government systems
      ],
      otherResources: [
        "https://www.nationalgeographic.org/education"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students study advanced topics in history, politics, and cultural studies. They also explore global economics and international relations.",
      topics: [
        "Advanced world history: wars, revolutions, and nation-building",
        "Political science: ideologies and political movements",
        "Cultural studies: global religions, arts, and languages",
        "Global economics: international trade and financial systems",
        "International relations: diplomacy and global conflicts"
      ],
      blogposts: [
        "https://example.com/advanced-world-history",
        "https://example.com/global-economics-and-trade"
      ],
      pdfs: [
        "https://example.com/resources/competent-social-studies-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=8Dh99Z4TSM4", // Political ideologies
        "https://www.youtube.com/watch?v=5SnR-e0S6Ic"  // International trade basics
      ],
      otherResources: [
        "https://www.history.com/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students explore specialized topics in history, sociology, and philosophy. They also analyze modern challenges like globalization, inequality, and cultural shifts.",
      topics: [
        "Specialized history: historiography, archaeology, and regional studies",
        "Sociology: social structures, inequality, and cultural change",
        "Philosophy: ethics, logic, and influential thinkers",
        "Globalization and its impact on society",
        "Contemporary issues: climate change, migration, and inequality"
      ],
      blogposts: [
        "https://example.com/understanding-sociology",
        "https://example.com/philosophy-introduction"
      ],
      pdfs: [
        "https://example.com/resources/expert-social-studies-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=xUHQ2ybTejU", // History and archaeology
        "https://www.youtube.com/watch?v=7kSTxY7ec-I"  // Introduction to sociology
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities"
      ]
    }
  }
};

