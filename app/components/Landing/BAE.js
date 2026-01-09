/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { BAE_MATRIX_CONFIG } from 'utils/constants';
import { animated, useSpring, config } from 'react-spring';
import LineAnimation from 'components/common/Animated/LineAnimation';
import Matrix from './Matrix';
import CourtImg from '../common/Animated/CourtImg';

const BAE_DATA_CONFIG = [
  { title: 'Appearance' },
  { title: 'Size' },
  { title: 'Location' },
  { title: 'Clutter' },
  { title: 'Continuous Exposure' },
];

const BAE = () => (
  <div className="fifth-block block">
    <LineAnimation
      svgProps={{
        viewBox: '0 0 534.85 225.96',
      }}
      className="line5"
    >
      <circle cx="524.35" cy="10.5" r="3" fill="#888d95" />
      <circle cx="524.35" cy="10.5" r="8" fill="none" stroke="#e2eaf4" />
      <path
        fill="none"
        stroke="#e2eaf4"
        d="M.35 225.61L211.42 13.5a10 10 0 0 1 9.09-2.94h295.71"
      />
    </LineAnimation>

    {/* <svg className="line5">
      <line
        x1="140"
        y1="11"
        x2="0"
        y2="151"
        style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1 }}
      />
      <line
        x1="140"
        y1="11"
        x2="490"
        y2="11"
        style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1 }}
      />
      <circle
        cx="500"
        cy="11"
        r="10"
        stroke="#B8BFC5"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="500" cy="11" r="4" fill="#B8BFC5" />
    </svg> */}

    <div className="center-short-block">
      <div className="title">Brand Advertising Equivalency</div>
      <div className="title title-highlight">Brand Valuation</div>
      <div className="content-sec">
        A proprietary tool that measures the holistic value (quantity and
        quality) of your brand exposure across all assets (location of brand on
        the screen) and platforms (linear TV, digital streaming, social media).
        The BAE value illustrates the net advertising value your cumulative
        on-screen brand exposure generated on that particular platform.
      </div>
    </div>
    <BAEToggler />
    <div className="fifth-block-overlay" />
  </div>
);

export default BAE;

const BAEToggler = () => {
  const [activeItem, setActiveItem] = useState(0);
  const inkBarAnimations = useSpring({
    config: config.gentle,
    top: (100 / 5) * activeItem,
  });
  return (
    <div className="fifth-block-sub-slider">
      <div className="fifth-block-sub-slider-left">
        <div className="section-title">Brand Advertising Equivalency</div>
        <div className="inkbar-track">
          <animated.div
            className="inkbar"
            style={{
              top: inkBarAnimations.top.interpolate(t => `${t}%`),
            }}
          />
          <ul className="fifth-block-sub-slider-list">
            {BAE_DATA_CONFIG.map((d, i) => (
              <li
                key={`BAE_${String(i)}_${d.title}`}
                className={activeItem === i ? 'active' : ''}
                onClick={() => setActiveItem(i)}
              >
                <div className="main-title">{d.title}</div>
                <div className="main-count">0{i + 1}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fifth-block-sub-slider-right">
        {BAE_MATRIX_CONFIG.map((d, i) => (
          <Matrix key={`${d.configKey}_${String(i)}`} {...d} />
        ))}
        <CourtImg activeItem={activeItem} />
      </div>
    </div>
  );
};
