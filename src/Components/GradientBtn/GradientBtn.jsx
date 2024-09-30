import React from 'react';
import { Link } from 'react-router-dom';

const GradientBtn = ({text,link}) => {
  return (
    <Link to={link} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-md text-white inline-block">{text}</Link>
  );
};

export default GradientBtn;