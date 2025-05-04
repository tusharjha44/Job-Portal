import { SearchBar } from '@/components';
import { searchFields } from '@/data';
import { Divider } from '@mantine/core';

import { Talents } from './components';

const FindTalents = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins">
      <SearchBar data={searchFields} showTalent className="items-center !text-mine-shaft-100" />
      <Divider mr="md" size="xs" />
      <Talents />
    </div>
  );
};

export default FindTalents;
