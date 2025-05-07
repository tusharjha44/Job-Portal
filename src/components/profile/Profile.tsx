import { useState } from 'react';

import { fields, profile } from '@/data';
import profileFields from '@/data/Profile';
import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core';
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';

import CertificateInput from './CertificateInput';
import ExperienceInput from './ExperienceInput';
import SelectInput from './SelectInput';

const ExperienceCard = (props: any) => {
  const [isEditable, setIsEditable] = useState(false);
  const { company, title, location, startDate, endDate, description, edit } = props;
  if (isEditable)
    return <ExperienceInput description={description} setIsEditable={setIsEditable} />;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={'/icons/Google.png'} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{title}</div>
            <div className="text-sm text-mine-shaft-300">
              {company} &bull; {location}
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300">
        {startDate} – {endDate}
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">{description}</div>
      {edit && (
        <div className="flex gap-5">
          <Button onClick={() => setIsEditable(true)} color="brightSun.4" variant="outline">
            Edit
          </Button>
          <Button color="red.8" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

const CertificationsCard = (props: any) => {
  const { name, issuer, issueDate, certificateId, edit } = props;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img className="h-7" src={`/icons/${issuer}.png`} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-mine-shaft-300">{issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">Issued {issueDate}</div>
          <div className="text-sm text-mine-shaft-300">ID: {certificateId}</div>
        </div>
        {edit && (
          <ActionIcon color="red.8" variant="subtle">
            <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  const {
    name,
    role,
    company,
    location,
    about: profileAbout,
    skills,
    certifications,
    experience,
  } = profile;
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(profileAbout);
  const [skillsList, setSkillsList] = useState(skills);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);

  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const select = profileFields;

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
        <div className="px-3 mt-20">
          <div className="text-3xl font-semibold flex justify-between">
            {name}
            <ActionIcon
              size="lg"
              variant="subtle"
              color="brightSun.4"
              onClick={() => handleEdit(0)}>
              {edit[0] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[0] ? (
            <>
              <div className="flex gap-2 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
              </div>
              <SelectInput {...select[2]} />
            </>
          ) : (
            <>
              <div className="text-xl flex gap-1 items-center">
                <IconBriefcase className="h-5 w-5" stroke={1.5} />
                {role} &bull; {company}
              </div>
              <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
              </div>
            </>
          )}
        </div>

        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            About
            <ActionIcon
              size="lg"
              variant="subtle"
              color="brightSun.4"
              onClick={() => handleEdit(1)}>
              {edit[1] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[1] ? (
            <Textarea
              value={about}
              onChange={event => setAbout(event.currentTarget.value)}
              placeholder="Enter about yourself..."
              autosize
              minRows={3}
            />
          ) : (
            <div className="text-mine-shaft-300 text-justify text-sm">{about}</div>
          )}
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 flex justify-between">
            Skills
            <ActionIcon
              size="lg"
              variant="subtle"
              color="brightSun.4"
              onClick={() => handleEdit(2)}>
              {edit[2] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
          {edit[2] ? (
            <TagsInput
              value={skillsList}
              onChange={setSkillsList}
              placeholder="Add Skills"
              splitChars={[',', ' ', '|']}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="bg-bright-sun-300 bg-opacity-15 text-sm font-medium rounded-3xl text-mine-shaft-950 px-3 py-1">
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Experience
            <div className="flex gap-2">
              <ActionIcon
                size="lg"
                variant="subtle"
                color="brightSun.4"
                onClick={() => setAddExp(true)}>
                <IconPlus className="h-4/5 w-4/5" />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="subtle"
                color="brightSun.4"
                onClick={() => handleEdit(3)}>
                {edit[3] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {experience.map((exp: any, index: number) => (
              <ExperienceCard key={index} {...exp} edit={edit[3]} />
            ))}
            {addExp && <ExperienceInput add setIsEditable={setAddExp} />}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 flex justify-between">
            Certifications
            <div className="flex gap-2">
              <ActionIcon
                size="lg"
                variant="subtle"
                color="brightSun.4"
                onClick={() => setAddCerti(true)}>
                <IconPlus className="h-4/5 w-4/5" />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="subtle"
                color="brightSun.4"
                onClick={() => handleEdit(4)}>
                {edit[4] ? (
                  <IconDeviceFloppy className="h-4/5 w-4/5" />
                ) : (
                  <IconPencil className="h-4/5 w-4/5" />
                )}
              </ActionIcon>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {certifications.map((certificate: any, index: number) => (
              <CertificationsCard key={index} {...certificate} edit={edit[4]} />
            ))}
            {addCerti && <CertificateInput setIsEditable={setAddCerti} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
