import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'Find Jobs', url: '/find-jobs' },
    { name: 'Find Talent', url: '/find-talents' },
    { name: 'Post Job', url: '/post-job' },
    { name: 'Posted Jobs', url: '/posted-jobs' },
    { name: 'Job History', url: '/job-history' },
  ];
  const location = useLocation();
  return (
    <div className="flex gap-5 text-mine-shaft-500 h-full items-center">
      {links.map((link, index) => (
        <div
          className={`${location.pathname === `${link.url}` ? 'text-bright-sun-400' : ''} h-full flex items-center`}
          key={index}>
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
