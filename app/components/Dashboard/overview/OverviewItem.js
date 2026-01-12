/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OverviewTray from './OverviewTray';

// Sci-Fi themed SVG illustration for platforms
const PlatformIllustration = ({ title }) => {
  // Determine icon based on platform type
  const getIconPath = () => {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('broadcast') || lowerTitle.includes('tv')) {
      // TV/Monitor icon
      return (
        <>
          <rect x="25" y="30" width="70" height="45" rx="4" fill="none" stroke="url(#platformGrad)" strokeWidth="2"/>
          <rect x="30" y="35" width="60" height="35" rx="2" fill="rgba(255,107,53,0.1)"/>
          <path d="M45 80 L55 90 M75 80 L65 90 M55 90 L65 90" stroke="url(#platformGrad)" strokeWidth="2" fill="none"/>
          <circle cx="60" cy="52" r="12" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5" opacity="0.6"/>
          <polygon points="56,48 56,58 66,53" fill="url(#platformGrad)" opacity="0.8"/>
        </>
      );
    } else if (lowerTitle.includes('ott') || lowerTitle.includes('stream')) {
      // Streaming/OTT icon
      return (
        <>
          <circle cx="60" cy="55" r="30" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5" opacity="0.3"/>
          <circle cx="60" cy="55" r="22" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="60" cy="55" r="14" fill="none" stroke="url(#platformGrad)" strokeWidth="2"/>
          <polygon points="56,50 56,62 68,56" fill="url(#platformGrad)"/>
          <path d="M35 35 Q60 20 85 35" stroke="url(#platformGrad)" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <path d="M30 30 Q60 10 90 30" stroke="url(#platformGrad)" strokeWidth="1" fill="none" opacity="0.3"/>
        </>
      );
    } else if (lowerTitle.includes('social') || lowerTitle.includes('media')) {
      // Social media icon
      return (
        <>
          <circle cx="60" cy="45" r="15" fill="none" stroke="url(#platformGrad)" strokeWidth="2"/>
          <circle cx="35" cy="70" r="10" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5" opacity="0.7"/>
          <circle cx="85" cy="70" r="10" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5" opacity="0.7"/>
          <line x1="50" y1="55" x2="42" y2="62" stroke="url(#platformGrad)" strokeWidth="1.5"/>
          <line x1="70" y1="55" x2="78" y2="62" stroke="url(#platformGrad)" strokeWidth="1.5"/>
          <circle cx="60" cy="45" r="6" fill="url(#platformGrad)" opacity="0.3"/>
        </>
      );
    } else if (lowerTitle.includes('digital') || lowerTitle.includes('online')) {
      // Digital/Web icon
      return (
        <>
          <circle cx="60" cy="55" r="28" fill="none" stroke="url(#platformGrad)" strokeWidth="1.5"/>
          <ellipse cx="60" cy="55" rx="28" ry="12" fill="none" stroke="url(#platformGrad)" strokeWidth="1" opacity="0.6"/>
          <ellipse cx="60" cy="55" rx="12" ry="28" fill="none" stroke="url(#platformGrad)" strokeWidth="1" opacity="0.6"/>
          <line x1="32" y1="55" x2="88" y2="55" stroke="url(#platformGrad)" strokeWidth="1" opacity="0.4"/>
          <line x1="60" y1="27" x2="60" y2="83" stroke="url(#platformGrad)" strokeWidth="1" opacity="0.4"/>
        </>
      );
    }
    // Default analytics/chart icon
    return (
      <>
        <rect x="28" y="35" width="64" height="50" rx="4" fill="none" stroke="url(#platformGrad)" strokeWidth="2"/>
        <path d="M35 75 L45 60 L55 68 L70 45 L85 55" stroke="url(#platformGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="45" cy="60" r="3" fill="url(#platformGrad)"/>
        <circle cx="55" cy="68" r="3" fill="url(#platformGrad)"/>
        <circle cx="70" cy="45" r="3" fill="url(#platformGrad)"/>
        <circle cx="85" cy="55" r="3" fill="url(#platformGrad)"/>
      </>
    );
  };

  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="platformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35"/>
          <stop offset="50%" stopColor="#F7931E"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </linearGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,107,53,0.3)"/>
          <stop offset="100%" stopColor="rgba(255,107,53,0)"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="60" cy="60" r="50" fill="url(#glowGrad)"/>

      {/* Animated circuit lines */}
      <g opacity="0.3">
        <line x1="10" y1="20" x2="30" y2="20" stroke="#FF6B35" strokeWidth="1">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="90" y1="100" x2="110" y2="100" stroke="#FF6B35" strokeWidth="1">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
        </line>
        <circle cx="30" cy="20" r="2" fill="#FF6B35">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="90" cy="100" r="2" fill="#FF6B35">
          <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Main icon */}
      <g filter="url(#glow)">
        {getIconPath()}
      </g>

      {/* Corner accents */}
      <path d="M10 10 L25 10 L25 12 L12 12 L12 25 L10 25 Z" fill="url(#platformGrad)" opacity="0.4"/>
      <path d="M110 110 L95 110 L95 108 L108 108 L108 95 L110 95 Z" fill="url(#platformGrad)" opacity="0.4"/>
    </svg>
  );
};

PlatformIllustration.propTypes = {
  title: PropTypes.string,
};

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
          } ${category === 'platforms' ? 'platform-illustration' : ''}`}
        >
          {category === 'platforms' ? (
            <PlatformIllustration title={title} />
          ) : (
            <img src={mainImg} alt="" />
          )}
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
