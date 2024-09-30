import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Job from '../Job/Job';

const FeaturedJobs = () => {
  const [jobs,setJobs] = useState([]);

  useEffect(() => {
    fetch('../../../public/jobData.json')
    .then(res => res.json())
    .then(data => setJobs(data));
  },[])

  return (
    <div className='py-12'>
      <div className="container mx-auto px-3">
        <div className='md:w-1/3 mx-auto text-center'>
          <PageTitle title="Featured Jobs" summery="Explore thousands of job opportunities with all the information you need. Its your future" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-7'>
          {
            jobs.map(job => <Job key={job.id} job={job} />)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;