import React from 'react';
import { Link } from 'react-router-dom';

const TransparentBtn = ({text,link}) => {
  return (
      <Link to={link} className="group border border-[#9873FF] px-4 py-[6px] rounded-md inline-block hover:bg-[#9873FF]">
      <span className='group-hover:text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text p-0 m-0'>{text}</span>
    </Link>
  );
};

export default TransparentBtn;