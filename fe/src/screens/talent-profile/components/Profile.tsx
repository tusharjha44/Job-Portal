import { Button, Divider } from '@mantine/core';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';

const ExperienceCard = (props: any) => {
  const { company, title, location, startDate, endDate, description } = props;
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
    </div>
  );
};

const CertificationsCard = (props: any) => {
  const { name, issuer, issueDate, certificateId } = props;
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
      <div className="flex flex-col items-end">
        <div className="text-sm text-mine-shaft-300">{issueDate}</div>
        <div className="text-sm text-mine-shaft-300">ID: {certificateId}</div>
      </div>
    </div>
  );
};

const Profile = (props: any) => {
  const { name, role, company, location, about, skills, certifications, experience } = props;

  return (
    <div className="w-2/3">
      <div className="relative">
        <img src="/profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {name}
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {role} &bull; {company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-mine-shaft-300 text-justify text-sm">{about}</div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: string, index: number) => (
            <div
              key={index}
              className="bg-bright-sun-300 bg-opacity-15 text-sm font-medium rounded-3xl text-mine-shaft-950 px-3 py-1">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {experience.map((exp: any, index: number) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {certifications.map((certificate: any, index: number) => (
            <CertificationsCard key={index} {...certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
