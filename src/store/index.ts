// src/store/index.ts
import { createStore, createTypedHooks } from 'easy-peasy';
import profileModel, { ProfileModel } from './models/profile';
import subjectsModel, { SubjectsModel } from './models/subjects';

export interface StoreModel {
  profile: ProfileModel;
  subjects: SubjectsModel;
}

const model: StoreModel = {
  profile: profileModel,
  subjects: subjectsModel,
};

const store = createStore(model);

// Typed hooks for convenience
const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>();

export { store, useStoreActions, useStoreState };

