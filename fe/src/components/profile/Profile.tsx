import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfile } from '@/services';
import { setProfile } from '@/store';
import { Divider } from '@mantine/core';

import About from './About';
import Certificate from './Certificate';
import Experience from './Experience';
import Skills from './Skills';
import UserInfo from './UserInfo';

const Profile = () => {
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile(user.id);
        dispatch(setProfile(response));
      } catch (err: any) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <div className="w-[80%] mx-auto">
        <div className="relative">
          <img src="/profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
          <img
            src="/avatar.png"
            alt="avatar"
            className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          />
        </div>
        <UserInfo />
        <Divider mx="xs" my="xl" />
        <About />
        <Divider mx="xs" my="xl" />
        <Skills />
        <Divider mx="xs" my="xl" />
        <Experience />
        <Divider mx="xs" my="xl" />
        <Certificate />
      </div>
    </div>
  );
};

export default Profile;
