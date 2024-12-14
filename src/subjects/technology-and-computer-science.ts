// src/subjects/technology-and-computer-science.ts
import { Stages } from '../utils/stages';

export const technologyAndComputerScienceDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this introductory stage, children explore basic concepts of what a computer is, learn simple operations (like turning it on/off), and begin recognizing everyday technology. They are also introduced to computational thinking through logical games and multilingual exposure, including Lojban basics.",
      topics: [
        "What is a computer? Basic parts and operations",
        "Recognizing technology in daily life",
        "Basic computational thinking through puzzles",
        "Introduction to Lojban logic (e.g., basic connectives)"
      ],
      blogposts: [
        "https://example.com/basic-computer-concepts-for-kids",
        "https://example.com/technology-around-us"
      ],
      pdfs: [
        "https://example.com/resources/novice-tech-overview.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=RkK3VQldnl8", // What is a computer?
        "https://www.youtube.com/watch?v=Hs3ZqGHX_7s"  // Logical thinking for kids
      ],
      otherResources: [
        "https://example.com/interactive-games-for-kids",
        "https://lojban.org/extensions/Learning/"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "At this stage, children begin learning basic programming concepts using block-based coding (e.g., Scratch) and develop digital literacy skills like safe browsing. Logical thinking and programming fundamentals are reinforced through Lojban exercises.",
      topics: [
        "Introduction to block-based coding (Scratch)",
        "Using the internet safely and responsibly",
        "Basic programming logic (e.g., loops, conditions)",
        "Simple programming concepts in Lojban"
      ],
      blogposts: [
        "https://example.com/beginner-programming-block-coding",
        "https://example.com/digital-literacy-essentials"
      ],
      pdfs: [
        "https://example.com/resources/beginner-tech-guide.pdf",
        "https://lojban.org/pdf/lojban-for-programming.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=1e1kMdx6b2U", // Introduction to Scratch
        "https://www.youtube.com/watch?v=6g4O5UOH304"  // Safe internet use
      ],
      otherResources: [
        "https://scratch.mit.edu/",
        "https://lojban.org/"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate level, learners dive into text-based programming with Python and begin exploring basic Rust syntax. They also start applying Lojban in computational thinking exercises and learn to write simple programs in Lojban.",
      topics: [
        "Text-based programming: Python basics",
        "Introduction to Rust syntax and concepts",
        "Basic algorithms and data structures (e.g., sorting)",
        "Simple programs written in Lojban"
      ],
      blogposts: [
        "https://example.com/python-basics-for-teens",
        "https://example.com/intro-to-rust",
        "https://lojban.org/extensions/ComputationalLogic/"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-tech-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=rfscVS0vtbw" // Python tutorial for beginners
      ],
      otherResources: [
        "https://www.learnpython.org/",
        "https://doc.rust-lang.org/book/",
        "https://lojban.org/extensions/LogicProgramming/"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At the competent stage, students master advanced Python concepts (e.g., OOP) and delve into Rust’s concurrency and memory safety features. They also explore algorithm design, data structures, and apply Lojban in logical programming and problem-solving.",
      topics: [
        "Advanced Python: OOP and frameworks",
        "Rust: Concurrency and memory management",
        "Algorithm design and analysis (e.g., graph algorithms)",
        "Logical programming and problem-solving in Lojban"
      ],
      blogposts: [
        "https://example.com/object-oriented-python",
        "https://example.com/rust-concurrency-explained",
        "https://lojban.org/extensions/AdvancedProgramming/"
      ],
      pdfs: [
        "https://example.com/resources/competent-tech-projects.pdf",
        "https://lojban.org/pdf/advanced-logical-programming.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=WPvGqX-TXP0" // Advanced Python tutorials
      ],
      otherResources: [
        "https://flask.palletsprojects.com/",
        "https://actix.rs/",
        "https://lojban.github.io/advanced-logics"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At this advanced level, students specialize in machine learning with Python, implement complex Rust applications, and scale distributed systems. They also explore the intersection of logic, linguistics, and computation through advanced Lojban applications.",
      topics: [
        "Machine learning with Python (e.g., TensorFlow, PyTorch)",
        "Building advanced Rust applications (e.g., WebAssembly)",
        "Distributed systems and scalability",
        "Advanced Lojban: Parsing, reasoning, and linguistic AI"
      ],
      blogposts: [
        "https://example.com/advanced-ml-python",
        "https://example.com/rust-wasm-integration",
        "https://lojban.org/extensions/LinguisticAI/"
      ],
      pdfs: [
        "https://example.com/resources/expert-tech-advancements.pdf",
        "https://lojban.org/pdf/ai-and-logic.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=aircAruvnKk" // Machine Learning overview
      ],
      otherResources: [
        "https://pytorch.org/",
        "https://rustwasm.github.io/",
        "https://lojban.org/extensions/AdvancedLinguistics/"
      ]
    }
  }
};
