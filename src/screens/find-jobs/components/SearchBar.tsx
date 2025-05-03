import React, { useState } from 'react';

import { MultiSelectInput } from '@/components';
import { dropdownData } from '@/data';
import { Divider, RangeSlider } from '@mantine/core';

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
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
