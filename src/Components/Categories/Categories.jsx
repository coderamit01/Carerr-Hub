import React, { useEffect, useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Category from '../Category/Category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='py-12'>
      <div className="container mx-auto px-3">
        <div className='md:w-1/3 mx-auto text-center'>
          <PageTitle title="Job Category List" summery="Explore thousands of job opportunities with all the information you need. Its your future" />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-7'>
          {
            categories.map(category => <Category key={category.id} category={category} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Categories;