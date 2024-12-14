// src/subjects/mathematics.ts
import { Stages } from '../utils/stages';

export const mathematicsDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children explore basic concepts of numbers, counting, and shapes. They also begin learning patterns, comparisons, and simple problem-solving through games and activities.",
      topics: [
        "Numbers 1-20: Counting and recognition",
        "Basic shapes (circle, square, triangle)",
        "Simple patterns and comparisons",
        "Understanding 'greater than' and 'less than'"
      ],
      blogposts: [
        "https://example.com/basic-numbers-and-shapes"
      ],
      pdfs: [
        "https://example.com/resources/novice-math-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=V7jK4ifqbfE", // Counting for kids
        "https://www.youtube.com/watch?v=bgZggbWw7sU"  // Patterns and shapes
      ],
      otherResources: [
        "https://example.com/interactive-math-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners focus on foundational arithmetic concepts like addition, subtraction, and multiplication. They also explore basic geometry, fractions, and measurements.",
      topics: [
        "Addition and subtraction within 100",
        "Basic multiplication (times tables 1-5)",
        "Understanding fractions (halves, quarters)",
        "Introduction to measurements (length, weight, time)"
      ],
      blogposts: [
        "https://example.com/addition-and-subtraction-tips"
      ],
      pdfs: [
        "https://example.com/resources/beginner-math-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=dBWdFQZrh_A", // Addition and subtraction basics
        "https://www.youtube.com/watch?v=Z8l2ddc8QZo"  // Introduction to fractions
      ],
      otherResources: [
        "https://www.khanacademy.org/math"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate level, learners delve deeper into arithmetic operations, pre-algebra concepts, and geometry. They also explore real-world math applications like percentages and ratios.",
      topics: [
        "Long division and multi-digit multiplication",
        "Introduction to algebra (variables and simple equations)",
        "Advanced geometry (angles, area, perimeter)",
        "Ratios, percentages, and decimals"
      ],
      blogposts: [
        "https://example.com/intermediate-math-tips"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-math-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=XKwS8OuFNsI", // Basic algebra
        "https://www.youtube.com/watch?v=ohoWkwB89Dg"  // Geometry concepts
      ],
      otherResources: [
        "https://www.khanacademy.org/math/pre-algebra"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students tackle advanced topics like algebra, trigonometry, and data analysis. They also learn to construct proofs and analyze mathematical patterns.",
      topics: [
        "Advanced algebra (quadratic equations, inequalities)",
        "Introduction to trigonometry (sine, cosine, tangent)",
        "Data analysis and statistics (mean, median, mode)",
        "Mathematical proofs and logic"
      ],
      blogposts: [
        "https://example.com/advanced-algebra-guide"
      ],
      pdfs: [
        "https://example.com/resources/competent-math-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=OeJmGulzjPc", // Advanced algebra
        "https://www.youtube.com/watch?v=H8E-ICNWY3Y"  // Trigonometry basics
      ],
      otherResources: [
        "https://www.khanacademy.org/math/algebra"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students study higher mathematics topics like calculus, linear algebra, and complex problem-solving. They also apply mathematical concepts to real-world challenges and optimization problems.",
      topics: [
        "Differential and integral calculus",
        "Linear algebra (matrices, vectors, transformations)",
        "Advanced statistics and probability",
        "Complex problem-solving and optimization"
      ],
      blogposts: [
        "https://example.com/advanced-calculus-guide"
      ],
      pdfs: [
        "https://example.com/resources/expert-math-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=5hO3MrzNUR4", // Calculus basics
        "https://www.youtube.com/watch?v=H-DMgf_p4c8"  // Linear algebra introduction
      ],
      otherResources: [
        "https://www.khanacademy.org/math/calculus"
      ]
    }
  }
};
