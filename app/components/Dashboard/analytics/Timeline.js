/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import TimelineChart from 'components/common/graphs/TimelineChart';
import Dropdown from 'components/common/Dropdown';
import Insight from 'components/common/Insight';

const GRAPH_CATEGORIES = {
  pulse: '06',
  cumulative: '07',
};

const REDUCER_KEY_MAP = {
  pulse: 'pulseInsights',
  cumulative: 'cumulativeInsights',
};

const Timeline = ({
  graph,
  intervalUnits,
  intervalValues,
  toggleCallBack,
  timelineType,
  loading,
  selectedUnit,
  selectedValue,
  unitSelectionCallback,
  valueSelectionCallback,
  graphTitle,
  graphHeaderComment,
  showViewership,
  insightsCall,
  insights,
  projectDetail,
  isShowOnlyLive,
  setVideoModal,
  setVideoUrl,
  intervalConfig = {},
  tooltipRef,
  appliedFilters,
  projectDetails,
  liveToggleStaterefresh
}) => {
  const [toggle, setToggle] = useState(false);
  const [barStartIndex, setBarStartIndex] = useState(0);
  const [barEndIndex, setBarEndIndex] = useState(13);
  const [graphData, setGraphData] = useState([]);
  const [barData, setBarData] = useState([]);

  const chnageBarData = dir => {
    if (dir === 'prev' && barStartIndex !== 0) {
      setBarStartIndex(barStartIndex - 1);
      setBarEndIndex(barEndIndex - 1);
    }
    if (dir === 'next' && barEndIndex < graph.length) {
      setBarStartIndex(barStartIndex + 1);
      setBarEndIndex(barEndIndex + 1);
    }
  };

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        ...projectDetail,
        graphCategory: GRAPH_CATEGORIES[timelineType],
        IDs: [],
        liveStatus: isShowOnlyLive ? 1 : 0,
      },
    };

    insightsCall(PAYLOAD);
  }, [timelineType, isShowOnlyLive]);

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        ...projectDetail,
        graphCategory: GRAPH_CATEGORIES[timelineType],
        IDs: [...appliedFilters.visions],
        liveStatus: isShowOnlyLive ? 1 : 0,
      },
    };

    insightsCall(PAYLOAD);
  }, [appliedFilters]);

  useEffect(() => {
    setGraphData(graph);
    if (!isShowOnlyLive) {
      setBarData(graph && graph.slice(0, 13));
      setBarStartIndex(0);
      setBarEndIndex(13);
    }
    if (isShowOnlyLive && liveToggleStaterefresh) {
      setBarData(graph && graph.slice(graph.length - 13, graph.length));
      if(graph.length >= 13){
        setBarStartIndex(graph.length - 13);
      }else{
        setBarStartIndex(0);
      }
      setBarEndIndex(graph.length);
    }
    if (isShowOnlyLive && !liveToggleStaterefresh) {
      setBarData(graph && graph.slice(0, 13));
      setBarStartIndex(0);
      setBarEndIndex(13);
    }
  }, [graph]);

  useEffect(() => {
    setBarData(graph && graph.slice(barStartIndex, barEndIndex));
  }, [barEndIndex, barStartIndex]);

  useEffect(() => {
    toggleCallBack(!toggle ? 'cumulative' : 'pulse');
  }, [toggle]);

  
  return (
    <div className="matchValuation" >
      <div className="matchValuation__wrapper">
        <div className="matchValuation__top">
          <div className="matchValuation__header">
            <div>
              <h3 className="matchValuation__title">
                {graphTitle}
                {graphTitle && (
                  <span style={{ color: '#fff' }}>
                    {graphData && graphData.length}
                  </span>
                )}
              </h3>
              <h5 className="matchValuation__subtitle">{graphHeaderComment}</h5>
            </div>
            <div className="matchValuation__sort">
              <div className="matchsortBy">
                <div
                  className="analyticBreadCrumbs__toggle"
                  style={{ marginLeft: 50 }}
                >
                  <h4 className="active">Cumulative</h4>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setToggle(!toggle)}
                      checked={toggle}
                    />
                    <span className="slider round" />
                  </label>
                  <h4>Pulse</h4>
                </div>
                <Dropdown
                  type="sort"
                  dropdownList={intervalUnits}
                  title="Unit"
                  selectedItem={selectedUnit}
                  callback={unit => {
                    valueSelectionCallback(
                      intervalConfig.filter(d => d.unit === unit)[0].value,
                    );
                    unitSelectionCallback(unit);
                  }}
                />
                <Dropdown
                  type="sort"
                  dropdownList={intervalValues}
                  title="Value"
                  selectedItem={selectedValue}
                  callback={valueSelectionCallback}
                />
              </div>
            </div>
          </div>
          <div className="matchValuation__graph">
            <TimelineChart
              type={timelineType}
              data={barData || []}
              metrics="quantity"
              showLine={showViewership}
              xUnit={selectedUnit}
              xInterval={selectedValue}
              loading={loading}
              setVideoModal={setVideoModal}
              setVideoUrl={setVideoUrl}
              isLive={isShowOnlyLive}
              tootltipRef={tooltipRef}
              projectDetails={projectDetails}
            />
            {graphData && graphData.length > 13 && ! isShowOnlyLive && (
              <div className="slideNext">
                <span
                  className={barStartIndex === 0 ? 'disable' : ''}
                  onClick={() => chnageBarData('prev')}
                >
                  <Icon path={mdiChevronLeft} size={1.2} />{' '}
                </span>
                <span
                  className={barStartIndex === 13 ? 'disable' : ''}
                  onClick={() => chnageBarData('next')}
                >
                  <Icon path={mdiChevronRight} size={1.2} />
                </span>
              </div>
            )}
            {/* Live scenario */}
            {! liveToggleStaterefresh && (
              <div className="slideNext">
                <span
                  className={barStartIndex === 0 ? 'disable' : ''}
                  onClick={() => chnageBarData('prev')}
                >
                  <Icon path={mdiChevronLeft} size={1.2} />{' '}
                </span>
                <span
                  className={barStartIndex === 13 ? 'disable' : ''}
                  onClick={() => chnageBarData('next')}
                >
                  <Icon path={mdiChevronRight} size={1.2} />
                </span>
              </div>
            )}

          </div>
        </div>

        {insights &&
          insights[REDUCER_KEY_MAP[timelineType]] &&
          insights[REDUCER_KEY_MAP[timelineType]].length !== 0 && (
            <Insight
              data={(insights && insights[REDUCER_KEY_MAP[timelineType]]) || []}
            />
          )}
      </div>
    </div>
  );
};

Timeline.propTypes = {
  graph: PropTypes.object,
  intervalUnits: PropTypes.array,
  intervalConfig: PropTypes.array,
  intervalValues: PropTypes.array,
  toggleCallBack: PropTypes.bool,
  loading: PropTypes.bool,
  showViewership: PropTypes.bool,
  isShowOnlyLive: PropTypes.bool,
  timelineType: PropTypes.string,
  selectedUnit: PropTypes.string,
  selectedValue: PropTypes.string,
  unitSelectionCallback: PropTypes.func,
  valueSelectionCallback: PropTypes.func,
  graphTitle: PropTypes.string,
  graphHeaderComment: PropTypes.string,
  insightsCall: PropTypes.func,
  insights: PropTypes.object,
  projectDetail: PropTypes.object,
  setVideoModal: PropTypes.func,
  setVideoUrl: PropTypes.func,
  tooltipRef: PropTypes.object,
  appliedFilters: PropTypes.object,
  liveToggleStaterefresh:PropTypes.bool,
};
export default Timeline;
