/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';
import { MEDIA_CONSTANTS } from 'utils/constants';

const useProjectCardHook = ({
  project,
  activeIndex,
  iterationIndex,
  noticicationCall,
  highlghtsCall,
  graphKpiData: { displayView, view = [] } = {},
}) => {
  const [activeMedia, setActiveMedia] = useState('overview');
  const [isActive, setActive] = useState(activeIndex === iterationIndex);

  const isOnlySinglePlatform =
    project.platforms.filter(d => d.platformName !== 'Overview').length === 1;

  const overviewIndex = project.platforms.findIndex(
    d => d.platformName === 'Overview',
  );

  // Donut data parsing
  const currentGraphData =
    view.filter(d => d.id === displayView) &&
    view.filter(d => d.id === displayView)[0] &&
    view.filter(d => d.id === displayView)[0];
  const graphView = currentGraphData && currentGraphData.elements;
  const graphTitle = currentGraphData && currentGraphData.title;
  const graphUnit = currentGraphData && currentGraphData.unit;
  const graphDataSum =
    (graphView && graphView.reduce((a, v) => a + v.value, 0)) || 0;
  const graphData =
    graphView &&
    graphView.map(d => ({
      name: d.elementName,
      value: d.value || 0,
    }));

  const dashboardActiveMap = {};
  project.platforms
    .filter(d => d.platformName !== 'Overview')
    .map(d => (dashboardActiveMap[d.codeName] = d.dashboard));

  useEffect(() => {
    setActive(activeIndex === iterationIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (isOnlySinglePlatform) {
      setActiveMedia(
        project.platforms.filter(d => d.platformName !== 'Overview')[0]
          .codeName,
      );
    }

    const KPI_COMMON_PAYLOAD = {
      projectID: [project.projectID],
      platformID: MEDIA_CONSTANTS[activeMedia],
      visions: [],
      brands: [],
      models: [],
      assets: [],
      venues: [],
    };

    // Notification call
    const NOTIFICATION_PAYLOAD = {
      payload: {
        projectID: project.projectID,
        platformID: MEDIA_CONSTANTS[activeMedia],
      },
    };

    // Hoghts call
    const KPI_PAYLOAD = {
      payload: {
        kpiCategory: 'KPI103',
        ...KPI_COMMON_PAYLOAD,
      },
    };

    const GRAPH_KPI = {
      payload: {
        industryCategory: project.industryCategory,
        industry: project.industry,
        kpiCategory: 'KPI109',
        ...KPI_COMMON_PAYLOAD,
      },
    };

    if (activeIndex === iterationIndex) {
      noticicationCall(NOTIFICATION_PAYLOAD);
      highlghtsCall(KPI_PAYLOAD);
      highlghtsCall(GRAPH_KPI);
    }
  }, [activeIndex, activeMedia]);

  return {
    project,
    isOnlySinglePlatform,
    activeMedia,
    activeIndex,
    iterationIndex,
    isActive,
    overviewIndex,
    graphTitle,
    graphUnit,
    graphDataSum,
    graphData,
    dashboardActiveMap,
    mediaSelectionCallback: medium => setActiveMedia(medium),
    cardActiveStatusCallback: status => setActive(status),
  };
};

export default useProjectCardHook;
