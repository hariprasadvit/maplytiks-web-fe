import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, config } from 'react-spring';
import LineAnimation from '../common/Animated/LineAnimation';
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const useBaseSpringAnimation = ({
  delay = 200,
  x = { from: 0, to: 1 },
} = {}) => {
  const [visibility, setVisibility] = useState(false);
  const props = useSpring({
    // reset: true,
    // reverse: visibility,
    from: { x: x.from },
    // x: visibility ? x.to : x.from,
    delay,
    config: config.slow,
    // onRest: () => setVisibility(!visibility)
  });
  return [props.x, setVisibility, visibility];
};

function OurStats({ stats }) {
  const [x, startAnimation] = useSpring(() => ({
    // reset: true,
    // reverse: visibility,
    from: { x: 0 },
    x: 0,
    delay: 200,
    config: config.slow,
    // onRest: () => setVisibility(!visibility)
  }));
  const enterCallback = () => {
    // if (!visibility) {
    startAnimation({
      to: { x: 1 },
    });
    // }
  };
  const totalDuration = 828861;
  // console.log(x);
  const BATracking = 800;
  const cummulativeBrandExp = 577091;
  const advertisementEquivalency = 12483203;
  console.log(stats);
  return (
    <Waypoint onEnter={enterCallback}>
      <div className="sixth-block block">
        <LineAnimation
          svgProps={{
            viewBox: '0 20 800 237.64',
          }}
          className="line7"
        >
          <path
            fill="none"
            stroke="#b8bfc5"
            strokeWidth=".75"
            d="M25.37 210.26l72.18-71.53a10 10 0 0 1 7-2.9h760.1a10 10 0 0 0"
          />
          <circle cx="16.38" cy="221.26" r="5" fill="#b8bfc5" />
          <circle
            cx="16.38"
            cy="221.26"
            r={14}
            fill="none"
            stroke="#b8bfc5"
            strokeWidth=".75"
            opacity=".8"
            style={{ isolation: 'isolate' }}
          />
        </LineAnimation>

        <LineAnimation
          svgProps={{
            viewBox: '0 0 561.64 211.64',
          }}
          className="line8"
        >
          <circle cx="10.38" cy="11.38" r="4" fill="#b8bfc5" />
          <circle
            cx="10.38"
            cy="11.38"
            r={10}
            fill="none"
            stroke="#b8bfc5"
            strokeWidth=".75"
            opacity=".8"
            style={{ isolation: 'isolate' }}
          />
          <path
            fill="none"
            stroke="#b8bfc5"
            strokeWidth=".75"
            d="M21.13,11h334a10,10,0,0,1,7,2.9L562,212"
            opacity=".8"
            style={{ isolation: 'isolate' }}
            transform="translate(-.63 -.62)"
          />
        </LineAnimation>
        <div className="random-block random-block-text random-27">
          analyzing...
        </div>
        <div className="random-block random-block-lg random-28">
          <div className="random-sec">
            220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
          </div>
        </div>
        <div className="container">
          <div className="section-title">Our Stats</div>
          <div className="count-block">
            <div className="count-left">
              <div className="count-grid">
                <animated.div className="count-num">
                  {x.x.interpolate(
                    ax => `${formatNumber(Math.round(ax * totalDuration))} s`,
                  )}
                </animated.div>
                <div className="count-label">Total Duration Tracked</div>
              </div>
              <div className="count-grid">
                <animated.div className="count-num">
                  {x.x.interpolate(ax => Math.round(ax * BATracking))}
                </animated.div>
                <div className="count-label">
                  Number of Brands/Asset Tracking
                </div>
              </div>
            </div>
            <div className="count-right">
              <div className="count-grid">
                <animated.div className="count-num">
                  {x.x.interpolate(
                    ax =>
                      `${formatNumber(Math.round(ax * cummulativeBrandExp))}`,
                  )}
                </animated.div>
                <div className="count-label">
                  Total Cumulative Brand Exposure
                </div>
              </div>
              <div className="count-grid">
                <animated.div className="count-num">
                  {x.x.interpolate(
                    ax =>
                      `${formatNumber(
                        Math.round(ax * advertisementEquivalency),
                      )} USD`,
                  )}
                </animated.div>
                <div className="count-label">
                  Brand Advertisement Equivalency
                </div>
              </div>
            </div>
          </div>
        </div>
        <video width="100%" autoPlay muted loop>
          <source
            src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v1/general/website/primary.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay" />
      </div>
    </Waypoint>
  );
}

export default OurStats;

OurStats.propTypes = {
  stats: PropTypes.array,
};
