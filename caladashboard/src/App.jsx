import './App.css';
import './assets/css/app.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home';
// import Dashboard from './views/Tables';
// import Categories from './views/Categories';
import Chart from './components/Chart';
import LastMovieInDb from './components/LastMovieInDb';
// import GenresInDb from './components/CategoriesInDb';
import ContentDataInDb from './components/ContentDataInDb';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Categories from './components/CategoriesInDb';
import NotFound from './views/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} exact />
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='genres' element={<Categories />} />
        <Route path='charts' element={<ContentDataInDb />} />
        <Route path='tables' element={<Chart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
