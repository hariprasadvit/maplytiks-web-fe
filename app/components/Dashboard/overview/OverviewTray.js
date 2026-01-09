import React from 'react';
import PropTypes from 'prop-types';

const TrayItem = ({ img, title }) => (
  <div className="overview-tray-item">
    <div className="overview-tray-item-img">
      <img src={img} alt="" />
    </div>
    <div className="overview-tray-item-title">{title}</div>
  </div>
);

TrayItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

const OverviewTray = ({ data }) => (
  <div className="overview-tray">
    {data.map(d => (
      <TrayItem img={d.imageURL} title={d.displayName} />
    ))}
  </div>
);

OverviewTray.propTypes = {
  data: PropTypes.array,
};

export default OverviewTray;
