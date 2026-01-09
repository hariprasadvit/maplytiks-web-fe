/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import pageLoader from 'images/pageLoader.gif';
import qs from 'query-string';
import chunk from 'lodash/chunk';
import orderBy from 'lodash/orderBy';
import PropTypes from 'prop-types';
import { REDUCER_KEY_MAP } from 'utils/constants';
import Icon from '@mdi/react';
import { mdiMagnify, mdiChevronUp } from '@mdi/js';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import GeoChart from 'components/common/graphs/GeoChart';
import HomeHeader from 'components/homePage/HomeHeader';
import DashBoardHeader from '../DashBoardHeader';
import DashBoardFooter from '../DashBoardFooter';
import OverviewItem from './OverviewItem';
import ReactGA from 'react-ga';

const CONTAINER_CLASS_MAP = {
  matches: 'matches',
  visions: 'matches',
  venues: 'matches',
  sponsors: 'sponsors',
  assets: 'sponsors',
  platforms: 'episodes',
};

const Overview = ({
  history,
  dashboard,
  location,
  getProjectOverview,
  userSignOut,
  user = {},
  overview: { displayData, sideNavConfig = {}, loading } = {},
  getProjectGlobalValuation,
  globalValuation: { geoData, geoLoading } = {},
}) => {
  ReactGA.initialize('UA-129684001-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [activeSideNavItem, setActiveSideNavItem] = useState();
  const [activeDisplayName, setActiveDisplayName] = useState();
  const [activeTrayItem, setActiveTrayItem] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const { type, ...query } = qs.parse(location.search);

  useEffect(() => {
    getProjectOverview({
      payload: {
        projectID: query.projectID,
        platformID: query.platformID,
      },
    });

    setActiveSideNavItem(sideNavConfig[0]);
  }, []);

  useEffect(() => {
    if (activeSideNavItem === 'valuation')
      getProjectGlobalValuation({
        payload: {
          projectID: query.projectID,
        },
      });
  }, [activeSideNavItem]);

  useEffect(() => {
    setActiveSideNavItem(Object.keys(sideNavConfig)[0]);
    setActiveDisplayName(sideNavConfig[Object.keys(sideNavConfig)[0]]);
  }, [sideNavConfig]);

  const filteredKeys = (obj, filter) => {
    const keys = [];
    Object.keys(obj).map(d => filter.test(d) && keys.push(d));
    return keys;
  };

  return (
    <div className="analyticsWrapper">
      <HomeHeader
        user={user}
        history={history}
        signout={userSignOut}
        showHomeIcon
      />
      <DashBoardHeader
        history={history}
        data={{
          ...query,
        }}
        activeTab={type}
        liveMatches={
          dashboard[REDUCER_KEY_MAP.Matches] &&
          dashboard[REDUCER_KEY_MAP.Matches].liveMatches
        }
        signout={userSignOut}
        stickyCallback={setIsStickyHeader}
        user={user}
      />

      <div className="container">
        {!loading && (
          <div
            className={`overview-wrapper ${
              // eslint-disable-next-line no-restricted-globals
              isStickyHeader && screen.width > 767 ? 'sticky' : ''
            }`}
          >
            <div className="overview-sidebar">
              <ul>
                {Object.keys(sideNavConfig).map(d => (
                  <li
                    className={activeSideNavItem === d ? 'active' : ''}
                    onClick={() => {
                      setActiveSideNavItem(d);
                      setActiveDisplayName(sideNavConfig[d]);
                      setActiveTrayItem(0);
                      setSearchString('');
                    }}
                    key={`overview_sideNav_${d}`}
                  >
                    {sideNavConfig[d]}
                  </li>
                ))}
                {/* <li
                  className={
                    activeSideNavItem === 'Global Valuation' ? 'active' : ''
                  }
                  onClick={() => {
                    setActiveSideNavItem('Global Valuation');
                    setActiveDisplayName('');
                    setActiveTrayItem(0);
                    setSearchString('');
                  }}
                >
                  Global Valuation
                </li> */}
              </ul>
            </div>
            <div className="overview-main">
              {activeSideNavItem !== 'valuation' && (
                <div className="global-filter-right-header">
                  <div className="global-filter-right-result">
                    Showing{' '}
                    {displayData &&
                      displayData[activeSideNavItem] &&
                      displayData[activeSideNavItem].length}{' '}
                    {activeDisplayName}
                  </div>
                  <div className="global-filter-right-search">
                    <div className="my-projects-search">
                      <span className="search-icon">
                        <Icon path={mdiMagnify} size={1} />
                      </span>
                      <form>
                        <Input
                          type="text"
                          placeholder="Search"
                          inputClass="search"
                          onChangeHandlerCallback={setSearchString}
                          value={searchString}
                        />
                        <Button type="search" />
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {/* {activeSideNavItem === 'Matches' && ( */}
              <div id={`overview-${CONTAINER_CLASS_MAP[activeSideNavItem]}`}>
                {chunk(
                  displayData &&
                    displayData[activeSideNavItem] &&
                    (CONTAINER_CLASS_MAP[activeSideNavItem] === 'matches'
                      ? displayData[activeSideNavItem].sort((a, b) => {
                          const dateA = new Date(a.visionDate);
                          const dateB = new Date(b.visionDate);
                          return dateA - dateB;
                        })
                      : orderBy(
                          displayData[activeSideNavItem],
                          [obj => obj.displayName.toLowerCase()],
                          ['asc'],
                        )
                    ).filter(
                      d =>
                        d.displayName
                          .toLowerCase()
                          .search(searchString.toLowerCase()) !== -1,
                    ),
                  CONTAINER_CLASS_MAP[activeSideNavItem] === 'sponsors' ? 7 : 4,
                ).map((x, i) => (
                  <div className="overview-row">
                    {x.map((d, n) => (
                      <OverviewItem
                        key={`overview_item_${d[filteredKeys(d, /ID/)[0]]}_${
                          d.displayName
                        }_${String(i)}`}
                        data={{
                          mainImg: d.imageURL,
                          type: CONTAINER_CLASS_MAP[activeSideNavItem],
                          category: activeSideNavItem,
                          title: d.displayName,
                          modelsCount: d.models && d.models.length,
                          visionType: d.type,
                          hasTray:
                            d.type === 'team' ||
                            (d.models && d.models.length > 0),
                          iterationIndex: i * 10 + n,
                          activeIndex: activeTrayItem,
                          callback: setActiveTrayItem,
                          trayData:
                            d.models && d.models.length > 0
                              ? d.models
                              : d.participants,
                          eventDate: d.visionDate,
                          teamAName:
                            d.participants &&
                            d.participants[0] &&
                            (d.participants[0].codeName ||
                              d.participants[0].displayName),
                          teamAImage:
                            d.participants &&
                            d.participants[0] &&
                            d.participants[0].imageURL,
                          teamBName:
                            d.participants &&
                            d.participants[1] &&
                            (d.participants[1].codeName ||
                              d.participants[1].displayName),
                          teamBImage:
                            d.participants &&
                            d.participants[1] &&
                            d.participants[1].imageURL,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {activeSideNavItem === 'valuation' && (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid #bbc6cf',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px 0 #d0d4d7',
                  }}
                >
                  <GeoChart
                    geoLocations={geoData}
                    isLoading={geoLoading}
                    isStickyHeader={isStickyHeader}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {loading && (
          <div style={{ margin: '20% 45%' }}>
            <img src={pageLoader} alt="" />
          </div>
        )}
      </div>
      <DashBoardFooter history={history} />
      {isStickyHeader && (
        <div
          className="analytics__moveToTop"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div>
            <Icon path={mdiChevronUp} size={1.2} color="#fff" />
          </div>
        </div>
      )}
    </div>
  );
};

Overview.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  dashboard: PropTypes.object,
  getProjectOverview: PropTypes.func,
  getProjectGlobalValuation: PropTypes.func,
  userSignOut: PropTypes.func,
  overview: PropTypes.object,
  globalValuation: PropTypes.object,
  user: PropTypes.object,
};

export default Overview;
