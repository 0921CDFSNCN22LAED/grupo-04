import React, { useEffect, useState } from 'react';

const Chart = () => {
  const [products, setProducts] = useState(null);

  const getProductsData = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();
    setProducts(data.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      {products && (
        <>
          <div className='card shadow mb-4'>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
                  <thead>
                    <tr>
                      <th>Título</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          {products.slice(0, 10).map((product, i) => (
                            <li key={`product ${i}`}>{product.name}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chart;
