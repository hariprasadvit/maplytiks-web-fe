import React from 'react';
import PropTypes from 'prop-types';

const GraphEmptyState = ({
  width,
  height,
  customTranslate,
  customTextTranslate,
}) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g
        id="Graph_revised"
        data-name="Graph revised"
        transform={customTranslate || 'translate(12155, 4925)'}
      >
        <rect
          id="Rectangle_863"
          data-name="Rectangle 863"
          width="112"
          height="76"
          rx="5"
          transform="translate(-11585 -4845)"
          fill="#f6f9fd"
        />
        <g
          id="Group_4383"
          data-name="Group 4383"
          transform="translate(-347.782 -8.311)"
        >
          <g
            id="Group_4381"
            data-name="Group 4381"
            transform="translate(-11254.722 -5091.163)"
            opacity="0.6"
          >
            <path
              id="Path_10198"
              data-name="Path 10198"
              d="M45.686,286.791a3.591,3.591,0,1,1-3.59-3.59A3.574,3.574,0,0,1,45.686,286.791Z"
              transform="translate(0 6.02)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x2="12.17"
              y2="4.629"
              transform="translate(45.453 294.087)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_10199"
              data-name="Path 10199"
              d="M58.462,289.245a3.592,3.592,0,1,1-1.9-.542A3.59,3.59,0,0,1,58.462,289.245Z"
              transform="translate(4.416 7.699)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              id="Line_12"
              data-name="Line 12"
              y1="19.518"
              x2="12.172"
              transform="translate(62.878 277.426)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_10200"
              data-name="Path 10200"
              d="M72.389,272.666a3.591,3.591,0,1,1-3.59-3.59A3.583,3.583,0,0,1,72.389,272.666Z"
              transform="translate(8.148 1.709)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <line
              id="Line_13"
              data-name="Line 13"
              x2="8.079"
              y2="8.358"
              transform="translate(79.442 276.959)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_10201"
              data-name="Path 10201"
              d="M82.4,283.028a3.591,3.591,0,1,1-3.592-3.592A3.591,3.591,0,0,1,82.4,283.028Z"
              transform="translate(11.204 4.871)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_10203"
              data-name="Path 10203"
              d="M0,21.55,16.129,0"
              transform="translate(92.168 263.474)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <path
              id="Path_10202"
              data-name="Path 10202"
              d="M88.492,263.98l4.551-.506.506,4.551"
              transform="translate(15.254 0)"
              fill="none"
              stroke="#c3002b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
          <g
            id="Group_4382"
            data-name="Group 4382"
            transform="translate(141 -51)"
            opacity="0.5"
          >
            <rect
              id="Rectangle_864"
              data-name="Rectangle 864"
              width="10"
              height="3"
              transform="translate(-11357 -4721)"
              fill="#c3002b"
              opacity="0.3"
            />
            <rect
              id="Rectangle_865"
              data-name="Rectangle 865"
              width="10"
              height="3"
              transform="translate(-11342 -4721)"
              fill="#c3002b"
              opacity="0.3"
            />
            <rect
              id="Rectangle_866"
              data-name="Rectangle 866"
              width="10"
              height="3"
              transform="translate(-11327 -4721)"
              fill="#c3002b"
              opacity="0.3"
            />
            <rect
              id="Rectangle_867"
              data-name="Rectangle 867"
              width="10"
              height="3"
              transform="translate(-11312 -4721)"
              fill="#c3002b"
              opacity="0.3"
            />
            <rect
              id="Rectangle_868"
              data-name="Rectangle 868"
              width="10"
              height="3"
              transform="translate(-11297 -4721)"
              fill="#c3002b"
              opacity="0.3"
            />
          </g>
        </g>
        <ellipse
          id="Ellipse_37"
          data-name="Ellipse 37"
          cx="52"
          cy="7"
          rx="52"
          ry="7"
          transform="translate(-11581 -4754)"
          fill="#f6f9fd"
          opacity="0.6"
        />
      </g>
    </svg>

    <text
      transform={
        customTextTranslate || `translate(${width / 2.24},${height / 1.6})`
      }
      fill="#3a5b71"
      fillOpacity={0.4}
      style={{
        fontSize: '18px',
      }}
    >
      No Insights Available
    </text>
  </>
);

GraphEmptyState.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  customTranslate: PropTypes.string,
  customTextTranslate: PropTypes.string,
};

export default GraphEmptyState;
