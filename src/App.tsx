import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@mantine/carousel/styles.css';
import { Divider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/tiptap/styles.css';

import './App.css';
import { Footer, Header, LoginSignupForm } from './components';
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

function App() {
  const theme = createTheme({
    colors: {
      mineShaft: [
        '#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d',
      ],
      brightSun: [
        '#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b75006',
        '#943c0c',
        '#7a330d',
        '#461902',
      ],
    },
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'brightSun',
    primaryShade: 4,
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider mr="md" size="xs" />
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
            <Route path="/login" element={<LoginSignupForm />} />
            <Route path="/signup" element={<LoginSignupForm />} />
            <Route path="/talent-profile" element={<TalentProfile />} />
            <Route path="*" element={<></>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
