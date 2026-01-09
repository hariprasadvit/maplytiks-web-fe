/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import uniq from 'lodash/uniq';

import pageLoader from 'images/pageLoader.gif';
import useAnalyticsHooks from 'components/Dashboard/hooks/useAnalyticsHooks';
import useDigitalHooks from 'components/Dashboard/hooks/useDigitalHooks';
import { MEDIA_NAME_CONSTANTS, MEDIA_CONSTANTS } from 'utils/constants';
import HomeHeader from 'components/homePage/HomeHeader';

import DashBoardHeader from '../DashBoardHeader';
import DashBoardFooter from '../DashBoardFooter';
import AnalysisGraph from './AnalysisGraph';
import AnalyticsKpi from './AnalyticsKpi';
import Timeline from './Timeline';
import ContinousExposure from './ContinousExposure';
import Filter from './Filter';
import Social from '../social/Social';
import Online from '../online/Online';
import ReactGA from 'react-ga';
const FILTER_INITIAL_STATE = `{"visions":[],"brands":[],"assets":[],"venues":[],"models":[]}`;
const FILTER_KEY_MAP = {
  Matches: 'visions',
  Brands: 'brands',
  Assets: 'assets',
  Venues: 'venues',
  Models: 'models',
  GlobalMarket: 'GlobalMarket',
};

const Analytics = props => {
  const {
    history,
    location,
    userSignOut,
    getProjectGraphInsights,
    insights,
    user = {},
    getFilterTags,
    filterTags,
    getVisionFilter,
    getSponsorsFilter,
    getAssetsFilter,
    getVenuesFilter,
    getMarketFilter,
    filters,
  } = props;
  const {
    pageLoading,
    viewMap = {},
    defaultView,
    graphData = [],
    visionAnalogous,
    viewDropdownCallback,
    mediumDropdownCallback,
    liveToggleCallback,
    applyFiltersCallback,
    kpiData = [],
    filterKeyConfig = {},
    social = {},
    globalMap ={},
    datatimeCallback,
    refreshliveToggleCallback
  } = useAnalyticsHooks(props);

  //  const {
  //    digital={}
  //  } = useDigitalHooks(props);


//console.log("globalMap",globalMap)
ReactGA.initialize('UA-129684001-1');
ReactGA.pageview(window.location.pathname + window.location.search);
  const [activeMedia, setActiveMedia] = useState('');
  const [mainView, setMainView] = useState('');
  const [isShowOnlyLive, setIsShowOnlyLive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [refreshLive, setRefreshLive] = useState(false);
  const [callbackgraphstatus, setCallbackgraphstatus] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    visions: [],
    brands: [],
    assets: [],
    venues: [],
    models: [],
    GlobalMarket: []
  });

  const { type, ...query } = qs.parse(location.search);
  const tooltipRef = useRef();

  useEffect(() => {
    // // TEMP
    // if (query.activeMedia === 'SM') {
    //   window.scrollTo(0, 0);
    // }
    setActiveMedia(query.activeMedia);
    mediumDropdownCallback(query.activeMedia);

    if (query.isLive === 'true') {
      liveToggleCallback(true);
      refreshliveToggleCallback(true);
      setIsShowOnlyLive(true);
      viewDropdownCallback(viewMap[Object.keys(viewMap)[0]]);
    }
  }, []);

  useEffect(() => {
    setMainView(defaultView);
  }, [defaultView]);



  // useEffect(() => {
  //   if (query.isLive == true) {
  //   if(refreshLive == true  || refreshLive == false){
  //    liveToggleCallback(!refreshLive);
  //   }
  // }
  // }, [refreshLive]);

 useEffect(() => {
  setRefreshLive(isShowOnlyLive);
  }, [isShowOnlyLive]);

  const refreshonChnageHandler = () => {
    if(refreshLive == true  || refreshLive == false){
    refreshliveToggleCallback(!refreshLive);
    setRefreshLive(!refreshLive);
    }
  };


  useEffect(() => {
    //console.log("graphData",graphData);
  }, [graphData]);

  const onChnageHandler = () => {
    liveToggleCallback(!isShowOnlyLive);
    setIsShowOnlyLive(!isShowOnlyLive);
    setRefreshLive(!isShowOnlyLive);
    refreshliveToggleCallback(!isShowOnlyLive)
  };

  const mainViewDropdownChangeHandler = item => {
    setMainView(item);
    viewDropdownCallback(viewMap[item]);
  };

  const getSelectedFilters = selectedFilters => {
    setAppliedFilters(selectedFilters);
    applyFiltersCallback(selectedFilters);
  };

  const getglobalmarket = selectglobalmarket => {
    //console.log("selectglobalmarket",selectglobalmarket,appliedFilters);
  };


  const mediumDropdownChangeHandler = item => {
    // TEMP
    if (item === 'SM') {
      window.scrollTo(0, 0);
    }
    mediumDropdownCallback(item);
    setActiveMedia(item);
  };

  const displayNameObj = Object.keys(filterKeyConfig).reduce(
    // eslint-disable-next-line no-return-assign
    (obj, key) => ((obj[filterKeyConfig[key]] = key), obj),
    {},
  );

  const commonProps = {
    insightsCall: getProjectGraphInsights,
    insights,
    projectDetail: {
      projectID: query.projectID,
      platformID: query.platformID,
    },
  };

  return (
    <div
      className="main-wrapper"
      style={{ backgroundColor: '#0d0d0d', position: 'relative' }}
    >
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
        isAnalysis
        mediumSelected={activeMedia || MEDIA_NAME_CONSTANTS[query.platformID]}
        mediumSelectCallback={mediumDropdownChangeHandler}
        activeMainDropDownItem={mainView}
        viewSelectionCallback={mainViewDropdownChangeHandler}
        viewDropdownList={Object.keys(viewMap)}
        visionAnalogous={visionAnalogous}
        liveToggleState={isShowOnlyLive}
        filterToggle={() => setIsFilterActive(true)}
        liveToggleCallback={onChnageHandler}
        stickyCallback={setIsSticky}
        datatimeCallback={datatimeCallback}
        callbackrefresh={refreshonChnageHandler}
        liveToggleStaterefresh={refreshLive} 
      />
      {(activeMedia == 'BC' || activeMedia == 'OTT' || activeMedia == 'DG') &&
        Object.keys(appliedFilters).reduce(
          (a, v) => a + appliedFilters[v].length,
          0,
        ) !== 0 && (
          <div
            className="alert alert-action"
            onClick={() => setIsFilterActive(true)}
          >
            <div className="alert-action-left">
              Applied for:{' '}
              {Object.keys(displayNameObj).map(d => (
                <span>
                  {
                    (d === 'Brands'
                      ? uniq(appliedFilters[FILTER_KEY_MAP[d]])
                      : appliedFilters[FILTER_KEY_MAP[d]]
                    ).length
                  }{' '}
                  {displayNameObj[d]} Selected
                </span>
              ))}
            </div>
            <div className="alert-action-right">
              <div
                className="viewStatus-btn"
                onClick={e => {
                  e.stopPropagation();
                  setAppliedFilters(JSON.parse(FILTER_INITIAL_STATE));
                  applyFiltersCallback(JSON.parse(FILTER_INITIAL_STATE));
                }}
              >
                <button style={{ backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333' }} type="button">
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      {(activeMedia == 'BC'  || activeMedia == 'OTT' || activeMedia == 'DG') &&
        graphData
          .filter(d => d.type === 'stats')
          .map((d, i) => (
            <>
              <AnalysisGraph
                {...d.data}
                {...commonProps}
                tooltipRef={tooltipRef}
                index={i}
                isSecondry={i > 1}
                insightTitle={visionAnalogous}
                isShowOnlyLive={isShowOnlyLive}
                isSticky={isSticky}
                appliedFilters={appliedFilters}
                callbackreturn={refreshLive}
                callbackgraphstatus={setCallbackgraphstatus}
              />
              {i === 0 && kpiData && kpiData.length>0 &&<AnalyticsKpi data={kpiData} projectDetails={{...commonProps.projectDetail}} />}
            </>
          ))}
      {(activeMedia == 'BC' || activeMedia == 'OTT' || activeMedia == 'DG') &&
        graphData.filter(d => d.type === 'timeline').length > 0 &&
        graphData.map(
          d =>
            d.type === 'timeline' && (
              <Timeline
                {...commonProps}
                {...d.data}
                tooltipRef={tooltipRef}
                isShowOnlyLive={isShowOnlyLive}
                setVideoModal={setVideoModal}
                setVideoUrl={setVideoUrl}
                appliedFilters={appliedFilters}
                projectDetails={{...commonProps.projectDetail}}
                liveToggleStaterefresh={refreshLive} 
              />
            ),
        )}
      { (activeMedia == 'BC' || activeMedia == 'OTT' || activeMedia == 'DG') &&
        graphData.filter(d => d.type === 'ce').length > 0 &&
        graphData.map(
          d => d.type === 'ce' && <ContinousExposure {...d.data} projectDetails={{...commonProps.projectDetail}} liveToggleStaterefresh={refreshLive} callbackgraphstatus={callbackgraphstatus}  />,
        )}
      {pageLoading && (
        <div style={{ margin: '20% 45%' }}>
          <img src={pageLoader} alt="" />
        </div>
      )}
      {isFilterActive && (
        <Filter
          closeHandler={setIsFilterActive}
          mainFilter={filterKeyConfig[mainView]}
          filterTagsCall={getFilterTags}
          tags={filterTags}
          project={query.projectID}
          platform={MEDIA_CONSTANTS[activeMedia] || query.platformID}
          visionFilterCall={getVisionFilter}
          sponsorFilterCall={getSponsorsFilter}
          assetFilterCall={getAssetsFilter}
          venuesFilterCall={getVenuesFilter}
          marketFilterCall={getMarketFilter}
          filters={filters}
          applyCallback={getSelectedFilters}
          appliedFilters={appliedFilters}
          displayNameConfig={filterKeyConfig}
          isShowOnlyLive={isShowOnlyLive}
          liveMatches={query.liveMatches}
          marketDropdownList={Object.values(globalMap)}
        />
      )}
      {videoModal && (
        <div className="global-filter">
          <div className="global-filter-overlay" />
          <div className="global-filter-modal">
            <div className="headerPopup">
              <a
                className="boxclose"
                onClick={() => {
                  setVideoModal(false);
                  setVideoUrl('');
                }}
              />
              <video className="headerPopupVideo" width="600" controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
      {activeMedia === 'SM' && <Social data={social} isSticky={isSticky} />}
      {activeMedia === 'DGxxxx' && <Online data={social} isSticky={isSticky} />}
      <DashBoardFooter history={history} />
      <div ref={tooltipRef} className="card" style={{ display: 'none' }}>
        <i className="mdi mdi-close" />
      </div>
      {isSticky && (
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

Analytics.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  user: PropTypes.object,
  userSignOut: PropTypes.func,
  getProjectGraphInsights: PropTypes.func,
  insights: PropTypes.array,
  getFilterTags: PropTypes.func,
  filterTags: PropTypes.array,
  getVisionFilter: PropTypes.func,
  getSponsorsFilter: PropTypes.func,
  getAssetsFilter: PropTypes.func,
  getVenuesFilter: PropTypes.func,
  getMarketFilter: PropTypes.func,
  filters: PropTypes.object,
};

export default Analytics;
