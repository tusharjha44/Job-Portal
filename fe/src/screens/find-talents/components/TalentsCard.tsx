import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react';

const TalentsCard = (props: any) => {
  const { name, role, company, topSkills, about, expectedCtc, location, image, posted, invited } =
    props;
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-mine-shaft-900 p-4 w-[28rem] flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size="lg" src={`/${image}.png`} alt={company} />
          </div>
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-mine-shaft-300">
              {role} &bull; {company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {topSkills.map((skill: string, index: number) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
      <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
        {about}
      </Text>
      <Divider size="xs" color="mineShaft.7" />
      {invited ? (
        <div className="flex gap-1 text-sm items-center text-mine-shaft-200">
          <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">&#8377; {expectedCtc}</div>
          <div className="flex gap-1 text-mine-shaft-400 items-center text-xs">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mineShaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {invited ? (
          <>
            <div>
              <Button color="brightSun.4" variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button color="brightSun.4" variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        ) : (
          <>
            <Link to="/talent-profile">
              <Button color="brightSun.4" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {posted ? (
                <Button
                  color="brightSun.4"
                  variant="light"
                  fullWidth
                  onClick={open}
                  rightSection={<IconCalendarMonth className="h-5 w-5" />}>
                  Schedule
                </Button>
              ) : (
                <Button color="brightSun.4" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
      </div>
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-5">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
            minDate={new Date()}
          />
          <TimeInput
            label="Time"
            ref={timeInputRef}
            onClick={() => timeInputRef.current?.showPicker()}
          />
          <Button color="brightSun.4" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentsCard;
