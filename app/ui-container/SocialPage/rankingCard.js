import React from 'react';

import PropTypes from 'prop-types';

// import hightlightImage from '../../images/football.jpeg';

const Rankingcard = ({ number, rankingVideo }) => (
  <div className="rankingCard">
    <div className="rankingCard__video">
      <h3>{number}</h3>
      <div className="rankingCard__img">
        <img src={rankingVideo} alt="" />
      </div>
    </div>
    <div className="rankingCard__content">
      <ul>
        <li className="rankingCard__list">
          <span>Valuation 1</span>
          <h4>$123m</h4>
        </li>
        <li className="rankingCard__list">
          <span>Valuation 2</span>
          <h4>$123m</h4>
        </li>
        <li className="rankingCard__list">
          <span>Valuation 3</span>
          <h4>$123m</h4>
        </li>
      </ul>
    </div>
  </div>
);
Rankingcard.propTypes = {
  number: PropTypes.string,
  rankingVideo: PropTypes.string,
};
export default Rankingcard;
