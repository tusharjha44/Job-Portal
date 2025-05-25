import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import profileFields from '@/data/Profile';
import { changeProfile } from '@/store';
import { formatDate, showNotification } from '@/utils';
import { ActionIcon, Button, Checkbox, Textarea } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPencil, IconPlus, IconX } from '@tabler/icons-react';

import SelectInput from './SelectInput';

export const ExperienceInput = (props: any) => {
  const select = profileFields;
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: {
      company: '',
      title: '',
      location: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty('Title is required'),
      company: isNotEmpty('Company is required'),
      location: isNotEmpty('Location is required'),
      description: isNotEmpty('Description is required'),
    },
  });

  useEffect(() => {
    if (!props.add) {
      const isWorking = props.endDate === 'Present' || props.working;

      form.setValues({
        company: props.company,
        title: props.title,
        location: props.location,
        description: props.description,
        startDate: new Date(props.startDate),
        endDate: props.endDate === 'Present' ? new Date() : new Date(props.endDate),
        working: isWorking,
      });
    }
  }, []);

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;
    let experience = [...profile.experience];
    if (props.add) {
      experience.push(form.getValues());
      const newIndex = experience.length - 1;
      experience[newIndex].endDate = experience[newIndex]?.endDate.toISOString();
      experience[newIndex].startDate = experience[newIndex].startDate.toISOString();
    } else {
      experience[props.index] = form.getValues();
      experience[props.index].endDate = experience[props.index]?.endDate.toISOString();
      experience[props.index].startDate = experience[props.index].startDate.toISOString();
    }
    let updatedProfile = { ...profile, experience };
    props.setIsEditable(false);
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', `${props.add ? 'Added' : 'Updated'} Experience saved successfully`);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add ? 'Add' : 'Edit'} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput form={form} name="title" {...select[0]} />
        <SelectInput form={form} name="company" {...select[1]} />
      </div>
      <SelectInput form={form} name="location" {...select[2]} />
      <Textarea
        {...form.getInputProps('description')}
        placeholder="Enter Summary..."
        label="Summary"
        autosize
        minRows={3}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps('startDate')}
          label="Start Date"
          placeholder="Enter Start Date"
          maxDate={form.values.endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          {...form.getInputProps('endDate')}
          withAsterisk
          label="End Date"
          placeholder="Enter End Date"
          disabled={form.values.working}
          minDate={form.values.startDate || undefined}
        />
      </div>
      <Checkbox
        onChange={event => form.setFieldValue('working', event.currentTarget.checked)}
        checked={form.values.working}
        autoContrast
        label="Currently Working here"
      />
      <div className="flex gap-5">
        <Button onClick={handleSave} color="brightSun.4" variant="outline">
          Save
        </Button>
        <Button onClick={() => props.setIsEditable(false)} color="red.8" variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export const ExperienceCard = (props: any) => {
  const [isEditable, setIsEditable] = useState(false);
  const { company, title, location, startDate, endDate, description, edit } = props;
  if (isEditable) return <ExperienceInput {...props} setIsEditable={setIsEditable} />;

  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleDelete = () => {
    let exp = [...profile.experience];
    exp.splice(props.index, 1);
    let updatedProfile = { ...profile, experience: exp };
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', 'Experience deleted successfully');
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/icons/${company}.png`} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{title}</div>
            <div className="text-sm text-mine-shaft-300">
              {company} &bull; {location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {formatDate(startDate)} – {props.working ? 'Present' : formatDate(endDate)}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">{description}</div>
      {edit && (
        <div className="flex gap-5">
          <Button onClick={() => setIsEditable(true)} color="brightSun.4" variant="outline">
            Edit
          </Button>
          <Button color="red.8" variant="light" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const [edit, setEdit] = useState(false);
  const [addExp, setAddExp] = useState(false);
  const profile = useSelector((state: any) => state.profile);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
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
            color={edit ? 'red.8' : 'brightSun.4'}
            onClick={handleEdit}>
            {edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {profile.experience?.map((exp: any, index: number) => (
          <ExperienceCard key={index} index={index} {...exp} edit={edit} />
        ))}
        {addExp && <ExperienceInput add setIsEditable={setAddExp} />}
      </div>
    </div>
  );
};

export default Experience;
