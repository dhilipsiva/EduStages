// src/store/models/profile.ts

import { Action, action } from 'easy-peasy';

export interface Profile {
  name: string;
  monthOfBirth: number;
  yearOfBirth: number;
  overriddenAgeStage?: string;
}

export interface ProfileModel {
  currentProfileName: string;
  profiles: Profile[];
  setCurrentProfile: Action<ProfileModel, string>;
  setProfiles: Action<ProfileModel, Profile[]>;
  setOverride: Action<ProfileModel, { profileName: string; overriddenAgeStage: string }>;
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
  setOverride: action((state, { profileName, overriddenAgeStage }) => {
    const idx = state.profiles.findIndex(p => p.name === profileName);
    if (idx >= 0) {
      state.profiles[idx].overriddenAgeStage = overriddenAgeStage;
    }
  })
};

export default profileModel;
