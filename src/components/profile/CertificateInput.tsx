import { useState } from 'react';

import { fields } from '@/data';
import { Button, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

import SelectInput from './SelectInput';

const CertificateInput = (props: any) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter title" />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Enter Start Date"
          value={issueDate}
          onChange={setIssueDate}
          maxDate={new Date()}
          withAsterisk
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter Certificate ID" />
      </div>
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

export default CertificateInput;
