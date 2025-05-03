import React from 'react';

import { Divider, Text } from '@mantine/core';
import { IconBookmark, IconClockHour3 } from '@tabler/icons-react';

const JobsCard = (props: any) => {
  const {
    jobTitle,
    company,
    applicants,
    experience,
    jobType,
    location,
    package: jobPackage,
    postedDaysAgo,
    description,
  } = props;

  return (
    <div className="bg-mine-shaft-900 p-4 w-[22rem] flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/icons/${company}.png`} alt={company} />
          </div>
          <div>
            <div className="font-semibold">{jobTitle}</div>
            <div className="text-sm text-mine-shaft-300">
              {company} {applicants} &#x2022; Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>{experience}</div>
        <div>{jobType}</div>
        <div>{location}</div>
      </div>
      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {description}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">&#8377; {jobPackage}</div>
        <div className="flex gap-1 text-mine-shaft-400 items-center text-xs">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
