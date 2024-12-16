import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreState, useStoreActions } from '../store';
import { calculateAge, getAgeStage } from '../utils/data';


const SubjectDetail: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const currentProfileName = useStoreState(state => state.profile.currentProfileName);
  const profiles = useStoreState(state => state.profile.profiles);
  const completionData = useStoreState(state => state.subjects.completionData);
  const toggleTopicCompletion = useStoreActions(actions => actions.subjects.toggleTopicCompletion);
  const [subjectData, setSubjectData] = useState<null | any>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    if (!currentProfileName) return;
    const profile = profiles.find(p => p.name === currentProfileName);
    if (!profile) return;

    if (!subjectId) {
      setError('Subject ID not provided.');
      return;
    }

   
    const actualAge = calculateAge(profile.monthOfBirth, profile.yearOfBirth);
    const detectedStage = getAgeStage(actualAge);
    const stage = profile.overriddenAgeStage && profile.overriddenAgeStage !== "" ? profile.overriddenAgeStage : detectedStage;

    const profileCompletion = completionData[currentProfileName] || {};
    const subjComp = profileCompletion[subjectId!] || [];
    setCompletedTopics([...subjComp]);

    // Dynamically import the subject file
    const loadSubject = async () => {
      try {
        const subjectModule = await import(`../subjects/${subjectId}.ts`);
        setSubjectData(subjectModule.data.stages[stage]);
      } catch (err) {
        console.error('Error loading subject data:', err);
        setError('Failed to load subject data.');
      }
    };

    loadSubject();
   }, [currentProfileName, profiles, completionData, subjectId]);

  const handleCheckboxChange = (topic: string, checked: boolean) => {
    if (!currentProfileName || !subjectId) return;
    toggleTopicCompletion({
      profileName: currentProfileName,
      subjectId,
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

  if (subjectData === null || subjectData === undefined ) {
    return (<h1>Loading...</h1>)
  }

  
  return (
    <div>
      <h1>{subjectData.title}</h1>
      {subjectData.topics.length === 0 ? (
        <p>No topics available for this subject.</p>
      ) : (
        <ul>
          {subjectData.topics.map(topic => {
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

