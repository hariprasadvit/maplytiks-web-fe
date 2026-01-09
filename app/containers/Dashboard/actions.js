/*
 *
 * Dashboard actions
 *
 */

import * as dashboardConstants from './constants';

// <============================ OVERVIEW ==============================>

// 1) Overview
export function getProjectOverview({ payload }) {
  return {
    type: dashboardConstants.GET_PROJECT_OVERVIEW_PATTERN,
    method: 'projectOverview',
    payload,
  };
}

export function getProjectOverviewSuccess({ data }) {
  return {
    type: dashboardConstants.GET_PROJECT_OVERVIEW_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectOverviewFailiure() {
  return {
    type: dashboardConstants.GET_PROJECT_OVERVIEW_FAILIURE,
  };
}

export function getProjectOverviewCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_PROJECT_OVERVIEW_API_TASK,
  };
}

// 2) Global Valuation
export function getProjectGlobalValuation({ payload }) {
  return {
    type: dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_PATTERN,
    method: 'globalValuation',
    payload,
  };
}

export function getProjectGlobalValuationSuccess({ data }) {
  return {
    type: dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectGlobalValuationFailiure() {
  return {
    type: dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_FAILIURE,
  };
}

export function getProjectGlobalValuationCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_PROJECT_GLOBAL_VALUATION_API_TASK,
  };
}

// <============================ ANALYTICS VIEWS ==============================>

export function getAnalyticsViews({ payload }) {
  return {
    type: dashboardConstants.ANALYTICS_VIEWS_PATTERN,
    method: 'analyticsViews',
    payload,
  };
}

export function getAnalyticsViewsSuccess({ data }) {
  return {
    type: dashboardConstants.ANALYTICS_VIEWS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getAnalyticsViewsFailiure() {
  return {
    type: dashboardConstants.ANALYTICS_VIEWS_FAILIURE,
  };
}

export function getAnalyticsViewsCancel() {
  return {
    type: dashboardConstants.CANCEL_ANALYTICS_VIEWS_API_TASK,
  };
}



// <============================ ANALYTICS GLOBAL ==============================>

export function getAnalyticsGlobalMarkets({ payload }) {
  return {
    type: dashboardConstants.ANALYTICS_GLOBAL_PATTERN,
    method: 'analyticsGlobal',
    payload,
  };
}

export function getAnalyticsGlobalSuccess({ data }) {
  return {
    type: dashboardConstants.ANALYTICS_GLOBAL_SUCCESS,
    response: {
      data,
    },
  };
}

export function getAnalyticsGlobalFailiure() {
  return {
    type: dashboardConstants.ANALYTICS_GLOBAL_FAILIURE,
  };
}

export function getAnalyticsGlobalCancel() {
  return {
    type: dashboardConstants.CANCEL_ANALYTICS_GLOBAL_API_TASK,
  };
}



// <============================1) Projects ==============================>

export function getProjectVision({ payload }) {
  return {
    type: dashboardConstants.VISION_STATS_PATTERN,
    method: 'vision',
    payload,
  };
}

export function getProjectVisionSuccess({ data }) {
  return {
    type: dashboardConstants.VISION_STATS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectVisionFailiure() {
  return {
    type: dashboardConstants.VISION_STATS_FAILIURE,
  };
}

export function getProjectVisionCancel() {
  return {
    type: dashboardConstants.CANCEL_VISION_STATS_API_TASK,
  };
}

// <============================2) Venues ==============================>

export function getProjectVenues({ payload }) {
  return {
    type: dashboardConstants.VENUES_STATS_PATTERN,
    method: 'venues',
    payload,
  };
}

export function getProjectVenuesSuccess({ data }) {
  return {
    type: dashboardConstants.VENUES_STATS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectVenuesFailiure() {
  return {
    type: dashboardConstants.VENUES_STATS_FAILIURE,
  };
}

export function getProjectVenuesCancel() {
  return {
    type: dashboardConstants.CANCEL_VENUES_STATS_API_TASK,
  };
}

// <============================3) Models ==============================>

export function getProjectModels({ payload }) {
  return {
    type: dashboardConstants.MODELS_STATS_PATTERN,
    method: 'models',
    payload,
  };
}

export function getProjectModelsSuccess({ data }) {
  return {
    type: dashboardConstants.MODELS_STATS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectModelsFailiure() {
  return {
    type: dashboardConstants.MODELS_STATS_FAILIURE,
  };
}

export function getProjectModelsCancel() {
  return {
    type: dashboardConstants.CANCEL_MODELS_STATS_API_TASK,
  };
}

// <============================4) Assets ==============================>

export function getProjectAssets({ payload }) {
  return {
    type: dashboardConstants.ASSETS_STATS_PATTERN,
    method: 'assets',
    payload,
  };
}

export function getProjectAssetsSuccess({ data }) {
  return {
    type: dashboardConstants.ASSETS_STATS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectAssetsFailiure() {
  return {
    type: dashboardConstants.ASSETS_STATS_FAILIURE,
  };
}

export function getProjectAssetsCancel() {
  return {
    type: dashboardConstants.CANCEL_ASSETS_STATS_API_TASK,
  };
}

// <============================5) Brands ==============================>

export function getProjectBrands({ payload }) {
  return {
    type: dashboardConstants.BRANDS_STATS_PATTERN,
    method: 'brands',
    payload,
  };
}

export function getProjectBrandsSuccess({ data }) {
  return {
    type: dashboardConstants.BRANDS_STATS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectBrandsFailiure() {
  return {
    type: dashboardConstants.BRANDS_STATS_FAILIURE,
  };
}

export function getProjectBrandsCancel() {
  return {
    type: dashboardConstants.CANCEL_BRANDS_STATS_API_TASK,
  };
}

// <============================6) TIMELINE (PULSE) ==============================>

export function getTimelinePulse({ payload }) {
  return {
    type: dashboardConstants.TIMELINE_PULSE_PATTERN,
    method: 'pulse',
    payload,
  };
}

export function getTimelinePulseSuccess({ data }) {
  return {
    type: dashboardConstants.TIMELINE_PULSE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getTimelinePulseFailiure() {
  return {
    type: dashboardConstants.TIMELINE_PULSE_FAILIURE,
  };
}

export function getTimelinePulseCancel() {
  return {
    type: dashboardConstants.CANCEL_TIMELINE_PULSE_API_TASK,
  };
}

// <============================7) TIMELINE (CUMULATIVE) ==============================>

export function getTimelineCumulative({ payload }) {
  return {
    type: dashboardConstants.TIMELINE_CUMULATIVE_PATTERN,
    method: 'cumulative',
    payload,
  };
}

export function getTimelineCumulativeSuccess({ data }) {
  return {
    type: dashboardConstants.TIMELINE_CUMULATIVE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getTimelineCumulativeFailiure() {
  return {
    type: dashboardConstants.TIMELINE_CUMULATIVE_FAILIURE,
  };
}

export function getTimelineCumulativeCancel() {
  return {
    type: dashboardConstants.CANCEL_TIMELINE_CUMULATIVE_API_TASK,
  };
}

// <============================8) CONTINOUS EXPOSURE ==============================>

export function getContinousExp({ payload }) {
  return {
    type: dashboardConstants.CONTINOUS_EXP_PATTERN,
    method: 'ce',
    payload,
  };
}

export function getContinousExpSuccess({ data }) {
  return {
    type: dashboardConstants.CONTINOUS_EXP_SUCCESS,
    response: {
      data,
    },
  };
}

export function getContinousExpCancel() {
  return {
    type: dashboardConstants.CANCEL_CONTINOUS_EXP_API_TASK,
  };
}

// <============================9) GLOBAL_FILTER (TAGS) ==============================>

export function getFilterTags({ payload }) {
  return {
    type: dashboardConstants.FILTER_TAGS_PATTERN,
    method: 'tags',
    payload,
  };
}

export function getFilterTagsSuccess({ data }) {
  return {
    type: dashboardConstants.FILTER_TAGS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getFilterTagsCancel() {
  return {
    type: dashboardConstants.CANCEL_FILTER_TAGS_API_TASK,
  };
}

// <============================10) GLOBAL_FILTER (VISIONS) ==============================>

export function getVisionFilter({ payload }) {
  return {
    type: dashboardConstants.VISION_FILTER_PATTERN,
    method: 'visionFilter',
    payload,
  };
}

export function getVisionFilterSuccess({ data }) {
  return {
    type: dashboardConstants.VISION_FILTER_SUCCESS,
    response: {
      data,
    },
  };
}

export function getVisionFilterCancel() {
  return {
    type: dashboardConstants.CANCEL_VISION_FILTER_API_TASK,
  };
}

// <============================10) GLOBAL_FILTER (SPONSORS) ==============================>

export function getSponsorsFilter({ payload }) {
  return {
    type: dashboardConstants.SPONSORS_FILTER_PATTERN,
    method: 'sponsorFilter',
    payload,
  };
}

export function getSponsorsFilterSuccess({ data }) {
  return {
    type: dashboardConstants.SPONSORS_FILTER_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSponsorsFilterCancel() {
  return {
    type: dashboardConstants.CANCEL_SPONSORS_FILTER_API_TASK,
  };
}

// <============================10) GLOBAL_FILTER (ASSETS) ==============================>

export function getAssetsFilter({ payload }) {
  return {
    type: dashboardConstants.ASSETS_FILTER_PATTERN,
    method: 'assetFilter',
    payload,
  };
}

export function getAssetsFilterSuccess({ data }) {
  return {
    type: dashboardConstants.ASSETS_FILTER_SUCCESS,
    response: {
      data,
    },
  };
}

export function getAssetsFilterCancel() {
  return {
    type: dashboardConstants.CANCEL_ASSETS_FILTER_API_TASK,
  };
}

// <============================10) GLOBAL_FILTER (VENUES) ==============================>

export function getVenuesFilter({ payload }) {
  return {
    type: dashboardConstants.VENUES_FILTER_PATTERN,
    method: 'venuesFilter',
    payload,
  };
}

export function getVenuesFilterSuccess({ data }) {
  return {
    type: dashboardConstants.VENUES_FILTER_SUCCESS,
    response: {
      data,
    },
  };
}

export function getVenuesFilterCancel() {
  return {
    type: dashboardConstants.CANCEL_VENUES_FILTER_API_TASK,
  };
}

// <============================10) GLOBAL_FILTER (VISIONS) ==============================>

export function getMarketFilter({ payload }) {
  return {
    type: dashboardConstants.MARKET_FILTER_PATTERN,
    method: 'marketFilter',
    payload,
  };
}

export function getMarketFilterSuccess({ data }) {
  return {
    type: dashboardConstants.MARKET_FILTER_SUCCESS,
    response: {
      data,
    },
  };
}

export function getMarketFilterCancel() {
  return {
    type: dashboardConstants.CANCEL_MARKET_FILTER_API_TASK,
  };
}


// <============================11) LIVE API's  ==============================>

// VISIONS
export function getLiveVisionsConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_VISIONS_CONNECT,
    socketOn: 'visiondata',
    socketEmmit: 'vision/live',
    payload,
  };
}

export function getLiveVisionsDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_VISIONS_DISCONNECT,
  };
}

// SPONSORS
export function getLiveSponsorsConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_SPONSORS_CONNECT,
    socketOn: 'branddata',
    socketEmmit: 'brands/live',
    payload,
  };
}

export function getLiveSponsorsDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_SPONSORS_DISCONNECT,
  };
}

// ASSETS
export function getLiveAssetsConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_ASSETS_CONNECT,
    socketOn: 'assetdata',
    socketEmmit: 'asset/live',
    payload,
  };
}

export function getLiveAssetsDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_ASSETS_DISCONNECT,
  };
}

// VENUES
export function getLiveVenuesConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_VENUES_CONNECT,
    socketOn: 'venuedata',
    socketEmmit: 'venue/live',
    payload,
  };
}

export function getLiveVenuesDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_VENUES_DISCONNECT,
  };
}

// MODELS
export function getLiveModelsConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_MODELS_CONNECT,
    socketOn: 'modeldata',
    socketEmmit: 'model/live',
    payload,
  };
}

export function getLiveModelsDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_MODELS_DISCONNECT,
  };
}

// TIMELINE
export function getLiveTimelineConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_TIMELINE_CONNECT,
    socketOn: 'timelinedata',
    socketEmmit: 'timeline/live',
    payload,
  };
}

export function getLiveTimelineDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_TIMELINE_DISCONNECT,
  };
}

// PULSE
export function getLivePulseConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_PULSE_CONNECT,
    socketOn: 'pulsedata',
    socketEmmit: 'pulse/live',
    payload,
  };
}

export function getLivePulseDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_PULSE_DISCONNECT,
  };
}

// CONTINOUS EXP
export function getLiveContinousExpConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_CE_CONNECT,
    socketOn: 'continuousexpdata',
    socketEmmit: 'continuousexp/live',
    payload,
  };
}

export function getLiveContinousExpDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_CE_DISCONNECT,
  };
}

// KPI
export function getLiveKpiConnect({ payload }) {
  return {
    type: dashboardConstants.GET_LIVE_KPI_CONNECT,
    socketOn: 'kpidata',
    socketEmmit: 'kpi/live',
    payload,
  };
}

export function getLiveKpiDisconnect() {
  return {
    type: dashboardConstants.GET_LIVE_KPI_DISCONNECT,
  };
}

// <============================12) LIVE POLLING API's  ==============================>

// Visions
export const pollVisionStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_VISIONS_STATS
    : dashboardConstants.POLL_VISIONS_STATS,
  payload,
});

export const pollVisionStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_VISIONS_STATS_SUCCESS,
  data,
});

export const pollVisionStatsFailure = err => ({
  type: dashboardConstants.POLL_VISIONS_STATS_SUCCESS,
  err,
});

// Brands
export const pollBrandsStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_BRANDS_STATS
    : dashboardConstants.POLL_BRANDS_STATS,
  payload,
});

export const pollBrandsStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_BRANDS_STATS_SUCCESS,
  data,
});

export const pollBrandsStatsFailure = err => ({
  type: dashboardConstants.POLL_BRANDS_STATS_FAILURE,
  err,
});

// Assets
export const pollAssetsStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_ASSETS_STATS
    : dashboardConstants.POLL_ASSETS_STATS,
  payload,
});

export const pollAssetsStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_ASSETS_STATS_SUCCESS,
  data,
});

export const pollAssetsStatsFailure = err => ({
  type: dashboardConstants.POLL_ASSETS_STATS_FAILURE,
  err,
});

// Venues
export const pollVenuesStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_VENUES_STATS
    : dashboardConstants.POLL_VENUES_STATS,
  payload,
});

export const pollVenuesStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_VENUES_STATS_SUCCESS,
  data,
});

export const pollVenuesStatsFailure = err => ({
  type: dashboardConstants.POLL_VENUES_STATS_FAILURE,
  err,
});

// Models
export const pollModelsStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_MODELS_STATS
    : dashboardConstants.POLL_MODELS_STATS,
  payload,
});

export const pollModelsStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_MODELS_STATS_SUCCESS,
  data,
});

export const pollModelsStatsFailure = err => ({
  type: dashboardConstants.POLL_MODELS_STATS_FAILURE,
  err,
});

// Cumulative
export const pollCumulativeStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_CUMULATIVE_STATS
    : dashboardConstants.POLL_CUMULATIVE_STATS,
  payload,
});

export const pollCumulativeStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_CUMULATIVE_STATS_SUCCESS,
  data,
});

export const pollCumulativeStatsFailure = err => ({
  type: dashboardConstants.POLL_CUMULATIVE_STATS_FAILURE,
  err,
});

// Pulse
export const pollPulseStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_PULSE_STATS
    : dashboardConstants.POLL_PULSE_STATS,
  payload,
});

export const pollPulseStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_PULSE_STATS_SUCCESS,
  data,
});

export const pollPulseStatsFailure = err => ({
  type: dashboardConstants.POLL_PULSE_STATS_FAILURE,
  err,
});

// CE
export const pollCEStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_CE_STATS
    : dashboardConstants.POLL_CE_STATS,
  payload,
});

export const pollCEStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_CE_STATS_SUCCESS,
  data,
});

export const pollCEStatsFailure = err => ({
  type: dashboardConstants.POLL_CE_STATS_FAILURE,
  err,
});

// KPI
export const pollKPIStats = ({ stopPolling, payload }) => ({
  type: stopPolling
    ? dashboardConstants.STOP_POLLING_KPI_STATS
    : dashboardConstants.POLL_KPI_STATS,
  payload,
});

export const pollKPIStatsSuccess = ({ data }) => ({
  type: dashboardConstants.POLL_KPI_STATS_SUCCESS,
  data,
});

export const pollKPIStatsFailure = err => ({
  type: dashboardConstants.POLL_KPI_STATS_FAILURE,
  err,
});

// <============================1) Graph Insights ==============================>

export function getProjectGraphInsights({ payload }) {
  return {
    type: dashboardConstants.GRAPH_INSIGHTS_PATTERN,
    method: 'graphInsight',
    payload,
  };
}

export function getProjectGraphInsightsSuccess({ data, graphCategory }) {
  return {
    type: dashboardConstants.GRAPH_INSIGHTS_SUCCESS,
    response: {
      data,
      graphCategory,
    },
  };
}

export function getProjectGraphInsightsFailiure() {
  return {
    type: dashboardConstants.GRAPH_INSIGHTS_FAILIURE,
  };
}

export function getProjectGraphInsightsCancel() {
  return {
    type: dashboardConstants.CANCEL_GRAPH_INSIGHTS_API_TASK,
  };
}

// <============================ SOCIAL ==============================>

// 1) SUB PLATFORM

export function getSocialPlatform({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_SUBPLATFORM_PATTERN,
    method: 'socialSubPlatform',
    payload,
  };
}

export function getSocialPlatformSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_SUBPLATFORM_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialPlatformFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_SUBPLATFORM_FAILIURE,
  };
}

export function getSocialPlatformCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_SUBPLATFORM_API_TASK,
  };
}

// 2) BASE REPORT
export function getSocialBaseReport({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_BASE_REPORT_PATTERN,
    method: 'socialBaseReport',
    payload,
  };
}

export function getSocialBaseReportSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_BASE_REPORT_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialBaseReportFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_BASE_REPORT_FAILIURE,
  };
}

export function getSocialBaseReportCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_BASE_REPORT_API_TASK,
  };
}

// 3) SOCIAL DIGITAL REPORT TEMPLATE
export function getSocialDigitalReportTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_PATTERN,
    method: 'socialDigitalReportTemplate',
    payload,
  };
}

export function getSocialDigitalReportTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialDigitalReportTemplateFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_FAILIURE,
  };
}

export function getSocialDigitalReportTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_API_TASK,
  };
}

// 4) SOCIAL DIGITAL REPORT
export function getSocialDigitalReport({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_PATTERN,
    method: 'socialDigitalReport',
    payload,
  };
}

export function getSocialDigitalReportSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialDigitalReportFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_FAILIURE,
  };
}

export function getSocialDigitalReportCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_REPORT_API_TASK,
  };
}

// 5) SOCIAL TIMELINE
export function getSocialTimeline({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_PATTERN,
    method: 'socialTimeline',
    payload,
  };
}

export function getSocialTimelineSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialTimelineFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_FAILIURE,
  };
}

export function getSocialTimelineCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_TIMELINE_API_TASK,
  };
}

// 5.1) SOCIAL TIMELINE TEMPLATE
export function getSocialTimelineTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_PATTERN,
    method: 'socialTimelineTemplate',
    payload,
  };
}

export function getSocialTimelineTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialTimelineTemplateFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_FAILIURE,
  };
}

export function getSocialTimelineTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_TIMELINE_TEMPLATE_API_TASK,
  };
}

// 6) SOCIAL HIGHLIGHTS
export function getSocialHighlights({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_HIGHLIGHTS_PATTERN,
    method: 'socialHighlights',
    payload,
  };
}

export function getSocialHighlightsSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_HIGHLIGHTS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialHighlightsFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_HIGHLIGHTS_FAILIURE,
  };
}

export function getSocialHighlightsCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_HIGHLIGHTS_API_TASK,
  };
}

// 7) SOCIAL DIGITAL REPORT TEMPLATE
export function getSocialRankTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_PATTERN,
    method: 'socialRankTemplate',
    payload,
  };
}

export function getSocialRankTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialRankTemplateFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_FAILIURE,
  };
}

export function getSocialRankTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_RANK_TEMPLATE_API_TASK,
  };
}

// 8) SOCIAL DIGITAL REPORT
export function getSocialRank({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_PATTERN,
    method: 'socialRank',
    payload,
  };
}

export function getSocialRankSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_SUCCESS,
    response: {
      data,
    },
  };
}

export function getSocialRankFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_RANK_FAILIURE,
  };
}

export function getSocialRankCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_RANK_API_TASK,
  };
}

// 6) SOCIAL DETAILS POST  analysis 
export function getPostanalysis({ payload }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_POST_PATTERN,
    method: 'socialPostanalysis',
    payload,
  };
}

export function getPostanalysisSuccess({ data }) {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_POST_SUCCESS,
    response: {
      data,
    },
  };
}

export function getPostanalysisFailiure() {
  return {
    type: dashboardConstants.GET_SOCIAL_DIGITAL_POST_FAILIURE,
  };
}

export function getPostanalysisCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_POST_API_TASK,
  };
}



// <============================ DIGITAL ==============================>

// 1) SUB PLATFORM

export function getDigitalPlatform({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_SUBPLATFORM_PATTERN,
    method: 'digitalSubPlatform',
    payload,
  };
}

export function getDigitalPlatformSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_SUBPLATFORM_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalPlatformFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_SUBPLATFORM_FAILIURE,
  };
}

export function getDigitalPlatformCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_SUBPLATFORM_API_TASK,
  };
}

// 2) BASE REPORT
export function getDigitalBaseReport({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_BASE_REPORT_PATTERN,
    method: 'digitalBaseReport',
    payload,
  };
}

export function getDigitalBaseReportSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_BASE_REPORT_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalBaseReportFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_BASE_REPORT_FAILIURE,
  };
}

export function getDigitalBaseReportCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_BASE_REPORT_API_TASK,
  };
}

// 3) SOCIAL DIGITAL REPORT TEMPLATE
export function getDigitalReportTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_PATTERN,
    method: 'digitalReportTemplate',
    payload,
  };
}

export function getDigitalReportTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalReportTemplateFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_FAILIURE,
  };
}

export function getDigitalReportTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_REPORT_TEMPLATE_API_TASK,
  };
}

// 4) SOCIAL DIGITAL REPORT
export function getDigitalReport({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_PATTERN,
    method: 'digitalReport',
    payload,
  };
}

export function getDigitalReportSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalReportFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_REPORT_FAILIURE,
  };
}

export function getDigitalReportCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_REPORT_API_TASK,
  };
}

// 5) DIGITAL TIMELINE
export function getDigitalTimeline({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_PATTERN,
    method: 'digitalTimeline',
    payload,
  };
}

export function getDigitalTimelineSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalTimelineFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_FAILIURE,
  };
}

export function getDigitalTimelineCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_TIMELINE_API_TASK,
  };
}

// 5.1) DIGITAL TIMELINE TEMPLATE
export function getDigitalTimelineTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_PATTERN,
    method: 'digitalTimelineTemplate',
    payload,
  };
}

export function getDigitalTimelineTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalTimelineTemplateFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_FAILIURE,
  };
}

export function getDigitalTimelineTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_TIMELINE_TEMPLATE_API_TASK,
  };
}

// 6) DIGITAL HIGHLIGHTS
export function getDigitalHighlights({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_HIGHLIGHTS_PATTERN,
    method: 'digitalHighlights',
    payload,
  };
}

export function getDigitalHighlightsSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_HIGHLIGHTS_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalHighlightsFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_HIGHLIGHTS_FAILIURE,
  };
}

export function getDigitalHighlightsCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_HIGHLIGHTS_API_TASK,
  };
}

// 7) DIGITAL DIGITAL REPORT TEMPLATE
export function getDigitalRankTemplate({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_PATTERN,
    method: 'digitalRankTemplate',
    payload,
  };
}

export function getDigitalRankTemplateSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalRankTemplateFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_FAILIURE,
  };
}

export function getDigitalRankTemplateCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_RANK_TEMPLATE_API_TASK,
  };
}

// 8) DIGITAL DIGITAL REPORT
export function getDigitalRank({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_PATTERN,
    method: 'digitalRank',
    payload,
  };
}

export function getDigitalRankSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalRankFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_RANK_FAILIURE,
  };
}

export function getDigitalRankCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_RANK_API_TASK,
  };
}

// 6) DIGITAL DETAILS POST  analysis 
export function getDigitalPostanalysis({ payload }) {
  return {
    type: dashboardConstants.GET_DIGITAL_POST_PATTERN,
    method: 'digitalPostanalysis',
    payload,
  };
}

export function getDigitalPostanalysisSuccess({ data }) {
  return {
    type: dashboardConstants.GET_DIGITAL_POST_SUCCESS,
    response: {
      data,
    },
  };
}

export function getDigitalPostanalysisFailiure() {
  return {
    type: dashboardConstants.GET_DIGITAL_POST_FAILIURE,
  };
}

export function getDigitalPostanalysisCancel() {
  return {
    type: dashboardConstants.CANCEL_GET_DIGITAL_POST_API_TASK,
  };
}

