// src/subjects/fine-arts-and-performing-arts.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to basic creative expressions, including drawing, singing, and simple movements. The focus is on exploration and enjoyment.",
      topics: [
        "Basic drawing and coloring: lines, shapes, and patterns",
        "Simple songs and rhymes",
        "Basic movements: clapping, jumping, and spinning",
        "Exploring textures, colors, and sounds"
      ],
      blogposts: [
        "https://example.com/creative-expression-for-kids",
        "https://example.com/basic-drawing-techniques"
      ],
      pdfs: [
        "https://example.com/resources/novice-fine-arts-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=cR6gXBT9gjw", // Drawing basics for kids
        "https://www.youtube.com/watch?v=7E-BT1qTBic"  // Simple songs and rhymes
      ],
      otherResources: [
        "https://example.com/interactive-art-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners start exploring structured creative activities, such as storytelling, simple choreography, and crafting. They also learn basic art techniques and rhythmic patterns.",
      topics: [
        "Storytelling with pictures and words",
        "Introduction to crafting: paper folding, cutting, and gluing",
        "Simple choreography: dancing to music beats",
        "Basic art techniques: shading, blending, and brush control",
        "Exploring rhythm with hand drums or clapping patterns"
      ],
      blogposts: [
        "https://example.com/introduction-to-storytelling",
        "https://example.com/basic-crafting-techniques"
      ],
      pdfs: [
        "https://example.com/resources/beginner-fine-arts-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=byr2F0YTNS4", // Crafting basics
        "https://www.youtube.com/watch?v=jW-3uwjW1wM"  // Rhythmic activities
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities/art-history-basics"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students explore more advanced artistic skills, including sketching, painting, and theatrical expressions. They also learn the basics of musical instruments and dance forms.",
      topics: [
        "Sketching and painting: landscapes, portraits, and still life",
        "Introduction to musical instruments: keyboards, percussion",
        "Theater basics: expressions, dialogue delivery, and staging",
        "Dance forms: basic classical, contemporary, or folk dances",
        "Crafting advanced projects: model building, origami"
      ],
      blogposts: [
        "https://example.com/painting-basics-guide",
        "https://example.com/introduction-to-musical-instruments"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-arts-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=BLm4ayRs8D8", // Painting techniques
        "https://www.youtube.com/watch?v=gh4YINrfGg0"  // Beginner theater tips
      ],
      otherResources: [
        "https://www.moma.org/learn/moma_learning/"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students focus on developing expertise in their chosen art forms, whether visual arts, music, or dance. They also study art history and cultural influences.",
      topics: [
        "Advanced art techniques: oil painting, sculpting, and digital art",
        "Music composition: creating melodies and harmonies",
        "Advanced theater skills: improvisation, stage management",
        "Dance choreography: creating and performing routines",
        "Studying art history and cultural influences"
      ],
      blogposts: [
        "https://example.com/advanced-art-techniques",
        "https://example.com/introduction-to-music-composition"
      ],
      pdfs: [
        "https://example.com/resources/competent-arts-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=lD4COp14Bnw", // Advanced painting techniques
        "https://www.youtube.com/watch?v=2-6G9t8cLBM"  // Choreography basics
      ],
      otherResources: [
        "https://smarthistory.org/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students delve into professional-level artistry, performance, and critique. They also explore the impact of art and culture on society and contribute through their creations.",
      topics: [
        "Mastery of chosen art forms: visual arts, music, or dance",
        "Professional-level performances and exhibitions",
        "Art critique and analysis: interpreting symbolism and intent",
        "Exploring the role of arts in societal and cultural change",
        "Collaboration and interdisciplinary projects"
      ],
      blogposts: [
        "https://example.com/mastering-art-forms",
        "https://example.com/art-and-society-explained"
      ],
      pdfs: [
        "https://example.com/resources/expert-arts-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=4zkCF0T8eVw", // Professional art tips
        "https://www.youtube.com/watch?v=bGzHdqjiJzU"  // Music and culture
      ],
      otherResources: [
        "https://www.khanacademy.org/humanities/art-history"
      ]
    }
  }
};

