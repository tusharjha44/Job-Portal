import React from 'react';

import { similar } from '@/data';
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const CompanyProfileCard = (props: any) => {
  const { name, employees } = props;
  return (
    <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-7" src={`/icons/${name}.png`} alt={`${name} logo`} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-mine-shaft-300">{employees} Employees</div>
        </div>
      </div>
      <ActionIcon color="brightSun.4" variant="subtle">
        <IconExternalLink />
      </ActionIcon>
    </div>
  );
};

const SimilarCompanies = () => {
  return (
    <div className="w-1/4">
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5 flex-wrap">
        {similar.map((company, index) => (
          <CompanyProfileCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;
