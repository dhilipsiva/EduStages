import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../store';
import { calculateAge, getAgeStage } from '../utils/data';

const SubjectDetail: React.FC = () => {
  const { subjectName } = useParams<{ subjectName: string }>();
  const currentProfileName = useStoreState(state => state.profile.currentProfileName);
  const profiles = useStoreState(state => state.profile.profiles);
  const completionData = useStoreState(state => state.subjects.completionData);
  const toggleTopicCompletion = useStoreActions(actions => actions.subjects.toggleTopicCompletion);

  const [topics, setTopics] = useState<string[]>([]);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    if (!currentProfileName) return;
    const profile = profiles.find(p => p.name === currentProfileName);
    if (!profile) return;

    const actualAge = calculateAge(profile.monthOfBirth, profile.yearOfBirth);
    const detectedGroup = getAgeGroup(actualAge);
    const group = profile.overriddenAgeStage && profile.overriddenAgeStage !== "" ? profile.overriddenAgeStage : detectedStage;

    const dataForGroup = subjectsData[group];
    const subjectTopics = dataForGroup?.Subjects[subjectName!] || [];
    setTopics(subjectTopics);

    const profileCompletion = completionData[currentProfileName] || {};
    const subjComp = profileCompletion[subjectName!] || [];
    setCompletedTopics([...subjComp]);
  }, [currentProfileName, profiles, completionData, subjectName]);

  const handleCheckboxChange = (topic: string, checked: boolean) => {
    if (!currentProfileName || !subjectName) return;
    toggleTopicCompletion({
      profileName: currentProfileName,
      subjectName,
      topic,
      completed: checked
    });

    // Update local state immediately for UI responsiveness
    if (checked && !completedTopics.includes(topic)) {
      setCompletedTopics([...completedTopics, topic]);
    } else if (!checked && completedTopics.includes(topic)) {
      setCompletedTopics(completedTopics.filter(t => t !== topic));
    }
  };

  return (
    <div>
      <h1>{subjectName}</h1>
      {topics.length === 0 ? (
        <p>No topics available for this subject.</p>
      ) : (
        <ul>
          {topics.map(topic => {
            const isChecked = completedTopics.includes(topic);
            return (
              <li key={topic}>
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={e => handleCheckboxChange(topic, e.target.checked)} 
                />
                {topic}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SubjectDetail;

