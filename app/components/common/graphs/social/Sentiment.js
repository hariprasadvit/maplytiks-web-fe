/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
// import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiEmoticonSad, mdiEmoticon, mdiEmoticonNeutral } from '@mdi/js';

const COLOR_MAP = [
  { title: 'Negative', color: '#c7486a', icon: mdiEmoticonSad },
  { title: 'Neutral', color: '#a09c9b', icon: mdiEmoticonNeutral },
  { title: 'Positive', color: '#57be71', icon: mdiEmoticon },
];

function Sentiment({ width, height, margin = {}, data = {} }) {
  //console.log(width, height, margin);
  const total = Object.values(data).reduce((a, v) => a + v, 0);
  const negativePercent = (data.Negative / total) * 100;
  const neutralPercent = (data.Neutral / total) * 100;
  const positivePercent = (data.Positive / total) * 100;

  useEffect(() => {}, [data]);
  return (
    <>
      <div className="sentiment">
        <div className="sentiment-heading">SENTIMENT</div>
        <div className="sentiment-details">
          <div className="sentiment-status">
            {COLOR_MAP.map(d => (
              <div>
                <label>
                  <span style={{ backgroundColor: d.color }}>
                    <Icon path={d.icon} size={1} />
                  </span>
                  <h5 style={{ color: d.color }}>{d.title}</h5>
                </label>
                <label>
                  <h4 style={{ color: d.color }}>{data[d.title]}</h4>
                  <small>mentions</small>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg width={734} height={300}>
        <g width={694} height={260}>
          <rect
            width={694}
            height={40}
            rx={4}
            ry={4}
            fill="none"
            transform="translate(20, 80)"
          />
          <rect
            width={694 * (negativePercent / 100)}
            height={40}
            rx={4}
            fill="#c7486a"
            transform="translate(20, 80)"
          />
          <text
            fill="#c7486a"
            fontSize={16}
            fontWeight={600}
            transform="translate(20, 150)"
          >
            {negativePercent} %
          </text>
          <rect
            width={694 * (neutralPercent / 100)}
            height={40}
            fill="#a09c9b"
            transform={`translate(${694 * (negativePercent / 100)}, 80)`}
          />
          <text
            fill="#a09c9b"
            fontSize={16}
            fontWeight={600}
            transform={`translate(${694 * (negativePercent / 100)}, 150)`}
          >
            {neutralPercent} %
          </text>
          <rect
            width={694 * (positivePercent / 100)}
            height={40}
            rx={4}
            fill="#57be71"
            transform={`translate(${694 * (neutralPercent / 100) +
              694 * (negativePercent / 100) -
              1}, 80)`}
          />
          <text
            fill="#57be71"
            fontSize={16}
            fontWeight={600}
            transform={`translate(${694 * (neutralPercent / 100) +
              694 * (negativePercent / 100) -
              1}, 150)`}
          >
            {positivePercent} %
          </text>
        </g>
      </svg>
    </>
  );
}

Sentiment.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  data: PropTypes.object,
};

export default Sentiment;
