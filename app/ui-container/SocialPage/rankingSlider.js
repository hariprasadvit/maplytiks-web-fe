/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Slider from 'react-slick';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Rankingcard from './rankingCard';

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
const RankingSlider = ({ height }) => {
  let slider = useRef();
  return (
    <div className="analyticSlider rank" style={{ height: `${height}` }}>
      <div className="analyticSlider__icon" onClick={() => slider.slickPrev()}>
        <Icon path={mdiChevronLeft} size={1.2} />
      </div>

      <div className="analyticSlider__content">
        <Slider ref={c => (slider = c)} {...settings}>
          <Rankingcard
            number="1."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="2."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="3."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="4."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="5."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="6."
            rankingVideo="https://via.placeholder.com/187x310"
          />
          <Rankingcard
            number="7."
            rankingVideo="https://via.placeholder.com/187x310"
          />
        </Slider>
      </div>

      <div
        className="analyticSlider__icon"
        onClick={() => slider.slickNext()}
        style={{ left: 'initial', right: 0 }}
      >
        <Icon path={mdiChevronRight} size={1.2} />
      </div>
    </div>
  );
};
RankingSlider.propTypes = {
  height: PropTypes.string,
};
export default RankingSlider;
