/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import Analytics from '../../components/Dashboards/Analytics';
import Analytics from 'components/Dashboard/analytics/Analytics';
import Overview from 'components/Dashboard/overview/Overview';

import qs from 'query-string';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { getKpiStats } from 'containers/LandingPage/actions';
import { userSignOut } from 'containers/Authentication/actions';

import { makeSelectAnalyticsKpi } from 'containers/LandingPage/selectors';
import { makeSelectUser } from 'containers/Authentication/selectors';

import {
  makeSelectDashboardCategory,
  makeSelectTimeline,
  makeSelectContinousExp,
  makeSelectFilterTags,
  makeSelectFilters,
  makeSelectInsights,
  makeSelectOverview,
  makeSelectViews,
  makeSelectGlobalValuation,
  makeSelectSocialSubPlatforms,
  makeSelectSocialBaseReport,
  makeSelectSocialDigitalReportTemplate,
  makeSelectSocialDigitalReport,
  makeSelectSocialTimeline,
  makeSelectSocialTimelineTemplate,
  makeSelectSocialHighlights,
  makeSelectSocialRankTemplate,
  makeSelectSocialRank,
  makeSelectGlobalMarket,
  makeSelectSocialPostanalysis,
  makeSelectDigitalSubPlatforms,
  makeSelectDigitalBaseReport,
  makeSelectDigitalReportTemplate,
  makeSelectDigitalReport,
  makeSelectDigitalTimeline,
  makeSelectDigitalTimelineTemplate,
  makeSelectDigitalHighlights,
  makeSelectDigitalRankTemplate,
  makeSelectDigitalRank,
  makeSelectDigitalPostanalysis
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as DashboardActions from './actions';

function Dashboard(props) {
  const { type } = qs.parse(props.location.search);
  switch (type) {
    case 'analytics':
      return <Analytics {...props} />;
    case 'overview':
      return <Overview {...props} />;
    default:
      return type;
  }

  // return type === 'analytics' && <Analytics {...props} />;
}

Dashboard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboardCategory(),
  timeline: makeSelectTimeline(),
  continousExp: makeSelectContinousExp(),
  kpi: makeSelectAnalyticsKpi(),
  filterTags: makeSelectFilterTags(),
  filters: makeSelectFilters(),
  insights: makeSelectInsights(),
  overview: makeSelectOverview(),
  globalValuation: makeSelectGlobalValuation(),
  views: makeSelectViews(),
  user: makeSelectUser(),
  subPlatforms: makeSelectSocialSubPlatforms(),
  baseReport: makeSelectSocialBaseReport(),
  socialReportTemplate: makeSelectSocialDigitalReportTemplate(),
  socialReport: makeSelectSocialDigitalReport(),
  socialTimeline: makeSelectSocialTimeline(),
  socialTimelineTemplateRes: makeSelectSocialTimelineTemplate(),
  highlights: makeSelectSocialHighlights(),
  rankTemplate: makeSelectSocialRankTemplate(),
  rank: makeSelectSocialRank(),
  globalmarket: makeSelectGlobalMarket(),
  socialPostanalysis:makeSelectSocialPostanalysis(),
  digitalsubPlatforms: makeSelectDigitalSubPlatforms(),
  digitalbaseReport: makeSelectDigitalBaseReport(),
  digitalReportTemplate: makeSelectDigitalReportTemplate(),
  digitalReport: makeSelectDigitalReport(),
  digitalTimeline: makeSelectDigitalTimeline(),
  digitalTimelineTemplateRes: makeSelectDigitalTimelineTemplate(),
  digitalhighlights: makeSelectDigitalHighlights(),
  digitalrankTemplate: makeSelectDigitalRankTemplate(),
  digitalrank: makeSelectDigitalRank(),
  digitalPostanalysis:makeSelectDigitalPostanalysis()
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({
  key: 'dashboard',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  { ...DashboardActions, getKpiStats, userSignOut },
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(Dashboard);
