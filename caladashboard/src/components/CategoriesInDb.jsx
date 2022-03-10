import React, { useState, useEffect } from 'react';
import Category from './Category';

function GenresInDb() {
  const [categories, setCategories] = useState([]);

  const getCategoriesData = async () => {
    const response = await fetch('http://localhost:3001/api/categories');
    const data = await response.json();
    setCategories(data.data);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <div className='col-lg-6 mb-4'>
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <h5 className='m-0 font-weight-bold text-gray-800'>Categories in Data Base</h5>
        </div>
        <div className='card-body'>
          <div className='row'>
            {categories.map((category) => {
              return <Category {...category} key={category.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
