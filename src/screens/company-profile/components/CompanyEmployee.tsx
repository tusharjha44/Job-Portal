import React from 'react';

import { talents } from '@/data';
import { TalentsCard } from '@/screens/find-talents/components';

const CompanyEmployee = (props: any) => {
  const { posted, invited } = props;

  return (
    <div className={`mt-10 flex flex-wrap gap-10 ${posted || invited ? 'justify-around' : ''} `}>
      {talents.map(
        (item, index) =>
          index < 6 && <TalentsCard key={index} {...item} posted={posted} invited={invited} />,
      )}
    </div>
  );
};

export default CompanyEmployee;
