import React from 'react';
import errorImg from '../../assets/images/error-404-not-found.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={errorImg} alt="paginaerror" style={{ width: '30vw' }} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link to='/'>
          <button className='btn-danger p-2 mb-5 mt-5'>
            Back Home
          </button>
        </Link>
      </div>
    </>
  )
}
export default NotFound;