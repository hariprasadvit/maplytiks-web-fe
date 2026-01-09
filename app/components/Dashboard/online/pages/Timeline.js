/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AnnotationChart from 'components/common/graphs/social/AnnotationChart';
import Icon from '@mdi/react';
import useDropdownClose from 'components/common/hooks/useDropdownClose';
import {
  mdiCalendar,
  mdiClose,
  mdiArrowRight,
  mdiChevronDown,
  mdiFilterOutline,
} from '@mdi/js';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { connect } from 'react-redux';
import SocialPlatformSelector from './socialPlatformSelector';

const DURATION_CONFIG = ['Minute'];
const totalObject = [];

const Timeline = ({
  data: {
    data = {},
    loading,
    // timelineType,
    toggleCallback,
    selectedInterval,
    selectedCategory,
    selectedInterUnit,
    selectedSocialUnit = [],
    selectedTimelineDateTime,
    intervalSelectionCallback,
    timelinecategorySelectionCallback,
    intervalSelectionValueCallback,
    timelinedatetimeCallback,
    socialsubplatform,
    timelinecategorySelectionCallbackID,
    timesocialsubplatform
  } = {},
  viewCategory: viewCategory = [],
  viewDuration: viewDuration = [],
  mediaPagesProp,
}) => {
  console.log('timelineData', socialsubplatform);
  const [toggle, setToggle] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownFActive, setDropdownFActive] = useState(false);
  const [isViewDropdownOpen, setViewDropDownOpen] = useState(false);
  const [isglobalDropdownOpen, setglobalDropdown] = useState(false);
  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const platformDropdown = useRef();
  const valueDropdown = useRef();
  const viewSelectionDropdown = useRef();
  const globalDropdown = useRef();
  const datePicker = useRef();
  const [dropvaluedownActive, setDropdvalueownActive] = useState(false);
  const [mediaPages, setMediaPages] = React.useState();
  const [twitterPage, setTwitterPage] = React.useState({});
  const [fbPage, setFbPage] = React.useState({});
  const [instaPage, setInstaPage] = React.useState({});

  let twitterObject = {};
  let fbObject = {};
  let instaObject = {};
  let twitterState = 'twittertrue';
  let fbState = 'fbtrue';
  let instaState = 'instatrue';

  const objects = iconState => {
    if(mediaPagesProp && mediaPagesProp.length >0){
    console.log('iconAndState', twitterState, fbState, instaState);
    twitterObject = {
      subplatform: 'Twitter',
      Pages:
        twitterState !== 'twitterfalse'
          ? mediaPagesProp.twitter.map(d => d.id)
          : [],
    };
    fbObject = {
      subplatform: 'Facebook',
      Pages:
        fbState !== 'fbfalse' ? mediaPagesProp.facebook.map(d => d.id) : [],
    };
    instaObject = {
      subplatform: 'Instagram',
      Pages:
        instaState !== 'instafalse'
          ? mediaPagesProp.instagram.map(d => d.id)
          : [],
    };
   }
  };

  const filterFromAll = React.useCallback(icon => {
    if(mediaPagesProp && mediaPagesProp.length >0){
    switch (icon) {
      case 'twitter':
        objects();
        setTwitterPage(
          mediaPagesProp.twitter.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      case 'fb':
        objects();
        setFbPage(
          mediaPagesProp.facebook.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      case 'insta':
        objects();
        setInstaPage(
          mediaPagesProp.instagram.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      default:
        setMediaPages({});
        break;
    }
    totalObject.push(twitterObject, fbObject, instaObject);
    if (totalObject.length > 3) {
      totalObject.splice(0, totalObject.length - 3);
      //console.log('totalObject', totalObject);
      timesocialsubplatform(totalObject)
    }
  }});

  React.useEffect(() => {
    setMediaPages(twitterPage);
    console.log('twitterPage', twitterPage);
  }, [twitterPage]);
  React.useEffect(() => {
    setMediaPages(fbPage);
    console.log('fbPage', fbPage);
  }, [fbPage]);
  React.useEffect(() => {
    setMediaPages(instaPage);
    console.log('instaPage', instaPage);
  }, [instaPage]);

  const iconClick = (icon, iconState) => {
    console.log(icon);
    switch (icon) {
      case 'twitter':
        twitterState = iconState;
        break;
      case 'fb':
        fbState = iconState;
        break;
      case 'insta':
        instaState = iconState;
        break;
      default:
        break;
    }
    filterFromAll(icon);
  };

  const iconClickMain = iconState => {
    // console.log('popup', iconState);
    // objects(iconState);
  };

  const iconClickValue = (valuesObject, platform) => {
    console.log('iconClickValue', valuesObject, platform);
    const temp = totalObject;
    if (platform === 'twitter') {
      twitterObject = {
        subplatform: 'Twitter',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Twitter' ? (totalObject[i] = twitterObject) : null
      );
      console.log('totalObjectTwitter', totalObject);
    }
    if (platform === 'fb') {
      fbObject = {
        subplatform: 'Facebook',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Facebook' ? (totalObject[i] = fbObject) : null
      );
      console.log('totalObjectFb', totalObject);
    }
    if (platform === 'insta') {
      instaObject = {
        subplatform: 'Instagram',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Instagram' ? (totalObject[i] = instaObject) : null
      );
      console.log('totalObjectInsta', totalObject);
    }
  };

  useDropdownClose(valueDropdown, setDropdvalueownActive);
  useDropdownClose(platformDropdown, setDropdownActive);
  useDropdownClose(viewSelectionDropdown, setViewDropDownOpen);
  useDropdownClose(globalDropdown, setglobalDropdown);
  useDropdownClose(datePicker, setIsDatePickerActive);
  const dropdownF = useRef();
  useDropdownClose(dropdownF, setDropdownFActive);

  useEffect(() => {
    toggleCallback(!toggle ? 'number' : 'rate');
  }, [toggle, toggleCallback]);

  return (
    <div className="platform__card">
      <div className="platform">
        <div className="platform__header">
          <h2
            className="platform__title"
            style={{ display: 'flex', marginTop: 5 }}
          >
            Timeline
          </h2>
          <Grid container spacing={0}>
            <Grid item xs={3} sm={2}>
              <ul
                className="matchsortBy__header"
                style={{ margin: 0, minWidth: 187.53 }}
                ref={dropdownF}
                onClick={() => {
                  setDropdownFActive(!dropdownFActive);
                }}
              >
                <li>
                  {/* <span>View By</span> */}
                  <h6>{selectedCategory}</h6>
                  <Icon path={mdiChevronDown} size={1} />
                  {dropdownFActive && (
                    <ul>
                      {viewCategory.map(d => (
                        <li
                          key={`social_timeline_${d.displayName}`}
                          className={
                            d.displayName === selectedCategory ? 'active' : ''
                          }
                          onClick={() => {
                            setDropdownFActive(false);
                            timelinecategorySelectionCallback(d.displayName);
                            timelinecategorySelectionCallbackID(d.id);
                          }}
                        >
                          {d.displayName}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </Grid>
            <Grid item xs={3} sm={4}>
              <div className="socialCrumbs__date-range">
                <span
                  className="socialdaterange__icon socialripple"
                  onClick={() => {
                    if (selectedTimelineDateTime) {
                      setIsDateSelected(false);
                      setDate(null);
                      timelinedatetimeCallback(null);
                    }
                    if (!selectedTimelineDateTime)
                      setIsDatePickerActive(!isDatePickerActive);
                  }}
                >
                  {selectedTimelineDateTime && (
                    <Icon path={mdiClose} size={1} color="#fff" />
                  )}
                  {!selectedTimelineDateTime && (
                    <Icon path={mdiCalendar} size={1} color="#fff" />
                  )}
                </span>
                <div className="socialdaterange__block">
                  <div className="socialdaterange__sec">
                    <div className="socialdaterange__label">
                      {selectedTimelineDateTime
                        ? moment(selectedTimelineDateTime.start).format(
                            'DD MMM YYYY'
                          )
                        : 'From'}
                    </div>
                  </div>
                  <Icon path={mdiArrowRight} size={0.9} />
                  <div className="socialdaterange__sec">
                    <div className="socialdaterange__label">
                      {selectedTimelineDateTime
                        ? moment(selectedTimelineDateTime.end).format(
                            'DD MMM YYYY'
                          )
                        : 'To'}
                    </div>
                  </div>
                </div>
                <div className="socialdaterange__dropdown" ref={datePicker}>
                  {isDatePickerActive && (
                    <DateRangePicker
                      onSelect={da => {
                        setDate(da);
                        setIsDateSelected(true);
                        setIsDatePickerActive(false);
                        timelinedatetimeCallback(da);
                      }}
                      value={selectedTimelineDateTime}
                      numberOfCalendars={2}
                    />
                  )}
                </div>
              </div>
            </Grid>
            {/* <Grid item  xs={3} sm={3} >
                    <div
                    className="socialCrumbs__toggle"
                    style={{ marginLeft: 40, marginRight: 10 }}
                  >
                    <h4 className={!toggle ? 'active' : ''}>By Number</h4>
                    <label className="switch">
                      <input type="checkbox" onChange={() => setToggle(!toggle)} />
                      <span className="slider round" />
                    </label>
                    <h4 className={toggle ? 'active' : ''}>Rate</h4>
                  </div>
              </Grid> */}
            <Grid item xs={6} sm={0}>
              <Grid container spacing={10}>
                <Grid item xs={5}>
                  <div style={{ display: 'flex' }}>
                    <ul
                      className="matchsortBy__header"
                      style={{ margin: 0, minWidth: 107.53 }}
                      ref={platformDropdown}
                      onClick={() => {
                        setDropdownActive(!dropdownActive);
                      }}
                    >
                      <li>
                        <span>Unit</span>
                        <h6>{selectedInterval}</h6>
                        <Icon path={mdiChevronDown} size={1} />
                        {dropdownActive && (
                          <ul>
                            {viewDuration.map(d => (
                              <li
                                key={`social_timeline_unit_${d.unit}`}
                                className={
                                  d.unit === selectedInterval ? 'active' : ''
                                }
                                onClick={() => {
                                  setDropdownActive(false);
                                  intervalSelectionValueCallback(d.unit);
                                }}
                              >
                                {d.unit}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                    <ul
                      className="matchsortBy__header"
                      style={{ margin: 0, minWidth: 107.53 }}
                      ref={valueDropdown}
                      onClick={() => {
                        setDropdvalueownActive(!dropvaluedownActive);
                      }}
                    >
                      <li>
                        <span>Value</span>
                        <h6>{selectedInterUnit}</h6>
                        <Icon path={mdiChevronDown} size={1} />
                        {dropvaluedownActive && (
                          <ul>
                            {selectedSocialUnit.map(d => (
                              <li
                                key={`social_timeline_value_${d}`}
                                className={
                                  d === selectedInterUnit ? 'active' : ''
                                }
                                onClick={() => {
                                  setDropdvalueownActive(false);
                                  intervalSelectionCallback(d);
                                }}
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                </Grid>
                {/* <Grid item xs={4}>
                </Grid> */}
                <Grid item xs={3} style={{ marginTop: -3 }}>
                  <div style={{ marginLeft: '7.5vw' }}>
                    <SocialPlatformSelector
                      mediaTypes={mediaPages}
                      iconClick={iconClick}
                      iconClickMain={iconClickMain}
                      iconClickValue={iconClickValue}
                      socialsubplatform={socialsubplatform}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="platform__body">
          <div className="platform__gragh">
            <div className="platform__graphSvg annotation-chart">
              <AnnotationChart
                {...data}
                loading={loading}
                selectedCategory={selectedCategory}
                socialsubplatform={socialsubplatform}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Timeline.propTypes = {
  data: PropTypes.object,
};

const mapStateToProps = state => ({
  mediaPagesProp: state.pageFilter.mediaPages,
});

// Timeline.propTypes = {
//   mediaPagesProp: PropTypes.object,
// };

// Timeline.defaultProps = {
//   mediaPagesProp: {
//     facebook: [{}],
//     Twitter: [{}],
//     instagram: [{}],
//   },
// };

export default connect(mapStateToProps)(Timeline);
