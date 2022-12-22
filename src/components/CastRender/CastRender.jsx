import React from 'react';
import PropTypes from 'prop-types';
import { getimageUrl } from 'utils/getImageUrl';
import notFound from './notFound.png';
import styles from './CastRender.module.scss'

function CastRender({ castData }) {
  const cast = castData.cast;

  const {list, list__item} = styles;
  return (
    <>
      {cast.length > 0 ? (
        <ul className={list}>
          {cast.map(actor => {
            const { id, name, profile_path, character } = actor;
            const imageUrl = profile_path
              ? getimageUrl(profile_path)
              : notFound;

            return (
              <li className={list__item} key={id}>
                <img src={imageUrl} alt={name} />
                <h3>
                  {character} <br />({name})
                </h3>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Cast Found!</p>
      )}
    </>
  );
}

CastRender.propTypes = {
  castData: PropTypes.object.isRequired,
};

export default CastRender;
