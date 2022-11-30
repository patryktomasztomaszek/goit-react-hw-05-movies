import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'api/fetchFromApi';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

function MovieDetailsPage() {
  const [movieData, setmovieData] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(response => {
      setmovieData(response);
    });
  }, [movieId]);

  return <div>{movieData && <MovieDetails movieData={movieData} />}</div>;
}

export default MovieDetailsPage;
