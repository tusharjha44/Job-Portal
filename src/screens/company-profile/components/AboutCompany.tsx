import { companyData } from '@/data';

const AboutCompany = () => {
  const companyDetails: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(companyDetails).map(
        (key, index) =>
          key !== 'Name' && (
            <div key={index}>
              <div className="text-xl mb-3 font-semibold">{key}</div>
              {key != 'Website' && (
                <div className="text-sm text0mine0shaft-300 text-justify">
                  {key != 'Specialties'
                    ? companyDetails[key]
                    : companyDetails[key].map((item: string, index: number) => (
                        <span key={index} className='mr-2'> &bull; {item}</span>
                      ))}
                </div>
              )}
              {key == 'Website' && (
                <a
                  href={companyDetails[key]}
                  target="_blank"
                  className="text-sm text-bright-sun-400 text-justify">
                  {companyDetails[key]}
                </a>
              )}
            </div>
          ),
      )}
    </div>
  );
};

export default AboutCompany;
