import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'))
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
const Cast = lazy(() => import('../pages/Cast/Cast'))

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
