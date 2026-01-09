/*
 *
 * Dashboard reducer
 *
 */
// import produce from 'immer';
import * as dashboardConstants from './constants';

const INSIGHTS_REDUCER_KEY_MAP = {
  '01': 'visionInsights',
  '02': 'brandsInsights',
  '03': 'assetsInsights',
  '04': 'venuesInsights',
  '05': 'modelsInsights',
  '06': 'pulseInsights',
  '07': 'cumulativeInsights',
  '08': 'continousExposureInsights',
};

const category = {
  // Overview
  overview: { loading: false },
  globalValuation: { loading: false },

  // Views
  views: { loading: false },

  // Stats
  vision: { loading: false },
  assets: { loading: false },
  models: { loading: false },
  venues: { loading: false },
  brands: { loading: false },
  pulse: { loading: false },
  cumulative: { loading: false },
  continousExp: {
    secOne: { graphData: [], totalExposure: {} },
    secTwo: {},
    headers: [],
  },

  // Filters
  filterTags: [],
  visionFilters: [],
  assetsFilters: [],
  venuesFilters: [],
  brandsFilters: [],
  marketsFilters: [],

  // Insights
  visionInsights: [],
  modelsInsights: [],
  assetsInsights: [],
  venuesInsights: [],
  brandsInsights: [],
  pulseInsights: [],
  cumulativeInsights: [],
  continousExposureInsights: [],

  // Social
  subPlatforms: { loading: false },
  baseReport: { loading: false },
  socialDigitalReportTemplate: { loading: false },
  socialDigitalReport: { loading: false },
  socialTimeline: { loading: false },
  socialTimelineTemplate: { loading: false },
  socialHighlights: { loading: false },
  socialPostanalysis: { loading: false },
  socialRankTemplate: { loading: false },
  socialRank: { loading: false },

  // Digital
  digitalsubPlatforms: { loading: false },
  digitalbaseReport: { loading: false },
  digitalDigitalReportTemplate: { loading: false },
  digitalReport: { loading: false },
  digitalTimeline: { loading: false },
  digitalTimelineTemplate: { loading: false },
  digitalHighlights: { loading: false },
  digitalPostanalysis: { loading: false },
  digitalRankTemplate: { loading: false },
  digitalRank: { loading: false },

  // globalmarket
  globalmarket: { loading: false }, 
};

export const initialState = {
  ...category,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_GENERATOR:
      return {
        ...state,
        ...category,
      };

    // Overview
    case dashboardConstants.GET_PROJECT_OVERVIEW_PATTERN: {
      return {
        ...state,
        overview: { loading: true },
      };
    }
    case dashboardConstants.GET_PROJECT_OVERVIEW_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        overview: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_PROJECT_OVERVIEW_FAILIURE: {
      return {
        ...state,
        overview: { loading: false },
      };
    }

    // Global Valuation
    case dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_PATTERN: {
      return {
        ...state,
        globalValuation: { geoLoading: true },
      };
    }
    case dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        globalValuation: {
          geoData: data.map(d => ({
            ...d,
            coordinates: [d.coordinates[1], d.coordinates[0]],
          })),
          geoLoading: false,
        },
      };
    }
    case dashboardConstants.GET_PROJECT_GLOBAL_VALUATION_FAILIURE: {
      return {
        ...state,
        globalValuation: { geoLoading: false },
      };
    }

    // Analytics View
    case dashboardConstants.ANALYTICS_VIEWS_PATTERN: {
      return {
        ...state,
        views: { loading: true },
      };
    }
    case dashboardConstants.ANALYTICS_VIEWS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        views: { data, loading: false },
      };
    }
    case dashboardConstants.ANALYTICS_VIEWS_FAILIURE: {
      return {
        ...state,
        views: { loading: false },
      };
    }

// Analytics Global markets
case dashboardConstants.ANALYTICS_GLOBAL_PATTERN: {
  return {
    ...state,
    globalmarket: { loading: true },
  };
}
case dashboardConstants.ANALYTICS_GLOBAL_SUCCESS: {
  
  const {
    response: { data },
  } = action;
  return {
    ...state,
    globalmarket: { data, loading: false },
  };
  
}
case dashboardConstants.ANALYTICS_GLOBAL_FAILIURE: {
  return {
    ...state,
    globalmarket: { loading: false },
  };
}




    // Assets
    case dashboardConstants.ASSETS_STATS_PATTERN: {
      return {
        ...state,
        assets: { loading: true },
      };
    }
    case dashboardConstants.ASSETS_STATS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        assets: { ...data, loading: false },
      };
    }
    case dashboardConstants.ASSETS_STATS_FAILIURE: {
      return {
        ...state,
        assets: { loading: false },
      };
    }
    // Brands
    case dashboardConstants.BRANDS_STATS_PATTERN: {
      return {
        ...state,
        brands: { loading: true },
      };
    }
    case dashboardConstants.BRANDS_STATS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        brands: { ...data, loading: false },
      };
    }
    case dashboardConstants.BRANDS_STATS_FAILIURE: {
      return {
        ...state,
        brands: { loading: false },
      };
    }
    // Models
    case dashboardConstants.MODELS_STATS_PATTERN: {
      return {
        ...state,
        models: { loading: true },
      };
    }
    case dashboardConstants.MODELS_STATS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        models: { ...data, loading: false },
      };
    }
    case dashboardConstants.MODELS_STATS_FAILIURE: {
      return {
        ...state,
        models: { loading: false },
      };
    }
    // Venues
    case dashboardConstants.VENUES_STATS_PATTERN: {
      return {
        ...state,
        venues: { loading: true },
      };
    }
    case dashboardConstants.VENUES_STATS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        venues: { ...data, loading: false },
      };
    }
    case dashboardConstants.VENUES_STATS_FAILIURE: {
      return {
        ...state,
        venues: { loading: false },
      };
    }
    // Vison
    case dashboardConstants.VISION_STATS_PATTERN: {
      return {
        ...state,
        vision: { loading: true },
      };
    }
    case dashboardConstants.VISION_STATS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        vision: { ...data, loading: false },
      };
    }
    case dashboardConstants.VISION_STATS_FAILIURE: {
      return {
        ...state,
        vision: { loading: false },
      };
    }
    // Pulse
    case dashboardConstants.TIMELINE_PULSE_PATTERN: {
      return {
        ...state,
        pulse: { loading: true },
      };
    }
    case dashboardConstants.TIMELINE_PULSE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        pulse: { ...data, loading: false },
      };
    }
    case dashboardConstants.TIMELINE_PULSE_FAILIURE: {
      return {
        ...state,
        pulse: { loading: false },
      };
    }
    // Cumulative
    case dashboardConstants.TIMELINE_CUMULATIVE_PATTERN: {
      return {
        ...state,
        cumulative: { loading: true },
      };
    }
    case dashboardConstants.TIMELINE_CUMULATIVE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        cumulative: { ...data, loading: false },
      };
    }
    case dashboardConstants.TIMELINE_CUMULATIVE_FAILIURE: {
      return {
        ...state,
        cumulative: { loading: false },
      };
    }
    // CE
    case dashboardConstants.CONTINOUS_EXP_PATTERN: {
      return {
        ...state,
        continousExp: {
          secOne: { graphData: [], totalExposure: {} },
          secTwo: {},
          headers: [],
        },
      };
    }
    case dashboardConstants.CONTINOUS_EXP_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        continousExp: data,
      };
    }
    case dashboardConstants.FILTER_TAGS_PATTERN: {
      return {
        ...state,
        filterTags: [],
      };
    }
    case dashboardConstants.FILTER_TAGS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        filterTags: data,
      };
    }
    case dashboardConstants.VISION_FILTER_PATTERN: {
      return {
        ...state,
        visionFilters: [],
      };
    }
    case dashboardConstants.VISION_FILTER_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        visionFilters: data,
      };
    }
    case dashboardConstants.SPONSORS_FILTER_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        brandsFilters: data,
      };
    }
    case dashboardConstants.ASSETS_FILTER_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        assetsFilters: data,
      };
    }
    case dashboardConstants.VENUES_FILTER_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        venuesFilters: data,
      };
    }
    case dashboardConstants.MARKET_FILTER_PATTERN: {
      return {
        ...state,
        marketsFilters: [],
      };
    }
    case dashboardConstants.MARKET_FILTER_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        marketsFilters: data,
      };
    }

    // Insights
    case dashboardConstants.GRAPH_INSIGHTS_PATTERN: {
      return {
        ...state,
        visionInsights: [],
        modelsInsights: [],
        assetsInsights: [],
        venuesInsights: [],
        brandsInsights: [],
        pulseInsights: [],
        cumulativeInsights: [],
        continousExposureInsights: [],
      };
    }
    case dashboardConstants.GRAPH_INSIGHTS_SUCCESS: {
      const {
        response: { data, graphCategory },
      } = action;
      return { ...state, [INSIGHTS_REDUCER_KEY_MAP[graphCategory]]: data };
    }

    // Social
    // 1) Sub Platforms
    case dashboardConstants.GET_SOCIAL_SUBPLATFORM_PATTERN: {
      return {
        ...state,
        subPlatforms: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_SUBPLATFORM_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        subPlatforms: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_SUBPLATFORM_FAILIURE: {
      return {
        ...state,
        subPlatforms: { loading: false },
      };
    }

    // 2) Base Report
    case dashboardConstants.GET_SOCIAL_BASE_REPORT_PATTERN: {
      return {
        ...state,
        baseReport: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_BASE_REPORT_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        baseReport: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_BASE_REPORT_FAILIURE: {
      return {
        ...state,
        baseReport: { loading: false },
      };
    }

    // 3) Digital Report Template
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_PATTERN: {
      return {
        ...state,
        socialDigitalReportTemplate: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialDigitalReportTemplate: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_TEMPLATE_FAILIURE: {
      return {
        ...state,
        socialDigitalReportTemplate: { loading: false },
      };
    }

    // 4) Digital Report
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_PATTERN: {
      return {
        ...state,
        socialDigitalReport: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialDigitalReport: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_REPORT_FAILIURE: {
      return {
        ...state,
        socialDigitalReport: { loading: false },
      };
    }

    // 5) Timeline
    case dashboardConstants.GET_SOCIAL_TIMELINE_PATTERN: {
      return {
        ...state,
        socialTimeline: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_TIMELINE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialTimeline: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_TIMELINE_FAILIURE: {
      return {
        ...state,
        socialTimeline: { loading: false },
      };
    }


// 5.1) Timeline
case dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_PATTERN: {
  return {
    ...state,
    socialTimelineTemplate: { loading: true },
  };
}
case dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_SUCCESS: {
  const {
    response: { data },
  } = action;
  return {
    ...state,
    socialTimelineTemplate: { ...data, loading: false },
  };
}
case dashboardConstants.GET_SOCIAL_TIMELINE_TEMPLATE_FAILIURE: {
  return {
    ...state,
    socialTimelineTemplate: { loading: false },
  };
}


    // 6) Highlights 
    case dashboardConstants.GET_SOCIAL_HIGHLIGHTS_PATTERN: {
      return {
        ...state,
        socialHighlights: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_HIGHLIGHTS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialHighlights: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_HIGHLIGHTS_FAILIURE: {
      return {
        ...state,
        socialHighlights: { loading: false },
      };
    }


    case dashboardConstants.GET_SOCIAL_DIGITAL_POST_PATTERN: {
      return {
        ...state,
        socialPostanalysis: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_POST_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialPostanalysis: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_DIGITAL_POST_FAILIURE: {
      return {
        ...state,
        socialPostanalysis: { loading: false },
      };
    }



    // 7) Digital Report Template
    case dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_PATTERN: {
      return {
        ...state,
        socialRankTemplate: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialRankTemplate: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_RANK_TEMPLATE_FAILIURE: {
      return {
        ...state,
        socialRankTemplate: { loading: false },
      };
    }

    // 8) Digital Report
    case dashboardConstants.GET_SOCIAL_RANK_PATTERN: {
      return {
        ...state,
        socialRank: { loading: true },
      };
    }
    case dashboardConstants.GET_SOCIAL_RANK_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        socialRank: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_SOCIAL_RANK_FAILIURE: {
      return {
        ...state,
        socialRank: { loading: false },
      };
    }


// Digital
    // 1) Sub Platforms
    case dashboardConstants.GET_DIGITAL_SUBPLATFORM_PATTERN: {
      return {
        ...state,
        digitalsubPlatforms: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_SUBPLATFORM_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalsubPlatforms: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_SUBPLATFORM_FAILIURE: {
      return {
        ...state,
        digitalsubPlatforms: { loading: false },
      };
    }

    // 2) Base Report
    case dashboardConstants.GET_DIGITAL_BASE_REPORT_PATTERN: {
      return {
        ...state,
        digitalbaseReport: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_BASE_REPORT_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalbaseReport: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_BASE_REPORT_FAILIURE: {
      return {
        ...state,
        digitalbaseReport: { loading: false },
      };
    }

    // 3) Digital Report Template
    case dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_PATTERN: {
      return {
        ...state,
        digitalReportTemplate: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalReportTemplate: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_REPORT_TEMPLATE_FAILIURE: {
      return {
        ...state,
        digitalReportTemplate: { loading: false },
      };
    }

    // 4) Digital Report
    case dashboardConstants.GET_DIGITAL_REPORT_PATTERN: {
      return {
        ...state,
        digitalReport: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_REPORT_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalReport: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_REPORT_FAILIURE: {
      return {
        ...state,
        digitalReport: { loading: false },
      };
    }

    // 5) Timeline
    case dashboardConstants.GET_DIGITAL_TIMELINE_PATTERN: {
      return {
        ...state,
        digitalTimeline: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_TIMELINE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalTimeline: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_TIMELINE_FAILIURE: {
      return {
        ...state,
        digitalTimeline: { loading: false },
      };
    }


// 5.1) Timeline
case dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_PATTERN: {
  return {
    ...state,
    digitalTimelineTemplate: { loading: true },
  };
}
case dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_SUCCESS: {
  const {
    response: { data },
  } = action;
  return {
    ...state,
    digitalTimelineTemplate: { ...data, loading: false },
  };
}
case dashboardConstants.GET_DIGITAL_TIMELINE_TEMPLATE_FAILIURE: {
  return {
    ...state,
    digitalTimelineTemplate: { loading: false },
  };
}


    // 6) Highlights 
    case dashboardConstants.GET_DIGITAL_HIGHLIGHTS_PATTERN: {
      return {
        ...state,
        digitalHighlights: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_HIGHLIGHTS_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalHighlights: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_HIGHLIGHTS_FAILIURE: {
      return {
        ...state,
        digitalHighlights: { loading: false },
      };
    }


    case dashboardConstants.GET_DIGITAL_POST_PATTERN: {
      return {
        ...state,
        digitalPostanalysis: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_POST_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalPostanalysis: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_POST_FAILIURE: {
      return {
        ...state,
        digitalPostanalysis: { loading: false },
      };
    }

    // 7) Digital Report Template
    case dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_PATTERN: {
      return {
        ...state,
        digitalRankTemplate: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalRankTemplate: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_RANK_TEMPLATE_FAILIURE: {
      return {
        ...state,
        digitalRankTemplate: { loading: false },
      };
    }

    // 8) Digital Report
    case dashboardConstants.GET_DIGITAL_RANK_PATTERN: {
      return {
        ...state,
        digitalRank: { loading: true },
      };
    }
    case dashboardConstants.GET_DIGITAL_RANK_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        digitalRank: { ...data, loading: false },
      };
    }
    case dashboardConstants.GET_DIGITAL_RANK_FAILIURE: {
      return {
        ...state,
        digitalRank: { loading: false },
      };
    }


    default:
      return state;
  }
};

export default dashboardReducer;
