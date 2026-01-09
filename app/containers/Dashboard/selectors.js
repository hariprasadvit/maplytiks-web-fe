import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.dashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const makeSelectDashboard = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate,
  );

const makeSelectViews = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.views,
  );

  const makeSelectGlobalMarket = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.globalmarket,
  );  

const makeSelectDashboardCategory = () =>
  createSelector(
    selectDashboardDomain,
    substate =>
      (({ assets, venues, models, brands, vision: visions }) => ({
        assets,
        venues,
        models,
        brands,
        visions,
      }))(substate),
  );

const makeSelectTimeline = () =>
  createSelector(
    selectDashboardDomain,
    substate =>
      (({ pulse, cumulative }) => ({
        pulse,
        cumulative,
      }))(substate),
  );

const makeSelectContinousExp = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.continousExp,
  );

const makeSelectFilterTags = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.filterTags,
  );

const makeSelectFilters = () =>
  createSelector(
    selectDashboardDomain,
    substate =>
      (({ visionFilters, assetsFilters, venuesFilters, brandsFilters, marketsFilters }) => ({
        visionFilters,
        assetsFilters,
        venuesFilters,
        brandsFilters,
        marketsFilters
      }))(substate),
  );

const makeSelectInsights = () =>
  createSelector(
    selectDashboardDomain,
    substate =>
      (({
        visionInsights: visionsInsights,
        modelsInsights,
        assetsInsights,
        venuesInsights,
        brandsInsights,
        pulseInsights,
        cumulativeInsights,
        continousExposureInsights,
      }) => ({
        visionsInsights,
        modelsInsights,
        assetsInsights,
        venuesInsights,
        brandsInsights,
        pulseInsights,
        cumulativeInsights,
        continousExposureInsights,
      }))(substate),
  );

const makeSelectOverview = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.overview,
  );

const makeSelectGlobalValuation = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.globalValuation,
  );

// Social
// 1) Sub Platforms
const makeSelectSocialSubPlatforms = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.subPlatforms,
  );

// 2) Base Report
const makeSelectSocialBaseReport = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.baseReport,
  );

// 3) Digital Report Template
const makeSelectSocialDigitalReportTemplate = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialDigitalReportTemplate,
  );

// 4) Digital Report Template
const makeSelectSocialDigitalReport = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialDigitalReport,
  );

// 5) Timeline
const makeSelectSocialTimeline = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialTimeline,
  );

  // 5.1) Timeline
const makeSelectSocialTimelineTemplate = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.socialTimelineTemplate,
);

// 6) Highlights
const makeSelectSocialHighlights = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialHighlights,
  );

// 7) Digital Report Template
const makeSelectSocialRankTemplate = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialRankTemplate,
  );

// 8) Digital Report Template
const makeSelectSocialRank = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialRank,
  );

  const makeSelectSocialPostanalysis = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.socialPostanalysis,
  );




  // DIGITAL
// 1) Sub Platforms
const makeSelectDigitalSubPlatforms = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalsubPlatforms,
);

// 2) Base Report
const makeSelectDigitalBaseReport = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalbaseReport,
);

// 3) Digital Report Template
const makeSelectDigitalReportTemplate = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalReportTemplate,
);

// 4) Digital Report Template
const makeSelectDigitalReport = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalReport,
);

// 5) Timeline
const makeSelectDigitalTimeline = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalTimeline,
);

// 5.1) Timeline
const makeSelectDigitalTimelineTemplate = () =>
createSelector(
selectDashboardDomain,
substate => substate.digitalTimelineTemplate,
);

// 6) Highlights
const makeSelectDigitalHighlights = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalHighlights,
);

// 7) Digital Report Template
const makeSelectDigitalRankTemplate = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalRankTemplate,
);

// 8) Digital Report Template
const makeSelectDigitalRank = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalRank,
);

const makeSelectDigitalPostanalysis = () =>
createSelector(
  selectDashboardDomain,
  substate => substate.digitalPostanalysis,
);

export default makeSelectDashboard;
export {
  selectDashboardDomain,
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
};
