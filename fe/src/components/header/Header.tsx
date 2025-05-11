import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Button, Indicator } from '@mantine/core';
import { IconAnchor, IconBell, IconSettings } from '@tabler/icons-react';

import ProfileMenu from '../profile-menu/ProfileMenu';

import NavLinks from './NavLinks';

const Header = () => {
  const location = useLocation();
  const userData = useSelector((state: any) => state.user);

  if (location.pathname === '/signup' || location.pathname === '/login') {
    return null;
  }

  return (
    <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-6 bg-mine-shaft-950 font-poppins">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-8 w-8" />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <NavLinks />
      <div className="flex gap-5 items-center">
        {userData ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button color="brightSun.4">Login</Button>
          </Link>
        )}
        {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div> */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator offset={6} size={8} color="brightSun.4" processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
