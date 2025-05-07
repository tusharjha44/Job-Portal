import React, { useState } from 'react';

import profileFields from '@/data/Profile';
import { Button, Checkbox, Textarea } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

import SelectInput from './SelectInput';

const ExperienceInput = (props: any) => {
  const select = profileFields;
  const [desc, setDesc] = useState(props.description);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add ? 'Add' : 'Edit'} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        value={desc}
        placeholder="Enter Summary..."
        label="Summary"
        autosize
        minRows={3}
        onChange={event => setDesc(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          withAsterisk
          label="End Date"
          placeholder="Enter End Date"
          value={endDate}
          disabled={checked}
          onChange={setEndDate}
          minDate={startDate || undefined}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={event => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Currently Working here"
      />
      <div className="flex gap-5">
        <Button onClick={() => props.setIsEditable(false)} color="brightSun.4" variant="outline">
          Save
        </Button>
        <Button onClick={() => props.setIsEditable(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExperienceInput;
