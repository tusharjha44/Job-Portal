import { PostedJobDescription, PostedJobDetails } from './components';

const PostedJobs = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-poppins p-4">
      <div className="flex gap-5">
        <PostedJobDetails />
        <PostedJobDescription />
      </div>
    </div>
  );
};

export default PostedJobs;
