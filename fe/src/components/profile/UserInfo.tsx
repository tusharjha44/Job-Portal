import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import profileFields from '@/data/Profile';
import { changeProfile } from '@/store';
import { showNotification } from '@/utils';
import { ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from '@tabler/icons-react';

import SelectInput from './SelectInput';

const UserInfo = () => {
  const select = profileFields;
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { jobTitle, company, location } = profile;

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
      });
    } else {
      setEdit(false);
      let updatedProfile = { ...profile, ...form.getValues() };
      dispatch(changeProfile(updatedProfile));
      showNotification('Success', 'Profile updated Successfully!!!');
    }
  };

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: jobTitle, company: company, location: location },
  });

  return (
    <div className="px-3 mt-20">
      <div className="text-3xl font-semibold flex justify-between">
        {user.name}
        <ActionIcon size="lg" variant="subtle" color="brightSun.4" onClick={handleEdit}>
          {edit ? (
            <IconDeviceFloppy className="h-4/5 w-4/5" />
          ) : (
            <IconPencil className="h-4/5 w-4/5" />
          )}
        </ActionIcon>
      </div>
      {edit ? (
        <>
          <div className="flex gap-2 [&>*]:w-1/2">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <SelectInput form={form} name="location" {...select[2]} />
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase className="h-5 w-5" stroke={1.5} />
            {jobTitle} &bull; {company}
          </div>
          <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
