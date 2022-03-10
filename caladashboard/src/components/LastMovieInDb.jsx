import React from 'react';
import imageProduct from '../assets/images/ryu.jpg'

const LastMovieInDb = (props) => {
  const lastProduct = props.product;
  console.log(lastProduct);

  return (
    <>
      {lastProduct !== null && (
        <>
          <div className='col-lg-6 mb-4'>
            <div className='card shadow mb-4'>
              <div className='card-header py-3'>
                <h5 className='m-0 font-weight-bold text-gray-800'>{lastProduct[lastProduct.length - 1].name}</h5>
              </div>
              <div className='card-body'>
                <div className='text-center'>
                  <img
                    className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                    style={{ width: 40 + 'rem' }}
                    src={imageProduct}
                    alt=' Star Wars - Mandalorian '
                  />
                </div>
                <p>
                  {lastProduct[lastProduct.length - 1].description}
                </p>
                <a className='btn btn-danger' rel='nofollow' href='/'>
                  View movie detail
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LastMovieInDb;
