/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Slider from 'react-slick';
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiSignalCellularOutline,
  mdiEye,
  mdiAccountCheck,
} from '@mdi/js';
import Highlightcard from './highlightCard';

const settings = {
  accessibility: true,
  // dots: true,
  infinite: true,
  // centerMode: true,
  speed: 1000,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2150,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1930,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};
const SocialSlider = ({ height }) => {
  let slider = useRef();
  return (
    <div
      className="analyticSlider socialSlider"
      style={{ height: `${height}` }}
    >
      <div className="analyticSlider__icon" onClick={() => slider.slickPrev()}>
        <Icon path={mdiChevronLeft} size={1.2} />
      </div>

      <div className="analyticSlider__content">
        <Slider ref={c => (slider = c)} {...settings}>
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiSignalCellularOutline}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
            // desc2="nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiSignalCellularOutline}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiAccountCheck}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiEye}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiSignalCellularOutline}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiSignalCellularOutline}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
          <Highlightcard
            title="Number of Posts"
            result="256"
            text="TOTAL POST"
            graphimg={mdiSignalCellularOutline}
            desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
          />
        </Slider>
      </div>

      <div
        className="analyticSlider__icon"
        onClick={() => slider.slickNext()}
        style={{ left: 'initial', right: 90 }}
      >
        <Icon path={mdiChevronRight} size={1.2} />
      </div>
    </div>
  );
};
SocialSlider.propTypes = {
  height: PropTypes.string,
};
export default SocialSlider;
