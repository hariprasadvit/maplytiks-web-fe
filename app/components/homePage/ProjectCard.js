/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import moment from 'moment';
import spinner from 'images/spinner.gif';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Donut from 'components/common/graphs/Donut';
import Button from 'components/common/Button';
import useProjectCardHook from 'components/homePage/hooks/useProjectCardHook';

import { DONUT_MARGIN, MEDIA_CONSTANTS } from 'utils/constants';
import {
  secToString,
  _numberToHumanReadableFormatConverter,
} from 'utils/helpers';
import qs from 'query-string';
// import bullseye from 'images/bullseye1.png';
import bullseye from 'images/overview.png';
import ProjectCardFooter from './ProjectCardFooter';

const SOCIAL_FULL_FORM = {
  BC: 'Broadcast',
  OTT: 'Over-The-Top',
  SM: 'Social',
  DG: 'Digital',
  OL: 'Online',
  PA: 'Paper',
};

const LEFT_PANNEL_COLOR_CONFIG = {
  BC: 'green',
  OTT: 'blue',
  SM: 'grey',
  DG: 'teal',
  OL: 'yellow',
  PA: 'purple',
};

const MEDIUM_COLOR_SCHEME = {
  BC: '#2ddd84',
  OTT: '#0e35ff',
  SM: '#536274',
  DG: '#2dddcc',
  OL: '#e5a229',
  PA: '#640eff',
};

const donutMraphMargin = DONUT_MARGIN;

const ProjectCard = ({
  history,
  callback,
  notifications,
  highlghtsData: { data: kpiData = [], loading } = {},
  ...props
}) => {
  const {
    project,
    activeMedia,
    activeIndex,
    iterationIndex,
    isOnlySinglePlatform,
    overviewIndex,
    graphTitle,
    graphUnit,
    graphDataSum,
    graphData,
    dashboardActiveMap,
    mediaSelectionCallback: setActiveMedia,
    isActive,
    cardActiveStatusCallback: setActive,
  } = useProjectCardHook(props);

  const redirectToDashboard = (
    e,
    type,
    isLive = false,
    liveMatches = [],
    footerRedirection = false,
  ) => {
    const queryParams = {
      type: 'analytics',
      projectID: project.projectID,
      activeMedia,
      platformID:
        MEDIA_CONSTANTS[activeMedia] === 'MED105'
          ? 'MED101'
          : MEDIA_CONSTANTS[activeMedia],
      viewcategory: '01',
      industryCategory: project.industryCategory,
      eventImage: project.eventImage,
      industry: project.industry,
      isLive,
      liveMatches: footerRedirection
        ? JSON.stringify(liveMatches)
        : JSON.stringify(
            project.platforms
              .filter(d => d.codeName === activeMedia)[0]
              .liveVisions.map(d => d.visionID),
          ),
      isProjectLive:
        project.platforms.filter(d => d.codeName === activeMedia)[0] &&
        project.platforms.filter(d => d.codeName === activeMedia)[0]
          .liveStatus === 1,
      projectDetails: JSON.stringify({
        eventName: project.eventName,
        projectDisplayDate: project.projectDisplayDate,
        projectImage: project.projectImage,
        projectName: project.projectName,
        projectFromDate: project.projectFromDate,
        projectToDate: project.projectToDate,
        platforms: project.platforms
          .filter(d => d.platformName !== 'Overview')
          .map(d => d.dashboard && d.codeName),
      }),
    };

    if (type === 'overview') {
      const query = qs.stringify({
        ...queryParams,
        type: 'overview',
        platformID: 'MED101',
      });
      history.push(`/dashboard?${query}`);
    } else {
      const query = qs.stringify(queryParams);
      history.push(`/dashboard?${query}`);
    }
  };

  return (
    <div className="programs">
      <div
        className="programs__header"
        onClick={() => {
          setActiveMedia('overview');
          setActive(!isActive);
          callback(iterationIndex);
        }}
      >
        <div className="programs__img">
          <img src={project.projectImage} alt="program" />
        </div>

        <div className="programs__title">
          <h2>{project.projectName}</h2>
          <span>{project.eventName}</span>
        </div>

        <div className="programs__date">
          {/* <div>
            <span className="programs__dateDay">
              {moment(new Date(project.projectFromDate)).format('DD MMM YYYY')}
            </span>
            <div className="programs__dateMonth">Start Date</div>
          </div>
          <Icon path={mdiKeyboardBackspace} size={0.6} /> */}
          <div>
            <span className="programs__dateDay">
              {project.projectDisplayDate}
              {/* {moment(new Date(project.projectToDate)).format('DD MMM YYYY')} */}
            </span>
            {/* <div className="programs__dateMonth">End Date</div> */}
          </div>
        </div>

        <div className="programs__type">
          <h2>{`#${project.industry}`}</h2>
        </div>

        <div
          className={`programs__icon ${
            activeIndex === iterationIndex && isActive ? 'active' : ''
          }`}
        >
          <Icon path={mdiChevronDown} size={1.2} />
        </div>
      </div>
      <div
        className={`programs__body ${
          activeIndex === iterationIndex && isActive ? 'active' : ''
        }`}
      >
        {/* Background image removed for dark theme */}
        <div className="programs__sidenav">
          {!isOnlySinglePlatform && overviewIndex >= 0 && (
            <div
              className={`programs__navitem ${
                activeMedia !== 'overview' ? '' : 'active'
              }`}
              onClick={() => setActiveMedia('overview')}
            >
              <div className="programs__navimage">
                <img src={bullseye} alt="" />
              </div>
            </div>
          )}

          {project.platforms &&
            orderBy(project.platforms, ['orderID'], ['asc'])
              .filter(d => d.platformName !== 'Overview')
              .map((d, i) => (
                <div
                  key={d.codeName}
                  className={`programs__navitem ${
                    activeMedia === d.codeName ? 'active' : ''
                  } ${isOnlySinglePlatform && i === 0 ? 'active' : ''}`}
                  onClick={() => setActiveMedia(d.codeName)}
                >
                  <div className="programs__navimage">
                    <img src={d.platformImage} alt="" />
                  </div>
                </div>
              ))}
        </div>
        <div className="programs__data">
          <div
            className="programs__dataHeading"
            style={{
              paddingBottom: activeMedia === 'overview' ? '27px' : '16px',
            }}
          >
            <h2>
              {activeMedia === 'overview'
                ? 'Overview'
                : SOCIAL_FULL_FORM[activeMedia]}
            </h2>
            {activeMedia !== 'overview' && dashboardActiveMap[activeMedia] && (
              <Button
                type="primaryRipple"
                label="Dashboard"
                onClickHandler={e => redirectToDashboard(e, 'overview')}
                customStyle={{
                  fontFamily: 'poppins',
                  fontWeight: '600',
                  fontSize: '13px',
                  letterSpacing: '0.35px',
                }}
              />
            )}
          </div>
          <div className="programs__dataBody">
            <div className="programs__dataChart">
              <Donut
                height={251}
                width={241}
                margin={donutMraphMargin}
                data={graphData || []}
                title={
                  graphUnit === 'HH:MM:SS'
                    ? secToString(graphDataSum)
                    : _numberToHumanReadableFormatConverter(graphDataSum,true,false, {projectID:project.projectID})
                }
                activeArc={
                  activeMedia === 'overview' &&
                  project.platforms.findIndex(x => x.codeName === activeMedia)
                }
                subTitle={graphUnit}
                colorSheme={
                  activeMedia !== 'overview' &&
                  LEFT_PANNEL_COLOR_CONFIG[activeMedia]
                }
                customScheme={
                  activeMedia === 'overview' &&
                  project.platforms
                    .filter(d => d.platformName !== 'Overview')
                    .map(d => MEDIUM_COLOR_SCHEME[d.codeName])
                }
                showHeader
                customInnerCircleRadius={70.5}
                fontSize="lg"
              />
              <h3 className="programs__dataChartHeading">{graphTitle}</h3>
            </div>
            <div className="programs__dataOverview">
              {!loading &&
                [...Array(2)].map((_, index) => (
                  <div className="programs__dataGrid">
                    {orderBy(
                      Array.prototype.slice.apply(
                        kpiData,
                        index === 0 ? [0, 4] : [4, 8],
                      ),
                      ['orderID'],
                      ['asc'],
                    ).map(d => (
                      <div className="programs__dataColumn">
                        <h4 className="programs__dataTitle">
                          {(d.heading || d.label).split(' ')[0]}
                          <br />
                          {(d.heading || d.label).split(/ (.+)/)[1]}
                        </h4>
                        <div className="programs__dataCount projectcard_overview_value">
                          {/* eslint-disable-next-line no-nested-ternary */}
                          {Number(d.value) &&
                          String(Math.floor(Number(d.value))).length > 3 &&
                          (d.displayUnit || d.unit) !== 'HH:MM:SS' ? (
                            <>
                              <span
                                style={{
                                  fontSize: '21px',
                                }}
                              >
                                {
                                  _numberToHumanReadableFormatConverter(
                                    d.value,
                                    true,
                                    true,
                                    {projectID:d.projectID}
                                  )[0]
                                }
                              </span>{' '}
                              <span
                                style={{
                                  fontSize: 17,
                                }}
                              >
                                {
                                  _numberToHumanReadableFormatConverter(
                                    d.value,
                                    false,
                                    true,
                                    {projectID:d.projectID}
                                  )[1]
                                }
                              </span>
                            </>
                          ) : Number(d.value) &&
                            (d.displayUnit || d.unit) === 'HH:MM:SS' ? (
                            secToString(d.value)
                          ) : (
                            d.value
                          )}
                          {(d.displayUnit || d.unit) === '%' ? (
                            // eslint-disable-next-line react/no-unescaped-entities
                            <span
                              style={{
                                fontSize: index === 0 ? 17 : 15,
                              }}
                            >
                              {d.displayUnit || d.unit}
                            </span>
                          ) : (
                            ''
                          )}
                        </div>
                        <span>
                          {(d.displayUnit || d.unit) !== '%' &&
                          (d.displayUnit || d.unit) !== '#'
                            ? d.displayUnit || d.unit
                            : ''}
                        </span>
                        {d.value.length > 11 && (
                          <span className="programs__tooltip">{d.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

              {loading && (
                <div
                  style={{
                    width: '100%',
                    height: '303px',
                    textAlign: 'center',
                    paddingTop: '10%',
                  }}
                >
                  <img src={spinner} alt="" width={100} />
                </div>
              )}

              {!loading &&
                activeMedia !== 'overview' &&
                dashboardActiveMap[activeMedia] && (
                  <div
                    className="programs__dataAnalytics"
                    onClick={e =>
                      redirectToDashboard(
                        e,
                        activeMedia === 'overview' ? 'overview' : activeMedia,
                      )
                    }
                  >
                    <a>View {SOCIAL_FULL_FORM[activeMedia]} Analytics</a>
                  </div>
                )}
            </div>
            <ProjectCardFooter
              notifications={notifications}
              liveClickHandler={redirectToDashboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  history: PropTypes.object,
  project: PropTypes.object,
  notifications: PropTypes.object,
  activeIndex: PropTypes.number,
  iterationIndex: PropTypes.number,
  callback: PropTypes.func,
  noticicationCall: PropTypes.func,
  highlghtsData: PropTypes.array,
  graphKpiData: PropTypes.array,
  highlghtsCall: PropTypes.func,
};

export default ProjectCard;
