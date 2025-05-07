import React from 'react';
import { useLocation } from 'react-router-dom';

import { footerLinks } from '@/data';
import { Divider } from '@mantine/core';
import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/signup' || location.pathname === '/login') {
    return null;
  }

  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-poppins">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-bright-sun-400">
          <IconAnchor stroke={2.5} className="h-6 w-6" />
          <div className="text-xl font-semibold">JobHook</div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          Job portal with user profiles, skill updates, certifications, work experience and admin
          job postings.
        </div>
        <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer">
          <div className="hover:bg-mine-shaft-800">
            <IconBrandFacebook />
          </div>
          <div className="hover:bg-mine-shaft-800">
            <IconBrandInstagram />
          </div>
          <div className="hover:bg-mine-shaft-800">
            <IconBrandX />
          </div>
        </div>
      </div>
      {footerLinks.map((item, index) => (
        <div key={index}>
          <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
          {item.links.map((link, index) => (
            <div
              className="text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
              key={index}>
              {link}
            </div>
          ))}
        </div>
      ))}
      <Divider my="sm" />
    </div>
  );
};

export default Footer;
