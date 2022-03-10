import React, { useEffect, useState } from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentDataInDb from './ContentDataInDb';
import Chart from './Chart';

function ContentRowTop() {
  const [product, setProduct] = useState(null);

  const getProductsData = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();
    setProduct(data.data);
    console.log(product);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className='container-fluid'>
        <div className='d-sm-flex aligns-items-center justify-content-between mb-4'>
          <h1 className='h3 mb-0 text-gray-800 mt-2'>C A L A D A S H B O A R D</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentDataInDb />
        <ContentRowCenter />
        <Chart data={product} />
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
