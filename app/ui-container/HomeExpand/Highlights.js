import React from 'react';
// import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiArrowUp } from '@mdi/js';
const HIGHLIGHTS = [
  {
    title: 'Total \n Duration Tracked',
    value: '240:54:35',
    count: 'HH : MM : SS',
  },
  {
    title: 'Cumulative Number of Brands Tracked',
    value: '31',
    count: 'HH : MM : SS',
  },
  {
    title: 'Cumulative Value of Projects',
    value: '128,774,769',
    count: 'USD',
  },
  {
    title: 'Cumulative Brand Exposure',
    value: '166:52:23',
    count: 'HH : MM : SS',
  },
  {
    title: 'Cumulative Number of Brands Tracked',
    value: '31',
    count: 'HH : MM : SS',
  },
  {
    title: 'Cumulative Value of Projects',
    value: '128,774,769',
    count: 'USD',
  },
  {
    title: 'Cumulative Brand Exposure',
    value: '166:52:23',
    count: 'HH : MM : SS',
  },
];
const HighLights = () => (
  <div className="highlights">
    <div className="highlights__header">
      <div className="highlights__header-left">Project Highlights</div>
      <div className="highlights__header-right">
        {' '}
        <div>
          <Icon path={mdiChevronLeft} size={0.9} color="#fff" />
        </div>
        <div>
          {' '}
          <Icon path={mdiChevronRight} size={0.9} color="#fff" />
        </div>
      </div>
    </div>
    <div className="highlights__body">
      {HIGHLIGHTS.map(item => (
        <div className="highlights__grid">
          <div className="highlights__border">
            <div className="highlights__title">
              {item.title.split(' ')[0]}
              <br />
              {item.title.split(/ (.+)/)[1]}
            </div>
            <div className="highlights__details">
              <span className="highlights__status is-high">
                <Icon path={mdiArrowUp} size={0.8} />
              </span>
              <div className="highlights__value">{item.value}</div>
            </div>
          </div>
          <div className="highlights__count">{item.count}</div>
        </div>
      ))}
    </div>
  </div>
);

export default HighLights;
