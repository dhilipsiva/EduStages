// src/utils/data.ts

export const subjectsData = {
  "Novice (Introduction)": {
    "Ages": "3-5",
    "Subjects": {
      "Technology and Computer Science": ["Introduction to Computers", "Basic Operations"],
      "Language Arts": ["Alphabet Recognition", "Basic Vocabulary"]
      // Add more subjects as needed
    }
  },
  "Beginner (Foundational)": {
    "Ages": "6-10",
    "Subjects": {
      "Technology and Computer Science": ["Basic Programming (Block)", "Digital Literacy"],
      "Language Arts": ["Basic Reading/Writing", "Simple Grammar"]
      // Add more subjects as needed
    }
  },
  "Intermediate (Application)": {
    "Ages": "11-13",
    "Subjects": {
      "Technology and Computer Science": ["Introduction to Python", "Basic Rust Syntax"],
      "Language Arts": ["Intermediate Grammar", "Short Essays"]
      // Expand as needed
    }
  },
  "Competent (In-Depth)": {
    "Ages": "14-18",
    "Subjects": {
      "Technology and Computer Science": ["Advanced Python (OOP)", "Rust Concurrency"],
      "Language Arts": ["Literature Analysis", "Advanced Writing"]
      // Expand as needed
    }
  },
  "Expert (Advanced)": {
    "Ages": "18+",
    "Subjects": {
      "Technology and Computer Science": ["Machine Learning (Python)", "Advanced Rust (Wasm)"],
      "Language Arts": ["Critical Literary Theory", "Research Writing"]
      // Expand as needed
    }
  }
};

/**
 * Calculates approximate age from birth month and year.
 * @param monthOfBirth 0-based month (0=January, 11=December)
 * @param yearOfBirth full year (e.g. 2010)
 */
export function calculateAge(monthOfBirth: number, yearOfBirth: number): number {
  const now = new Date();
  let age = now.getFullYear() - yearOfBirth;
  const currentMonth = now.getMonth();
  if (currentMonth < monthOfBirth) {
    age -= 1;
  }
  return age;
}

/**
 * Determines age group string from age.
 */
export function getAgeGroup(age: number): string {
  if (age >= 3 && age <= 5) return "Novice (Introduction)";
  if (age >= 6 && age <= 10) return "Beginner (Foundational)";
  if (age >= 11 && age <= 13) return "Intermediate (Application)";
  if (age >= 14 && age <= 18) return "Competent (In-Depth)";
  if (age >= 19) return "Expert (Advanced)";
  // If younger than 3 or no match, default to Novice
  return "Novice (Introduction)";
}

