// src/subjects/physical-education-and-health.ts
import { Stages } from '../utils/stages';

export const physicalEducationAndHealthDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children engage in simple physical activities to improve motor skills, coordination, and basic health awareness. The focus is on fun and developing a positive attitude towards movement.",
      topics: [
        "Basic motor skills: running, jumping, throwing, catching",
        "Understanding personal hygiene: washing hands, brushing teeth",
        "Simple balance and coordination activities",
        "Awareness of healthy foods vs. unhealthy foods"
      ],
      blogposts: [
        "https://example.com/basic-motor-skills-for-kids",
        "https://example.com/healthy-eating-basics"
      ],
      pdfs: [
        "https://example.com/resources/novice-physical-education-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=j5iWEcYBj5k", // Basic motor skills
        "https://www.youtube.com/watch?v=YC51eARtguM"  // Hygiene for kids
      ],
      otherResources: [
        "https://example.com/interactive-physical-education-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners focus on structured physical activities, teamwork, and basic health knowledge. They also start understanding the importance of regular exercise.",
      topics: [
        "Structured activities: relay races, simple team games",
        "Basic stretching and flexibility exercises",
        "Understanding the importance of hydration",
        "Learning about rest and sleep for health",
        "Introduction to basic safety: crossing roads, playground rules"
      ],
      blogposts: [
        "https://example.com/importance-of-hydration",
        "https://example.com/beginner-team-games"
      ],
      pdfs: [
        "https://example.com/resources/beginner-physical-education-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Io7PZGxlzW4", // Stretching exercises
        "https://www.youtube.com/watch?v=VByzzCZtWkc"  // Health and hydration
      ],
      otherResources: [
        "https://www.khanacademy.org/health-and-medicine"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students explore fitness routines, advanced physical skills, and mental health awareness. They also learn the basics of anatomy and physiology.",
      topics: [
        "Fitness routines: warm-ups, aerobics, and endurance training",
        "Advanced physical skills: jumping rope, sprinting, team sports",
        "Introduction to anatomy: muscles and bones",
        "Mental health basics: managing stress, mindfulness activities",
        "First aid basics: handling cuts, bruises, and minor injuries"
      ],
      blogposts: [
        "https://example.com/fitness-routines-for-teens",
        "https://example.com/basic-anatomy-guide"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-physical-education-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Ng8VLPJfgaY", // Anatomy basics
        "https://www.youtube.com/watch?v=glVP4rUO02Y"  // Fitness routines
      ],
      otherResources: [
        "https://www.nationalgeographic.org/education/resources-for-teachers/"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students focus on advanced fitness, sports techniques, and comprehensive health education. They also explore nutrition and the relationship between physical and mental health.",
      topics: [
        "Advanced sports techniques: strategies, drills, and teamwork",
        "In-depth anatomy and physiology: circulatory and respiratory systems",
        "Nutrition science: macronutrients, vitamins, and minerals",
        "Mental health: recognizing signs of stress and anxiety",
        "Preventive health care: vaccines, regular check-ups, and hygiene"
      ],
      blogposts: [
        "https://example.com/advanced-sports-techniques",
        "https://example.com/nutrition-science-explained"
      ],
      pdfs: [
        "https://example.com/resources/competent-physical-education-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=8Ohm1UoTpHQ", // Advanced sports skills
        "https://www.youtube.com/watch?v=ulQafxXwA7Y"  // Nutrition basics
      ],
      otherResources: [
        "https://www.cdc.gov/healthyschools/physicalactivity/index.htm"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students focus on professional sports, advanced health science, and lifelong fitness practices. They also explore public health and career opportunities in health and fitness.",
      topics: [
        "Professional-level sports: specialization and training programs",
        "Advanced health science: biomechanics and kinesiology",
        "Public health: understanding diseases and their prevention",
        "Lifelong fitness: creating sustainable workout routines",
        "Career paths: sports science, coaching, and healthcare professions"
      ],
      blogposts: [
        "https://example.com/biomechanics-explained",
        "https://example.com/sustainable-fitness-guide"
      ],
      pdfs: [
        "https://example.com/resources/expert-physical-education-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=4Gb0pYv8gdw", // Biomechanics basics
        "https://www.youtube.com/watch?v=DyEzVI1Ohd4"  // Lifelong fitness
      ],
      otherResources: [
        "https://www.khanacademy.org/science/health-and-medicine"
      ]
    }
  }
};

