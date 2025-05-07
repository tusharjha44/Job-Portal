import React from 'react';

import { Avatar, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 leading-tight">
          Find your <span>dream job </span>with us
        </div>
        <div className="text-mine-shaft-200 text-lg">
          Good life begins with a good company. Start explore thousands of job in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg py-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />
          <div className="flex items-center justify-center bg-bright-sun-400 rounded-lg h-full w-20 text-mine-shaft-100 p-2 cursor-pointer hover:bg-bright-sun-500">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-center items-center">
        <div className="w-[30rem] relative">
          <img src="/boy.png" alt="landing page" />
          <div className="absolute -right-10 top-[50%] w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center text-mine-shaft-100 mb-1 text-sm">10k+ got jobs</div>
            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute -left-5 top-[30%] w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex gap-3 flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="/google.png" alt="google" />
              </div>
              <div className="text-mine-shaft-100 text-sm">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div className="flex items-center text-mine-shaft-200 text-xs justify-around">
              <span>1 day ago</span>
              <span>120 applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
