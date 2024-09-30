import { BiDollarCircle, BiMap } from 'react-icons/bi';
import TransparentBtn from '../TransparentBtn/TransparentBtn';
import GradientBtn from '../GradientBtn/GradientBtn';

const Job = ({job}) => {
  const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job
  return (
    <div className='border border-gray-200 rounded p-5'>
      <div className='mb-4'>
        <img src={logo} className='w-28 h-auto object-contain' alt={job_title} />
      </div>
      <h4 className='text-2xl font-semibold pb-1'>{job_title}</h4>
      <p>{company_name}</p>
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
      <GradientBtn text="View Details" link="/" />
    </div>
  );
};

export default Job;