import React from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
// import { mdiSignalCellularOutline } from '@mdi/js';
const Durationcard = ({ title, result, type, desc, graphimg }) => (
  <div className="durationCard">
    <div className="durationCard__header">
      <span className="durationCard__img">
        {' '}
        <Icon path={graphimg} size={0.8} color="#fff" />
      </span>
      <span className="durationCard__title">{title}</span>
    </div>
    <div className="durationCard__content">
      <h3 className="durationCard__result">{result}</h3>
      <span>{type}</span>
      <p className="durationCard__desc">{desc}</p>
    </div>
  </div>
);
Durationcard.propTypes = {
  title: PropTypes.string,
  result: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  graphimg: PropTypes.string,
};
export default Durationcard;
