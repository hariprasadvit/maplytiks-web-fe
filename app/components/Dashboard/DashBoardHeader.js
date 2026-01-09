/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Icon from '@mdi/react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import Button from 'components/common/Button';
import moment from 'moment';
import {
  mdiCalendar,
  mdiClose,
  mdiArrowRight,
  mdiChevronDown,
  mdiFilterOutline,
} from '@mdi/js';
import useDropdownClose from 'components/common/hooks/useDropdownClose';

const MEDIA_MAP = {
  BC: 'Broadcast',
  OTT: 'Over-The-Top',
  SM: 'Social',
  DG: 'Digital',
  OL: 'Online',
  PA: 'Paper',
};

const DashBoardHeader = ({
  history,
  data,
  activeTab,
  activeMainDropDownItem,
  mediumSelected,
  mediumSelectCallback,
  viewDropdownList = [],
  viewSelectionCallback,
  liveToggleCallback,
  liveToggleState,
  visionAnalogous,
  filterToggle,
  stickyCallback,
  isAnalysis,
  datatimeCallback,
  callbackrefresh,
  liveToggleStaterefresh
}) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [isViewDropdownOpen, setViewDropDownOpen] = useState(false);
  const [isglobalDropdownOpen, setglobalDropdown] = useState(false);
  const [isSticky, setIsStickyActive] = useState(false);
  const [selectedTab] = useState(activeTab);
  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const platformDropdown = useRef();
  const viewSelectionDropdown = useRef();
  const globalDropdown = useRef();
  const datePicker = useRef();

  useDropdownClose(platformDropdown, setDropDownActive);
  useDropdownClose(viewSelectionDropdown, setViewDropDownOpen);
  useDropdownClose(globalDropdown, setglobalDropdown);
  useDropdownClose(datePicker, setIsDatePickerActive);

  const projectDetails = JSON.parse(data.projectDetails);
  const { platforms } = JSON.parse(data.projectDetails);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 113) {
      setIsStickyActive(true);
      stickyCallback(true);
    }
    if (window.scrollY < 113) {
      setIsStickyActive(false);
      stickyCallback(false);
    }
  };

  const tabSelectionHandler = type => {
    const redirectionQuery = qs.stringify({ ...data, type });
    history.push(`/dashboard?${redirectionQuery}`);
  };

  return (
    <>
      <div className="analyticHeader">
        <div
          className={`analyticHeader__wrapper ${isSticky ? 'sticky' : ``}`}
          style={{
            background: isSticky
              ? '#0d0d0d'
              : `linear-gradient(0deg,rgba(0, 0, 0, 0.65),rgba(13, 13, 13, 0.25)),url(${
                  data.eventImage
                })`,
          }}
        >
          <div className="analyticHeader__details">
            <div className="analyticHeader__status">
              <div className="analyticHeader__logo">
                <img src={projectDetails.projectImage} alt="" />
              </div>
              <div className="analyticHeader__title">
                <h3>{projectDetails.projectName}</h3>
                <div className="analyticHeader__date">
                  <h4>{projectDetails.projectDisplayDate}</h4>
                  <span className="active">{data.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`analyticBreadCrumbs ${isSticky ? 'sticky' : ''}`}>
        <div className="analyticBreadCrumbs__container">
          <div className="analyticBreadCrumbs__tabs">
            <span
              className={selectedTab === 'overview' ? 'active' : ''}
              onClick={() => tabSelectionHandler('overview')}
            >
              Overview
            </span>
            {/* <span>Key Metrics</span> */}
            <span
              className={selectedTab === 'analytics' ? 'active' : ''}
              onClick={() => tabSelectionHandler('analytics')}
            >
              Analytics
            </span>
          </div>

          {isAnalysis && (
            <div className="analyticBreadCrumbs__filter">
              <div className="platformMenu">
                <h5>Platform</h5>
                <div
                  className="platformMenu-item "
                  onClick={() => setDropDownActive(!dropDownActive)}
                >
                  <span>{MEDIA_MAP[mediumSelected]}</span>
                  <Icon path={mdiChevronDown} size={1} />
                  {dropDownActive && (
                    <ul
                      className="platformMenu-item__dropdown"
                      ref={platformDropdown}
                    >
                      {platforms.includes('BC') && (
                        <li
                          className={mediumSelected === 'BC' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('BC')}
                        >
                          Broadcast
                        </li>
                      )}
                      {platforms.includes('OTT') && (
                        <li
                          className={mediumSelected === 'OTT' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('OTT')}
                        >
                          Over-The-Top
                        </li>
                      )}
                      {platforms.includes('SM') && (
                        <li
                          className={mediumSelected === 'SM' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('SM')}
                        >
                          Social
                        </li>
                      )}
                      {platforms.includes('DG') && (
                        <li
                          className={mediumSelected === 'DG' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('DG')}
                        >
                          Digital
                        </li>
                      )}
                      {platforms.includes('OL') && (
                        <li
                          className={mediumSelected === 'OL' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('OL')}
                        >
                          Online
                        </li>
                      )}
                      {platforms.includes('PA') && (
                        <li
                          className={mediumSelected === 'PA' ? 'active' : ''}
                          onClick={() => mediumSelectCallback('PA')}
                        >
                          Paper
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
              { (mediumSelected == 'BC'  ||  mediumSelected == 'OTT' ||  mediumSelected == 'DG') && (
                <div className="platformMenu">
                  <h5>View</h5>
                  <div
                    className="platformMenu-item "
                    onClick={() => setViewDropDownOpen(!isViewDropdownOpen)}
                  >
                    <span>{activeMainDropDownItem}</span>
                    <Icon path={mdiChevronDown} size={1} />
                    {isViewDropdownOpen && (
                      <ul
                        className="platformMenu-item__dropdown"
                        ref={viewSelectionDropdown}
                      >
                        {viewDropdownList.map(d => (
                         d !="GlobalMarket" && ( <li
                            className={
                              activeMainDropDownItem === d ? 'active' : ''
                            }
                            key={`DASHBOARD_HEADER_VIEW_ITEM_${d}`}
                            onClick={() => viewSelectionCallback(d, 0)}
                          >
                            {d}
                          </li>)
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
              {mediumSelected != 'BC' && mediumSelected != 'OTT' && (  // Removed by palanivelayutham
                 <div className="analyticBreadCrumbs__date-range">
                  <span
                    className="daterange__icon ripple"
                    onClick={() => {
                      if (isDateSelected) {
                        setIsDateSelected(false);
                        setDate(null);
                        datatimeCallback(null);
                      }
                      if (!isDateSelected)
                        setIsDatePickerActive(!isDatePickerActive);
                    }}
                  >
                    {isDateSelected && (
                      <Icon path={mdiClose} size={1} color="#fff" />
                    )}
                    {!isDateSelected && (
                      <Icon path={mdiCalendar} size={1} color="#fff" />
                    )}
                  </span>
                  <div className="daterange__block">
                    <div className="daterange__sec">
                      <div className="daterange__label">
                        {isDateSelected
                          ? moment(date.start).format('DD MMM YYYY')
                          : 'From'}
                      </div>
                    </div>
                    <Icon path={mdiArrowRight} size={0.8} />
                    <div className="daterange__sec">
                      <div className="daterange__label">
                        {isDateSelected
                          ? moment(date.end).format('DD MMM YYYY')
                          : 'To'}
                      </div>
                    </div>
                  </div>
                  <div className="daterange__dropdown" ref={datePicker}>
                    {isDatePickerActive && (
                      <DateRangePicker
                        onSelect={da => {
                          datatimeCallback(da)
                          setDate(da);
                          setIsDateSelected(true);
                          setIsDatePickerActive(false);
                        }}
                        value={date}
                        numberOfCalendars={2}
                      />
                    )}
                  </div>
                </div>
              )}

              {data && data.isProjectLive !== 'false' && (
                <div
                  className="analyticBreadCrumbs__toggle"
                  style={{ marginLeft: 50 }}
                >
                  <h4 className="active">
                    {!liveToggleState
                      ? `Show Live ${visionAnalogous || ''}`
                      : `Live ${visionAnalogous || ''}`}
                  </h4>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={liveToggleCallback}
                      checked={liveToggleState}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              )}

              {data && liveToggleState== true && (
                <div
                  className="analyticBreadCrumbs__toggle"
                  style={{ marginLeft: 50 }}
                >
                  <h4 className="active">
                    {!liveToggleStaterefresh
                      ? `Auto-Refresh`
                      : `Stop Auto-Refresh`}
                  </h4>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={callbackrefresh}
                      checked={liveToggleStaterefresh}
                    />
                    <span className="slider round" />
                  </label>
                </div>
              )}


             { (mediumSelected == 'BC' || mediumSelected == 'OTT') && ( <div className="platformFitter" onClick={filterToggle}>
                
                <span className="active  ripple">
                  <Icon path={mdiFilterOutline} size={2} fill="#fff" />
                </span>
                <div style={{marginLeft:50}}>
                   Filter
                </div>
              </div>)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

DashBoardHeader.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
  activeTab: PropTypes.string,
  activeMainDropDownItem: PropTypes.string,
  mediumSelected: PropTypes.string,
  mediumSelectCallback: PropTypes.func,
  viewDropdownList: PropTypes.array,
  viewSelectionCallback: PropTypes.func,
  liveToggleCallback: PropTypes.func,
  liveToggleState: PropTypes.bool,
  visionAnalogous: PropTypes.string,
  filterToggle: PropTypes.func,
  stickyCallback: PropTypes.func,
  isAnalysis: PropTypes.bool,
  callbackrefresh: PropTypes.func,
  liveToggleStaterefresh:PropTypes.bool,
};

export default DashBoardHeader;
