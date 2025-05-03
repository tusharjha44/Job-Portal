import React from 'react';

import { testimonials } from '@/data';
import { Avatar, Rating } from '@mantine/core';

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-center font-semibold text-mine-shaft-100 text-4xl [&>span]:text-bright-sun-400 mb-3">
        What <span>User</span> says about us?
      </div>
      <div className="flex justify-evenly">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10">
            <div className="flex gap-2 items-center">
              <Avatar src="avatar.png" className="!h-14 !w-14" alt="It's me" />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">{item.name}</div>
                <Rating value={item.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-sx text-mine-shaft-300">a{item.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
