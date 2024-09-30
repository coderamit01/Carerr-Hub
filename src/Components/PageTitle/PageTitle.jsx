import React from 'react';

const PageTitle = ({title,summery}) => {
  return (
    <>
      <h2 className='text-4xl font-semibold pb-2'>{title}</h2>
      <p>{summery}</p>
    </>
  );
};

export default PageTitle;