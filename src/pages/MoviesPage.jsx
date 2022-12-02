import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';
import { useState } from 'react';
import { fetchMovieByQuery } from '../api/fetchFromApi';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams, setSerachParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const inputQuery = event.target.input.value;
    if (inputQuery === null || inputQuery.match(/^ *$/) !== null) {
      return alert('Type in something!');
    }
    setSerachParams({ query: inputQuery });
    fetchMovieByQuery(query)
      .then(response => {
        setSearchResult(response);
      })
      .finally(event.currentTarget.reset());
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
