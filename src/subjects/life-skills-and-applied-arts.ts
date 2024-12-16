// src/subjects/life-skills-and-applied-arts.ts
import { Stages } from '../utils/stages';

export const data = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to basic life skills like sharing, cleaning, and exploring creativity through applied arts such as simple crafting.",
      topics: [
        "Learning to share and take turns",
        "Basic personal hygiene and self-care",
        "Introduction to cleaning up after activities",
        "Simple crafts: paper folding, cutting, and gluing",
        "Basic cooking activities: mixing ingredients, spreading butter"
      ],
      blogposts: [
        "https://example.com/basic-life-skills-for-kids",
        "https://example.com/simple-crafts-for-children"
      ],
      pdfs: [
        "https://example.com/resources/novice-life-skills-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Ev4ebM3Hjhs", // Sharing and taking turns
        "https://www.youtube.com/watch?v=fHvx5OHivLM"  // Crafting basics
      ],
      otherResources: [
        "https://example.com/kids-craft-projects"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners start exploring structured life skills, such as organizing, basic money concepts, and teamwork. They also engage in creative applied arts projects.",
      topics: [
        "Organizing personal belongings: tidying up, sorting",
        "Basic money concepts: coins, counting, and saving",
        "Introduction to teamwork: simple group tasks and games",
        "Applied arts: creating greeting cards, painting flower pots",
        "Basic cooking: making sandwiches, cutting soft fruits"
      ],
      blogposts: [
        "https://example.com/beginner-money-concepts",
        "https://example.com/creative-applied-arts-ideas"
      ],
      pdfs: [
        "https://example.com/resources/beginner-life-skills-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=2Cw8zdhkUF8", // Money concepts for kids
        "https://www.youtube.com/watch?v=kUC7B6tIktY"  // Basic teamwork activities
      ],
      otherResources: [
        "https://www.khanacademy.org/kids"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students focus on real-world life skills like budgeting, communication, and critical thinking. They also develop applied arts skills like sewing and woodworking.",
      topics: [
        "Budgeting and saving: creating a simple budget",
        "Effective communication: active listening and expressing ideas",
        "Critical thinking and problem-solving",
        "Applied arts: basic sewing, knitting, and woodworking",
        "Cooking fundamentals: baking cookies, making salads"
      ],
      blogposts: [
        "https://example.com/learning-budgeting",
        "https://example.com/basic-sewing-tutorial"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-life-skills-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=GyeSRuo_q6w", // Budgeting basics
        "https://www.youtube.com/watch?v=LhQWrHQwYTk"  // Problem-solving activities
      ],
      otherResources: [
        "https://www.diy.org/"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students learn advanced life skills, such as financial literacy, decision-making, and time management. They also explore advanced applied arts projects.",
      topics: [
        "Financial literacy: managing bank accounts, understanding interest",
        "Time management and prioritization",
        "Decision-making and leadership skills",
        "Applied arts: pottery, advanced sewing projects, furniture making",
        "Cooking skills: making meals from scratch"
      ],
      blogposts: [
        "https://example.com/advanced-financial-literacy",
        "https://example.com/furniture-making-for-beginners"
      ],
      pdfs: [
        "https://example.com/resources/competent-life-skills-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=erYfqB5e0Pg", // Financial literacy
        "https://www.youtube.com/watch?v=3m_ba3VxZRY"  // Time management tips
      ],
      otherResources: [
        "https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students focus on professional-level life skills like entrepreneurship, advanced problem-solving, and practical applied arts for personal or commercial use.",
      topics: [
        "Entrepreneurship basics: starting a small business",
        "Advanced problem-solving and conflict resolution",
        "Leadership and teamwork in complex scenarios",
        "Applied arts: designing and marketing handmade products",
        "Culinary arts: advanced cooking and food presentation"
      ],
      blogposts: [
        "https://example.com/starting-small-business",
        "https://example.com/advanced-culinary-techniques"
      ],
      pdfs: [
        "https://example.com/resources/expert-life-skills-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Fb3AVQpRt84", // Entrepreneurship basics
        "https://www.youtube.com/watch?v=fA1QuVpRoEc"  // Advanced culinary arts
      ],
      otherResources: [
        "https://www.coursera.org/browse/life-skills"
      ]
    }
  }
};
