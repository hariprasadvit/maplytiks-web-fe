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


const useDigitalHooks = ({
  location,
  // Digital
  getDigitalPlatform,
  digitalsubPlatforms,

  getDigitalBaseReport,
  digitalbaseReport: {
    projStartDateTime:projStartDateTime,
    projEndDateTime:projEndDateTime,
    details: baseReportData = [],
    loading: baseReportLoading,
    graph: baseReportMetaData = {},
  },

  getDigitalReportTemplate,
  digitalReportTemplate: {
    data: digitalReportCategories = [],
    loading: digitalReportTemplateLoading,
  } = {},

  getDigitalReport,
  digitalReport: {
    details: digitalReportData = [],
    stats : bargraphdata =[],
    graph_name: digitalReportGraphType,
    loading: digitalReportGraphLoading,
  } = {},

  getDigitalTimelineTemplate,
  digitalTimelineTemplateRes: { 
        category: socialCategory = [],
        viewDuration: socialTimeInterval = [] 
      } = {},
  getDigitalTimeline,
  digitalTimeline: {
    keys: TimelineKeys = [],
    data: TimelineData = [],
    loading: timelineLoading,
  } = {},

  getDigitalHighlights,
  digitalhighlights:{
    highlights:highlightsdata=[],
    loading: socialLoading,
  }={},
  getPostanalysis,
  socialPostanalysis:{
    details	: postAnalysisData = [],
    loading: postAnalysisLoading,
  } = {},
  getDigitalRankTemplate,
  digitalrankTemplate: {
    data	: rankCategories = [],
    loading: rankTemplateLoading,
  } = {},

  getDigitalRank,
  digitalrank: { details: rankData = [], loading: rankLoading } = {},
  
  globalmarket: { data: globalmarketData = [] } = {}
}) => {
  console.log("# Digital hooks log #")
  const { type, ...query } = qs.parse(location.search);
  const [activeMedium, setActiveMedium] = useState('');
  
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

  
  // Mount
  useEffect(() => {
    //console.log("selectedCategory",selectedCategory)
    let VIEWS_PAYLOAD;
    if(query.activeMedia == 'DG'){
    let VIEWS_PAYLOAD = {
      payload: { projectID: query.projectID, platformID: "MED104" },
    };
  }
      if(query.activeMedia == 'DG'){
      getDigitalPlatform(VIEWS_PAYLOAD);
      getDigitalBaseReport({
        payload: {
          ...VIEWS_PAYLOAD.payload,
          filter: {
            startDateTime: '2019-03-08T00:00:00',
            endDateTime: '2019-12-06T00:00:00',
            subPlatforms: [],
          },
        },
      });
      getDigitalReportTemplate(VIEWS_PAYLOAD);
      getDigitalTimelineTemplate(VIEWS_PAYLOAD);
      getDigitalRankTemplate({
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
  
  }, []);

  useEffect(() => {
    if(query.activeMedia == 'DG'){
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
    if(socialsubplatform && query.activeMedia == 'DG'){
  getDigitalTimeline({
    payload: { 
      projectID : query.projectID, 
      platformID : "MED104", 
      filter : 
               { 
           startDateTime : "2019-03-09T00:00:00", 
           endDateTime : "2019-12-06T00:00:00", 
           subPlatforms : timesocialsubplatform, 
           tagFilter: [] 
          }, 
           interval : 15,//selectedInterUnit, 
           unit :  selectedInterval, //"Minute",// 
           viewCategory : selectedCategoryID,  //"",//
           supplement : ["",""] 
   },
  });}},[socialsubplatform,selectedCategoryID,selectedInterval,selectedTimelineDateTime,selectedInterUnit,timesocialsubplatform])

  useEffect(() => {
    if (digitalReportCategories[0] && query.activeMedia == 'DG') {
      setDigitalReportCategory(digitalReportCategories[0].segmentID);
      if(digitalReportCategories[0].tab.length>0){
        setDigitalReportTab(digitalReportCategories[0].tab[0].id);
      }
      else{
        setDigitalReportTab();
      }
      
      getDigitalReport({
        payload: {
                projectID :query.projectID,
                platformID:"MED104",
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
    if (digitalReportCategory && digitalReportTab  && query.activeMedia == 'DG')
      getDigitalReport({
        payload: {
              projectID: query.projectID,
              platformID: "MED104",
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
    if(socialsubplatform.length>0  && query.activeMedia == 'DG' ){
      socialsubplatformlist = socialsubplatform;
    }
    if(socialsubplatformlist  && query.activeMedia == 'DG'){
      getDigitalHighlights({
      payload: {
        projectID: query.projectID,
        platformID: "MED104",
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
    if(socialsubplatform.length>0  && query.activeMedia == 'DG'){
      getDigitalTimelineTemplate({
      payload: {
        projectID: query.projectID,
        platformID: "MED104",
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
    if(mediaAnalysis && query.activeMedia == 'DG'){
      getPostanalysis({
        payload: {
          projectID: query.projectID,
          platformID: "MED104",
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
    if (rankCategories[0]  && query.activeMedia == 'DG') {
      setRankCategory(rankCategories[0].segmentID);
      setRankTab(rankCategories[0].tab[0].id);
    }
  }, [rankCategories]);


  useEffect(() => {
    if(rankTab && rankCategory  && query.activeMedia == 'DG'){
      getDigitalRank({
        payload: {
                  projectID : query.projectID,
                  platformID : "MED104",
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
    const VIEWS_PAYLOAD = {
      payload: {
        projectID: query.projectID,
        platformID: "MED104",
      },
    };
      if(query.activeMedia == 'DG'){
      getDigitalPlatform(VIEWS_PAYLOAD);
      getDigitalBaseReport({
        payload: {
          ...VIEWS_PAYLOAD.payload,
          filter: {
            startDateTime: '2019-03-08T00:00:00',
            endDateTime: '2019-12-06T00:00:00',
            subPlatforms: [],
          },
        },
      });
      getDigitalReportTemplate(VIEWS_PAYLOAD);
      getDigitalTimelineTemplate(VIEWS_PAYLOAD);
     }
    
  }, [activeMedium]);

  
  return {
    // Social
    digital: {
      digitalsubPlatforms,
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
    datatimeCallback:setdatatimeCallback,
  };
};

export default useDigitalHooks;
