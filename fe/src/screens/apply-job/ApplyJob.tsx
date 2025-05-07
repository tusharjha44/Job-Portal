import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  TextInput,
  Textarea,
  rem,
} from '@mantine/core';
import { IconArrowLeft, IconCheck, IconPaperclip } from '@tabler/icons-react';

const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [timeoutInterval, setTimeoutInterval] = useState(5);
  const navigate = useNavigate();

  const togglePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      x--;
      setTimeoutInterval(x);
      if (x === 0) {
        navigate('/find-jobs');
      }
    }, 1000);
  };

  return (
    <>
      <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Link className="my-5 inline-block" to="/jobs">
          <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">
            Back
          </Button>
        </Link>
        <div className="w-2/3 mx-auto">
          <LoadingOverlay
            className="!fixed"
            visible={submit}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'brightSun.4', type: 'bars' }}
          />
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="p-3 bg-mine-shaft-800 rounded-xl">
                <img className="h-14" src={'/icons/Google.png'} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-2xl">Software Engineer III</div>
                <div className="text-lg text-mine-shaft-300">
                  Google &bull; 3 days ago &bull; 48 Applicants
                </div>
              </div>
            </div>
          </div>
          <Divider my="xl" />
          <div className="text-xl font-semibold mb-5">Submit Your Application</div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
              <TextInput
                readOnly={preview}
                className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                variant={preview ? 'unstyled' : 'default'}
                label="Full Name"
                placeholder="Enter Name"
                withAsterisk
              />
              <TextInput
                readOnly={preview}
                className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                variant={preview ? 'unstyled' : 'default'}
                label="Email"
                placeholder="Enter email"
                withAsterisk
              />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
              <NumberInput
                readOnly={preview}
                className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                variant={preview ? 'unstyled' : 'default'}
                label="Phone Number"
                placeholder="Enter phone number"
                withAsterisk
                hideControls
                min={0}
                max={9999999999}
                clampBehavior="strict"
              />
              <TextInput
                readOnly={preview}
                className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
                variant={preview ? 'unstyled' : 'default'}
                label="Personal Website"
                placeholder="Enter url"
                withAsterisk
              />
            </div>
            <FileInput
              readOnly={preview}
              className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
              variant={preview ? 'unstyled' : 'default'}
              leftSection={<IconPaperclip stroke={1.5} />}
              leftSectionPointerEvents="none"
              label="Attach your CV"
              withAsterisk
              placeholder="Your CV"
            />
            <Textarea
              readOnly={preview}
              className={preview ? 'text-mine-shaft-300 font-semibold' : ''}
              variant={preview ? 'unstyled' : 'default'}
              placeholder="Type something about yourself..."
              label="Cover Letter"
              autosize
              withAsterisk
              minRows={4}
            />
            {!preview ? (
              <Button onClick={togglePreview} color="brightSun.4" variant="light">
                Preview
              </Button>
            ) : (
              <div className="flex gap-10 [&>*]:w-1/2">
                <Button fullWidth onClick={togglePreview} color="brightSun.4" variant="outline">
                  Edit
                </Button>
                <Button fullWidth onClick={handleSubmit} color="brightSun.4" variant="light">
                  Submit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!!"
        mt="md"
        withBorder
        className={`z-[1001] !border-bright-sun-400 !fixed top-0 left-[40%] transition duration-300 ease-in-out ${submit ? 'translate-y-0' : '-translate-y-20'}`}
        withCloseButton={false}>
        Redirecting to Find Jobs in {timeoutInterval} seconds...
      </Notification>
    </>
  );
};

export default ApplyJob;
