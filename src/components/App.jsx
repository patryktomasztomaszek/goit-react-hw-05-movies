import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import styles from './App.module.scss'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
const Cast = lazy(() => import('../pages/Cast/Cast'))

export const App = () => {

  const {container, nav, nav__item} = styles;

  return (
    <div className={container}>
      <nav className={nav}>
        <Link className={nav__item} to="/">Home</Link>
        <Link className={nav__item} to="/movies">Movies</Link>
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
    </div>
  );
};
