/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import Icon from '@mdi/react';
import Slider from 'react-slick';
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiSignalCellularOutline,
  mdiEye,
  mdiAccountCheck,
} from '@mdi/js';
import Durationcard from './durationCard';
// import PropTypes from 'prop-types';
const settings = {
  accessibility: true,
  // dots: true,
  infinite: true,
  // centerMode: true,
  speed: 1000,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 4,
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
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1930,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const AnalyticSlider = () => {
  let slider = useRef();
  return (
    <div className="analyticSlider">
      <div className="analyticSlider__icon" onClick={() => slider.slickPrev()}>
        <Icon path={mdiChevronLeft} size={1.2} />
      </div>

      <div className="analyticSlider__content">
        <Slider ref={c => (slider = c)} {...settings}>
          <Durationcard
            title="Cumulative Project Value"
            result="476.65k"
            type="&nbsp;"
            graphimg={mdiSignalCellularOutline}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Total Vision Duration Tracked"
            result="04:50:35"
            type="HH:MM:SS"
            graphimg={mdiSignalCellularOutline}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Cumulative Project Value"
            result="476.65k"
            type="&nbsp;"
            graphimg={mdiAccountCheck}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Best Performing Vision by Value"
            result="Race Day"
            type="&nbsp;"
            graphimg={mdiEye}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Total Vision Duration Tracked"
            result="04:50:35"
            type="HH:MM:SS"
            graphimg={mdiSignalCellularOutline}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Cumulative Project Value"
            result="476.65k"
            type="&nbsp;"
            graphimg={mdiSignalCellularOutline}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
          />
          <Durationcard
            title="Total Vision Duration Tracked"
            result="04:50:35"
            type="HH:MM:SS"
            graphimg={mdiSignalCellularOutline}
            desc="Total Vision Duration for the listed vision tracked in the Broadcast"
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
// AnalyticSlider.propTypes = {
//   title: PropTypes.string,
//   date: PropTypes.string,
//   type: PropTypes.string,
// };
export default AnalyticSlider;
