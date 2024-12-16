import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children explore basic animal life concepts, including characteristics of living organisms, habitats, and behaviors.",
      topics: [
        "What makes an organism 'alive'?",
        "Basic animal groups: mammals, birds, fish, insects",
        "Understanding animal habitats: land, water, air",
        "Simple observation of animal behaviors (e.g., eating, moving)"
      ],
      blogposts: [
        "https://example.com/basic-animal-life"
      ],
      pdfs: [
        "https://example.com/resources/novice-zoology-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=mRidGna-V4E", // Animal groups
        "https://www.youtube.com/watch?v=Tnm8tWNm9WU"  // Animal habitats
      ],
      otherResources: [
        "https://example.com/interactive-zoology-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore animal life cycles, food chains, and adaptations.",
      topics: [
        "Animal life cycles: egg, larva, pupa, adult",
        "Understanding food chains and predator-prey relationships",
        "Basic animal adaptations: camouflage, migration",
        "Classification of vertebrates and invertebrates"
      ],
      blogposts: [
        "https://example.com/animal-life-cycles"
      ],
      pdfs: [
        "https://example.com/resources/beginner-zoology-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=yZ2z8U4QJVI", // Animal life cycles
        "https://www.youtube.com/watch?v=JNwNXF9Y6kY"  // Food chains
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology/ecology"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students learn about biodiversity, advanced animal physiology, and ecosystems.",
      topics: [
        "Biodiversity and the importance of conservation",
        "Animal physiology: circulatory and respiratory systems",
        "Ecosystem roles: producers, consumers, decomposers",
        "Understanding symbiosis: mutualism, commensalism, parasitism"
      ],
      blogposts: [
        "https://example.com/animal-physiology-guide"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-zoology-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=8Vbe6xOLaEs", // Biodiversity
        "https://www.youtube.com/watch?v=ZPvG7OQTzU0"  // Ecosystem roles
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology/ecology"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students explore advanced topics like animal genetics, behavioral ecology, and the evolutionary relationships among species.",
      topics: [
        "Animal genetics and heredity",
        "Behavioral ecology: foraging, mating systems, territoriality",
        "Evolutionary biology: phylogenetics and adaptation",
        "Advanced animal physiology: nervous and endocrine systems"
      ],
      blogposts: [
        "https://example.com/advanced-animal-genetics"
      ],
      pdfs: [
        "https://example.com/resources/competent-zoology-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=1_CCUdBkf3I", // Animal genetics
        "https://www.youtube.com/watch?v=KmH1aFdmhoE"  // Behavioral ecology
      ],
      otherResources: [
        "https://www.biologycorner.com/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students engage with cutting-edge topics like evolutionary developmental biology, animal biomechanics, and advanced behavioral studies.",
      topics: [
        "Evo-devo: evolutionary developmental biology",
        "Animal biomechanics: locomotion and structure",
        "Cognition and intelligence in animals",
        "Applications of zoology in conservation and technology"
      ],
      blogposts: [
        "https://example.com/evo-devo-overview"
      ],
      pdfs: [
        "https://example.com/resources/expert-zoology-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=G9GqV9TJcaI", // Evo-devo basics
        "https://www.youtube.com/watch?v=vh-9npGkPiU"  // Animal intelligence
      ],
      otherResources: [
        "https://www.khanacademy.org/science/biology"
      ]
    }
  }
};
