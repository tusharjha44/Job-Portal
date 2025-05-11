import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { loginUser, registerUser } from '@/services';
import { setUser } from '@/store';
import { showNotification } from '@/utils';
import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  TextInput,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAt, IconLock } from '@tabler/icons-react';

import { ResetPasswordModal } from './ResetPasswordModal';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  termsAccepted: boolean;
};

type FormError = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  accountType: 'APPLICANT',
  termsAccepted: false,
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,15}$/;

const Form = ({ mode = 'signup' }: { mode?: 'login' | 'signup' }) => {
  const isLogin = mode === 'login';
  const [userData, setUserData] = useState<FormData>(initialFormData);
  const [error, setError] = useState<FormError>({});
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (error[name as keyof FormData]) {
      setError(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormError => {
    const errors: FormError = {};

    if (!userData.email) errors.email = 'Email is required';
    else if (!emailRegex.test(userData.email)) errors.email = 'Invalid email address';

    if (!userData.password) errors.password = 'Password is required';
    else if (!isLogin && !passwordRegex.test(userData.password)) {
      errors.password =
        'Password must be 8–15 characters with uppercase, lowercase, number, and special character.';
    }

    if (!isLogin) {
      if (!userData.name) errors.name = 'Name is required';
      if (!userData.confirmPassword) errors.confirmPassword = 'Confirm password is required';
      else if (userData.password !== userData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      if (!userData.termsAccepted) {
        errors.termsAccepted = 'You must accept the terms';
      }
    }

    return errors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length) return;

    setLoading(true);

    try {
      if (isLogin) {
        const data = await loginUser({ email: userData.email, password: userData.password });
        showNotification('Login Successful', 'Redirecting to home page...');
        setTimeout(() => {
          dispatch(setUser(data));
          setLoading(false);
          navigate('/');
        }, 4000);
      } else {
        await registerUser({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          accountType: userData.accountType,
        });
        showNotification('Registered Successfully', 'Redirecting to Login Page...');
        setTimeout(() => {
          navigate('/login');
          setLoading(false);
        }, 4000);
        setUserData(initialFormData);
      }
    } catch (err: any) {
      showNotification(
        'Error',
        err?.response?.data?.message || err?.message || 'Something went wrong!',
        'red',
      );
    }
  };

  return (
    <>
      <LoadingOverlay
        className={isLogin ? '' : 'translate-x-1/2'}
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'brightSun.4', type: 'bars' }}
      />
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">
          {isLogin ? 'Login to Your Account' : 'Create Account'}
        </div>

        {!isLogin && (
          <TextInput
            withAsterisk
            label="Full Name"
            placeholder="Your name"
            name="name"
            error={error.name}
            value={userData.name}
            onChange={handleChange}
          />
        )}

        <TextInput
          withAsterisk
          name="email"
          value={userData.email}
          onChange={handleChange}
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
          error={error.email}
        />

        <PasswordInput
          withAsterisk
          name="password"
          value={userData.password}
          onChange={handleChange}
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Password"
          placeholder="Password"
          error={error.password}
        />

        {!isLogin && (
          <>
            <PasswordInput
              withAsterisk
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              label="Confirm Password"
              placeholder="Confirm password"
              error={error.confirmPassword}
            />

            <Radio.Group
              name="accountType"
              value={userData.accountType}
              onChange={value => setUserData(prev => ({ ...prev, accountType: value }))}
              label="You are?"
              withAsterisk>
              <Group mt="xs">
                {['APPLICANT', 'EMPLOYER'].map(type => (
                  <Radio
                    key={type}
                    className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
                    value={type}
                    label={type.charAt(0) + type.slice(1).toLowerCase()}
                    autoContrast
                  />
                ))}
              </Group>
            </Radio.Group>

            <Checkbox
              name="termsAccepted"
              checked={userData.termsAccepted}
              onChange={handleChange}
              autoContrast
              label=" I accept Terms & Conditions"
              error={error.termsAccepted}
            />
          </>
        )}

        <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
          {isLogin ? 'Login' : 'Sign up'}
        </Button>

        <div className="mx-auto">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Link to="/signup" className="text-bright-sun-400 hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Have an account?{' '}
              <Link to="/login" className="text-bright-sun-400 hover:underline">
                Login
              </Link>
            </>
          )}
        </div>
        {isLogin && (
          <div
            onClick={open}
            className="text-bright-sun-400 hover:underline cursor-pointer text-center">
            Forget Password?
          </div>
        )}
      </div>
      <ResetPasswordModal opened={opened} onClose={close} />
    </>
  );
};

export default Form;
