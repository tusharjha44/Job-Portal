import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginSignupForm, Profile } from './components';
import {
  ApplyJob,
  CompanyProfile,
  FindJobs,
  FindTalents,
  Home,
  JobDetails,
  JobHistory,
  PostJob,
  PostedJobs,
  TalentProfile,
} from './screens';

const AppRoutes = () => {
  const userData = useSelector((state: any) => state.user);

  const isLoggedIn = !!userData;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-jobs" element={<FindJobs />} />
      <Route path="/find-talents" element={<FindTalents />} />
      <Route path="/job-history" element={<JobHistory />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/posted-jobs" element={<PostedJobs />} />
      <Route path="/apply-job" element={<ApplyJob />} />
      <Route path="/company" element={<CompanyProfile />} />
      <Route path="/jobs" element={<JobDetails />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" replace /> : <LoginSignupForm />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/" replace /> : <LoginSignupForm />}
      />
      <Route path="/talent-profile" element={<TalentProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<></>} />
    </Routes>
  );
};

export default AppRoutes;
