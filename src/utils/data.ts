// src/utils/data.ts
import { Stages } from './stages';

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

function inRange(age: number, range: [number, number]){
  return age >= range[0] && age <= range[1]
}
/**
 * Determines age stage id from age.
 */
export function getAgeStage(age: number): string {
  if (inRange(age, Stages.NOVICE.ageRange)) return Stages.NOVICE.id;
  if (inRange(age, Stages.BEGINNER.ageRange)) return Stages.BEGINNER.id;
  if (inRange(age, Stages.INTERMEDIATE.ageRange)) return Stages.INTERMEDIATE.id;
  if (inRange(age, Stages.COMPETENT.ageRange)) return Stages.COMPETENT.id;
  if (inRange(age, Stages.EXPERT.ageRange)) return Stages.EXPERT.id;
  // If younger than 3 or no match, default to Novice
  return stages.NOVICE.id  
}
