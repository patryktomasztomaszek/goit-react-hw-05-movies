import React from 'react';
import PropTypes from 'prop-types';
import { getimageUrl } from 'utils/getImageUrl';
import notFound from './notFound.png';

function CastRender({ castData }) {
  const cast = castData.cast;
  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => {
            const { id, name, profile_path, character } = actor;
            const imageUrl = profile_path
              ? getimageUrl(profile_path)
              : notFound;

            return (
              <li key={id}>
                <img src={imageUrl} alt={name} />
                <h3>
                  {character} ({name})
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
