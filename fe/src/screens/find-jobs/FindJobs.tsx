import { SearchBar } from '@/components';
import { dropdownData } from '@/data';
import { Divider } from '@mantine/core';

import { Jobs } from './components';

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-poppins">
      <SearchBar data={dropdownData} />
      <Divider mr="md" size="xs" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
