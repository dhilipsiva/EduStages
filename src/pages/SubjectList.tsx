import React, { useEffect, useState } from 'react';
import { useStoreState } from '../store';
import { useNavigate } from 'react-router-dom';
import { subjects } from '../utils/subjects';
import { calculateAge, getAgeStage } from '../utils/data';

const SubjectList: React.FC = () => {
  const currentProfileName = useStoreState(state => state.profile.currentProfileName);
  const profiles = useStoreState(state => state.profile.profiles);
  const navigate = useNavigate();


  useEffect(() => {
    if (!currentProfileName) return;
    const profile = profiles.find(p => p.name === currentProfileName);
    if (!profile) return;

    const actualAge = calculateAge(profile.monthOfBirth, profile.yearOfBirth);
    const detectedStage = getAgeStage(actualAge);
    // const stage = profile.overriddenAgeStage && profile.overriddenAgeStage !== "" ? profile.overriddenAgeStage : detectedStage;
  }, [currentProfileName, profiles])

  const handleSubjectClick = (subjectId) => {
    navigate(`/subjects/${subjectId}`);
  };

  return (
    <div>
      <h1>Subjects</h1>
        <ul>
          {subjects.map(subj => (
            <li key={subj.id} style={{cursor: 'pointer'}} onClick={() => handleSubjectClick(subj.id)}>
              {subj.title}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default SubjectList;
