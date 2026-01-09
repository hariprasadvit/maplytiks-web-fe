/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import HomeHeader from 'components/homePage/HomeHeader';
import HomeFooter from 'components/homePage/HomeFooter';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import useDropdownClose from 'components/common/hooks/useDropdownClose';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const TYPE_TO_COLOR_MAP = {
  sports: {
    card: 'SportsItem',
    title: 'sportsHeader',
  },
  entertainment: {
    card: '',
    title: 'EntmentHeader',
  },
};

const BriefingList = ({ history, user, userSignOut }) => {
  const [searchString, setSearchString] = useState('');
  const [listType, setListType] = useState('submitted');

  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [date, setDate] = useState([new Date(), new Date()]);

  const datePicker = useRef();
  useDropdownClose(datePicker, setIsDatePickerActive);

  return (
    <div className="createProject">
      <HomeHeader
        user={user}
        isTop={false}
        applySticky={false}
        history={history}
        signout={userSignOut}
        showHomeIcon
      />
      <div className="ContentHeader">
        <div className="ContentHeaderDetails">
          <div className="spaceBetween">
            <div>
              <h5 className="briefHeader">Project Brief</h5>
              {/* <h6 className="ContentHeader__date">10th Aug 2019</h6> */}
            </div>
            <div className="searchBar">
              <Icon path={mdiMagnify} size={1} />
              <Input
                type="text"
                placeholder="Search"
                inputClass="search"
                onChangeHandlerCallback={setSearchString}
                value={searchString}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="breadCrumbWrapper">
        <div className="breadCrumb">
          <div className="breadCrumb__Content">
            <div className="breadCrumb-submited">
              <span
                className={listType === 'submitted' ? 'active' : ''}
                onClick={() => setListType('submitted')}
              >
                All Submitted
              </span>
              <span
                className={listType === 'drafts' ? 'active' : ''}
                onClick={() => setListType('drafts')}
              >
                All Drafts
              </span>
            </div>
            <div className="dateFilter">
              <div className="my-projects-date-range">
                <div
                  className="daterange-block"
                  onClick={() => setIsDatePickerActive(!isDatePickerActive)}
                >
                  <div className="daterange-sec">
                    <div className="daterange-label">From</div>
                    <div className="daterange-input">
                      {isDateSelected
                        ? moment(date.start).format('DD MMM YYYY')
                        : ''}
                    </div>
                  </div>
                  <div className="daterange-sec">
                    <div className="daterange-label">To</div>
                    <div className="daterange-input">
                      {isDateSelected
                        ? moment(date.end).format('DD MMM YYYY')
                        : ''}
                    </div>
                  </div>
                </div>
                <div ref={datePicker}>
                  {isDateSelected && (
                    <div
                      className="btn btn__primary"
                      onClick={() => {
                        setIsDateSelected(false);
                        setDate(null);
                      }}
                    >
                      <a className="btn button-cta">Reset</a>
                    </div>
                  )}
                  {!isDateSelected && <Button type="search" />}
                  {isDatePickerActive && (
                    <DateRangePicker
                      onSelect={da => {
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
            </div>
          </div>
          <div className="btn__primary">
            <button type="button">Create Project Brief</button>
          </div>
        </div>
      </div>
      <div className="submittedContent">
        <ul>
          <BriefingCard category="sports" type={listType} />
          <BriefingCard category="entertainment" type={listType} />
        </ul>
      </div>
      <HomeFooter history={history} />
    </div>
  );
};

BriefingList.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  userSignOut: PropTypes.func,
};

const BriefingCard = ({ type, category }) => (
  <li className={`submittedContent__list ${TYPE_TO_COLOR_MAP[category].card}`}>
    <h6>1</h6>
    <div className="submittedItem">
      <div className="">
        <h4 className={`${TYPE_TO_COLOR_MAP[category].title}`}>
          Entertainment
        </h4>
        <h5>San Antonio Spurs 2017-18 Regular Season</h5>
      </div>
      <div>
        <h4>Modified on</h4>
        <h5>12-03-19 7:30pm</h5>
      </div>
      <div>
        <h4>Modified on</h4>
        <h5>12-03-19 7:30pm</h5>
      </div>
      <div>
        <h4>Event Duration</h4>
        <h5>3/8/18 - 3/9/18</h5>
      </div>
    </div>
    <div className="listView">
      <span>{type === 'submitted' ? 'View' : 'Delete'}</span>
      <span>{type === 'submitted' ? 'Request Chnages' : 'Edit'}</span>
    </div>
  </li>
);

BriefingCard.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
};

export default BriefingList;
