import { talents } from '@/data';
import { TalentsCard } from '@/screens/find-talents/components';

const RecommendedTalents = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talents</div>
      <div className="flex flex-col gap-5 flex-wrap justify-between">
        {talents.map((talent, index) => index < 4 && <TalentsCard key={index} {...talent} />)}
      </div>
    </div>
  );
};

export default RecommendedTalents;
