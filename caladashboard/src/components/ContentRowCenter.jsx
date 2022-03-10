import React, { useState, useEffect } from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './CategoriesInDb';

function ContentRowCenter() {
  const [product, setProduct] = useState(null);

  const getProductsData = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();
    setProduct(data.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className='row'>
      {/*<!-- Last Movie in DB -->*/}
      <LastMovieInDb product={product} />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <GenresInDb />
    </div>
  );
}

export default ContentRowCenter;
