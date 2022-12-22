import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import styles from './MoviesList.module.scss'

function MoviesList({ moviesData }) {
  const movies = moviesData.results;

  const {list} = styles;
  return (
    <>
      {movies.length > 0 ? (
        <ul className={list}>
          {movies.map(movie => (
            <MoviesListItem key={movie.id} movieData={movie} />
          ))}
        </ul>
      ) : (
        <p>No results found!</p>
      )}
    </>
  );
}

MoviesList.propTypes = { moviesData: PropTypes.object.isRequired };

export default MoviesList;
