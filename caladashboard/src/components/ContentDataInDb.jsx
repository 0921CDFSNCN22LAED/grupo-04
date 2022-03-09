import React from 'react';
import { useState, useEffect } from 'react'
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
  title: 'Movies in Data Base',
  color: 'primary',
  cuantity: 21,
  icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
  title: ' Total awards',
  color: 'success',
  cuantity: '79',
  icon: 'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
  title: 'Actors quantity',
  color: 'warning',
  cuantity: '49',
  icon: 'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

const ContentDataInDb = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

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

  useEffect(() => {
    getProductsData()
    getUsersData()
  }, [])

  return (

    <>

      <div className="row">

        <SmallCard count={productsCount} title='Calamardos in DB' color='primary' icon='fa-clipboard-list' />
        <SmallCard count={usersCount} title='Usuario in DB' color='success' icon='fa-user-check' />

      </div>

    </>
  )
}

export default ContentDataInDb;