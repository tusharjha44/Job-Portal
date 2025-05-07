import { Link } from 'react-router-dom';

import { profile } from '@/data';
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import { Profile, RecommendedTalents } from './components';

const TalentProfile = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <Link className="my-4 inline-block" to="/find-talents">
        <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-around">
        <Profile {...profile} />
        <RecommendedTalents />
      </div>
    </div>
  );
};

export default TalentProfile;
