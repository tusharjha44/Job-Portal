import React from 'react';

import { jobList } from '@/data';
import JobsCard from '@/screens/find-jobs/components/JobsCard';

const RecommendedJobs = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5 flex-wrap justify-between">
        {jobList.map((job, index) => index < 6 && <JobsCard key={index} {...job} />)}
      </div>
    </div>
  );
};

export default RecommendedJobs;
