import { Companies, DreamJob, JobCategory, Subscribe, Testimonials, Working } from './components';

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-poppins">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
