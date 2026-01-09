import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';

import { mdiChevronDown, mdiFilterOutline } from '@mdi/js';
const AnalyticBreadCrumb = ({ isStickyHeader, type = 'analytics' }) => (
  <div className={`analyticBreadCrumbs ${isStickyHeader && 'sticky'}`}>
    <div className="analyticBreadCrumbs__container">
      <div className="analyticBreadCrumbs__tabs">
        <span className="">Overview</span>
        <span className="active">Analytics</span>
      </div>

      <div className="analyticBreadCrumbs__filter">
        {type === 'analytics' && (
          <>
            <div className="platformMenu">
              <h5>Platform</h5>
              <div className="platformMenu-item ">
                <span>Broadcast</span>
                <Icon path={mdiChevronDown} size={1} />
              </div>
            </div>
            <div className="platformMenu">
              <h5>Platform</h5>
              <div className="platformMenu-item ">
                <span>Matches</span>
                <Icon path={mdiChevronDown} size={1} />
              </div>
            </div>
            <div
              className="analyticBreadCrumbs__toggle"
              style={{ marginLeft: 50 }}
            >
              <h4 className="active">Show Live matches</h4>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
              <h4>Show Live matches</h4>
            </div>
            <div className="platformFitter">
              <span className="active  ripple">
                <Icon path={mdiFilterOutline} size={1.2} fill="#fff" />
              </span>
            </div>
          </>
        )}
        {type === 'social' && (
          <>
            <div className="platformMenu">
              <h5>Platform</h5>
              <div className="platformMenu-item ">
                <span>Broadcast</span>
                <Icon path={mdiChevronDown} size={1} />
              </div>
            </div>

            <div className="platformFitter">
              <span className="active  ripple">
                <Icon path={mdiFilterOutline} size={1.2} fill="#fff" />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);
AnalyticBreadCrumb.propTypes = {
  isStickyHeader: PropTypes.bool,
  type: PropTypes.string,
};

export default AnalyticBreadCrumb;
