import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { useLoaderData, useParams } from 'react-router-dom';
import { getApliedJobId } from '../Utilities/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const JobDetails = () => {
  const job = useLoaderData();
  const { jobId } = useParams();
  const currentId = parseInt(jobId);

  const currentJob = job.find(item => item.id === currentId);

  const {id,job_title,salary,contact_information,job_description,job_responsibility,educational_requirements,experiences} = currentJob;

  const handleApliedJobs = (id) => {
    const appliedJob  = getApliedJobId(id);
    if(appliedJob){
      toast.warn("Already Aplied !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });

    }else{
      toast.success("Successfuly Aplied", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }

  }

  return (
    <div className="container mx-auto py-12 px-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              <strong>Job Description: </strong>{job_description}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Job Responsibility: </strong>{job_responsibility}
            </p>

            <h5 className="text-xl font-semibold mb-4">Educational Requirements:</h5>
            <p className="text-gray-600 mb-4">{educational_requirements}</p>

            <h5 className="text-xl font-semibold mb-4">Experiences:</h5>
            <p className="text-gray-600">{experiences}</p>
          </div>
        </div>
        <div>
          <div>
            <div className="bg-gradient-to-r from-[#7e8ffe27] to-[#9873ff27] p-6 rounded-lg mb-5">
              <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-gray-300">Job Details</h3>
              <div className="mb-2">
                <span className="font-semibold">Salary: </span>{salary} (Per Month)
              </div>
              <div className="mb-4">
                <span className="font-semibold">Job Title: </span>{job_title}
              </div>

              <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-gray-300">Contact Information</h3>

              <div className="mb-2 flex items-start space-x-1">
                <BiPhone className='mt-1' />
                <span><span className="font-semibold">Phone:</span> {contact_information.phone}</span>
              </div>
              <div className="mb-2 flex items-start space-x-1">
                <BiEnvelope className='mt-1' />
                <span><span className="font-semibold">Email:</span> {contact_information.email}</span>
              </div>
              <div className="flex items-start space-x-1">
                <BiMap className='mt-1' />
                <span><span className="font-semibold">Address:</span> {contact_information.address}</span>
              </div>
            </div>
            <button onClick={() => handleApliedJobs(id)} className="btn btn-primary w-full">Apply Now</button>
          </div>
        </div>

      </div>
    </div>

  );
};

export default JobDetails;