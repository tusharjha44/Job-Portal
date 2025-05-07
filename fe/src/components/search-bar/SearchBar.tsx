import React, { useState } from 'react';

import { MultiSelectInput } from '@/components';
import { dropdownData } from '@/data';
import { Divider, Input, RangeSlider } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';

interface ISearchBarProps {
  data: any[];
  showTalent?: boolean;
  className?: string;
}

const SearchBar = (props: ISearchBarProps) => {
  const { data, showTalent = false, className = '' } = props;
  const [value, setValue] = useState<[number, number]>([20, 80]);

  return (
    <div className={`flex px-5 py-8 ${className}`}>
      {showTalent && (
        <div className="flex items-center">
          <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
            <IconUserCircle size={20} />
          </div>
          <Input
            className="[&_input]:!placeholder-mine-shaft-300"
            variant="unstyled"
            placeholder="Talent Name"
          />
        </div>
      )}
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <MultiSelectInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }}
          size="xs"
          color="brightSun.4"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;
