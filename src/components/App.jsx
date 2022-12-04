import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MoviesDetailsPage from '../pages/MovieDetails/Page/MovieDetailsPage';
// import Reviews from '../pages/Reviews/Reviews';
// import Cast from '../pages/Cast/Cast';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'))
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
const Cast = lazy(() => import('../pages/Cast/Cast'))
// const Loader = lazy(() => {import('./Loader/Loader')})

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <main>
        <Suspense fallback={<Loader />} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage secure/>} />
          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
        </Suspense>
      </main>
    </>
  );
};
