/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import {
  mdiMagnify,
  mdiChevronDown,
  mdiCalendar,
  mdiClose,
  mdiArrowRight,
} from '@mdi/js';
import { SEARCH_DROPDOWN_CONFIG } from 'utils/constants';

import useDropdownClose from 'components/common/hooks/useDropdownClose';
import useHomePageHook from 'components/homePage/hooks/useHomePageHook';
// import Button from 'components/common/Button';
import Input from 'components/common/Input';
import HomeHeader from './HomeHeader';
import Highlights from './Highlights';
import HomeFooter from './HomeFooter';
import ProjectCard from './ProjectCard';
import ReactGA from 'react-ga';

const Home = ({
  notifications,
  history,
  getProjectsNotification,
  userSignOut,
  kpi: { homeMain, project = {}, graph } = {},
  user = {},
  ...props
}) => {
  ReactGA.initialize('UA-129684001-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [isTop, setIsTop] = useState(true);
  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
  const [isSearchDropdownActive, setIsSearchDropdownActive] = useState(false);
  const [activeProjectCardIndex, setActiveProjectCardIndex] = useState(0);

  const searchBox = useRef();
  const datePicker = useRef();

  const {
    projects,
    availablePlatforms,
    searchString = '',
    date,
    isDateSelected,
    searchStringInputCallback,
    dateSelectionCallback,
    dateSelectionSatusCallback,
  } = useHomePageHook(props);
  useDropdownClose(searchBox, setIsSearchDropdownActive);
  useDropdownClose(datePicker, setIsDatePickerActive);

  const projectCardExpandCallBack = index => {
    if (activeProjectCardIndex !== index) setActiveProjectCardIndex(index);
  };

  const handleScroll = () => {
    // eslint-disable-next-line no-restricted-globals
    const scrollingTop = window.scrollY < screen.height - 120;
    if (scrollingTop !== isTop) {
      setIsTop(scrollingTop);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-wrapper">
      <HomeHeader
        user={user}
        isTop={isTop}
        history={history}
        signout={userSignOut}
      />
      <div className="paddingTop100">
        <Highlights data={homeMain} projectDetails={projects} />

        <div className="myProjects">
          {/* Projects Header Starts => search and date picker */}
          <div className="myProjects__header">
            <div className="myProjects__title">My Projects</div>
            <div className="myProjects__bottom">
              {/* Search */}
              <div
                className={`myProjects__search ${
                  isSearchDropdownActive ? 'show' : ''
                } `}
                ref={searchBox}
                onClick={() =>
                  setIsSearchDropdownActive(!isSearchDropdownActive)
                }
              >
                <div className="myProjects__searchTop">
                  <span className="search-icon">
                    <Icon path={mdiMagnify} size={1} />
                  </span>
                  <div className="myProjects__input">
                    <Input
                      type="text"
                      placeholder="Search your project ....."
                      inputClass="search"
                      className="myProjects__inputBox"
                      onChangeHandlerCallback={searchStringInputCallback}
                      value={searchString}
                    />
                    <span className="search-icon">
                      <Icon
                        path={mdiChevronDown}
                        size={1}
                        color="rgba(192,192,192,1)"
                      />
                    </span>
                  </div>
                </div>
                {isSearchDropdownActive && (
                  <div className="myProjects__searchDropdown">
                    <div className="myProjects__searchItem">
                      <h3>Search by project type</h3>
                      <div className="myProjects__searchRow">
                        {SEARCH_DROPDOWN_CONFIG.type.map(d => (
                          <div
                            key={d.key}
                            onClick={() => searchStringInputCallback(d.title)}
                          >
                            <div className="myProjects__searchImage">
                              <img src={d.icon} alt="type1" />
                            </div>
                            <span className="myProjects__searchName">
                              {d.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="myProjects__searchItem">
                      <h3>Search by project Platform</h3>
                      <div className="myProjects__searchRow">
                        {SEARCH_DROPDOWN_CONFIG.platform
                          .filter(d => availablePlatforms.includes(d.title))
                          .map(d => (
                            <div
                              key={d.key}
                              onClick={() => searchStringInputCallback(d.title)}
                            >
                              <div className="myProjects__searchImage">
                                <img src={d.icon} alt="" />
                              </div>
                              <span className="myProjects__searchName">
                                {d.title}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Datepicker */}
              <div className="myProjects__date-range">
                <span
                  className="daterange__icon ripple"
                  onClick={() => {
                    if (isDateSelected) {
                      dateSelectionSatusCallback(false);
                      dateSelectionCallback(null);
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
                        dateSelectionCallback(da);
                        dateSelectionSatusCallback(true);
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
          {/* Projects Header Ends => search and date picker */}

          {/* Projects Body Starts */}
          <div className="myProjects__body">
            {projects &&
              projects.map((prjct, i) => (
                <ProjectCard
                  key={prjct.projectName}
                  activeIndex={activeProjectCardIndex}
                  iterationIndex={i}
                  project={prjct}
                  history={history}
                  noticicationCall={getProjectsNotification}
                  notifications={notifications}
                  callback={projectCardExpandCallBack}
                  highlghtsData={project}
                  graphKpiData={graph}
                  highlghtsCall={props.getKpiStats}
                />
              ))}
          </div>
          {/* Projects Header Ends */}
        </div>
      </div>

      <HomeFooter history={history} />
    </div>
  );
};

Home.propTypes = {
  projects: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  notifications: PropTypes.object,
  kpi: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getKpiStats: PropTypes.func,
  userSignOut: PropTypes.func,
  getProjectsNotification: PropTypes.func.isRequired,
};
export default Home;
