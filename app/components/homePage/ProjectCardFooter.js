/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Slider from 'react-slick';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

const ProjectCardFooter = ({ notifications, liveClickHandler }) => {
  const [activeNotification, setActiveNotification] = useState('projectStatus');
  const [activeSlide, setActiveSlide] = useState(0);

  const [currentNotificationType, setCurrentNotificationType] = useState(
    notifications[activeNotification],
  );

  let slider = useRef();

  const settings = {
    accessibility: true,
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  useEffect(() => {
    setCurrentNotificationType(notifications[activeNotification]);
  }, [activeNotification, notifications]);

  return (
    <div className="programs__dataFooter">
      <div className="programs__dataStatus">
        <div
          className={`programs__dataStatus-left ${
            activeNotification === 'projectStatus' ? 'active' : ''
          }`}
          onClick={() => {
            setActiveNotification('projectStatus');
          }}
        >
          Project status
        </div>
        <div
          className={`programs__dataStatus-right ${
            activeNotification === 'projectLive' ? 'active' : ''
          }`}
          onClick={() => {
            setActiveNotification('projectLive');
          }}
        >
          M-Live
        </div>
      </div>

      {currentNotificationType && currentNotificationType.length > 0 && (
        //  eslint-disable-next-line no-return-assign
        <Slider ref={c => (slider = c)} {...settings}>
          {currentNotificationType.map((d, i) => (
            <div
              className="programs__dataUpdate"
              onClick={e => {
                if (activeNotification === 'projectLive') {
                  liveClickHandler(
                    e,
                    'dashboard',
                    true,
                    [currentNotificationType[i].visionID],
                    true,
                  );
                }
              }}
            >
              {d.comment}
            </div>
          ))}
        </Slider>
      )}

      {currentNotificationType && currentNotificationType.length > 0 && (
        <div className="programs__dataPagination">
          {currentNotificationType.length > 1 && (
            <>
              <span className="programs__dataPagenumber">
                {activeSlide + 1}/{currentNotificationType.length}
              </span>
              <div className="highlights__header-right">
                <div className="ripple" onClick={() => slider.slickPrev()}>
                  <Icon path={mdiChevronLeft} size={0.9} color="#fff" />
                </div>
                <div className="ripple" onClick={() => slider.slickNext()}>
                  {' '}
                  <Icon path={mdiChevronRight} size={0.9} color="#fff" />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

ProjectCardFooter.propTypes = {
  notifications: PropTypes.object,
  liveClickHandler: PropTypes.func,
};

export default ProjectCardFooter;
