import React from 'react';

import { jobList } from '@/data';
import { Tabs } from '@mantine/core';

import { JobHistoryCard } from './components';

const JobHistory = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <div className="my-5">
        <div className="text-2xl font-semibold mb-5">Job History</div>
        <div>
          <Tabs variant="outline" radius="lg" defaultValue="applied">
            <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab value="applied">Applied</Tabs.Tab>
              <Tabs.Tab value="saved">Saved</Tabs.Tab>
              <Tabs.Tab value="offered">Offered</Tabs.Tab>
              <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="applied">
              <div className="mt-10 flex flex-wrap gap-5 justify-around">
                {jobList.map((item, index) => (
                  <JobHistoryCard key={index} {...item} applied />
                ))}
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="saved">
              <div className="mt-10 flex flex-wrap gap-5 justify-around">
                {jobList.map((item, index) => (
                  <JobHistoryCard key={index} {...item} saved />
                ))}
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="offered">
              <div className="mt-10 flex flex-wrap gap-5 justify-around">
                {jobList.map((item, index) => (
                  <JobHistoryCard key={index} {...item} offered />
                ))}
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="interviewing">
              <div className="mt-10 flex flex-wrap gap-5 justify-around">
                {jobList.map((item, index) => (
                  <JobHistoryCard key={index} {...item} interviewing />
                ))}
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
