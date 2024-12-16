// src/subjects/physics.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to basic physics concepts like motion, light, and gravity. Simple experiments and activities spark curiosity about how the world works.",
      topics: [
        "Understanding motion: push and pull",
        "Basic concepts of light and shadow",
        "Introduction to gravity",
        "Simple experiments with everyday objects"
      ],
      blogposts: [
        "https://example.com/novice-physics-basics"
      ],
      pdfs: [
        "https://example.com/resources/novice-physics-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=KZyf9o6sm1Y", // Basic physics for kids
        "https://www.youtube.com/watch?v=XkXAKt0l1Qo"  // Experiments for children
      ],
      otherResources: [
        "https://example.com/interactive-physics-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners explore more structured physics concepts, including forces, energy, and states of matter. Simple laws like Newton's first law and basic experiments are introduced.",
      topics: [
        "Forces and energy: push, pull, and simple machines",
        "Understanding states of matter: solid, liquid, gas",
        "Basic introduction to Newton's first law",
        "Simple experiments with force and motion"
      ],
      blogposts: [
        "https://example.com/forces-and-motion-guide"
      ],
      pdfs: [
        "https://example.com/resources/beginner-physics-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=E6Lkp7TmgIo", // Forces and motion
        "https://www.youtube.com/watch?v=PVrWyMr3C_g"  // States of matter
      ],
      otherResources: [
        "https://www.khanacademy.org/science/physics"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students begin exploring classical physics concepts like Newton's laws, work, and energy. They also learn about waves and basic thermodynamics.",
      topics: [
        "Newton's three laws of motion",
        "Work, energy, and power",
        "Introduction to waves: sound and light",
        "Basic thermodynamics: heat and temperature"
      ],
      blogposts: [
        "https://example.com/classical-physics-guide"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-physics-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=yRpLlJmroPM", // Newton's laws explained
        "https://www.youtube.com/watch?v=anSwtND75WM"  // Introduction to waves
      ],
      otherResources: [
        "https://www.khanacademy.org/science/physics/high-school-physics"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students delve deeper into classical mechanics, thermodynamics, and electromagnetism. They also learn to analyze real-world problems using advanced reasoning.",
      topics: [
        "Classical mechanics: momentum, torque, and angular motion",
        "Thermodynamics: laws of energy conservation and entropy",
        "Introduction to electromagnetism (electricity and magnetism)",
        "Problem-solving with real-world physics applications"
      ],
      blogposts: [
        "https://example.com/classical-mechanics-guide"
      ],
      pdfs: [
        "https://example.com/resources/competent-physics-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=lhTSfOZUNLo", // Momentum and torque
        "https://www.youtube.com/watch?v=i_Q7vcHDr9Y"  // Basics of electromagnetism
      ],
      otherResources: [
        "https://www.physicsclassroom.com/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students engage with modern physics concepts like relativity, quantum mechanics, and particle physics. They also analyze theoretical models and apply physics in engineering.",
      topics: [
        "Special and general relativity",
        "Quantum mechanics: wave-particle duality and uncertainty",
        "Introduction to particle physics and the Standard Model",
        "Applications of physics in engineering and technology"
      ],
      blogposts: [
        "https://example.com/modern-physics-overview"
      ],
      pdfs: [
        "https://example.com/resources/expert-physics-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=bdJj5GoXO6w", // Relativity basics
        "https://www.youtube.com/watch?v=ZacggH9wB7Y"  // Quantum mechanics explained
      ],
      otherResources: [
        "https://www.khanacademy.org/science/physics"
      ]
    }
  }
};

