/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';

import { mdiChevronDown } from '@mdi/js';
import RankingSlider from './rankingSlider';
// import exposureGraph from '../../images/exposureGraph.png';
const PlatformSection = ({ type, title, width }) => (
  <div className="platform" style={{ width: `${width}` }}>
    <div className="platform__header">
      <h2 className="platform__title">{title}</h2>
      {type === 'platform' && (
        <div className="platform__dropdown">
          <span>Social media</span>
          <Icon path={mdiChevronDown} size={1} />
        </div>
      )}
      {type === 'hashtag' && (
        <div className="platform__dropdown">
          <span>All Hashtag</span>
          <Icon path={mdiChevronDown} size={1} />
        </div>
      )}
      {type === 'timeline' && (
        <div className="analyticBreadCrumbs__toggle" style={{ marginLeft: 50 }}>
          <h4 className="active">By Number</h4>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
          <h4>Rate</h4>
        </div>
      )}
    </div>

    <div className="platform__body">
      <div className="platform__gragh">
        {type === 'platform' && (
          <>
            <div className="platform__graphImage">
              <img src="https://via.placeholder.com/160x160" alt="" />
            </div>
            <div className="platform__graphList">
              <h2>
                Instagram
                <span>46%</span>
              </h2>
              <h2>
                Facebook
                <span>46%</span>
              </h2>
              <h2>
                Twitter
                <span>46%</span>
              </h2>
              <h2>
                Instagram
                <span>46%</span>
              </h2>
              <h2>
                Youtube
                <span>46%</span>
              </h2>
            </div>
          </>
        )}
        {type === 'hashtag' && (
          <>
            <ul className="platform__tabs">
              <li className="active">Tab1</li>
              <li>Tab2</li>
              <li>Tab3</li>
              <li>Tab4</li>
            </ul>
            <div className="platform__graphSvg">
              <img src="https://via.placeholder.com/608x200" alt="" />
            </div>
          </>
        )}
        {type === 'timeline' && (
          <div className="platform__graphSvg">
            <img src="https://via.placeholder.com/1170x400" alt="" />
          </div>
        )}
        {type === 'ranking' && (
          <>
            <ul className="platform__ranktabs">
              <li className="active">Post</li>
              <li>Engagement</li>
              <li>Hashtag</li>
              <li>Mentions</li>
              <li>Enagagers</li>
              <li>Brand valuation</li>
            </ul>
            <ul className="matchsortBy__header">
              <li>
                <span>Rank By</span>
                <h6>valuation</h6>
                <Icon path={mdiChevronDown} size={1} />
                <ul>
                  <li className="active">Descending</li>
                  <li className="">Ascending</li>
                </ul>
              </li>
            </ul>
            <div className="platform__graphSvg">
              <RankingSlider height="390px" />
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);
PlatformSection.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
};

export default PlatformSection;
