import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getSavedData } from '../Components/Utilities/localStorage';
import AppliedJob from '../Components/AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setApliedJobs] = useState([]);
  const [displayJobs,setDisplayJobs] = useState([]);

  const handleFilter = (filter) => {
    if(filter === 'all'){
      setDisplayJobs(appliedJobs)
    }
    else if(filter === 'remote') {
      const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remote);
    }
    else if(filter === 'onsite') {
      const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsite);
    }
  }

  useEffect(() => {
    const apliedJobsId = getSavedData();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => apliedJobsId.includes(job.id));
      // const jobsApplied = [];
      // for(const id of apliedJobsId) {
      //   const job = jobs.find(job => job.id === id);
      //   jobsApplied.push(job);

      // }
      setDisplayJobs(jobsApplied);
      setApliedJobs(jobsApplied);
    }

  }, [jobs])

  return (
    <div className='py-12'>
      <div className="container mx-auto px-3">
        <div className='text-end'>
          <details className="dropdown">
            <summary className="btn m-1">Filter By</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
              <li onClick={()=> handleFilter('all')}><span>All</span></li>
              <li onClick={()=> handleFilter('remote')}><span>Remote</span></li>
              <li onClick={()=> handleFilter('onsite')}><span>Onsite</span></li>
            </ul>
          </details>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-5'>
          {displayJobs.map(job => <AppliedJob key={job.id} job={job} />)}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;