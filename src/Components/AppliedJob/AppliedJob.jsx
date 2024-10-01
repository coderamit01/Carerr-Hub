import React from 'react';
import GradientBtn from '../GradientBtn/GradientBtn';
import TransparentBtn from '../TransparentBtn/TransparentBtn';
import { BiDollarCircle, BiMap } from 'react-icons/bi';

const AppliedJob = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card w-full bg-base-100 border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-stretch">
          <div className="rounded-lg bg-gray-200 me-5 flex items-center">
            <img src={logo} alt="Company Logo" className="w-36 h-auto object-contain p-4" />
          </div>
          <div className='flex-1 self-center'>
            <h4 className='text-2xl font-semibold pb-1'>{job_title}</h4>
            <p className='text-xl text-gray-600'>{company_name}</p>
            <div className='flex items-center space-x-2 py-3'>
              <TransparentBtn text={remote_or_onsite} link='/' />
              <TransparentBtn text={job_type} link='/' />
            </div>
            <div className='flex items-center space-x-3 mb-3'>
              <div className='flex items-center space-x-1'>
                <BiMap className='text-lg' />
                <span>{location}</span>
              </div>
              <div className='flex items-center space-x-1'>
                <BiDollarCircle className='text-lg' />
                <span>Salary: {salary}</span>
              </div>
            </div>
          </div>
          <div className='self-center'>
            <GradientBtn text="View Details" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;