import React from 'react';

import { Button, TextInput } from '@mantine/core';

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      <div className="text-center font-semibold text-mine-shaft-100 text-4xl [&>span]:text-bright-sun-400 mb-3">
        Never Want to Miss Any <span>Job News?</span>
      </div>
      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
          className="[&_input]:text-mine-shaft-100 font-semibold"
          size="xl"
          variant="unstyled"
          placeholder="Youremail@gmail.com"
        />
        <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
