import { jobList } from '@/data';
import { JobsCard } from '@/screens/find-jobs/components';

const CompanyJobs = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-3">
      {jobList.map((item, index) => (
        <JobsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CompanyJobs;
