import React from 'react';
import PropTypes from 'prop-types';
import TrendingMoviesItem from 'components/TrendingMoviesItem/TrendingMoviesItem';
import styles from './TrendingMovies.module.scss'

function TrendingMovies({ moviesData }) {
  const movies = moviesData.results;

  const {list} = styles;
  return (
    <ul className={list}>
      {movies.map(movie => (
        <TrendingMoviesItem key={movie.id} movieData={movie} />
      ))}
    </ul>
  );
}

TrendingMovies.propTypes = { moviesData: PropTypes.object.isRequired };

export default TrendingMovies;
