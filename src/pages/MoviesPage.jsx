import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovieByQuery } from '../api/fetchFromApi';
import { Link } from 'react-router-dom';

function MoviesPage() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.input.value;
    fetchMovieByQuery(query).then(response => {
      console.log(response);
      setSearchResult(response);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="input" />
      </form>
      {searchResult && <MoviesList moviesData={searchResult} />}
    </>
  );
}

export default MoviesPage;
