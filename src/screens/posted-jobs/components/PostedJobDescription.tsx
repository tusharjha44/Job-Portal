import { CompanyEmployee } from '@/screens/company-profile/components';
import { Jobs } from '@/screens/find-jobs/components';
import { JobDescription } from '@/screens/job-details/components';
import { Badge, Tabs } from '@mantine/core';

const PostedJobDescription = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{' '}
        <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300 mb-5">New York, United States</div>
      <Tabs variant="outline" radius="lg" defaultValue="overview">
        <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
          <Tabs.Tab value="invited">Invited</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" className="[&>div]:w-full">
          <JobDescription isEditable />
        </Tabs.Panel>
        <Tabs.Panel value="applicants">
          <CompanyEmployee posted />
        </Tabs.Panel>
        <Tabs.Panel value="invited">
          {' '}
          <CompanyEmployee invited />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default PostedJobDescription;
