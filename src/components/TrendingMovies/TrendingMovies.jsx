import React from 'react';
import PropTypes from 'prop-types';
import TrendingMoviesItem from 'components/TrendingMoviesItem/TrendingMoviesItem';

function TrendingMovies({ moviesData }) {
  const movies = moviesData.results;
  return (
    <ul>
      {movies.map(movie => (
        <TrendingMoviesItem key={movie.id} movieData={movie} />
      ))}
    </ul>
  );
}

TrendingMovies.propTypes = { moviesData: PropTypes.object.isRequired };

export default TrendingMovies;
