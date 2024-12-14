// src/subjects/chemistry.ts
import { Stages } from '../utils/stages';

export const chemistryDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to the basic building blocks of chemistry, such as elements, mixtures, and simple reactions. Fun experiments and activities spark curiosity about the nature of matter.",
      topics: [
        "Introduction to elements: water, air, and earth",
        "Mixing and separating basic substances (e.g., water and oil)",
        "Understanding simple chemical reactions (e.g., baking soda and vinegar)",
        "Learning safety and observation during experiments"
      ],
      blogposts: [
        "https://example.com/chemistry-basics-for-kids"
      ],
      pdfs: [
        "https://example.com/resources/novice-chemistry-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=X0Um9BTiAt8", // Chemistry for kids
        "https://www.youtube.com/watch?v=T2FY2tXMAmw"  // Fun experiments
      ],
      otherResources: [
        "https://example.com/simple-chemistry-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore atoms, molecules, and basic chemical equations. They learn about states of matter and simple acids and bases.",
      topics: [
        "Atoms and molecules: basic understanding",
        "States of matter: solids, liquids, gases",
        "Introduction to acids and bases (e.g., lemon juice and baking soda)",
        "Simple chemical equations and conservation of mass"
      ],
      blogposts: [
        "https://example.com/intro-to-atoms-and-molecules"
      ],
      pdfs: [
        "https://example.com/resources/beginner-chemistry-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=l26oaHV7D40", // Atoms and molecules
        "https://www.youtube.com/watch?v=X6N2c9F7g8E"  // Acids and bases
      ],
      otherResources: [
        "https://www.khanacademy.org/science/chemistry"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students dive into periodic table trends, chemical bonding, and reaction types. They also learn to balance chemical equations and explore the importance of catalysts.",
      topics: [
        "Periodic table: understanding elements and trends",
        "Chemical bonding: ionic and covalent bonds",
        "Types of reactions: synthesis, decomposition, combustion",
        "Balancing chemical equations",
        "Introduction to catalysts and their role in reactions"
      ],
      blogposts: [
        "https://example.com/periodic-table-guide"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-chemistry-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=fPnwBITSmgU", // Periodic table trends
        "https://www.youtube.com/watch?v=i0zLYLejFYU"  // Chemical bonding
      ],
      otherResources: [
        "https://www.khanacademy.org/science/chemistry"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students learn advanced chemistry topics such as stoichiometry, thermodynamics, and organic chemistry. They also explore the kinetics and equilibrium of chemical reactions.",
      topics: [
        "Stoichiometry and mole concept",
        "Thermodynamics: enthalpy, entropy, and Gibbs free energy",
        "Introduction to organic chemistry: hydrocarbons and functional groups",
        "Analyzing reaction kinetics and equilibrium"
      ],
      blogposts: [
        "https://example.com/stoichiometry-and-reactions"
      ],
      pdfs: [
        "https://example.com/resources/competent-chemistry-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=JN7rEyX8B0E", // Stoichiometry basics
        "https://www.youtube.com/watch?v=rAof9Ld5sOg"  // Organic chemistry
      ],
      otherResources: [
        "https://www.chemguide.co.uk/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students delve into quantum chemistry, spectroscopy, and advanced organic synthesis. They also explore applications of chemistry in technology, medicine, and materials science.",
      topics: [
        "Quantum chemistry: atomic orbitals and molecular interactions",
        "Spectroscopy: IR, UV-Vis, and NMR analysis",
        "Advanced organic synthesis: multistep reactions",
        "Applications of chemistry in materials science and pharmaceuticals"
      ],
      blogposts: [
        "https://example.com/quantum-chemistry-overview"
      ],
      pdfs: [
        "https://example.com/resources/expert-chemistry-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=hI41yH1QbiA", // Quantum chemistry basics
        "https://www.youtube.com/watch?v=C6i1kFxc2dE"  // NMR spectroscopy
      ],
      otherResources: [
        "https://www.khanacademy.org/science/chemistry"
      ]
    }
  }
};
