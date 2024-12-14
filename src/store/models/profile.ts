// src/store/models/profile.ts

import { Action, action } from 'easy-peasy';

export interface Profile {
  name: string;
  monthOfBirth: number;
  yearOfBirth: number;
  overriddenAgeGroup?: string;
}

export interface ProfileModel {
  currentProfileName: string;
  profiles: Profile[];
  setCurrentProfile: Action<ProfileModel, string>;
  setProfiles: Action<ProfileModel, Profile[]>;
  setOverride: Action<ProfileModel, { profileName: string; overriddenAgeGroup: string }>;
}

const profileModel: ProfileModel = {
  currentProfileName: "",
  profiles: [],
  setCurrentProfile: action((state, payload) => {
    state.currentProfileName = payload;
  }),
  setProfiles: action((state, payload) => {
    state.profiles = payload;
  }),
  setOverride: action((state, { profileName, overriddenAgeGroup }) => {
    const idx = state.profiles.findIndex(p => p.name === profileName);
    if (idx >= 0) {
      state.profiles[idx].overriddenAgeGroup = overriddenAgeGroup;
    }
  })
};

export default profileModel;
