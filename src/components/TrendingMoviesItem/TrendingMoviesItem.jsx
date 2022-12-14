import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TrendingMoviesItem.module.scss';

const IMAGE_BASEURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

function TrendingMoviesItem({ movieData }) {
  const { backdrop_path, title, id } = movieData;
  const imageUrl = IMAGE_BASEURL + backdrop_path;

  const { item, item__content, item__image, item__title } = styles;
  return (
    <li className={item}>
      <Link className={item__content}  to={`/movies/${id}`}>
        <img className={item__image} src={imageUrl} alt={title} />
        <h2 className={item__title}>{title}</h2>
      </Link>
    </li>
  );
}

TrendingMoviesItem.propTypes = { movieData: PropTypes.object.isRequired };

export default TrendingMoviesItem;
