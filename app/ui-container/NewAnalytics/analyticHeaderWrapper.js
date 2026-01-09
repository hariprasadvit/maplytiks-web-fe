import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import analyticHeaderLogo from '../../images/fifa.png';

const AnalyticHeader = ({ title, date, type, scrollCallback }) => {
  const [isSticky, setIsStickyActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // setOffsetTop(dashboardContainer.current.offsetTop);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 113) {
      setIsStickyActive(true);
      scrollCallback(true);
    }
    if (window.scrollY < 113) {
      setIsStickyActive(false);
      scrollCallback(false);
    }
  };
  return (
    <div className="analyticHeader">
      <div className={`analyticHeader__wrapper ${isSticky && 'sticky'}`}>
        <div className="analyticHeader__details">
          <div className="analyticHeader__status">
            <div className="analyticHeader__logo">
              <img src={analyticHeaderLogo} alt="" />
            </div>
            <div className="analyticHeader__title">
              <h3>{title}</h3>
              <div className="analyticHeader__date">
                <h4>{date}</h4>
                <span className="active">{type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
AnalyticHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  scrollCallback: PropTypes.func,
};
export default AnalyticHeader;
