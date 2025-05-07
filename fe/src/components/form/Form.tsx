import { Link } from 'react-router-dom';

import { Anchor, Button, Checkbox, PasswordInput, TextInput, rem } from '@mantine/core';
import { IconAt, IconLock } from '@tabler/icons-react';

const Form = ({ mode = 'signup' }) => {
  const isLogin = mode === 'login';

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">
        {isLogin ? 'Login to Your Account' : 'Create Account'}
      </div>

      {!isLogin && <TextInput withAsterisk label="Full Name" placeholder="Your name" />}

      <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
      />

      <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        label="Password"
        placeholder="Password"
      />

      {!isLogin && (
        <>
          <PasswordInput
            withAsterisk
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Confirm Password"
            placeholder="Confirm password"
          />
          <Checkbox autoContrast label=" I accept Terms & Conditions" />
        </>
      )}

      <Button autoContrast variant="filled">
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
    </div>
  );
};

export default Form;
