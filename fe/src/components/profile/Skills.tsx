import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeProfile } from '@/store';
import { showNotification } from '@/utils';
import { ActionIcon, TagsInput } from '@mantine/core';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';

const Skills = () => {
  const [edit, setEdit] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setSkills(profile.skills);
    } else setEdit(false);
  };

  const handleSave = () => {
    setEdit(false);
    let updatedProfile = { ...profile, skills };
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', 'Skills updated successfully!');
  };

  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Skills
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
        <TagsInput
          value={skills}
          onChange={setSkills}
          placeholder="Add Skills"
          splitChars={[',', ' ', '|']}
        />
      ) : (
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="bg-bright-sun-300 bg-opacity-15 text-sm font-medium rounded-3xl text-mine-shaft-950 px-3 py-1">
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
