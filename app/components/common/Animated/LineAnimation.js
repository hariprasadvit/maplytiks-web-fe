import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

function LineAnimation({
  className,
  svgProps = {},
  children,
  anchorProps = {},
}) {
  const [animate, setAnimate] = useState(false);
  const classes = animate ? `${className} animate` : className;
  return (
    <Waypoint
      {...anchorProps}
      onEnter={() => {
        if (!animate) {
          setAnimate(true);
        }
      }}
    >
      <svg {...svgProps} className={classes}>
        {children}
      </svg>
    </Waypoint>
  );
}

LineAnimation.propTypes = {
  className: PropTypes.string,
  svgProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  anchorProps: PropTypes.object,
};

export default React.memo(LineAnimation);
