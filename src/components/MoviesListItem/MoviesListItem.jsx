import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MoviesListItem.module.scss'

const IMAGE_BASEURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

function MoviesListItem({ movieData }) {
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
//   return (
//     <li>
//       <Link to={`/movies/${id}`}>
//         <img src={imageUrl} alt={title} />
//         <h2>{title}</h2>
//       </Link>
//     </li>
//   );
}


MoviesListItem.propTypes = { movieData: PropTypes.object.isRequired };

export default MoviesListItem;
