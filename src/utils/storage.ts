// src/utils/storage.ts

import { Profile } from '../store/models/profile';

export function loadProfiles(): Profile[] {
  return JSON.parse(localStorage.getItem('profiles') || '[]');
}

export function saveProfiles(profiles: Profile[]): void {
  localStorage.setItem('profiles', JSON.stringify(profiles));
}

export function loadCompletionData(): { [profileName: string]: { [subject: string]: string[] } } {
  return JSON.parse(localStorage.getItem('completionData') || '{}');
}

export function saveCompletionData(data: { [profileName: string]: { [subject: string]: string[] } }): void {
  localStorage.setItem('completionData', JSON.stringify(data));
}

// Add findProfile if missing
export function findProfile(name: string): Profile | undefined {
  const profiles = loadProfiles();
  return profiles.find(p => p.name === name);
}
