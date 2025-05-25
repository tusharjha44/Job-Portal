import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fields } from '@/data';
import { changeProfile } from '@/store';
import { formatDate, showNotification } from '@/utils';
import { ActionIcon, Button, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPencil, IconPlus, IconTrash, IconX } from '@tabler/icons-react';

import SelectInput from './SelectInput';

const CertificateInput = (props: any) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      issuer: '',
      issueDate: new Date(),
      certificateId: '',
    },
    validate: {
      name: isNotEmpty('Title is required'),
      issuer: isNotEmpty('Issuer is required'),
      issueDate: isNotEmpty('Issue Date is required'),
      certificateId: isNotEmpty('Certificate ID is required'),
    },
  });

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;
    let certifications = [...profile.certifications];
    certifications.push(form.getValues());
    certifications[certifications.length - 1].issueDate =
      certifications[certifications.length - 1].issueDate.toISOString();
    let updatedProfile = { ...profile, certifications };
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', 'Certificate added successfully');
    props.setIsEditable(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          {...form.getInputProps('name')}
          label="Title"
          withAsterisk
          placeholder="Enter title"
        />
        <SelectInput form={form} name="issuer" {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps('issueDate')}
          label="Issue Date"
          placeholder="Enter Issue Date"
          maxDate={new Date()}
          withAsterisk
        />
        <TextInput
          {...form.getInputProps('certificateId')}
          label="Certificate ID"
          withAsterisk
          placeholder="Enter Certificate ID"
        />
      </div>
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

const CertificationsCard = (props: any) => {
  const { name, issuer, issueDate, certificateId, edit } = props;

  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleDelete = () => {
    let certificate = [...profile.certifications];
    certificate.splice(props.index, 1);
    let updatedProfile = { ...profile, certifications: certificate };
    dispatch(changeProfile(updatedProfile));
    showNotification('Success', 'Certificate deleted successfully');
  };

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
          <div className="text-sm text-mine-shaft-300">Issued {formatDate(issueDate)}</div>
          <div className="text-sm text-mine-shaft-300">ID: {certificateId}</div>
        </div>
        {edit && (
          <ActionIcon color="red.8" variant="subtle">
            <IconTrash onClick={handleDelete} className="h-4/5 w-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};

const Certificate = () => {
  const [addCerti, setAddCerti] = useState(false);
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
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
            color={edit ? 'red.8' : 'brightSun.4'}
            onClick={handleEdit}>
            {edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {profile?.certifications?.map((certificate: any, index: number) => (
          <CertificationsCard key={index} index={index} {...certificate} edit={edit} />
        ))}
        {addCerti && <CertificateInput setIsEditable={setAddCerti} />}
      </div>
    </div>
  );
};

export default Certificate;
