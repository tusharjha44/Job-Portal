import { Sort } from '@/components';
import { talents } from '@/data';

import TalentsCard from './TalentsCard';

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-between">
        {talents.map((item, index) => (
          <TalentsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
