import React from 'react';

import { Divider } from '@mantine/core';

import { SearchBar } from './components';
import Jobs from './components/Jobs';

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-poppins">
      <Divider mr="md" size="xs" />
      <SearchBar />
      <Divider mr="md" size="xs" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
