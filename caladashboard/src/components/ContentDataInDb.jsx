import React from 'react';
import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

const ContentDataInDb = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  const getProductsData = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();
    setProductsCount(data.meta.count);
  };

  const getUsersData = async () => {
    const response = await fetch('http://localhost:3001/api/users');
    const data = await response.json();
    setUsersCount(data.meta.count);
  };

  const getCategoriesData = async () => {
    const response = await fetch('http://localhost:3001/api/categories');
    const data = await response.json();
    setCategoriesCount(data.meta.count);
  };

  useEffect(() => {
    getProductsData();
    getUsersData();
    getCategoriesData();
  }, []);

  return (
    <>
      <div className='row'>
        <SmallCard count={productsCount} title='Calamardos in DB' color='primary' icon='fa-clipboard-list' />
        <SmallCard count={usersCount} title='Users in DB' color='success' icon='fa-user-check' />
        <SmallCard count={categoriesCount} title='Categories in DB' color='warning' icon='fa-award' />
      </div>
    </>
  );
};

export default ContentDataInDb;
