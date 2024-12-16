// src/subjects/botany.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children explore basic plant life concepts, including the parts of plants, their growth, and the importance of sunlight and water.",
      topics: [
        "Introduction to plants: roots, stems, leaves, flowers",
        "What plants need to grow: sunlight, water, air",
        "Understanding seeds and germination",
        "Basic plant habitats: gardens, forests, deserts"
      ],
      blogposts: [
        "https://example.com/intro-to-plants"
      ],
      pdfs: [
        "https://example.com/resources/novice-botany-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=ql6OL7_qFgU", // Parts of plants
        "https://www.youtube.com/watch?v=aR-KAldshAE"  // Plant growth basics
      ],
      otherResources: [
        "https://example.com/interactive-botany-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore plant life cycles, photosynthesis, and the roles of plants in ecosystems.",
      topics: [
        "Plant life cycles: seed, sprout, adult plant",
        "Introduction to photosynthesis: how plants make food",
        "Seed dispersal: wind, water, animals",
        "Understanding plant ecosystems and interactions"
      ],
      blogposts: [
        "https://example.com/plant-life-cycles"
      ],
      pdfs: [
        "https://example.com/resources/beginner-botany-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=eo5Z6zjv4k4", // Photosynthesis basics
        "https://www.youtube.com/watch?v=DKPTBwKs0RI"  // Seed dispersal
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology/ecology"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students explore plant anatomy, advanced photosynthesis, and ecosystems.",
      topics: [
        "Plant anatomy: xylem, phloem, stomata",
        "Detailed study of photosynthesis and respiration",
        "Plant ecosystems: producers, consumers, decomposers",
        "Classification of plants: angiosperms, gymnosperms"
      ],
      blogposts: [
        "https://example.com/plant-anatomy-guide"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-botany-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=U2lv-YFI1Bs", // Plant anatomy
        "https://www.youtube.com/watch?v=eJXv5-mm4oc"  // Advanced photosynthesis
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students explore advanced plant physiology, ecosystems, and genetic modification.",
      topics: [
        "Plant physiology: water and nutrient transport",
        "Plant genetics: inheritance and mutations",
        "Plant ecosystems and biodiversity",
        "Applications of plant biology: agriculture and sustainability"
      ],
      blogposts: [
        "https://example.com/advanced-plant-physiology"
      ],
      pdfs: [
        "https://example.com/resources/competent-botany-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=JGP-4n4o_gA", // Plant physiology
        "https://www.youtube.com/watch?v=ovTqIUtr9kg"  // Plant genetics
      ],
      otherResources: [
        "https://www.botany.com/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students study advanced topics like plant molecular biology, biotechnology, and conservation.",
      topics: [
        "Molecular biology: DNA and RNA in plants",
        "Plant biotechnology: genetic engineering and GMOs",
        "Conservation of plant biodiversity",
        "Applications of botany in medicine and industry"
      ],
      blogposts: [
        "https://example.com/molecular-biology-in-plants"
      ],
      pdfs: [
        "https://example.com/resources/expert-botany-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=wz6jHE6eHIg", // Plant molecular biology
        "https://www.youtube.com/watch?v=G4GxHFwokJA"  // Plant conservation
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology"
      ]
    }
  }
};
