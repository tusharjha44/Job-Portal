import { Avatar, Divider, Tabs } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import AboutCompany from './AboutCompany';
import CompanyJobs from './CompanyJobs';
import CompanyEmployee from './CompanyEmployee';

const CompanyDetails = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img src="/profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="/icons/Google.png"
          alt="avatar"
          className="w-36 h-36 rounded-3xl bg-mine-shaft-950 -bottom-1/4 p-2 absolute left-5 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutCompany />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="employees">
            <CompanyEmployee />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDetails;
