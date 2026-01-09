/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import Slider from 'react-slick';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import Icon from '@mdi/react';
import {
  mdiSignalCellularOutline,
  mdiChevronRight,
  mdiChevronLeft,
} from '@mdi/js';

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
        slidesToShow: 4.5,
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
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 565,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const AnalyticsKpi = ({ data = [],projectDetails }) => {
  //console.log("data-->",projectDetails)
  let slider = useRef();
  return (
    <div className="analyticSlider">
      {data.length > 4 && (
        <div
          className="analyticSlider__icon"
          onClick={() => slider.slickPrev()}
        >
          <Icon path={mdiChevronLeft} size={1.2} />
        </div>
      )}

      <div
        className="analyticSlider__content"
        style={{ justifyContent: 'center' }}
      >
        {data.length > 4 ? (
          <Slider ref={c => (slider = c)} {...settings}>
            {orderBy(data, ['orderID'], ['asc']).map(d => (
              <Durationcard
                title={d.heading || d.label}
                result={
                  typeof d.value === 'number' &&
                  d.unit !== 'HH:MM:SS' &&
                  String(Math.floor(d.value)).length > 3 ? (
                    <>
                      <>
                        {
                          _numberToHumanReadableFormatConverter(
                            d.value,
                            d.unit !== '#',
                            true,
                            projectDetails
                          )[0]
                        }
                      </>
                      <label style={{ fontSize: 25, color: '#000' }}>
                        {
                          _numberToHumanReadableFormatConverter(
                            d.value,
                            true,
                            true,
                            projectDetails
                          )[1]
                        }
                      </label>
                    </>
                  ) : d.unit === 'HH:MM:SS' ? (
                    secToString(d.value)
                  ) : typeof d.value === 'number' ? (
                    d.value.toFixed(d.unit !== '#' ? 2 : 0)
                  ) : (
                    d.value
                  )
                }
                type={d.unit !== '%' && d.unit !== '#' ? d.unit : ''}
                desc={d.comment}
                isPercent={d.unit === '%'}
              />
            ))}
          </Slider>
        ) : (
          orderBy(data, ['orderID'], ['asc']).map(d => (
            <Durationcard
              title={d.heading || d.label}
              result={
                typeof d.value === 'number' &&
                d.unit !== 'HH:MM:SS' &&
                String(Math.floor(d.value)).length > 3 ? (
                  <>
                    <>
                      {
                        _numberToHumanReadableFormatConverter(
                          d.value,
                          d.unit !== '#',
                          true,
                          projectDetails
                        )[0]
                      }
                    </>
                    <label style={{ fontSize: 25, color: '#000' }}>
                      {
                        _numberToHumanReadableFormatConverter(
                          d.value,
                          true,
                          true,
                          projectDetails
                        )[1]
                      }
                    </label>
                  </>
                ) : d.unit === 'HH:MM:SS' ? (
                  secToString(d.value)
                ) : typeof d.value === 'number' ? (
                  d.value.toFixed(d.unit !== '#' ? 2 : 0)
                ) : (
                  d.value
                )
              }
              type={d.unit !== '%' && d.unit !== '#' ? d.unit : ''}
              desc={d.comment}
              isPercent={d.unit === '%'}
            />
          ))
        )}
      </div>

      {data.length > 4 && (
        <div
          className="analyticSlider__icon"
          onClick={() => slider.slickNext()}
          style={{ left: 'initial', right: '5%' }}
        >
          <Icon path={mdiChevronRight} size={1.2} />
        </div>
      )}
    </div>
  );
};

AnalyticsKpi.propTypes = {
  data: PropTypes.array,
};

const Durationcard = ({ title, result, type, desc, isPercent }) => (
  <div className="durationCard">
    <div className="durationCard__header">
      <span className="durationCard__img">
        {' '}
        <Icon path={mdiSignalCellularOutline} size={0.8} color="#fff" />
      </span>
      <span className="durationCard__title">
        {title} {isPercent ? '%' : ''}
      </span>
    </div>
    <div className="durationCard__content">
      <h3 className="durationCard__result">{result}</h3>
      <span>{type}</span>
      <p className="durationCard__desc">{desc}</p>
      {((result && result.length > 11) ||
        (title && title.length > 34) ||
        (desc && desc.length > 75)) && (
        <div className="highlights__tooltipWrapper">
          <span className="highlights__tooltipWrapper__content">
            <span className="highlightLabel">{title}</span>
            <span className="highlightHeading">
              {result} {isPercent ? '(%)' : type ? `(${type})` : ''}
            </span>
            <span className="highlightdesc">{desc}</span>
          </span>
        </div>
      )}
    </div>
  </div>
);
Durationcard.propTypes = {
  title: PropTypes.string,
  result: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  isPercent: PropTypes.bool,
};

export default AnalyticsKpi;
