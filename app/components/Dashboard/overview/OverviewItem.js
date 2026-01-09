/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OverviewTray from './OverviewTray';

const OverviewItem = ({
  data: {
    type,
    mainImg,
    category,
    title,
    modelsCount,
    visionType,
    hasTray,
    iterationIndex,
    activeIndex,
    callback,
    trayData,
    eventDate,
    teamAName,
    teamBName,
    teamAImage,
    teamBImage,
  } = {},
}) => {
  const [isTrayActive, setTrayIsActive] = useState(false);

  return (
    <div
      className={`overview-card ${
        activeIndex === iterationIndex && isTrayActive ? 'show' : ''
      }`}
    >
      <div
        className={`overview-card-top ${
          type !== 'sponsors' ? 'overview-card-top-hover' : ''
        }`}
        onClick={() => {
          setTrayIsActive(!isTrayActive);
          callback(iterationIndex);
        }}
      >
        {type !== 'sponsors' && (
          <>
            <div className="overview-card-top-details">
              {category !== 'platforms' && (
                <div className="overview-card-top-title">{title}</div>
              )}
              {category === 'visions' && (
                <>
                  {/* <div className="overview-card-top-subtitle">
                    Match 1 : Wembley
                  </div> */}
                  <div className="overview-card-top-date">{`${new Date(
                    eventDate,
                  ).getDate()}
                  ${new Date(eventDate).getMonthName()}
                  ${new Date(eventDate).getFullYear()}`}</div>
                </>
              )}
            </div>
            {visionType === 'team' && (
              <div className="overview-card-bottom">
                <span className="text-underline">View Team</span>
              </div>
            )}
            {visionType !== 'team' && (
              <div className="overview-card-bottom">
                {type !== 'episodes' && visionType === 'singles' && (
                  <div className="overview-card-bottom-team">
                    <div className="overview-card-bottom-flag">
                      <img src={teamAImage} alt="" />
                    </div>
                    <h6>{teamAName}</h6>
                  </div>
                )}
                {type === 'episodes' && category === 'visions' && (
                  <>
                    <div className="overview-card-bottom-text">
                      <p>Chowdiah Meorial Hall</p>
                      <p>Bengaluru</p>
                    </div>
                  </>
                )}
                {type !== 'episodes' && visionType === 'singles' && (
                  <>
                    <div className="overview-card-bottom-vs">vs</div>
                    <div className="overview-card-bottom-team">
                      <div className="overview-card-bottom-flag">
                        <img src={teamBImage} alt="" />
                      </div>
                      <h6>{teamBName}</h6>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}

        <div
          className={`overview-card-top-image   ${
            type === 'sponsors' ? 'overview-card-sponsor-image' : ''
          }`}
        >
          <img src={mainImg} alt="" />
          {category !== 'platforms' && (
            <div className="overview-card-top-overlay" />
          )}
        </div>
      </div>
      {type === 'sponsors' && (
        <div className="overview-card-bottom">
          <div className="overview-card-bottom-title">{title}</div>
          {category !== 'platforms' && (
            <div className="overview-card-bottom-subtitle">
              ({modelsCount} Models)
            </div>
          )}
        </div>
      )}
      {hasTray && isTrayActive && activeIndex === iterationIndex && (
        <OverviewTray data={trayData} />
      )}
    </div>
  );
};

OverviewItem.propTypes = {
  // type: PropTypes.string,
  // mainImg: PropTypes.string,
  // category: PropTypes.string,
  // title: PropTypes.string,
  // modelsCount: PropTypes.number,
  // iterationIndex: PropTypes.number,
  // activeIndex: PropTypes.number,
  // visionType: PropTypes.string,
  // hasTray: PropTypes.bool,
  // callback: PropTypes.func,
  // trayData: PropTypes.array,
  data: PropTypes.object,
};

export default OverviewItem;
