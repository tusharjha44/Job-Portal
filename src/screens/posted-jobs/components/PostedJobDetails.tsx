import React from 'react';

import { activeJobs, drafts } from '@/data';
import { Tabs } from '@mantine/core';

const PostedJobCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-l-bright-sun-400">
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
      <div className="text-xs text-mine-shaft-300">{props.posted}</div>
    </div>
  );
};

const PostedJobDetails = () => {
  return (
    <div className="mt-5 w-1/6">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <Tabs autoContrast variant="pills" defaultValue="active">
        <Tabs.List className="[&>button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
          <Tabs.Tab value="active">Active [4]</Tabs.Tab>
          <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active">
          <div className="flex flex-col gap-5 mt-5">
            {activeJobs.map((item, index) => (
              <PostedJobCard key={index} {...item} />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="draft">
          <div className="flex flex-col gap-5 mt-5">
            {drafts.map((item, index) => (
              <PostedJobCard key={index} {...item} />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default PostedJobDetails;
