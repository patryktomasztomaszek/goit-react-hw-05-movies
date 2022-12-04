import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { fetchMovieByQuery } from '../api/fetchFromApi';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const inputQuery = event.target.input.value;
    if (inputQuery === null || inputQuery.match(/^ *$/) !== null) {
      return alert('Type in something!');
    }
    setSearchParams({ query: inputQuery });
    event.currentTarget.reset();
  };

  const fetchMoviesData = useCallback(async () => {
    try {
      const query = searchParams.get('query');
      if (query) {
        const fetchedData = await fetchMovieByQuery(query);
        setSearchResult(fetchedData);
      }
    } catch (error) {
      console.error(error);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

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
