import React from 'react';

import { work } from '@/data';
import { Avatar } from '@mantine/core';

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-center font-semibold text-mine-shaft-100 text-4xl [&>span]:text-bright-sun-400 mb-3">
        How It <span>Works</span>
      </div>
      <div className="text-mine-shaft-300 text-lg w-1/2 mx-auto mb-10 text-center">
        Effortlessly navigate through the process adn land your dream job.
      </div>
      <div className="flex px-16 justify-between items-center">
        <div className="relative">
          <img className="w-[30rem]" src="./girl.png" alt="girl" />
          <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
            <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me" />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2.5 bg-bright-sun-400 rounded-full">
                <img className="w-12 h-12" src={`/working/${item.image}`} alt={item.name} />
              </div>
              <div>
                <div className="text-mine-shaft-200 font-semibold text-xl">{item.name}</div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
