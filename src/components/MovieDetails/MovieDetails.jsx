import React from 'react';
import PropTypes from 'prop-types';
import { getGenresNames } from 'utils/getGenresNames';
import { getimageUrl } from 'utils/getImageUrl';
import { Link, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.scss'

function MovieDetails({ movieData }) {
  const { backdrop_path, title, vote_average, overview, genres } = movieData;

  const genresNames = getGenresNames(genres);
  const imageUrl = getimageUrl(backdrop_path);
  const userScore = Math.floor(vote_average * 10) + '%';


  const {movie, movie__left, movie__image, movie__right, movie__links, links__item} = styles;
  return (
    <>
      <div className={movie}>
        <div className={movie__left}>
          <img className={movie__image} src={imageUrl} alt={title} />
        </div>
        <div className={movie__right}>
          <h2 className={movie__right}>{title}</h2>
          <h3>User Score: {userScore}</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresNames}</p>
        </div>
      </div>
      <div className={movie__links}>
        <Link className={links__item} to="cast">Cast</Link>
        <Link className={links__item} to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
}

MovieDetails.propTypes = { movieData: PropTypes.object.isRequired };

export default MovieDetails;
