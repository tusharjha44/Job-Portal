import React from 'react';

import { Sort } from '@/components';
import { jobList } from '@/data';

import JobsCard from './JobsCard';

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5">
        {jobList.map((item, index) => (
          <JobsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
