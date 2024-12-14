// src/subjects/earth-space-and-environmental-sciences.ts
import { Stages } from '../utils/stages';

export const earthSpaceAndEnvironmentalSciencesDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children explore basic concepts of Earth, space, and the environment. Topics include the Earth's features, weather, and an introduction to the solar system.",
      topics: [
        "Introduction to Earth's features: land, water, air",
        "Understanding weather: rain, sun, clouds",
        "Basic introduction to the solar system: planets and the sun",
        "Simple environmental concepts: recycling and nature conservation"
      ],
      blogposts: [
        "https://example.com/earth-science-for-kids",
        "https://example.com/introduction-to-the-solar-system"
      ],
      pdfs: [
        "https://example.com/resources/novice-earth-science-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=lX64NQeAX8A", // Earth's features
        "https://www.youtube.com/watch?v=Qd6nLM2QlWw"  // Solar system basics
      ],
      otherResources: [
        "https://example.com/simple-weather-games"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Beginner-level learners study Earth's layers, water cycles, and basic environmental conservation. They also learn about day-night cycles and the seasons.",
      topics: [
        "Earth's layers: crust, mantle, core",
        "Understanding the water cycle",
        "Day and night: Earth's rotation",
        "Seasons and weather patterns",
        "Introduction to ecosystems and biodiversity"
      ],
      blogposts: [
        "https://example.com/earths-layers-explained",
        "https://example.com/understanding-water-cycles"
      ],
      pdfs: [
        "https://example.com/resources/beginner-earth-science-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Q9j1xGaxYzY", // Earth's layers
        "https://www.youtube.com/watch?v=RzxaNwJ8Jqo"  // Water cycle
      ],
      otherResources: [
        "https://www.khanacademy.org/science/earth-science"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "At the intermediate stage, students dive deeper into Earth's geological processes, ecosystems, and space science. They also explore environmental challenges like pollution and climate change.",
      topics: [
        "Geological processes: plate tectonics, earthquakes, volcanoes",
        "Detailed study of ecosystems: food chains and food webs",
        "Introduction to space exploration: satellites, space missions",
        "Understanding pollution and its effects",
        "Climate change basics and its impact on Earth"
      ],
      blogposts: [
        "https://example.com/geological-processes-overview",
        "https://example.com/climate-change-explained"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-earth-science-handbook.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=kwfNGatxUJI", // Plate tectonics
        "https://www.youtube.com/watch?v=EtW2rrLHs08"  // Climate change basics
      ],
      otherResources: [
        "https://www.khanacademy.org/science/earth-science"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At this stage, students study Earth's natural resources, advanced space science, and ecological dynamics. They also learn about renewable energy and sustainability.",
      topics: [
        "Natural resources: types, usage, and conservation",
        "Advanced space science: black holes, galaxies, and cosmology",
        "Ecological dynamics: population, energy flow, and biodiversity",
        "Renewable energy sources: wind, solar, hydroelectric",
        "Sustainable development and environmental conservation"
      ],
      blogposts: [
        "https://example.com/natural-resources-conservation",
        "https://example.com/renewable-energy-overview"
      ],
      pdfs: [
        "https://example.com/resources/competent-earth-science-projects.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=F27J3mRRfKo", // Natural resources
        "https://www.youtube.com/watch?v=1WUfYUAQ7lg"  // Renewable energy
      ],
      otherResources: [
        "https://earthobservatory.nasa.gov/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At the expert level, students explore advanced topics like planetary science, astrophysics, and environmental policies. They also study Earth's role in the universe and the impact of human activities.",
      topics: [
        "Planetary science: exoplanets, planetary atmospheres",
        "Astrophysics: stars, dark matter, and cosmology",
        "Earth's role in the universe: evolution and habitability",
        "Environmental policies and global efforts",
        "Impact of human activities on the planet"
      ],
      blogposts: [
        "https://example.com/planetary-science-overview",
        "https://example.com/environmental-policy-explained"
      ],
      pdfs: [
        "https://example.com/resources/expert-earth-science-advancements.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=nU7gZW0Io54", // Exoplanets
        "https://www.youtube.com/watch?v=BYFgCykKH2g"  // Human impact on Earth
      ],
      otherResources: [
        "https://www.khanacademy.org/science/astronomy"
      ]
    }
  }
};

