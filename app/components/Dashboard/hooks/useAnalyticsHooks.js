/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import qs from 'query-string';
import uniq from 'lodash/uniq';
import { MEDIA_CONSTANTS } from 'utils/constants';

const FILTER_INITIAL_STATE = {
  visions: [],
  brands: [],
  models: [],
  assets: [],
  venues: [],
  GlobalMarket: []
};

const FILTER_KEYS = {
  visions: 'Matches',
  sponsors: 'Brands',
  assets: 'Assets',
  venues: 'Venues',
  globalmarket: 'GlobalMarket',
};

const useAnalyticsHooks = ({
  getAnalyticsViews,
  getAnalyticsGlobalMarkets,
  // Static
  getProjectVision,
  getProjectBrands,
  getProjectAssets,
  getProjectVenues,
  getProjectModels,
  getTimelinePulse,
  getTimelineCumulative,
  getContinousExp,
  getKpiStats,
  getAnalyticsViewsCancel,
  getProjectVisionCancel,
  getProjectVenuesCancel,
  getProjectModelsCancel,
  getProjectAssetsCancel,
  getProjectBrandsCancel,
  getTimelinePulseCancel,
  getTimelineCumulativeCancel,
  getContinousExpCancel,

  // Polling
  pollVisionStats,
  pollBrandsStats,
  pollAssetsStats,
  pollVenuesStats,
  pollModelsStats,
  pollCumulativeStats,
  pollPulseStats,
  pollCEStats,
  pollKPIStats,
  dashboard,
  kpi,
  timeline,
  views: { loading: viewLoading, data: viewData = [] } = {}, 
  location,
  continousExp,
  user: { loginID } = {},

  // Social
  getSocialPlatform,
  subPlatforms,

  getSocialBaseReport,
  baseReport: {
    projStartDateTime:projStartDateTime,
    projEndDateTime:projEndDateTime,
    details: baseReportData = [],
    loading: baseReportLoading,
    graph: baseReportMetaData = {},
  },

  getSocialDigitalReportTemplate,
  socialReportTemplate: {
    data: digitalReportCategories = [],
    loading: digitalReportTemplateLoading,
  } = {},

  getSocialDigitalReport,
  socialReport: {
    details: digitalReportData = [],
    stats : bargraphdata =[],
    graph_name: digitalReportGraphType,
    loading: digitalReportGraphLoading,
  } = {},

  getSocialTimelineTemplate,
  socialTimelineTemplateRes: { 
        category: socialCategory = [],
        viewDuration: socialTimeInterval = [] 
      } = {},
  getSocialTimeline,
  socialTimeline: {
    keys: TimelineKeys = [],
    data: TimelineData = [],
    loading: timelineLoading,
  } = {},

  getSocialHighlights,
  highlights:{
    highlights:highlightsdata=[],
    loading: socialLoading,
  }={},
  getPostanalysis,
  socialPostanalysis:{
    details	: postAnalysisData = [],
    loading: postAnalysisLoading,
  } = {},
  getSocialRankTemplate,
  rankTemplate: {
    data	: rankCategories = [],
    loading: rankTemplateLoading,
  } = {},

  getSocialRank,
  rank: { details: rankData = [], loading: rankLoading } = {},
  
  globalmarket: { data: globalmarketData = [] } = {}
}) => {
  const { type, ...query } = qs.parse(location.search);
  const [activeViewID, setActiveViewID] = useState('');
  const [activeMedium, setActiveMedium] = useState('');
  const [liveToggle, setLiveToggle] = useState(false);
  const [refreshliveToggle, setRefreshLiveToggle] = useState(true);
  const [refreshliveFilter, setRefreshLiveFilter] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState(FILTER_INITIAL_STATE);
  const [windowFocused, setWindowFocused] = useState(true);
  // Timeline related States
  const [timelineType, setTimelineType] = useState('cumulative');
  const [selectedUnit, setSelectedUnit] = useState('minutes');
  const [selectedValue, setSelectedValue] = useState(5);

  // Social Related Stated
  const [digitalReportCategory, setDigitalReportCategory] = useState('');
  const [digitalReportTab, setDigitalReportTab] = useState('');
  const [socialTimelineType, setSocialTimelineType] = useState('number');
  const [selectedInterval, setSelectedInterval] = useState(''); 
  const [selectedInterUnit, setSelectedInterUnit] = useState();
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedCategoryID, setselectedCategoryID] = useState('');
  const [rankCategory, setRankCategory] = useState('');
  const [rankTab, setRankTab] = useState('');
  const [socialsubplatform, setsocialsubplatform] = useState([]); 
  const [selectedSocialUnit, setselectedSocialUnit] = useState([]); 
  const [datatimeCallback, setdatatimeCallback] = useState(); 
  const [selectedTimelineDateTime, setselectedTimelineDateTime] = useState(); 
  const [selectedRankDateTime, setselectedRankDateTime] = useState("ssssssss"); 
  const [modelsocialsubplatform, setmodelsocialsubplatform] = useState([]); 
  const [ranksocialsubplatform, setranksocialsubplatform] = useState([]); 
  const [timesocialsubplatform, settimesocialsubplatform] = useState([]);
  const [mediaAnalysis, setmediaAnalysis] = useState();  
  const VIEW_CONFIG = {
    VIW101: {
      name: 'Vision',
      viewCategory: '01',
      kpiCategory: 'KPI104',
      api: {
        static: [
          { name: 'visions', action: getProjectVision, type: 'stats' },
          { name: 'pulse', action: getTimelinePulse, type: 'timeline' },
          {
            name: 'cumulative',
            action: getTimelineCumulative,
            type: 'timeline',
          },
          { name: 'continousExp', action: getContinousExp, type: 'ce' },
        ],
        live: [
          {
            name: 'visions',
            action: pollVisionStats,
            type: 'stats',
          },
          {
            name: 'pulse',
            action: pollPulseStats,
            type: 'timeline',
          },
          {
            name: 'cumulative',
            action: pollCumulativeStats,
            type: 'timeline',
          },
          {
            name: 'continousExp',
            action: pollCEStats,
            type: 'ce',
          },
        ],
      },
      graphs: [
        { name: 'visions', type: 'stats', data: {} },
        { name: 'timeline', type: 'timeline', data: {} },
        { name: 'exposure', type: 'ce', data: {} },
      ],
    },
    VIW102: {
      name: 'Sponsor',
      viewCategory: '02',
      kpiCategory: 'KPI105',
      api: {
        static: [
          { name: 'brands', action: getProjectBrands, type: 'stats' },
          { name: 'assets', action: getProjectAssets, type: 'stats' },
          { name: 'models', action: getProjectModels, type: 'stats' },
          { name: 'visions', action: getProjectVision, type: 'stats' },
        ],

        live: [
          {
            name: 'brands',
            action: pollBrandsStats,
            type: 'stats',
          },
          {
            name: 'assets',
            action: pollAssetsStats,
            type: 'stats',
          },
          {
            name: 'models',
            action: pollModelsStats,
            type: 'stats',
          },
          {
            name: 'visions',
            action: pollVisionStats,
            type: 'stats',
          },
        ],
      },
      graphs: [
        { name: 'brands', type: 'stats', data: {} },
        { name: 'assets', type: 'stats', data: {} },
        { name: 'models', type: 'stats', data: {} },
        { name: 'visions', type: 'stats', data: {} },
      ],
    },
    VIW103: {
      name: 'Asset',
      viewCategory: '03',
      kpiCategory: 'KPI106',
      api: {
        static: [
          { name: 'assets', action: getProjectAssets, type: 'stats' },
          { name: 'models', action: getProjectModels, type: 'stats' },
          { name: 'brands', action: getProjectBrands, type: 'stats' },
          { name: 'visions', action: getProjectVision, type: 'stats' },
        ],
        live: [
          {
            name: 'assets',
            action: pollAssetsStats,
            type: 'stats',
          },
          {
            name: 'models',
            action: pollModelsStats,
            type: 'stats',
          },
          {
            name: 'brands',
            action: pollBrandsStats,
            type: 'stats',
          },
          {
            name: 'visions',
            action: pollVisionStats,
            type: 'stats',
          },
        ],
      },
      graphs: [
        { name: 'assets', type: 'stats', data: {} },
        { name: 'models', type: 'stats', data: {} },
        { name: 'brands', type: 'stats', data: {} },
        { name: 'visions', type: 'stats', data: {} },
      ],
    },
    VIW104: {
      name: 'Venue',
      viewCategory: '04',
      kpiCategory: 'KPI107',
      api: {
        static: [
          { name: 'venues', action: getProjectVenues, type: 'stats' },
          { name: 'visions', action: getProjectVision, type: 'stats' },
          { name: 'brands', action: getProjectBrands, type: 'stats' },
          { name: 'assets', action: getProjectAssets, type: 'stats' },
        ],
        live: [
          {
            name: 'venues',
            action: pollVenuesStats,
            type: 'stats',
          },
          {
            name: 'visions',
            action: pollVisionStats,
            type: 'stats',
          },
          {
            name: 'brands',
            action: pollBrandsStats,
            type: 'stats',
          },
          {
            name: 'assets',
            action: pollAssetsStats,
            type: 'stats',
          },
        ],
      },
      graphs: [
        { name: 'venues', type: 'stats', data: {} },
        { name: 'visions', type: 'stats', data: {} },
        { name: 'brands', type: 'stats', data: {} },
        { name: 'assets', type: 'stats', data: {} },
      ],
    },
    VIW105: {
      name: 'Team',
      viewCategory: '05',
      api: {
        static: [],
      },
      graphs: [],
    },
  };


  // Social
  useEffect(() => {
    setRefreshLiveFilter(true)
  }, [appliedFilters]);

  
  useEffect(() => {
    if(kpi){
      setRefreshLiveFilter(false)
    }
  }, [kpi]);



  const cancelCalls = (sockectOnly = false) => {
    const DISCONNECT_PAYLOAD = {
      stopPolling: true,
      payload: {},
    };
    if (sockectOnly) {
      pollVisionStats(DISCONNECT_PAYLOAD);
      pollBrandsStats(DISCONNECT_PAYLOAD);
      pollAssetsStats(DISCONNECT_PAYLOAD);
      pollModelsStats(DISCONNECT_PAYLOAD);
      pollVenuesStats(DISCONNECT_PAYLOAD);
      pollCumulativeStats(DISCONNECT_PAYLOAD);
      pollPulseStats(DISCONNECT_PAYLOAD);
      pollCEStats(DISCONNECT_PAYLOAD);
      pollKPIStats(DISCONNECT_PAYLOAD);
      // getLiveVisionsDisconnect();
      // getLiveSponsorsDisconnect();
      // getLiveAssetsDisconnect();
      // getLiveVenuesDisconnect();
      // getLiveModelsDisconnect();
      // getLiveTimelineDisconnect();
      // getLivePulseDisconnect();
      // getLiveContinousExpDisconnect();
      // getLiveKpiDisconnect();
    } else {
      getAnalyticsViewsCancel();
      getProjectVisionCancel();
      getProjectVenuesCancel();
      getProjectModelsCancel();
      getProjectAssetsCancel();
      getProjectBrandsCancel();
      getTimelinePulseCancel();
      getTimelineCumulativeCancel();
      getContinousExpCancel();
      pollVisionStats(DISCONNECT_PAYLOAD);
      pollBrandsStats(DISCONNECT_PAYLOAD);
      pollAssetsStats(DISCONNECT_PAYLOAD);
      pollModelsStats(DISCONNECT_PAYLOAD);
      pollVenuesStats(DISCONNECT_PAYLOAD);
      pollCumulativeStats(DISCONNECT_PAYLOAD);
      pollPulseStats(DISCONNECT_PAYLOAD);
      pollCEStats(DISCONNECT_PAYLOAD);
      pollKPIStats(DISCONNECT_PAYLOAD);
    }
  };

  // Mount
  useEffect(() => {
      //console.log("selectedCategory",selectedCategory,MEDIA_CONSTANTS[activeMedium],query.activeMedia)
      let VIEWS_PAYLOAD; 
    if(query.activeMedia === 'SM'){
      VIEWS_PAYLOAD = {
        payload: { projectID: query.projectID, platformID: "MED103" },
      };
    }
    else{
       VIEWS_PAYLOAD = {
        payload: { projectID: query.projectID, platformID: query.platformID },
      };
    }

    if (query.activeMedia !== 'SM' && query.activeMedia !== 'DGxxx') getAnalyticsViews(VIEWS_PAYLOAD);
    else if (query.activeMedia !== 'SM' && query.activeMedia !== 'DGxxx') getAnalyticsGlobalMarkets(VIEWS_PAYLOAD);
    else {
      if(query.activeMedia == 'SM'){
      getSocialPlatform(VIEWS_PAYLOAD);
      getSocialBaseReport({
        payload: {
          ...VIEWS_PAYLOAD.payload,
          filter: {
            startDateTime: '2019-03-08T00:00:00',
            endDateTime: '2019-12-06T00:00:00',
            subPlatforms: [],
          },
        },
      });
      getSocialDigitalReportTemplate(VIEWS_PAYLOAD);
      getSocialTimelineTemplate(VIEWS_PAYLOAD);
      getSocialRankTemplate({
        payload: {
          ...VIEWS_PAYLOAD.payload,
          filter: {
            startDateTime: '2019-03-08T00:00:00',
            endDateTime: '2019-12-06T00:00:00',
            subPlatformNames: [],
            tagFilter: [],
          },
        },
      });
    }
    return () => {
      cancelCalls();
    };
  }
  }, []);

  useEffect(() => {
    if(query.activeMedia == 'SM'){
    if(datatimeCallback){
      setselectedTimelineDateTime(datatimeCallback)
      setselectedRankDateTime(datatimeCallback)
    }
    
    if(socialCategory[0]){  
      if(selectedCategory==""){
        setselectedCategory(socialCategory[0].displayName)
        setselectedCategoryID(socialCategory[0].id)
      }
      else{
        setselectedCategory(selectedCategory)
        setselectedCategoryID(selectedCategoryID)
      }
      if(selectedInterval==""){
        setSelectedInterval(socialTimeInterval[0].unit)
        const result = socialTimeInterval.find( ({ unit }) => unit === socialTimeInterval[0].unit );
        setselectedSocialUnit(result.value)
        setSelectedInterUnit(result.value[0])
      }
      else{
        setSelectedInterval(selectedInterval)
        const result = socialTimeInterval.find( ({ unit }) => unit === selectedInterval );
        setselectedSocialUnit(result.value)
        setSelectedInterUnit(result.value[0])
      }
  }
}
  },[selectedCategory,socialCategory,selectedInterval,datatimeCallback]);

  useEffect(() => {
    if(socialsubplatform && query.activeMedia == 'SM'){
  getSocialTimeline({
    payload: { 
      projectID : query.projectID, 
      platformID : "MED103", 
      filter : 
               { 
           startDateTime : "2019-03-09T00:00:00", 
           endDateTime : "2019-12-06T00:00:00", 
           subPlatforms : timesocialsubplatform, 
           tagFilter: [] 
          }, 
           interval : selectedInterUnit, 
           unit :  selectedInterval, //"Minute",// 
           viewCategory : selectedCategoryID,  //"",//
           supplement : ["",""] 
   },
  });}},[socialsubplatform,selectedCategoryID,selectedInterval,selectedTimelineDateTime,selectedInterUnit,timesocialsubplatform])

  useEffect(() => {
    if (digitalReportCategories[0] && query.activeMedia == 'SM') {
      setDigitalReportCategory(digitalReportCategories[0].segmentID);
      if(digitalReportCategories[0].tab.length>0){
        setDigitalReportTab(digitalReportCategories[0].tab[0].id);
      }
      else{
        setDigitalReportTab();
      }
      getSocialDigitalReport({
        payload: {
                projectID :query.projectID,
                platformID:"MED103",
                filter :
                {
                    startDateTime: "2019-03-08T00:00:00",
                    endDateTime: "2019-12-06T00:00:00",
                    subPlatforms: modelsocialsubplatform,
                    tagFilter: []
                },
                segmentID: digitalReportCategories[0].segmentID,
                featureID : digitalReportCategories[0].tab[0].id
          },
      });
    }
  }, [digitalReportCategories,socialsubplatform,modelsocialsubplatform]);

  useEffect(() => {
    if (digitalReportCategory && digitalReportTab  && query.activeMedia == 'SM')
      getSocialDigitalReport({
        payload: {
              projectID: query.projectID,
              platformID: "MED103",
                filter :
                {
                startDateTime: "2019-03-08T00:00:00",
                endDateTime: "2019-12-06T00:00:00",
                subPlatforms: modelsocialsubplatform,
                tagFilter: []
                },
                segmentID: digitalReportCategory,
                featureID : digitalReportTab
          },
      });
  }, [digitalReportTab, digitalReportCategory,socialsubplatform,modelsocialsubplatform]);

  useEffect(() => {
    let socialsubplatformlist = [];
    if(socialsubplatform.length>0  && query.activeMedia == 'SM' ){
      socialsubplatformlist = socialsubplatform;
    }
    if(socialsubplatformlist  && query.activeMedia == 'SM'){
    getSocialHighlights({
      payload: {
        projectID: query.projectID,
        platformID: "MED103",
        filter: {
          startDateTime: '2019-03-08T00:00:00',
          endDateTime: '2019-12-06T00:00:00',
          subPlatformNames: socialsubplatform,
          tagFilter: [],
        },
      },
    });
  }
  }, [socialsubplatform]);


  useEffect(() => {
    //console.log("mytest..............")
    if(socialsubplatform.length>0  && query.activeMedia == 'SM'){
      getSocialTimelineTemplate({
      payload: {
        projectID: query.projectID,
        platformID: "MED103",
        filter: {
          startDateTime: '2019-03-08T00:00:00',
          endDateTime: '2019-12-06T00:00:00',
          subPlatformNames: socialsubplatform,
          tagFilter: [],
        },
      },
    });
  }
  }, [socialsubplatform]);



  useEffect(() => {
    if(mediaAnalysis && query.activeMedia == 'SM'){
      getPostanalysis({
        payload: {
          projectID: query.projectID,
          platformID: "MED103",
            filter :
            {
            startDateTime: "2019-03-08T00:00:00",
            endDateTime: "2019-12-06T00:00:00",
            subPlatforms: modelsocialsubplatform,
            tagFilter: []
            },
            segmentID: digitalReportCategory,
            featureID : digitalReportTab,
            limit : -1
      },
      });
  }
  }, [mediaAnalysis]);


  // Social -  Rank
  useEffect(() => {
    if (rankCategories[0]  && query.activeMedia == 'SM') {
      setRankCategory(rankCategories[0].segmentID);
      setRankTab(rankCategories[0].tab[0].id);
    }
  }, [rankCategories]);


  useEffect(() => {
    if(rankTab && rankCategory  && query.activeMedia == 'SM'){
      getSocialRank({
        payload: {
                  projectID : query.projectID,
                  platformID : "MED103",
                  segmentID : rankCategory,
                  featureID : rankTab,
                  limit : -1,
                  filter : 
                  {
                     subPlatforms : ranksocialsubplatform,
                     startDateTime : "2019-03-08T00:00:00",
                     endDateTime : "2019-12-06T00:00:00",
                     condition : 
                    {
                       category : "",
                       operation : "",
                       value : 0
                    },
                    elements: [""]
                  },
           },
      });
    }
  }, [rankTab, rankCategory,socialsubplatform,ranksocialsubplatform]);



  // Call view API on platform change
  useEffect(() => {
    let VIEWS_PAYLOAD; 
    if(query.activeMedia === 'SM'){
      VIEWS_PAYLOAD = {
        payload: { projectID: query.projectID, platformID: "MED103" },
      };
    }
    else{
       VIEWS_PAYLOAD = {
        payload: { projectID: query.projectID, platformID: query.platformID },
      };
    }

    if (activeMedium && activeMedium !== 'SM' && activeMedium !== 'DGxxx') { 
      getAnalyticsViews(VIEWS_PAYLOAD);
      setActiveViewID('');

      getAnalyticsGlobalMarkets(VIEWS_PAYLOAD);
     // setActiveViewID('');
    } else {
      if(query.activeMedia == 'SM'){
      getSocialPlatform(VIEWS_PAYLOAD);
      getSocialBaseReport({
        payload: {
          ...VIEWS_PAYLOAD.payload,
          filter: {
            startDateTime: '2019-03-08T00:00:00',
            endDateTime: '2019-12-06T00:00:00',
            subPlatforms: [],
          },
        },
      });
      getSocialDigitalReportTemplate(VIEWS_PAYLOAD);
      getSocialTimelineTemplate(VIEWS_PAYLOAD);
     }
    }
  }, [activeMedium]);

  // Call stats API's when the view data arrives or changes
  useEffect(() => {
    cancelCalls(true);
    const { projectDetails, isProjectLive, ...statsRestPayload } = query;
    const { visions, ...visionViewInitialFilter } = appliedFilters;
    const viewID = activeViewID || (viewData[0] && viewData[0].viewID);
    if (activeMedium && activeMedium !== 'SM' && activeMedium !== 'DGxxx' && !liveToggle && !viewLoading) {
      // 1) GRAPH CALL
      VIEW_CONFIG[viewID] &&
        VIEW_CONFIG[viewID].api &&
        VIEW_CONFIG[viewID].api.static.map(d => {
          const { [d.name]: mainFilter, ...filter } = appliedFilters;
          const PAYLOAD = {
            payload:
              d.name === 'pulse' || d.name === 'cumulative'
                ? {
                    projectID: query.projectID,
                    isLive: liveToggle,
                    platformID:
                      MEDIA_CONSTANTS[activeMedium] || query.platformID,
                    metrics: 'quantity',
                    filter: {
                      ...visionViewInitialFilter,
                      brands: uniq(visionViewInitialFilter.brands),
                    },
                    visions: appliedFilters.visions,
                    userEmail: loginID,
                    intervals: [
                      {
                        unit: selectedUnit,
                        value: selectedValue,
                      },
                    ],
                  }
                : d.name === 'continousExp'
                ? {
                    projectID: query.projectID,
                    isLive: liveToggle,
                    platformID:
                      MEDIA_CONSTANTS[activeMedium] || query.platformID,
                    filter: {
                      ...visionViewInitialFilter,
                      brands: uniq(visionViewInitialFilter.brands),
                    },
                    visions: appliedFilters.visions,
                  }
                : {
                    ...statsRestPayload,
                    isLive: liveToggle,
                    platformID:
                      MEDIA_CONSTANTS[activeMedium] || query.platformID,
                    viewcategory: VIEW_CONFIG[viewID].viewCategory,
                    [d.name]:
                      d.name === 'brands'
                        ? uniq(appliedFilters[d.name])
                        : appliedFilters[d.name],
                    filter:
                      d.name !== 'brands'
                        ? {
                            ...filter,
                            brands: uniq(filter.brands),
                          }
                        : filter,
                  },
          };

          return (
            ((d.type === 'timeline' && d.name === timelineType) ||
              d.type === 'stats' ||
              d.type === 'ce') &&
            d.action(PAYLOAD)
          );
        });

      // 2) KPI CALL
      getKpiStats({
        payload: {
          kpiCategory: VIEW_CONFIG[viewID] && VIEW_CONFIG[viewID].kpiCategory,
          projectID: [query.projectID],
          isLive: liveToggle,
          platformID: MEDIA_CONSTANTS[activeMedium] || query.platformID,
          ...appliedFilters,
          brands: uniq(appliedFilters.brands),
        },
      });
    }
  }, [viewData, activeViewID, activeMedium, liveToggle, appliedFilters]);

  // Timeline Toggles
  useEffect(() => {
    cancelCalls(true);
    const { visions, ...visionViewInitialFilter } = appliedFilters;
    const viewID = activeViewID || (viewData[0] && viewData[0].viewID);
    if (activeMedium && activeMedium !== 'SM' && activeMedium !== 'DGxxx' && !liveToggle && !viewLoading) {
      // 1) GRAPH CALL
      VIEW_CONFIG[viewID] &&
        VIEW_CONFIG[viewID].api &&
        VIEW_CONFIG[viewID].api.static.map(d => {
          const PAYLOAD = {
            payload: {
              projectID: query.projectID,
              isLive: liveToggle,
              platformID: MEDIA_CONSTANTS[activeMedium] || query.platformID,
              metrics: 'quantity',
              filter: {
                ...visionViewInitialFilter,
                brands: uniq(visionViewInitialFilter.brands),
              },
              visions: appliedFilters.visions,
              userEmail: loginID,
              intervals: [
                {
                  unit: selectedUnit,
                  value: selectedValue,
                },
              ],
            },
          };

          return d.type === 'timeline' && d.name === timelineType
            ? d.action(PAYLOAD)
            : 0;
        });
    }
  }, [timelineType, selectedUnit, selectedValue]);

  // Live Scenario
  useEffect(() => {
    console.log("refreshliveFilter",refreshliveToggle,refreshliveFilter)
    const { projectDetails, isProjectLive, ...statsRestPayload } = query;
    const { visions, ...visionViewInitialFilter } = appliedFilters;
    const viewID = activeViewID || (viewData[0] && viewData[0].viewID);

    // //console.log(window.onfocus);
    cancelCalls(true);
    window.onfocus = () => {
      setWindowFocused(true);
    };
    window.onblur = () => {
      setWindowFocused(false);
    };
    if (liveToggle && (refreshliveToggle || refreshliveFilter)) {
      if (windowFocused) {
        // 1) GRAPH LIVE CALL
        VIEW_CONFIG[viewID] &&
          VIEW_CONFIG[viewID].api &&
          VIEW_CONFIG[viewID].api.live.map(d => {
            const { [d.name]: mainFilter, ...filter } = appliedFilters;
            const PAYLOAD = {
              stopPolling: false,
              payload:
                d.name === 'pulse' || d.name === 'cumulative'
                  ? {
                      projectID: query.projectID,
                      platformID: query.platformID,
                      metrics: 'quantity',
                      showBrands:true,
                      showAssets:true,
                      filter: visionViewInitialFilter,
                      visions: JSON.parse(query.liveMatches),
                      userEmail: loginID,
                      isLive: liveToggle,
                      intervals: [
                        {
                          unit: selectedUnit,
                          value: selectedValue,
                        },
                      ],
                    }
                  : d.name === 'continousExp'
                  ? {
                      projectID: query.projectID,
                      platformID: query.platformID,
                      userEmail: loginID,
                      isLive: liveToggle,
                      filter: visionViewInitialFilter,
                      visions: JSON.parse(query.liveMatches),
                    }
                  : {
                      ...statsRestPayload,
                      isLive: liveToggle,
                      userEmail: loginID,
                      viewcategory: VIEW_CONFIG[viewID].viewCategory,
                      [d.name]:
                        d.name === 'visions'
                          ? JSON.parse(query.liveMatches)
                          : appliedFilters[d.name],
                      filter:
                        d.name !== 'visions'
                          ? {
                              ...filter,
                              visions: JSON.parse(query.liveMatches),
                            }
                          : filter,
                    },
            };

            return (
              ((d.type === 'timeline' && d.name === timelineType) ||
                d.type === 'stats' ||
                d.type === 'ce') &&
              d.action(PAYLOAD)
            );
          });

        // 2) KPI LIVE CALL
        pollKPIStats({
          stopPolling: false,
          payload: {
            kpiCategory: VIEW_CONFIG[viewID] && VIEW_CONFIG[viewID].kpiCategory,
            projectID: [query.projectID],
            platformID: MEDIA_CONSTANTS[activeMedium] || query.platformID,
            userEmail: loginID,
            isLive: liveToggle,
            visions: JSON.parse(query.liveMatches),
            brands: [],
            models: [],
            assets: [],
            venues: [],
          },
        });
      } else {
        cancelCalls(true);
      }
    }
  }, [
    refreshliveFilter,
    refreshliveToggle,
    liveToggle,
    timelineType,
    activeViewID,
    windowFocused,
    viewData,
    appliedFilters,
    selectedUnit,
    selectedValue,
  ]);

  // Social
  useEffect(() => {
    //console.log(socialTimelineType);
  }, [socialTimelineType]);

  return {
    pageLoading: viewLoading,
    viewMap: (() => {
      const viewConfig = {};
      // eslint-disable-next-line no-return-assign
      viewData.map(d => (viewConfig[d.displayName] = d.viewID));
      return viewConfig;
    })(),
    defaultView: viewData[0] && viewData[0].displayName,
    visionAnalogous:
      viewData.filter(d => d.viewName === 'visions')[0] &&
      viewData.filter(d => d.viewName === 'visions')[0].displayName,
    viewDropdownCallback: setActiveViewID,
    mediumDropdownCallback: setActiveMedium,
    liveToggleCallback: setLiveToggle,
    refreshliveToggleCallback: setRefreshLiveToggle,
    applyFiltersCallback: setAppliedFilters,
    graphData: (() => {
      const viewID = activeViewID || (viewData[0] && viewData[0].viewID);
      // eslint-disable-next-line no-unused-expressions
      VIEW_CONFIG[viewID] &&
        VIEW_CONFIG[viewID].graphs.map(d => {
          // Stats Graph props
          if (d.type === 'stats') {
            d.data.graphData =
              (dashboard && dashboard[d.name] && dashboard[d.name].graph) || [];

            d.data.isViewerShipDataVisible =
              dashboard[d.name] &&
              dashboard[d.name].data &&
              dashboard[d.name].data.general &&
              dashboard[d.name].data.general.graphStatus &&
              dashboard[d.name].data.general.graphStatus.viewership;

            d.data.header =
              dashboard[d.name] &&
              dashboard[d.name].data &&
              dashboard[d.name].data.general &&
              dashboard[d.name].data.general.graphHeader;

            d.data.graphStatus =
              dashboard[d.name] &&
              dashboard[d.name].data &&
              dashboard[d.name].data.general &&
              dashboard[d.name].data.general.graphStatus;  

            d.data.valueationUnit =
              dashboard[d.name] &&
              dashboard[d.name].data &&
              dashboard[d.name].data.general &&
              dashboard[d.name].data.general.valuationUnit;

            d.data.loader = dashboard[d.name] && dashboard[d.name].loading;

            d.data.viewType = d.name;

            // d.data.graphType = d.name;
            d.data.graphType = d.name;

            d.data.key = `ANALYSIS_GRAPH_${d.name}_${viewID}`;
          }

          // Timeline Graph props
          if (d.type === 'timeline') {
            d.data.timelineType = timelineType;
            d.data.graph =
              (timeline[timelineType] && timeline[timelineType].graph) || [];

            d.data.graphTitle =
              timeline[timelineType] &&
              timeline[timelineType].data &&
              timeline[timelineType].data.general &&
              timeline[timelineType].data.general.graphStatus &&
              timeline[timelineType].data.general.graphHeader.title;

            d.data.graphHeaderComment =
              timeline[timelineType] &&
              timeline[timelineType].data &&
              timeline[timelineType].data.general &&
              timeline[timelineType].data.general.graphStatus &&
              timeline[timelineType].data.general.graphHeader.comment;

            d.data.intervalUnits =
              (timeline[timelineType] &&
                timeline[timelineType].data &&
                timeline[timelineType].data.general &&
                timeline[timelineType].data.general.timeInterval &&
                timeline[timelineType].data.general.timeInterval.map(
                  da => da.unit,
                )) ||
              [];

            d.data.intervalValues =
              (timeline[timelineType] &&
                timeline[timelineType].data &&
                timeline[timelineType].data.general &&
                timeline[timelineType].data.general.timeInterval.filter(
                  da => da.unit === selectedUnit,
                )[0].value) ||
              [];

            d.data.showViewership =
              timeline[timelineType] &&
              timeline[timelineType].data &&
              timeline[timelineType].data.general &&
              timeline[timelineType].data.general.graphStatus &&
              timeline[timelineType].data.general.graphStatus.viewership;

            d.data.toggleCallBack = setTimelineType;

            d.data.loading =
              timeline[timelineType] && timeline[timelineType].loading;

            d.data.intervalConfig =
              (timeline[timelineType] &&
                timeline[timelineType].data &&
                timeline[timelineType].data.general &&
                timeline[timelineType].data.general.defaultTimeInterval) ||
              {};

            d.data.selectedUnit = selectedUnit;
            d.data.selectedValue = selectedValue;
            d.data.unitSelectionCallback = setSelectedUnit;
            d.data.valueSelectionCallback = setSelectedValue;
          }

          // CE Graph props
          if (d.type === 'ce') {
            // test
            d.data.expData = continousExp || {
              secOne: { graphData: [], totalExposure: {} },
              secTwo: {},
              headers: [],
            };
          }

          return 0;
        });
      return VIEW_CONFIG[viewID] && VIEW_CONFIG[viewID].graphs;
    })(),
    kpiData: kpi || [],
    filterKeyConfig: (() => {
      const filterMap = {};
      viewData
        .filter(d => d.viewName !== 'teams')
        .map(da => {
          filterMap[da.displayName] = FILTER_KEYS[da.viewName.toLowerCase()];
          return 0;
        });
      return filterMap;
    })(),

    // Social
    social: {
      subPlatforms,
      baseReport: {
        data: (data => {
          const restructuredData = [];
          data.map(d => {
            restructuredData.push({
              quality: d.quality,
              quantity: d.quantity,
              value: d.value,
              label: d.subPlatformName,
              unit: d.unit,
              pages:d.pages
            });
            return 0;
          });
          return restructuredData;
        })(baseReportData),
        loading: baseReportLoading,
        title: baseReportMetaData.title,
        socialsubplatformCallback: setsocialsubplatform,
      },
      digitalReport: {
        template: {
          ...(data => {
            const categoriesName = [];
            const tabs = {};
            data.sort((a,b) =>a.orderID-b.orderID).map(d => {
              categoriesName.push({segmentID:d.segmentID,segmentName:d.segmentName})
              tabs[d.segmentID] = d.tab;
              return 0;
            });
            return { categoriesName,tabs };
          })(digitalReportCategories),
          loading: digitalReportTemplateLoading,
        },
        report: {
          data: digitalReportData,
          postAnalysisData:postAnalysisData,
          bargraphdata:bargraphdata,
          type: digitalReportGraphType,
          loading: digitalReportGraphLoading,
        },
        categorySelectionCallback: setDigitalReportCategory,
        tabSelectionCallback: setDigitalReportTab,
        activeCategory: digitalReportCategory,
        activeTab: digitalReportTab,
        socialsubplatform:socialsubplatform,
        modelsocialsubplatform:setmodelsocialsubplatform,
        mediaAnalysisCallback:setmediaAnalysis
      },
      socialCategory,
      socialTimeInterval,
      timeline: {
        data: { keys: TimelineKeys, data: TimelineData },
        loading: timelineLoading,
        timelineType: socialTimelineType,
        toggleCallback: setSocialTimelineType,
        selectedInterval,
        selectedCategory,
        selectedInterUnit,
        selectedSocialUnit,
        selectedTimelineDateTime,
        intervalSelectionCallback: setSelectedInterUnit,
        timelinecategorySelectionCallback: setselectedCategory,
        timelinecategorySelectionCallbackID: setselectedCategoryID,
        intervalSelectionValueCallback:setSelectedInterval,
        timelinedatetimeCallback:setselectedTimelineDateTime,
        socialsubplatform:socialsubplatform,
        timesocialsubplatform:settimesocialsubplatform
      },
      socialhighlights:{
        data:highlightsdata,
        projStartDateTime:projStartDateTime,
        projEndDateTime:projEndDateTime,
        loading:socialLoading,
        socialsubplatform:socialsubplatform
      },
      socialRank: {
        template: {
          ...(data => {
            const categoriesName = [];
            const tabs = {};
            data.sort((a,b) =>a.orderID-b.orderID).map(d => {
              categoriesName.push({segmentID:d.segmentID,segmentName:d.segmentName})
              tabs[d.segmentID] = d.tab;
              return 0;
            });
            return { categoriesName, tabs };
          })(rankCategories),
          loading: rankTemplateLoading,
        },
        rank: {
          data: rankData,
          loading: rankLoading,
        },
        categorySelectionCallback: setRankCategory, //Menu
        tabSelectionCallback: setRankTab, //Tab
        activeCategory: rankCategory,
        activeTab: rankTab,
        selectedRankDateTime,
        rankdatetimeCallback:setselectedRankDateTime,
        socialsubplatform:socialsubplatform,
        ranksocialsubplatform:setranksocialsubplatform
      },
    },
    globalMap: (() => {
      const restructuredData = [];
      if(globalmarketData["markets"]){
        globalmarketData["markets"].map(d => {
         restructuredData.push(d);
        }); 
      }
      return restructuredData;
    }),
    datatimeCallback:setdatatimeCallback,
  };
};
export default useAnalyticsHooks;
