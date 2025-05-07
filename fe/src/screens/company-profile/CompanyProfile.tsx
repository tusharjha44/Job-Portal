import { useNavigate } from 'react-router-dom';

import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import { CompanyDetails, SimilarCompanies } from './components';

const CompanyProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <Button
        my="md"
        onClick={() => navigate(-1)}
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
        color="brightSun.4">
        Back
      </Button>
      <div className="flex gap-5">
        <CompanyDetails />
        <SimilarCompanies />
      </div>
    </div>
  );
};

export default CompanyProfile;
