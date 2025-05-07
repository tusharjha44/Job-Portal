import { Link } from 'react-router-dom';

import { Button, Divider, Text } from '@mantine/core';
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from '@tabler/icons-react';

const JobHistoryCard = (props: any) => {
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
    applied,
    saved,
    offered,
    interviewing,
  } = props;

  return (
    <Link
      to="/jobs"
      className="bg-mine-shaft-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/icons/${company}.png`} alt={company} />
          </div>
          <div>
            <div className="font-semibold">{jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {company} {applicants} &#x2022; Applicants
            </div>
          </div>
        </div>
        {saved ? (
          <IconBookmarkFilled className="text-bright-sun-400 cursor-pointer" />
        ) : (
          <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
        )}
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
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          {applied || interviewing ? 'Applied ' : offered ? 'Interviewed ' : 'Posted '}
          {postedDaysAgo} days ago
        </div>
      </div>
      {(offered || interviewing) && <Divider size="xs" color="mineShaft.7" />}
      {offered && (
        <div className="flex gap-2">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="brightSun.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}
      {interviewing && (
        <div className="flex gap-1 text-sm items-center text-mine-shaft-200">
          <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} />
          Sun, 27 August &bull;<span className="text-mine-shaft-400"> 10:00 AM</span>
        </div>
      )}
    </Link>
  );
};

export default JobHistoryCard;
