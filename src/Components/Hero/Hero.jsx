import React from 'react';
import GradientBtn from '../GradientBtn/GradientBtn';

const Hero = () => {
  return (
    <div className='bg-base-200'>
      <div className='container mx-auto px-3'>
        <div className="hero min-h-screen">
          <div className="hero-content grid grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold">One Step Closer To Your <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text'>Dream Job</span></h1>
              <p className="py-6">
              Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
              </p>
              <GradientBtn text="Get Started" link="/" />
            </div>
            <div>
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-1/2 rounded-lg shadow-2xl mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;