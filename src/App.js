import { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import MovieCatalogPage from './pages/MovieCatalogPage';
import FavoritePage from './pages/FavoritePage';
import { getMovies } from "./api/moviesApi";

//External library used for the alerts
import Swal from 'sweetalert2';

function App() {

  const [allMovies, setAllMovies] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => { getAllMovies() }, [])
   const getAllMovies = async () => {
     const movies = await getMovies();
     setAllMovies(movies);
  }

  const favoriteMoviesQty = favoriteMovies.map(cm => cm.qty).reduce((prev, curr) => prev + curr, 0)

  const handleAddToFavorite = id => {
    const movie = allMovies.find(m => m._id === id)
    const tempFavoriteMovies = Array.from(favoriteMovies)
    const currentMovieIndex = tempFavoriteMovies.findIndex(m => m._id === id)

    if (currentMovieIndex >= 0)
    Swal.fire(
      'Oops',
      'This movie is already in your favorites',
      'info'
    )
    else
      tempFavoriteMovies.push({...movie, qty: 1})

    setFavoriteMovies(tempFavoriteMovies)
  }

  return (
    <Fragment>
      <Navbar favoriteMoviesQty={favoriteMoviesQty}/>
      <Routes>
        <Route path='/admin'
               element={
                   <AdminPage
                   allMovies={allMovies}
                   setAllMovies={setAllMovies}
                   />} />
        <Route path="/" element={<MovieCatalogPage movies={allMovies} handleAddToFavorite={handleAddToFavorite}/>} />

        <Route path="/favorites" element={<FavoritePage favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies}/> } />

      </Routes>
    </Fragment>
  );
}

export default App;
