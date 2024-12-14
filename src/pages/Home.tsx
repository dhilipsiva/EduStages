// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from '../store';
import { loadProfiles, saveProfiles } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const profiles = useStoreState((state) => state.profile.profiles);
  const setProfiles = useStoreActions((actions) => actions.profile.setProfiles);
  const setCurrentProfile = useStoreActions((actions) => actions.profile.setCurrentProfile);

  const [name, setName] = useState('');
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState<number | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const saved = loadProfiles();
    if (saved.length > 0) {
      setProfiles(saved);
    }
  }, [setProfiles]);

  const handleCreateProfile = () => {
    if (!name || !year) {
      alert("Please enter a valid name and year.");
      return;
    }

    if (profiles.find(p => p.name === name)) {
      alert("A profile with this name already exists!");
      return;
    }

    const newProfile = { name, monthOfBirth: month, yearOfBirth: year };
    const updated = [...profiles, newProfile];
    saveProfiles(updated);
    setProfiles(updated);
    setCurrentProfile(name);
    navigate('/subjects');
  };

  const handleSelectProfile = (profileName: string) => {
    if (!profileName) return;
    setCurrentProfile(profileName);
    navigate('/subjects');
  };

  return (
    <div>
      <h1>EduStages</h1>
      {profiles.length === 0 ? (
        <div>
          <h2>No Profiles Found</h2>
          <p>Create a new profile to begin:</p>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              style={{ marginBottom: '0.5rem' }}
            />
            <label style={{ marginBottom: '0.5rem' }}>
              Month of Birth:
              <select value={month} onChange={e => setMonth(Number(e.target.value))}>
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
            </label>
            <input 
              type="number" 
              placeholder="Year of Birth (e.g. 2010)" 
              value={year || ''} 
              onChange={e => setYear(e.target.value ? Number(e.target.value) : undefined)} 
              style={{ marginBottom: '0.5rem' }}
            />
            <button onClick={handleCreateProfile}>Create Profile</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Select a Profile</h2>
          <select onChange={e => handleSelectProfile(e.target.value)}>
            <option value="">Select</option>
            {profiles.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
          <hr />
          <h3>Create Another Profile</h3>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              style={{ marginBottom: '0.5rem' }}
            />
            <label style={{ marginBottom: '0.5rem' }}>
              Month of Birth:
              <select value={month} onChange={e => setMonth(Number(e.target.value))}>
                <option value={0}>January</option>
                <option value={1}>February</option>
                <option value={2}>March</option>
                <option value={3}>April</option>
                <option value={4}>May</option>
                <option value={5}>June</option>
                <option value={6}>July</option>
                <option value={7}>August</option>
                <option value={8}>September</option>
                <option value={9}>October</option>
                <option value={10}>November</option>
                <option value={11}>December</option>
              </select>
            </label>
            <input 
              type="number" 
              placeholder="Year of Birth (e.g. 2010)" 
              value={year || ''} 
              onChange={e => setYear(e.target.value ? Number(e.target.value) : undefined)} 
              style={{ marginBottom: '0.5rem' }}
            />
            <button onClick={handleCreateProfile}>Create Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
