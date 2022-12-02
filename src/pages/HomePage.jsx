import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'api/fetchFromApi';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => {
      setTrendingMovies(response);
    });
  }, []);

  return (
    <div>
      {trendingMovies && <TrendingMovies moviesData={trendingMovies} />}
    </div>
  );
}

export default HomePage;
