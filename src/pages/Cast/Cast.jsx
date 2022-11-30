import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from 'api/fetchFromApi';
import CastRender from 'components/CastRender/CastRender';

function Cast() {
  const [movieCastData, setMovieCastData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCastById(movieId).then(response => setMovieCastData(response));
  }, [movieId]);

  return <>{movieCastData && <CastRender castData={movieCastData} />}</>;
}

export default Cast;
