/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
// import queryString from 'query-string'; 
import { eventChannel } from 'redux-saga';
import {
  call,
  put,
  all,
  putResolve,
  take,
  race,
  fork,
  cancelled,
  cancel,
  delay,
} from 'redux-saga/effects';
import * as apiEndPoints from 'config/apiEndPoints';
import { headers } from 'utils/constants';
import io from 'socket.io-client';
import axios from 'config/axios';

import { ALL_ERROR_HANDLER } from 'config/errorHandler';
import { _sagaHandler } from 'utils/helpers';
import { getKpiStatsSuccess } from 'containers/LandingPage/actions';
import * as dashboardConstants from './constants';
import * as dashboardActions from './actions';

const POLL_DELAY = 3000;

let visionStatsBackgroundTask = null;
let brandsStatsBackgroundTask = null;
let assetStatsBackgroundTask = null;
let venueStatsBackgroundTask = null;
let modelStatsBackgroundTask = null;
let cumulativeStatsBackgroundTask = null;
let pulseStatsBackgroundTask = null;
let ceStatsBackgroundTask = null;
let kpiStatsBackgroundTask = null;
const actionType = {
  // Overview
  projectOverview: {
    method: 'POST',
    api: apiEndPoints.OVERVIEW_API,
    pattern: dashboardConstants.GET_PROJECT_OVERVIEW_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_PROJECT_OVERVIEW_API_TASK,
    success: dashboardActions.getProjectOverviewSuccess,
    failiure: dashboardActions.getProjectOverviewFailiure,
  },

  globalValuation: {
    method: 'POST',
    api: apiEndPoints.GLOBAL_VALUATION_API,
    pattern: dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_PROJECT_GLOBAL_VALUATION_API_TASK,
    success: dashboardActions.getProjectGlobalValuationSuccess,
    failiure: dashboardActions.getProjectGlobalValuationFailiure,
  },

  // Analytics Views
  analyticsViews: {
    method: 'POST',
    api: apiEndPoints.ANALYTICS_VIEWS_API,
    pattern: dashboardConstants.ANALYTICS_VIEWS_PATTERN,
    cancel: dashboardConstants.CANCEL_ANALYTICS_VIEWS_API_TASK,
    success: dashboardActions.getAnalyticsViewsSuccess,
    failiure: dashboardActions.getAnalyticsViewsFailiure,
  },

  // Stats
  vision: {
    method: 'POST',
    api: apiEndPoints.STATS_VISION_API,
    pattern: dashboardConstants.VISION_STATS_PATTERN,
    cancel: dashboardConstants.CANCEL_VISION_STATS_API_TASK,
    success: dashboardActions.getProjectVisionSuccess,
    failiure: dashboardActions.getProjectVisionFailiure,
  },
  brands: {
    method: 'POST',
    api: apiEndPoints.STATS_BRANDS_API,
    pattern: dashboardConstants.BRANDS_STATS_PATTERN,
    cancel: dashboardConstants.CANCEL_BRANDS_STATS_API_TASK,
    success: dashboardActions.getProjectBrandsSuccess,
    failiure: dashboardActions.getProjectBrandsFailiure,
  },
  models: {
    method: 'POST',
    api: apiEndPoints.STATS_MODELS_API,
    pattern: dashboardConstants.MODELS_STATS_PATTERN,
    cancel: dashboardConstants.CANCEL_MODELS_STATS_API_TASK,
    success: dashboardActions.getProjectModelsSuccess,
    failiure: dashboardActions.getProjectModelsFailiure,
  },
  assets: {
    method: 'POST',
    api: apiEndPoints.STATS_ASSETS_API,
    pattern: dashboardConstants.ASSETS_STATS_PATTERN,
    cancel: dashboardConstants.CANCEL_ASSETS_STATS_API_TASK,
    success: dashboardActions.getProjectAssetsSuccess,
    failiure: dashboardActions.getProjectAssetsFailiure,
  },
  venues: {
    method: 'POST',
    api: apiEndPoints.STATS_VENUES_API,
    pattern: dashboardConstants.VENUES_STATS_PATTERN,
    cancel: dashboardConstants.CANCEL_VENUES_STATS_API_TASK,
    success: dashboardActions.getProjectVenuesSuccess,
    failiure: dashboardActions.getProjectVenuesFailiure,
  },
  pulse: {
    method: 'POST',
    api: apiEndPoints.TIMELINE_PULSE_API,
    pattern: dashboardConstants.TIMELINE_PULSE_PATTERN,
    cancel: dashboardConstants.CANCEL_TIMELINE_PULSE_API_TASK,
    success: dashboardActions.getTimelinePulseSuccess,
    failiure: dashboardActions.getTimelinePulseFailiure,
  },
  cumulative: {
    method: 'POST',
    api: apiEndPoints.TIMELINE_CUMULATIVE_API,
    pattern: dashboardConstants.TIMELINE_CUMULATIVE_PATTERN,
    cancel: dashboardConstants.CANCEL_TIMELINE_CUMULATIVE_API_TASK,
    success: dashboardActions.getTimelineCumulativeSuccess,
    failiure: dashboardActions.getTimelineCumulativeFailiure,
  },
  ce: {
    method: 'POST',
    api: apiEndPoints.CONTINOUS_EXP_API,
    pattern: dashboardConstants.CONTINOUS_EXP_PATTERN,
    cancel: dashboardConstants.CANCEL_CONTINOUS_EXP_API_TASK,
    success: dashboardActions.getContinousExpSuccess,
  },

  // Filter
  tags: {
    method: 'POST',
    api: apiEndPoints.TAGS_POST_API,
    pattern: dashboardConstants.FILTER_TAGS_PATTERN,
    cancel: dashboardConstants.CANCEL_FILTER_TAGS_API_TASK,
    success: dashboardActions.getFilterTagsSuccess,
  },
  visionFilter: {
    method: 'POST',
    api: apiEndPoints.VISION_FILTER_API,
    pattern: dashboardConstants.VISION_FILTER_PATTERN,
    cancel: dashboardConstants.CANCEL_VISION_FILTER_API_TASK,
    success: dashboardActions.getVisionFilterSuccess,
  },
  sponsorFilter: {
    method: 'POST',
    api: apiEndPoints.SPONSOR_FILTER_API,
    pattern: dashboardConstants.SPONSORS_FILTER_PATTERN,
    cancel: dashboardConstants.CANCEL_SPONSORS_FILTER_API_TASK,
    success: dashboardActions.getSponsorsFilterSuccess,
  },
  assetFilter: {
    method: 'POST',
    api: apiEndPoints.ASSET_FILTER_API,
    pattern: dashboardConstants.ASSETS_FILTER_PATTERN,
    cancel: dashboardConstants.CANCEL_ASSETS_FILTER_API_TASK,
    success: dashboardActions.getAssetsFilterSuccess,
  },
  venuesFilter: {
    method: 'POST',
    api: apiEndPoints.VENUES_FILTER_API,
    pattern: dashboardConstants.VENUES_FILTER_PATTERN,
    cancel: dashboardConstants.CANCEL_VENUES_FILTER_API_TASK,
    success: dashboardActions.getVenuesFilterSuccess,
  },
  marketFilter: {
    method: 'POST',
    api: apiEndPoints.MARKET_FILTER_API,
    pattern: dashboardConstants.MARKET_FILTER_PATTERN,
    cancel: dashboardConstants.CANCEL_MARKET_FILTER_API_TASK,
    success: dashboardActions.getMarketFilterSuccess,
  },
  // Insights
  graphInsight: {
    method: 'POST',
    api: apiEndPoints.GRAPH_INSIGHT_API,
    pattern: dashboardConstants.GRAPH_INSIGHTS_PATTERN,
    cancel: dashboardConstants.CANCEL_GRAPH_INSIGHTS_API_TASK,
    success: dashboardActions.getProjectGraphInsightsSuccess,
  },

  // Social
  socialSubPlatform: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_SUB_PLATFORM_API,
    pattern: dashboardConstants.GET_SOCIAL_SUBPLATFORM_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_SUBPLATFORM_API_TASK,
    success: dashboardActions.getSocialPlatformSuccess,
  },
  socialBaseReport: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_BASE_REPORT_API,
    pattern: dashboardConstants.GET_SOCIAL_BASE_REPORT_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_BASE_REPORT_API_TASK,
    success: dashboardActions.getSocialBaseReportSuccess,
  },
  socialDigitalReportTemplate: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_DIGITAL_REPORT_TEMPLATE_API,
    pattern: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_PATTERN,
    cancel:
      dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_API_TASK,
    success: dashboardActions.getSocialDigitalReportTemplateSuccess,
  },
  socialDigitalReport: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_DIGITAL_REPORT_API,
    pattern: dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_REPORT_API_TASK,
    success: dashboardActions.getSocialDigitalReportSuccess,
  },
  socialTimeline: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_TIMELINE_API,
    pattern: dashboardConstants.GET_SOCIAL_TIMELINE_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_TIMELINE_API_TASK,
    success: dashboardActions.getSocialTimelineSuccess,
  },
  socialTimelineTemplate: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_TIMELINE_TEMPLATE_API,
    pattern: dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_TIMELINE_TEMPLATE_API_TASK,
    success: dashboardActions.getSocialTimelineTemplateSuccess,
  },
  socialHighlights: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_HIGHLIGHTS_API,
    pattern: dashboardConstants.GET_SOCIAL_HIGHLIGHTS_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_HIGHLIGHTS_API_TASK,
    success: dashboardActions.getSocialHighlightsSuccess,
  },
  socialPostanalysis: {
    method: 'POST',
    api: apiEndPoints.POST_ANALYSIS_API,
    pattern: dashboardConstants.GET_SOCIAL_DIGITAL_POST_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_DIGITAL_POST_API_TASK,
    success: dashboardActions.getPostanalysisSuccess,
  },
  socialRankTemplate: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_RANK_TEMPLATE_API,
    pattern: dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_RANK_TEMPLATE_API_TASK,
    success: dashboardActions.getSocialRankTemplateSuccess,
  },
  socialRank: {
    method: 'POST',
    api: apiEndPoints.SOCIAL_RANK_API,
    pattern: dashboardConstants.GET_SOCIAL_RANK_PATTERN,
    cancel: dashboardConstants.CANCEL_GET_SOCIAL_RANK_API_TASK,
    success: dashboardActions.getSocialRankSuccess,
  },

 // Digital
 digitalSubPlatform: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_SUB_PLATFORM_API,
  pattern: dashboardConstants.GET_DIGITAL_SUBPLATFORM_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_SUBPLATFORM_API_TASK,
  success: dashboardActions.getDigitalPlatformSuccess,
},
digitalBaseReport: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_BASE_REPORT_API,
  pattern: dashboardConstants.GET_DIGITAL_BASE_REPORT_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_BASE_REPORT_API_TASK,
  success: dashboardActions.getDigitalBaseReportSuccess,
},
digitalReportTemplate: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_REPORT_TEMPLATE_API,
  pattern: dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_PATTERN,
  cancel:dashboardConstants.CANCEL_GET_DIGITAL_REPORT_TEMPLATE_API_TASK,
  success: dashboardActions.getDigitalReportTemplateSuccess,
},
digitalReport: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_REPORT_API,
  pattern: dashboardConstants.GET_DIGITAL_REPORT_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_REPORT_API_TASK,
  success: dashboardActions.getDigitalReportSuccess,
},
digitalTimeline: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_TIMELINE_API,
  pattern: dashboardConstants.GET_DIGITAL_TIMELINE_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_TIMELINE_API_TASK,
  success: dashboardActions.getDigitalTimelineSuccess,
},
digitalTimelineTemplate: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_TIMELINE_TEMPLATE_API,
  pattern: dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_TIMELINE_TEMPLATE_API_TASK,
  success: dashboardActions.getDigitalTimelineTemplateSuccess,
},
digitalHighlights: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_HIGHLIGHTS_API,
  pattern: dashboardConstants.GET_DIGITAL_HIGHLIGHTS_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_HIGHLIGHTS_API_TASK,
  success: dashboardActions.getDigitalHighlightsSuccess,
},
digitalPostanalysis: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_POST_ANALYSIS_API,
  pattern: dashboardConstants.GET_DIGITAL_POST_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_POST_API_TASK,
  success: dashboardActions.getDigitalPostanalysisSuccess,
},
digitalRankTemplate: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_RANK_TEMPLATE_API,
  pattern: dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_RANK_TEMPLATE_API_TASK,
  success: dashboardActions.getDigitalRankTemplateSuccess,
},
digitalRank: {
  method: 'POST',
  api: apiEndPoints.DIGITAL_RANK_API,
  pattern: dashboardConstants.GET_DIGITAL_RANK_PATTERN,
  cancel: dashboardConstants.CANCEL_GET_DIGITAL_RANK_API_TASK,
  success: dashboardActions.getDigitalRankSuccess,
},

  analyticsGlobal: {
    method: 'POST',
    api: apiEndPoints.ANALYTICS_GLOBALMARKET_API,
    pattern: dashboardConstants.ANALYTICS_GLOBAL_PATTERN,
    cancel: dashboardConstants.CANCEL_ANALYTICS_GLOBAL_API_TASK,
    success: dashboardActions.getAnalyticsGlobalSuccess,
    failiure: dashboardActions.getAnalyticsGlobalFailiure,
  },
};

const overviewParser = res => {
  const { event, models, projects, teams, ...mainItems } = res;

  const sideNavConfig = {};
  const displayData = {};

  Object.keys(mainItems).filter(d => {
    if (mainItems[d].visible) {
      sideNavConfig[d] = mainItems[d].header;
      if (d === 'platforms' || d === 'venues') {
        displayData[d] = mainItems[d].data;
      } else if (d === 'sponsors' || d === 'assets') {
        displayData[d] = mainItems[d].data;
        displayData[d].map(
          x =>
            (x.models = models.data
              .map(m => {
                if (x.models.includes(m.modelID)) {
                  return m;
                }
              })
              .filter(y => y !== undefined)),
        );
      } else if (d === 'visions') {
        displayData[d] = mainItems[d].data;
        displayData[d].map(x => {
          if (x.participants.length > 4) {
            x.type = 'team';
          }

          if (x.participants.length === 2) {
            x.type = 'singles';
          }
          x.participants = teams.data
            .map(m => {
              if (x.participants.includes(m.teamID)) {
                return m;
              }
            })
            .filter(y => y !== undefined);
          return x;
        });
      } else {
        displayData[d] = [];
      }
    }
    return 0;
  });

  return { sideNavConfig, displayData };
};

function mainGraphParser({ data, data: { stats }, method, isLive }) {
  return {
    graph:
      stats &&
      stats
        .filter(d => (method === 'vision' && !isLive ? d.liveStatus === 0 : d))
        .map((d, i) => ({
          matchKey: d.id,
          disaplayName: d.displayName,
          quality: d.stats.quality ? Number(d.stats.quality.toFixed(2)) : 0,
          quantity: d.stats.quantity,
          value: d.stats.value,
          tooltip: data.stats[i].toolTip,
          image: data.stats[i].image,
          viewer: d.stats.viewers,
          //   method === 'vision' && d.stats.viewers
          //     ? isNaN(Number(d.stats.viewers.slice(d.stats.viewers.length - 2)))
          //       ? Number(d.stats.viewers.slice(0, -2))
          //       : Number(d.stats.viewers)
          //     : '',
          // viewerShipUnit:
          //   method === 'vision' && d.stats.viewers
          //     ? isNaN(Number(d.stats.viewers.slice(d.stats.viewers.length - 2)))
          //       ? d.stats.viewers.slice(d.stats.viewers.length - 2).trim()
          //       : ''
          //     : '',
          isLive: d.liveStatus,
          displayDate: d.displayDate,
          timestamp: method === 'vision' && d.timestamp.date,
        })),
    liveMatches: (stats && stats.filter(d => d.liveStatus === 1)) || [],
  };
}

const timelineParser = res => {
  let formattedData;
  if (res.audit) {
    const auditMap = {};
    // eslint-disable-next-line no-return-assign
    res.audit.map((d, i) => (auditMap[Number(d.timespan)] = i));
    formattedData = res.data.timeline.map(d => {
      if (auditMap[d.timespan] !== undefined) {
        // eslint-disable-next-line no-param-reassign
        d.audit = res.audit[auditMap[d.timespan]];
      }
      return d;
    });
  } else {
    formattedData = res.timeline;
  }
  return formattedData;
};

const continousExposureDataParser = res => {
  const metric = res.general.defaultGraphView.View;
  const total = res.data.reduce((a, v) => a + v.stats[metric].exposureCount, 0);

  const graphData = res.data.map(d => {
    const stats = d.stats[metric];
    return {
      name: d.id,
      // value: isNaN(((stats.exposureCount / total) * 100).toFixed(2))
      // ? 0
      // : ((stats.exposureCount / total) * 100).toFixed(2),
      value: ((stats.exposureCount / total) * 100).toFixed(2),
      brandExp: stats.exposureCount || 0,
      avgExp: stats.avgExposure || 0,
      expCount: stats.apperance || 0,
      rank: stats.value.toFixed(2) || 0,
    };
  });

  const totalExposure = {
    count: total,
    metric,
  };

  const expSponsors = {};
  // eslint-disable-next-line no-return-assign
  if(res.general.graphStatus && ! res.general.graphStatus.value){
    res.data.map(d => (expSponsors[d.id] = d.details.sort((a,b)=> (b.exposureCount - a.exposureCount))));
  }else{
    res.data.map(d => (expSponsors[d.id] = d.details));
  }
  return {
    secOne: {
      totalExposure,
      graphData,
    },
    secTwo: {
      ...expSponsors,
    },
    headers: res.general.graphHeaders,
  };
};
const socialTimelineDataParser = res => {
  const keys = [];
  const data = [];
  res.keys.map(d => keys.push({ type: 'number', label: d }));
  res.timelineData.map(d =>
    data.push({
      date: d.interval,
      supplement:d.supplement,	
      ...(() => {
        const secObj = {};
        if(res.viewCategory	==4){
          res.keys.map(da => (secObj[da] = d[da] ? d[da] : 0));
        }else{
          res.keys.map(da => (secObj[da] = d[da] ? Math.abs(d[da]) : 0));
        }
        return secObj;
      })(),
    }),
  );

  return {
    keys,
    data,
  };
};

function* successGenerator({
  data: { data },
  method,
  action,
  payload: { graphCategory },
}) {
  let parsedData;
  if (
    method === 'vision' ||
    method === 'brands' ||
    method === 'models' ||
    method === 'assets' ||
    method === 'venues'
  ) {
    parsedData = yield call(mainGraphParser, { data, method });
  }

  if (method === 'pulse' || method === 'cumulative') {
    parsedData = yield call(timelineParser, data);
  }

  if (method === 'projectOverview') {
    parsedData = yield call(overviewParser, data);
  }

  if (method === 'ce') {
    parsedData = yield call(continousExposureDataParser, data);
  }

  if (method === 'socialTimeline') {
    parsedData = yield call(socialTimelineDataParser, data);
  }

  switch (method) {
    case 'tags':
      yield putResolve(action.success({ data }));
      break;
    case 'visionFilter':
      yield putResolve(action.success({ data }));
      break;
    case 'sponsorFilter':
      yield putResolve(action.success({ data }));
      break;
    case 'assetFilter':
      yield putResolve(action.success({ data }));
      break;
    case 'venuesFilter':
      yield putResolve(action.success({ data }));
      break;
    case 'marketFilter':
        yield putResolve(action.success({ data }));
        break;  
    case 'ce':
      yield putResolve(action.success({ data: parsedData }));
      break;
    case 'pulse':
      yield putResolve(action.success({ data: { graph: parsedData, data } }));
      break;
    case 'cumulative':
      yield putResolve(action.success({ data: { graph: parsedData, data } }));
      break;
    case 'graphInsight':
      yield putResolve(action.success({ data, graphCategory }));
      break;
    case 'projectOverview':
      yield putResolve(action.success({ data: parsedData }));
      break;
    case 'analyticsViews':
      yield putResolve(action.success({ data }));
      break;
    case 'analyticsGlobal':
        yield putResolve(action.success({ data }));
        break;  
    case 'globalValuation':
      yield putResolve(action.success({ data }));
      break;
    case 'socialSubPlatform':
      yield putResolve(action.success({ data }));
      break;
    case 'socialBaseReport':
      yield putResolve(action.success({ data }));
      break;
    case 'socialDigitalReportTemplate':
      yield putResolve(action.success({ data }));
      break;
    case 'socialDigitalReport':
      yield putResolve(action.success({ data }));
      break;
    case 'socialPostanalysis':
        yield putResolve(action.success({ data }));
        break;  
    case 'socialTimeline':
      yield putResolve(action.success({ data: parsedData }));
      break;
    case 'socialTimelineTemplate':
        yield putResolve(action.success({ data}));
        break;  
    case 'socialHighlights':
      yield putResolve(action.success({ data }));
      break;
    case 'socialRankTemplate':
      yield putResolve(action.success({ data }));
      break;
    case 'socialRank':
      yield putResolve(action.success({ data }));
      break;
      case 'digitalSubPlatform':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalBaseReport':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalReportTemplate':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalReport':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalPostanalysis':
          yield putResolve(action.success({ data }));
          break;  
      case 'digitalTimeline':
        yield putResolve(action.success({ data: parsedData }));
        break;
      case 'digitalTimelineTemplate':
          yield putResolve(action.success({ data}));
          break;  
      case 'digitalHighlights':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalRankTemplate':
        yield putResolve(action.success({ data }));
        break;
      case 'digitalRank':
        yield putResolve(action.success({ data }));
        break;
    default:
      yield putResolve(
        action.success({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
  }
}

function* errorGenerator({ err, method, action }) {
  switch (method) {
    default:
      if (axios.isCancel(err)) console.log('task cancelled', action.cancel);
      else {
        if (action.failiure) yield putResolve(action.failiure());
        ALL_ERROR_HANDLER(err);
      }
  }
}

// <==========================POLLING SAGAS===============================>

// Visons
export function* pollVisionStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.STATS_VISION_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(mainGraphParser, {
        data,
        method: 'vision',
        isLive: true,
      });

      yield put(
        dashboardActions.getProjectVisionSuccess({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollVisionStatsFailure(err));
    }
  }
}

export function* watchPollVisionStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_VISIONS_STATS);
    if (visionStatsBackgroundTask) yield cancel(visionStatsBackgroundTask);
    visionStatsBackgroundTask = yield fork(pollVisionStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_VISIONS_STATS);
    yield cancel(visionStatsBackgroundTask);
  }
}

// Brands
export function* pollBrandsStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.STATS_BRANDS_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(mainGraphParser, {
        data,
        method: 'brands',
      });

      yield put(
        dashboardActions.getProjectBrandsSuccess({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollBrandsStatsFailure(err));
    }
  }
}

export function* watchPollBrandsStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_BRANDS_STATS);
    if (brandsStatsBackgroundTask) yield cancel(brandsStatsBackgroundTask);
    brandsStatsBackgroundTask = yield fork(pollBrandsStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_BRANDS_STATS);
    yield cancel(brandsStatsBackgroundTask);
  }
}

// Assets
export function* pollAssetsStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.STATS_ASSETS_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(mainGraphParser, {
        data,
        method: 'assets',
      });

      yield put(
        dashboardActions.getProjectAssetsSuccess({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollAssetsStatsFailure(err));
    }
  }
}

export function* watchPollAssetsStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_ASSETS_STATS);
    if (assetStatsBackgroundTask) yield cancel(assetStatsBackgroundTask);
    assetStatsBackgroundTask = yield fork(pollAssetsStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_ASSETS_STATS);
    yield cancel(assetStatsBackgroundTask);
  }
}

// Venues
export function* pollVenuesStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.STATS_VENUES_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(mainGraphParser, {
        data,
        method: 'venues',
      });

      yield put(
        dashboardActions.getProjectVenuesSuccess({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollVenuesStatsFailure(err));
    }
  }
}

export function* watchPollVenuesStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_VENUES_STATS);
    if (venueStatsBackgroundTask) yield cancel(venueStatsBackgroundTask);
    venueStatsBackgroundTask = yield fork(pollVenuesStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_VENUES_STATS);
    yield cancel(venueStatsBackgroundTask);
  }
}

// Models
export function* pollModelsStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.STATS_MODELS_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(mainGraphParser, {
        data,
        method: 'models',
      });

      yield put(
        dashboardActions.getProjectModelsSuccess({
          data: {
            graph: parsedData.graph,
            liveMatches: parsedData.liveMatches,
            data,
          },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollModelsStatsFailure(err));
    }
  }
}

export function* watchPollModelsStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_MODELS_STATS);
    if (modelStatsBackgroundTask) yield cancel(modelStatsBackgroundTask);
    modelStatsBackgroundTask = yield fork(pollModelsStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_MODELS_STATS);
    yield cancel(modelStatsBackgroundTask);
  }
}

// Cumulative
export function* pollCumulativeStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.TIMELINE_CUMULATIVE_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(timelineParser, data);

      yield put(
        dashboardActions.getTimelineCumulativeSuccess({
          data: { graph: parsedData, data },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollCumulativeStatsFailure(err));
    }
  }
}

export function* watchPollCumulativeStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_CUMULATIVE_STATS);
    if (cumulativeStatsBackgroundTask)
      yield cancel(cumulativeStatsBackgroundTask);
    cumulativeStatsBackgroundTask = yield fork(
      pollCumulativeStatsGenerator,
      payload,
    );
    yield take(dashboardConstants.STOP_POLLING_CUMULATIVE_STATS);
    yield cancel(cumulativeStatsBackgroundTask);
  }
}

// Pulse
export function* pollPulseStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.TIMELINE_PULSE_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(timelineParser, data);

      yield put(
        dashboardActions.getTimelinePulseSuccess({
          data: { graph: parsedData, data },
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollPulseStatsFailure(err));
    }
  }
}

export function* watchPollPulseStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_PULSE_STATS);
    if (pulseStatsBackgroundTask) yield cancel(pulseStatsBackgroundTask);
    pulseStatsBackgroundTask = yield fork(pollPulseStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_PULSE_STATS);
    yield cancel(pulseStatsBackgroundTask);
  }
}

// CE
export function* pollCEStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.CONTINOUS_EXP_API,
    method: 'POST',
    data: payload,
    headers,
  };

  while (true) {
    try {
      const { data: { data = {} } = {} } = yield call(axios, request);
      const parsedData = yield call(continousExposureDataParser, data);

      yield put(
        dashboardActions.getContinousExpSuccess({
          data: parsedData,
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollCEStatsFailure(err));
    }
  }
}

export function* watchPollCEStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_CE_STATS);
    if (ceStatsBackgroundTask) yield cancel(ceStatsBackgroundTask);
    ceStatsBackgroundTask = yield fork(pollCEStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_CE_STATS);
    yield cancel(ceStatsBackgroundTask);
  }
}

// KPI
export function* pollKPIStatsGenerator(payload) {
  const request = {
    url: apiEndPoints.KPI_STATS_API,
    method: 'POST',
    data: payload,
    headers,
  };

  const { kpiCategory } = payload;

  while (true) {
    try {
      const { data: { data = [] } = {} } = yield call(axios, request);

      yield put(
        getKpiStatsSuccess({
          data,
          kpiCategory,
        }),
      );
      yield delay(POLL_DELAY);
    } catch (err) {
      yield delay(POLL_DELAY);
      yield put(dashboardActions.pollKPIStatsFailure(err));
    }
  }
}

export function* watchPollKPIStatsSaga() {
  while (true) {
    const { payload } = yield take(dashboardConstants.POLL_KPI_STATS);
    if (kpiStatsBackgroundTask) yield cancel(kpiStatsBackgroundTask);
    kpiStatsBackgroundTask = yield fork(pollKPIStatsGenerator, payload);
    yield take(dashboardConstants.STOP_POLLING_KPI_STATS);
    yield cancel(kpiStatsBackgroundTask);
  }
}

// <==========================SOCKET SAGAS===============================>

const socketServerURL = 'http://49.207.183.183:8085';
// const socketServerURL = 'http://localhost:3000';
let socket;

const connect = () => {
  socket = io(socketServerURL);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

const disconnect = () => {
  socket = io(socketServerURL);
  return new Promise(resolve => {
    socket.on('disconnect', () => {
      resolve(socket);
    });
  });
};

const reconnect = () => {
  socket = io(socketServerURL);
  return new Promise(resolve => {
    socket.on('reconnect', () => {
      resolve(socket);
    });
  });
};

const createSocketChannel = (socket, { payload, socketOn, socketEmmit }) =>
  eventChannel(emit => {
    const handler = data => {
      emit(data);
    };
    socket.on(socketOn, handler);
    socket.emit(socketEmmit, payload);
    return () => {
      socket.off(socketOn, handler);
    };
  });

function* listenDisconnectSaga() {
  while (true) {
    yield call(disconnect);
  }
}

function* listenConnectSaga() {
  while (true) {
    yield call(reconnect);
  }
}

// Saga to switch on channel.
function* listenServerSaga({ action, payload, socketOn, socketEmmit }) {
  console.log(action, payload, socketOn, socketEmmit);
  try {
    const { timeout } = yield race({
      connected: call(connect),
      // timeout: delay(2000),
    });
    if (timeout) {
      // yield put({ type: SERVER_OFF });
    }
    const socket = yield call(connect);
    const socketChannel = yield call(createSocketChannel, socket, {
      payload,
      socketOn,
      socketEmmit,
    });

    yield fork(listenDisconnectSaga);
    yield fork(listenConnectSaga);
    while (true) {
      const res = yield take(socketChannel);
      console.log(JSON.parse(res.data));

      let timelineParsedData;
      let ceData;
      let parsedData;

      if (socketOn === 'timelinedata' || socketOn === 'pulsedata') {
        timelineParsedData = timelineParser(JSON.parse(res.data));
      }
      if (socketOn === 'continuousexpdata') {
        ceData = continousExposureDataParser(JSON.parse(res.data));
      }
      if (
        socketOn !== 'timelinedata' ||
        socketOn !== 'pulsedata' ||
        socketOn !== 'continuousexpdata'
      ) {
        parsedData = mainGraphParser({ data: JSON.parse(res.data) });
      }

      if (socketOn === 'timelinedata' || socketOn === 'pulsedata') {
        yield putResolve(
          action({
            data: {
              graph: timelineParsedData,
              data: JSON.parse(res.data),
            },
          }),
        );
      } else if (socketOn === 'continuousexpdata') {
        yield putResolve(
          action({
            data: ceData,
          }),
        );
      } else if (socketOn === 'kpidata') {
        yield putResolve(
          action({
            data: JSON.parse(res.data),
            kpiCategory: payload.kpiCategory,
          }),
        );
      } else {
        yield putResolve(
          action({
            data: {
              graph: parsedData.graph,
              liveMatches: parsedData.liveMatches,
              data: JSON.parse(res.data),
            },
          }),
        );
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (yield cancelled()) {
      socket.disconnect(true);
      // yield put({ type: CHANNEL_OFF });
    }
  }
}

// saga listens for start and stop Vision actions
function* startStopVisionChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_VISIONS_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getProjectVisionSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_VISIONS_DISCONNECT),
    });
  }
}

// saga listens for start and stop Sponsor actions
function* startStopSponsorChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_SPONSORS_CONNECT,
    );

    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getProjectBrandsSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_SPONSORS_DISCONNECT),
    });
  }
}

// saga listens for start and stop Asset actions
function* startStopAssetChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_ASSETS_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getProjectAssetsSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_ASSETS_DISCONNECT),
    });
  }
}

// saga listens for start and stop Venues actions
function* startStopVenuesChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_VENUES_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getProjectVenuesSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_VENUES_DISCONNECT),
    });
  }
}

// saga listens for start and stop Models actions
function* startStopModelsChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_MODELS_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getProjectModelsSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_MODELS_DISCONNECT),
    });
  }
}

// saga listens for start and stop Timeline actions
function* startStopTimelineChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_TIMELINE_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getTimelineCumulativeSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_TIMELINE_DISCONNECT),
    });
  }
}

// saga listens for start and stop Pulse actions
function* startStopPulseChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_PULSE_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getTimelinePulseSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_PULSE_DISCONNECT),
    });
  }
}

// saga listens for start and stop CE actions
function* startStopCEChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_CE_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: dashboardActions.getContinousExpSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_CE_DISCONNECT),
    });
  }
}

// saga listens for start and stop KPI actions
function* startStopKPIChannel() {
  while (true) {
    const { payload, socketOn, socketEmmit } = yield take(
      dashboardConstants.GET_LIVE_KPI_CONNECT,
    );
    yield race({
      task: call(listenServerSaga, {
        action: getKpiStatsSuccess,
        payload,
        socketOn,
        socketEmmit,
      }),
      cancel: take(dashboardConstants.GET_LIVE_KPI_DISCONNECT),
    });
  }
}

export default function*() {
  yield all(_sagaHandler(successGenerator, errorGenerator, actionType));
  yield all(
    [
      watchPollVisionStatsSaga,
      watchPollBrandsStatsSaga,
      watchPollAssetsStatsSaga,
      watchPollVenuesStatsSaga,
      watchPollModelsStatsSaga,
      watchPollCumulativeStatsSaga,
      watchPollPulseStatsSaga,
      watchPollCEStatsSaga,
      watchPollKPIStatsSaga,
    ].map(fork),
  );
  yield all([
    startStopVisionChannel(),
    startStopSponsorChannel(),
    startStopAssetChannel(),
    startStopVenuesChannel(),
    startStopModelsChannel(),
    startStopTimelineChannel(),
    startStopPulseChannel(),
    startStopCEChannel(),
    startStopKPIChannel(),
  ]);
}
