import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@mantine/carousel/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';
import { Footer, Header } from './components';
import { FindJobs, FindTalents, Home, JobHistory, PostJob, PostedJobs } from './screens';

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
  });
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/find-talents" element={<FindTalents />} />
          <Route path="/job-history" element={<JobHistory />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/posted-jobs" element={<PostedJobs />} />
          <Route path="*" element={<></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
