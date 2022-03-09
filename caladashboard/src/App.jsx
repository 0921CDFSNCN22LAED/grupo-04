import './App.css';
import './assets/css/app.css'
import { Routes,  Route } from 'react-router-dom'
import Home from './components/Home';
// import Dashboard from './views/Tables';
// import Categories from './views/Categories';
import Chart from './components/Chart';
import LastMovieInDb from './components/LastMovieInDb';
// import GenresInDb from './components/CategoriesInDb';
import ContentDataInDb from './components/ContentDataInDb';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Categories from './components/CategoriesInDb';
import NotFound from './components/NotFound';

function App() {
  return (
    <>

<div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 mt-2">C A L A D A S H B O A R D</h1>
      </div>
      <Sidebar />
       {/* <ContentRowTop /> */}

    <Routes>
        <Route path='/' element={<Home />} exact/>
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='genres' element={<Categories/>}/>
        <Route path='charts' element={<ContentDataInDb/>}/>
        <Route path='tables' element={<Chart/>}/>
        <Route element={<NotFound />}/> // no funciona
    </Routes>

    </div>      




    <Footer />
    </>
  );
}

export default App;
