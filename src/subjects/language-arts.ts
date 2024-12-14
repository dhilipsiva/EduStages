// src/subjects/language-arts.ts
import { Stages } from '../utils/stages';

export const languageArtsDetail = {
  stages: {
    [Stages.NOVICE.id]: {
      description: "At this stage, children are introduced to the basics of language through alphabet recognition, phonetics, and simple words. The focus is on developing listening and speaking skills, with an emphasis on storytelling, nursery rhymes, and exposure to multiple languages, including Lojban.",
      topics: [
        "Alphabet recognition in native and target languages (e.g., English, Tamil)",
        "Phonetics and sounds",
        "Simple vocabulary in English, Lojban, and native languages",
        "Nursery rhymes and storytelling",
        "Listening and speaking skills"
      ],
      blogposts: [
        "https://example.com/alphabet-recognition-tips",
        "https://example.com/lojban-for-kids"
      ],
      pdfs: [
        "https://example.com/resources/novice-language-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=Hq3vggs8EAw", // Alphabet song
        "https://www.youtube.com/watch?v=RzwO7J2nZbA"  // Phonics for beginners
      ],
      otherResources: [
        "https://example.com/interactive-alphabet-games",
        "https://mw.lojban.org/extensions/Learning/",
        "https://example.com/nursery-rhyme-collection"
      ]
    },
    [Stages.BEGINNER.id]: {
      description: "Children at this level start learning to read and write simple sentences, understand basic grammar, and expand their vocabulary. They are introduced to basic Lojban grammar and start forming simple sentences in multiple languages.",
      topics: [
        "Simple sentence formation in English, Tamil, Kannada, and Lojban",
        "Basic grammar (nouns, verbs, adjectives)",
        "Reading comprehension (short passages)",
        "Vocabulary building across multiple languages",
        "Expressive writing (short sentences)"
      ],
      blogposts: [
        "https://example.com/beginner-reading-strategies",
        "https://mw.lojban.org/extensions/Learning/lojban-for-beginners"
      ],
      pdfs: [
        "https://example.com/resources/beginner-language-guide.pdf",
        "https://lojban.org/pdf/lojban_for_beginners.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=75p-N9YKqNo", // Reading for kids
        "https://www.youtube.com/watch?v=_1H2W92h78o"  // Writing basics
      ],
      otherResources: [
        "https://www.starfall.com/",
        "https://www.lojban.org/"
      ]
    },
    [Stages.INTERMEDIATE.id]: {
      description: "Intermediate learners work on building fluency in reading and writing, understanding more complex grammar, and crafting short essays or stories. This stage introduces intermediate Lojban concepts like predicates and tenses, while further refining multilingual skills.",
      topics: [
        "Fluency in reading and writing across English, Tamil, Kannada, and Lojban",
        "Intermediate grammar (adverbs, conjunctions, tenses)",
        "Crafting short essays and stories",
        "Literary concepts: character, plot, setting",
        "Understanding Lojban predicates and tense structures"
      ],
      blogposts: [
        "https://example.com/intermediate-grammar-tips",
        "https://example.com/lojban-predicates-and-tenses"
      ],
      pdfs: [
        "https://example.com/resources/intermediate-language-handbook.pdf",
        "https://lojban.org/pdf/intermediate-lojban-guide.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=nJgZM-MUPrQ", // Grammar for teens
        "https://www.youtube.com/watch?v=OYjXvYBjYj8"  // Essay writing basics
      ],
      otherResources: [
        "https://www.funbrain.com/",
        "https://lojban.github.io/"
      ]
    },
    [Stages.COMPETENT.id]: {
      description: "At the competent stage, students refine their writing with advanced grammar, analyze literature, and develop persuasive and expository writing skills. They gain advanced proficiency in Lojban, focusing on logical reasoning and debates.",
      topics: [
        "Advanced grammar (clauses, conditionals)",
        "Literature analysis (themes, symbolism)",
        "Persuasive writing techniques",
        "Expository writing",
        "Advanced Lojban: logical connectives, compound statements, and debates"
      ],
      blogposts: [
        "https://example.com/advanced-grammar-guide",
        "https://lojban.org/pdf/advanced-lojban-logics.pdf"
      ],
      pdfs: [
        "https://example.com/resources/competent-language-projects.pdf",
        "https://lojban.org/pdf/lojban-debates-and-reasoning.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=dNlkHtMgcPQ", // Analyzing literature
        "https://www.youtube.com/watch?v=JA4v-qiFuuQ"  // Persuasive writing
      ],
      otherResources: [
        "https://www.commonlit.org/",
        "https://lojban.org/extensions/DebateLogic/"
      ]
    },
    [Stages.EXPERT.id]: {
      description: "At this advanced level, students engage in critical literary analysis, explore different genres of writing, and craft research papers or creative works. In Lojban, they master complex logical structures, poetry, and advanced linguistic reasoning.",
      topics: [
        "Critical literary analysis",
        "Exploration of writing genres (poetry, prose, drama)",
        "Crafting research papers",
        "Creative writing (novels, scripts)",
        "Advanced Lojban: Poetry, advanced syntax, and logical reasoning"
      ],
      blogposts: [
        "https://example.com/critical-literary-theory",
        "https://lojban.org/extensions/poetry"
      ],
      pdfs: [
        "https://example.com/resources/expert-language-advancements.pdf",
        "https://lojban.org/pdf/lojban-poetry-and-advanced-syntax.pdf"
      ],
      videos: [
        "https://www.youtube.com/watch?v=QzQqfUNFzDI", // Literary theory overview
        "https://www.youtube.com/watch?v=0rKA6wnwItw"  // Research writing tips
      ],
      otherResources: [
        "https://www.jstor.org/",
        "https://lojban.org/extensions/AdvancedSyntax/"
      ]
    }
  }
};
