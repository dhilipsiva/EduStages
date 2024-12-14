// src/store/models/subjects.ts
import { Action, action } from 'easy-peasy';

export interface SubjectsModel {
  completionData: { [profileName: string]: { [subject: string]: string[] } };
  toggleTopicCompletion: Action<SubjectsModel, { profileName: string, subjectName: string, topic: string, completed: boolean }>;
}

const subjectsModel: SubjectsModel = {
  completionData: {},
  toggleTopicCompletion: action((state, { profileName, subjectName, topic, completed }) => {
    if (!state.completionData[profileName]) {
      state.completionData[profileName] = {};
    }
    if (!state.completionData[profileName][subjectName]) {
      state.completionData[profileName][subjectName] = [];
    }

    const topics = state.completionData[profileName][subjectName];
    if (completed && !topics.includes(topic)) {
      topics.push(topic);
    } else if (!completed && topics.includes(topic)) {
      const idx = topics.indexOf(topic);
      topics.splice(idx, 1);
    }
  })
};

export default subjectsModel;

