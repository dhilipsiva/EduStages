// src/components/Header.tsx

import React, { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from '../store';
import { loadProfiles, saveProfiles, findProfile, updateProfile } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { Stages } from '../utils/stages';

const Header: React.FC = () => {
  const currentProfileName = useStoreState((state) => state.profile.currentProfileName);
  const profiles = useStoreState((state) => state.profile.profiles);
  const setCurrentProfile = useStoreActions((actions) => actions.profile.setCurrentProfile);
  const setProfiles = useStoreActions((actions) => actions.profile.setProfiles);
  const setOverride = useStoreActions((actions) => actions.profile.setOverride);

  const [localProfiles, setLocalProfiles] = useState(profiles);
  const [localAgeOverride, setLocalAgeOverride] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Load profiles from localStorage on mount and sync with store if not done already
    const loaded = loadProfiles();
    if (loaded.length > 0 && profiles.length === 0) {
      setProfiles(loaded);
      setLocalProfiles(loaded);
    } else {
      setLocalProfiles(profiles);
    }
  }, [profiles, setProfiles]);

  useEffect(() => {
    if (currentProfileName) {
      const p = findProfile(currentProfileName);
      if (p && p.overriddenAgeStage) {
        setLocalAgeOverride(p.overriddenAgeStage);
      } else {
        setLocalAgeOverride("");
      }
    } else {
      setLocalAgeOverride("");
    }
  }, [currentProfileName]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const profileName = e.target.value;
    setCurrentProfile(profileName);
    if (profileName) {
      navigate('/subjects');
    } else {
      navigate('/');
    }
  };

  const handleOverrideChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const overrideVal = e.target.value;
    setLocalAgeOverride(overrideVal);
    if (!currentProfileName) return;

    // Update in store
    setOverride({ profileName: currentProfileName, overriddenAgeStage: overrideVal });

    // Update profiles in localStorage
    const updated = loadProfiles();
    const idx = updated.findIndex(p => p.name === currentProfileName);
    if (idx > -1) {
      updated[idx].overriddenAgeStage = overrideVal;
      saveProfiles(updated);
      setProfiles(updated);
    }
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem' }}>
      <div>
        <h2 style={{ margin: 0 }}>EduStages</h2>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {localProfiles.length > 0 && (
          <select value={currentProfileName} onChange={handleProfileChange}>
            <option value="">Select Profile</option>
            {localProfiles.map((pf) => (
              <option key={pf.name} value={pf.name}>{pf.name}</option>
            ))}
          </select>
        )}
        {currentProfileName && (
          <select value={localAgeOverride} onChange={handleOverrideChange}>
            <option value="">No Override</option>
            <option value={Stages.NOVICE.id}>{Stages.NOVICE.title}</option>
            <option value={Stages.BEGINNER.id}>{Stages.BEGINNER.title}</option>
            <option value={Stages.INTERMEDIATE.id}>{Stages.INTERMEDIATE.title}</option>
            <option value={Stages.COMPETENT.id}>{Stages.COMPETENT.title}</option>
            <option value={Stages.EXPERT.id}>{Stages.EXPERT.title}</option>
          </select>
        )}
      </div>
    </header>
  );
};

export default Header;

