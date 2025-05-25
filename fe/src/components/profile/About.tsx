import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeProfile } from '@/store';
import { showNotification } from '@/utils';
import { ActionIcon, Textarea } from '@mantine/core';
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react';

const About = () => {
  const [edit, setEdit] = useState(false);
  const [about, setAbout] = useState('');
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    } else setEdit(false);
  };

  const handleSave = () => {
    setEdit(false);
    let updatedProfile = { ...profile, about };
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', 'About updated successfully!');
  };

  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        About
        <div>
          {edit && (
            <ActionIcon size="lg" variant="subtle" color="green.8" onClick={handleSave}>
              <IconCheck className="h-4/5 w-4/5" />
            </ActionIcon>
          )}
          <ActionIcon
            size="lg"
            variant="subtle"
            color={edit ? 'red.8' : 'brightSun.4'}
            onClick={handleEdit}>
            {edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
        <Textarea
          value={about}
          onChange={event => setAbout(event.currentTarget.value)}
          placeholder="Enter about yourself..."
          autosize
          minRows={3}
        />
      ) : (
        <div className="text-mine-shaft-300 text-justify text-sm">{profile?.about}</div>
      )}
    </div>
  );
};

export default About;
