import React from 'react';
import { useStoreState } from '../store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import SubjectList from '../pages/SubjectList';
import SubjectDetail from '../pages/SubjectDetail';

// This route setup might be simplified. The App might contain a <Header />, etc.
export function AppRouter() {
  const currentProfileName = useStoreState((state) => state.profile.currentProfileName);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {currentProfileName ? (
            <>
              <Route path="/subjects" element={<SubjectList />} />
              <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
          </Route>
        </Routes>
    </Router>
  );
}
