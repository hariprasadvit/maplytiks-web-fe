import React from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import { mdiWindowMaximize, mdiChevronDown } from '@mdi/js';
import hightlightImage from '../../images/football.jpeg';
const DropdownItems = [
  {
    value: '220',
    text: 'Video Posts',
  },
  {
    value: '220',
    text: 'IMAGE POST',
  },
  {
    value: '36',
    text: 'Video Posts',
  },
];
const Highlightcard = ({ title, result, text, desc1, desc2 }) => (
  <div className="highlightCard">
    <div className="highlightCard__img">
      <img src={hightlightImage} alt="" />
    </div>

    <div className="highlightCard__content">
      <span className="highlightCard__title">{title}</span>
      <h3 className="highlightCard__result">{result}</h3>
      <span>{text}</span>
      <p className="highlightCard__desc">
        {desc1}
        <span className="knowmore">
          know more <Icon path={mdiWindowMaximize} size={1} />
        </span>
        <span className="knowmore">{desc2}</span>
      </p>
    </div>
    <div className="highlightCard__dropdown">
      <div className="highlightCard__dropIcon">
        <Icon path={mdiChevronDown} size={1} />
      </div>
      <ul className="highlightCard__menu">
        {DropdownItems.map(x => (
          <li className="highlightCard__menuItems">
            <h4>{x.value}</h4>
            <span>{x.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
Highlightcard.propTypes = {
  title: PropTypes.string,
  result: PropTypes.string,
  text: PropTypes.string,
  desc1: PropTypes.string,
  desc2: PropTypes.string,
};
export default Highlightcard;
