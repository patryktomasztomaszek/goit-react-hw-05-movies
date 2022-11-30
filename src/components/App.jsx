import { Routes, Route, Link } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MoviesDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Nope from 'pages/Nope';
import Reviews from '../pages/Reviews/Reviews';
import Cast from '../pages/Cast/Cast';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Nope />} />
        </Routes>
      </main>
    </>
  );
};
