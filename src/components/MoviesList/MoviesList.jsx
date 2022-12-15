import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

function MoviesList({ moviesData }) {
  const movies = moviesData.results;
  return (
    <>
      {movies.length > 0 ? (
        <ul>
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
