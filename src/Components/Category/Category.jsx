import React from 'react';

const Category = ({category}) => {
  const {logo,category_name,availability} = category;
  return (
    <div className='flex flex-col bg-[#7e8ffe16] px-4 py-5'>
      <div>
        <img src={logo} className='bg-[#7e8ffe39] p-2 inline-block rounded-md mb-4' alt={category_name} />
      </div>
      <h5 className='text-xl font-semibold pb-2'>{category_name}</h5>
      <p>{availability}</p>
    </div>
  );
};

export default Category;