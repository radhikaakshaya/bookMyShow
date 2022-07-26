// import { Route } from 'react-router-dom'
import './App.css';
import DefaultHoc from './HOC/Default.HOC';
import HomePage from './pages/HomePage.component';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/navbar.component';
import HeroCarousel from './components/HeroImages/Hero.component';
import MoviesHoc from './HOC/Movies.HOC';
import MoviePage from './pages/MoviePage.component'
import { Route, Routes } from 'react-router-dom';
import PlaysPage from './pages/PlaysPage.component';
import axios from 'axios';

//axios default settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {}
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;
function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movies/:id" element={<MoviePage />} />
        <Route exact path="/plays" element={<PlaysPage />} />
      </Routes>

    </>
  );
}

export default App;
