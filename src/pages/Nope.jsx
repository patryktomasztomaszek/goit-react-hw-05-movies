import React from 'react';
import PropTypes from 'prop-types';

function Nope(props) {
  console.log(
    '%c' + 'Nope!',
    'color: #ff0000; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;'
  );
  return <div>Nope</div>;
}

Nope.propTypes = {};

export default Nope;
