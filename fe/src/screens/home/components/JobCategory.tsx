import { jobCategories } from '@/data';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-center font-semibold text-mine-shaft-100 text-4xl [&>span]:text-bright-sun-400 mb-3">
        Browse <span>Jobs</span> Category
      </div>
      <div className="text-mine-shaft-300 text-lg text-center w-1/2 mx-auto mb-10">
        Explore diverse job opportunities tailored to your skills.Start your career journey today.
      </div>
      <Carousel
        slideSize="22%"
        slideGap="md"
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        loop
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}>
        {jobCategories.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center gap-2 w-64 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 my-5 transition duration-300 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  src={`/job-category/${category.image}`}
                  className="h-8 w-8"
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">{category.name}</div>
              <div className="text-mine-shaft-300 text-sm text-center">{category.desc}</div>
              <div className="text-bright-sun-300 text-lg">{category.jobs}+ new job posted</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
