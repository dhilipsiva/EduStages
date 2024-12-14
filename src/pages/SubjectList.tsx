import React, { useEffect, useState } from 'react';
import { useStoreState } from '../store';
import { useNavigate } from 'react-router-dom';
import { subjectsData, calculateAge, getAgeGroup } from '../utils/data';

const SubjectList: React.FC = () => {
  const currentProfileName = useStoreState(state => state.profile.currentProfileName);
  const profiles = useStoreState(state => state.profile.profiles);
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    if (!currentProfileName) return;
    const profile = profiles.find(p => p.name === currentProfileName);
    if (!profile) return;

    const actualAge = calculateAge(profile.monthOfBirth, profile.yearOfBirth);
    const detectedGroup = getAgeGroup(actualAge);
    const group = profile.overriddenAgeGroup && profile.overriddenAgeGroup !== "" ? profile.overriddenAgeGroup : detectedGroup;

    const dataForGroup = subjectsData[group];
    if (dataForGroup && dataForGroup.Subjects) {
      setSubjects(dataForGroup.Subjects);
    } else {
      setSubjects({});
    }
  }, [currentProfileName, profiles]);

  const handleSubjectClick = (subjectName: string) => {
    navigate(`/subjects/${encodeURIComponent(subjectName)}`);
  };

  return (
    <div>
      <h1>Subjects</h1>
      {Object.keys(subjects).length === 0 ? (
        <p>No subjects available for the determined age group.</p>
      ) : (
        <ul>
          {Object.keys(subjects).map(subj => (
            <li key={subj} style={{cursor: 'pointer'}} onClick={() => handleSubjectClick(subj)}>
              {subj}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubjectList;

