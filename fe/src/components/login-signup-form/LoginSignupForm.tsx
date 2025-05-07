import { useLocation } from 'react-router-dom';

import { IconAnchor } from '@tabler/icons-react';

import Form from '../form/Form';

const LoginSignupForm = () => {
  const location = useLocation();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins overflow-hidden">
      <div
        className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${
          location.pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'
        }`}>
        <Form mode="login" />
        <div
          className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${
            location.pathname == '/signup' ? 'rounded-r-[200px]' : 'rounded-l-[200px]'
          } bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">JobHook</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
        </div>
        <Form mode="signup" />
      </div>
    </div>
  );
};

export default LoginSignupForm;
