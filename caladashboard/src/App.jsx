import './App.css';
import './assets/css/app.css'
import { Routes,  Route } from 'react-router-dom'
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import LastMovieInDb from './components/LastMovieInDb';
import GenresInDb from './components/GenresInDb';
import ContentRowMovies from './components/ContentRowMovies';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='genres' element={<GenresInDb/>}/>
        <Route path='charts' element={<ContentRowMovies/>}/>
        <Route path='table' element={<LastMovieInDb/>}/>
    </Routes>
  );
}

export default App;
