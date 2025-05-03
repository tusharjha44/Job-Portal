import Marquee from 'react-fast-marquee';

import { companies } from '@/data';

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-center font-semibold text-mine-shaft-100 text-4xl [&>span]:text-bright-sun-400 mb-10">
        Trusted by <span>1000+</span> companies
      </div>
      <Marquee pauseOnHover>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-9 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
            <img className="h-14" src={`companies/${company}.png`} alt={company} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
