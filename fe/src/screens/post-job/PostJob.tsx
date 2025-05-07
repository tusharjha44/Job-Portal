import React from 'react';

import { RichTextEditor } from '@/components';
import { fields } from '@/data';
import { Button, TagsInput } from '@mantine/core';

import { SelectInput } from './components';

const PostJob = () => {
  const select = fields;
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">Post a Job</div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[2]} />
            <SelectInput {...select[3]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[4]} />
            <SelectInput {...select[5]} />
          </div>
          <TagsInput
            withAsterisk
            label="Skills"
            placeholder="Enter Skills"
            splitChars={[',', ' ', '|']}
            acceptValueOnBlur
            clearable
          />
          <div className="[&_button[data-active='true']]::!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
            <div className="font-medium text-sm">Job Description</div>
            <RichTextEditor />
          </div>
          <div className="flex gap-4">
            <Button color="brightSun.4" variant="light">
              Publish Job
            </Button>
            <Button color="brightSun.4" variant="outline">
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
