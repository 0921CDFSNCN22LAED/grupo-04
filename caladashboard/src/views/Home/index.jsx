import React from 'react';
import ContentRowTop from '../../components/ContentRowTop';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <Sidebar />
        </div>
        <div>
          <ContentRowTop />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
