/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight,mdiArrowUpCircleOutline,mdiArrowDownCircleOutline  } from '@mdi/js';
import BarChart from 'components/common/graphs/BarChart';
import RaceBarChart from 'components/common/graphs/RaceBarChart';
import Dropdown from 'components/common/Dropdown';
import Insight from 'components/common/Insight';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';

// import { SAMPLE_BAR_DATA } from 'utils/constants';

const REDUCER_KEY_MAP = {
  matches: 'visionsInsights',
  visions: 'visionsInsights',
  brands: 'brandsInsights',
  assets: 'assetsInsights',
  models: 'modelsInsights',
  venues: 'venuesInsights',
};

const GRAPH_CATEGORIES = {
  matches: '01',
  visions: '01',
  brands: '02',
  assets: '03',
  venues: '04',
  models: '05',
};

const AnalysisGraph = ({
  isShowOnlyLive,
  graphData,
  isViewerShipDataVisible,
  header,
  tooltipRef,
  valueationUnit,
  index,
  viewType,
  loader,
  insightsCall,
  insights,
  graphType,
  projectDetail,
  insightTitle,
  isSticky,
  appliedFilters,
  callbackrefresh,
  callbackreturn,
  graphStatus,
  callbackgraphstatus,
}) => {
  const [barStartIndex, setBarStartIndex] = useState(0);
  const [barEndIndex, setBarEndIndex] = useState(13);
  const [barData, setBarData] = useState(graphData);
  const [liveBarDataValue, setLiveBarDataValue] = useState(graphData);
  const [liveBarDataQuality, setLiveBarDataQuality] = useState(graphData);
  const [liveBarDataQuantity, setLiveBarDataQuantity] = useState(graphData);
  const [totalliveBarData, setTotalLiveBarData] = useState(graphData);
  const [livebarStartIndex, setLiveBarStartIndex] = useState(0);
  const [livebarEndIndex, setLiveBarEndIndex] = useState(10);
  const [sortType, setSortType] = useState('Descending');
  const [sortBy, setSortBy] = useState('quantity');
  const [refreshStage, setRefreshStage] = useState(true);
  const [valuationVisible, setValuationVisible] = useState(true);
  const [weightedQulity, setWeightedQulity] = useState(0);
  const [barTypesToBeVisible, setBarTypesToBeVisible] = useState([
    'value',
    'quality',
    'quantity',
    'viewer',
  ]);
  useEffect(() => {
    let barviewlist =[]
    if(graphStatus){
        Object.keys(graphStatus).map(keylist =>{
          let result = (keylist=="viewership" && graphStatus[keylist]) ? "viewer" : 
                     (keylist=="quantity" && graphStatus[keylist]) ? "quantity" :
                     (keylist=="quality" && graphStatus[keylist]) ? "quality" :
                     (keylist=="value" && graphStatus[keylist]) ? "value" :"";
        if(result !=""){
          barviewlist.push(result);
        }
      })
    }
    if(barviewlist.length >0){
      setValuationVisible(barviewlist.includes('value'))
      setBarTypesToBeVisible(barviewlist)
      callbackgraphstatus(barviewlist)
    }
    
  }, [graphStatus,isShowOnlyLive,appliedFilters]);

  const graphMargin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 20,
  };

  const liveToggleState = () => {
    //setRefreshStage(!refreshStage);
    //callbackrefresh(refreshStage);
    setLiveBarStartIndex(0);
    setLiveBarEndIndex(10);
  };

  useEffect(() => {
    setRefreshStage(!callbackreturn);
  }, [callbackreturn]);


  useEffect(() => {
   if(graphData.length>0){
       console.log("graphData",graphData)
       let asection=0.00;
       let bsection=0;
       graphData.map((list,i)=>{
        console.log("graphData",list)
        asection +=(list.quality)*list.quantity;
        bsection +=list.quantity;
       })
       if(asection !=0.00){
        console.log("graphData Final",asection/bsection)
        setWeightedQulity(asection/bsection)
       }
   }
  }, [graphData]);



  const chnageBarData = dir => {
    if (dir === 'prev' && barStartIndex !== 0) {
      setBarStartIndex(barStartIndex - 1);
      setBarEndIndex(barEndIndex - 1);
    }
    if (dir === 'next' && barEndIndex < graphData.length) {
      setBarStartIndex(barStartIndex + 1);
      setBarEndIndex(barEndIndex + 1);
    }
  };

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        ...projectDetail,
        graphCategory: GRAPH_CATEGORIES[graphType.toLowerCase()],
        IDs: [],
        liveStatus: isShowOnlyLive ? 1 : 0,
      },
    };

    insightsCall(PAYLOAD);
  }, [viewType, isShowOnlyLive]);

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        ...projectDetail,
        graphCategory: GRAPH_CATEGORIES[graphType.toLowerCase()],
        IDs: [...appliedFilters[viewType]],
        liveStatus: isShowOnlyLive ? 1 : 0,
      },
    };

    insightsCall(PAYLOAD);
  }, [appliedFilters]);

  useEffect(() => {
    setBarData(
      graphData &&
        graphData.sort((a, b) =>
          sortType === 'Ascending'
            ? a[sortBy] - b[sortBy]
            : b[sortBy] - a[sortBy],
        ) &&
        graphData.slice(0, 13),
    );
  }, [graphData]);

  useEffect(() => {
    setLiveBarDataQuantity(
      graphData &&
      graphData
          .sort((a, b) => {
            return sortType === 'Ascending'
              ? a[sortBy] - b[sortBy]
              : b[sortBy] - a[sortBy];
          })
          .slice(livebarStartIndex, livebarEndIndex),
    );
    setLiveBarDataQuality(
      graphData &&
      graphData
          .sort((a, b) => {
            return sortType === 'Ascending'
              ? a['quality'] - b['quality']
              : b['quality'] - a['quality'];
          })
          .slice(livebarStartIndex, livebarEndIndex),
    );
    setLiveBarDataValue(
      graphData &&
      graphData
          .sort((a, b) => {
            return sortType === 'Ascending'
              ? a['value'] - b['value']
              : b['value'] - a['value'];
          })
          .slice(livebarStartIndex, livebarEndIndex),
    );
  }, [graphData,livebarStartIndex,livebarEndIndex, sortBy, sortType]);



  useEffect(() => {
    if(graphData){
      setLiveBarStartIndex(0);
      setLiveBarEndIndex(10);
    }
  }, [graphData]);

  const livechnageBarData = dir => {
    if (dir === 'prev' && livebarStartIndex !== 0) {
      setLiveBarStartIndex(livebarStartIndex - 1);
      setLiveBarEndIndex(livebarEndIndex - 1);
    }
    if (dir === 'next' && livebarEndIndex < graphData.length) {
      setLiveBarStartIndex(livebarStartIndex + 1);
      setLiveBarEndIndex(livebarEndIndex + 1);
    }
  };

  useEffect(() => {
    setBarData(
      graphData &&
        graphData
          .sort((a, b) => {
            if (sortBy === 'Name') {
              const genreA = a.disaplayName.toUpperCase();
              const genreB = b.disaplayName.toUpperCase();

              let comparison = 0;
              if (sortType === 'Ascending') {
                if (genreA > genreB) {
                  comparison = 1;
                } else if (genreA < genreB) {
                  comparison = -1;
                }
              } else if (genreA < genreB) {
                comparison = 1;
              } else if (genreA > genreB) {
                comparison = -1;
              }
              return comparison;
            }
            if (sortBy === 'Date') {
              return sortType === 'Ascending'
                ? new Date(a.timestamp).getTime() -
                    new Date(b.timestamp).getTime()
                : new Date(b.timestamp).getTime() -
                    new Date(a.timestamp).getTime();
            }
            return sortType === 'Ascending'
              ? a[sortBy] - b[sortBy]
              : b[sortBy] - a[sortBy];
          })
          .slice(barStartIndex, barEndIndex),
    );
  }, [barEndIndex, barStartIndex, sortBy, sortType]);

  const onChange = (e, type) => {
    if (type === 'checkbox') {
      const bars = [...barTypesToBeVisible];
      if (bars.indexOf(e.target.name) !== -1) {
        if (bars.length === 1) {
          window.alert('All metrics cannot be unselected.');
        } else {
          bars.splice(bars.indexOf(e.target.name), 1);
          setBarTypesToBeVisible(bars);
        }
      } else {
        bars.push(e.target.name);
        setBarTypesToBeVisible(bars);
      }
    }
  };

  return (
    <div
      className={`${(isSticky && index != 0) ? 'matchValuation sticky' : (isSticky && index === 0) ? 'matchValuationHeader sticky' : 'matchValuation'}`}
      style={{ marginBottom: index === 3 ? 40 : 0 }}
    >
      <div className="matchValuation__wrapper">
        <div className="matchValuation__top">
          <div className="matchValuation__header">
            <div>
              <h3 className="matchValuation__title">
                {header && header.title}
                {header && header.title && (
                  <span>{String(graphData && graphData.length)}</span>
                )}
              </h3>
              <h5 className="matchValuation__subtitle">
                {header && header.comment}
              </h5>
              {((barData && barData.length > 1) || (liveBarDataQuantity)) && (
                <div className="matchwiseQuality__checkboxWrapper">
                  <div>
                    <input
                      onChange={e => onChange(e, 'checkbox')}
                      name="quantity"
                      type="checkbox"
                      id={`Quantity_${index}`}
                      checked={!barTypesToBeVisible.includes('quantity')}
                    />
                    <label htmlFor={`Quantity_${index}`}>Quantity</label>
                  </div>
                  <div>
                    <input
                      onChange={e => onChange(e, 'checkbox')}
                      name="quality"
                      type="checkbox"
                      id={`Quality_${index}`}
                      checked={!barTypesToBeVisible.includes('quality')}
                    />
                    <label htmlFor={`Quality_${index}`}>Quality</label>
                  </div>
                 { valuationVisible && ( <div>
                    <input
                      onChange={e => onChange(e, 'checkbox')}
                      name="value"
                      type="checkbox"
                      id={`val_${index}`}
                      checked={!barTypesToBeVisible.includes('value')}
                    />
                    <label htmlFor={`val_${index}`}>Valuation</label>
                  </div>)}
                </div>
              )}
            </div>
            {((barData && barData.length > 1) || (liveBarDataQuantity)) && (
              <div className="matchValuation__sort">
                <div className="matchsortBy">
                  <Dropdown
                    type="sort"
                    dropdownList={['Descending', 'Ascending']}
                    title="Sort"
                    selectedItem={sortType}
                    callback={setSortType}
                  />
                  {!isShowOnlyLive ? (
                    <Dropdown
                      type="sort"
                      dropdownList={[
                        ...barTypesToBeVisible.filter(d => d !== 'viewer'),
                        ...['Name'],
                        ...(graphType === 'visions' ||
                        graphType === 'vision' ||
                        graphType === 'matches'
                          ? ['Date']
                          : []),
                      ]}
                      title="Sort By"
                      selectedItem={sortBy}
                      callback={setSortBy}
                    />
                  ) : (
                    graphType !== 'brands' &&
                    graphType !== 'assets' && (
                      <Dropdown
                        type="sort"
                        dropdownList={[
                          ...barTypesToBeVisible.filter(d => d !== 'viewer'),
                          ...['Name'],
                          ...(graphType === 'visions' ||
                          graphType === 'vision' ||
                          graphType === 'matches'
                            ? ['Date']
                            : []),
                        ]}
                        title="Sort By"
                        selectedItem={sortBy}
                        callback={setSortBy}
                      />
                    )
                  )}
                </div>
                <div className="matchValuation__average">
                  {barTypesToBeVisible.indexOf('value') !=-1 && (<div className="avg-sec">
                    Avg <br />
                    Valuation
                    <div style={{ marginLeft: 10 }}>
                      <h2>
                        {graphData && graphData.length>0 &&
                          _numberToHumanReadableFormatConverter(
                            graphData.reduce((a, v) => a + v.value, 0) /
                              graphData.length.toFixed(0),
                            true,
                            true,
                            projectDetail
                          )}
                      </h2>
                    </div>
                  </div>)}
                  <div className="avg-sec">
                    Avg <br />
                    Quality
                    <div style={{ marginLeft: 10 }}>
                      <h2>
                        {graphData && graphData.length>0 &&
                          _numberToHumanReadableFormatConverter(
                            (
                              weightedQulity
                            ).toFixed(2),
                            true,
                            false,
                            projectDetail
                          )}{''}
                        %
                      </h2>
                    </div>
                  </div>

                  <div className="avg-sec">
                    Avg
                    <br /> Quantity
                    <div style={{ marginLeft: 10 }}>
                      <h2>
                        {graphData && graphData.length>0 &&
                          `${secToString(
                            (
                              graphData.reduce((a, v) => a + v.quantity, 0) /
                              graphData.length
                            ).toFixed(0),
                          )} `}{''}
                      </h2>
                      <span className="unit">HH:MM:SS</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="matchValuation__graph">
            {(barData.length > 1 || barData.length === 0) &&
              (!isShowOnlyLive ? (
                <BarChart
                  height={387}
                  width={1201}
                  margin={graphMargin}
                  data={barData || []}
                  type="analytics"
                  barsVisible={barTypesToBeVisible || []}
                  isShowOnlyLive={isShowOnlyLive}
                  tootltipRef={tooltipRef}
                  showLine={isViewerShipDataVisible}
                  valueationUnit={valueationUnit}
                  loading={loader}
                  graphType={graphType}
                  projectDetail={projectDetail}
                />
              ) : graphType !== 'brands' && graphType !== 'assets' ? (
                <BarChart
                  height={387}
                  width={1201}
                  margin={graphMargin}
                  data={barData || []}
                  type="analytics"
                  barsVisible={barTypesToBeVisible || []}
                  isShowOnlyLive={isShowOnlyLive}
                  tootltipRef={tooltipRef}
                  showLine={isViewerShipDataVisible}
                  valueationUnit={valueationUnit}
                  loading={loader}
                  graphType={graphType}
                  projectDetail={projectDetail}
                />
              ) : (
                <div>
                <RaceBarChart
                  height={382.09}
                  width={1217.27}
                  margin={graphMargin}
                  livevaluedata={liveBarDataValue || []}
                  livequantitydata={liveBarDataQuantity || []}
                  livequalitydata={liveBarDataQuality || []}
                  sortType={sortType}
                  type="analytics"
                  barsVisible={
                    barTypesToBeVisible.filter(d => d !== 'viewer') || []
                  }
                  isShowOnlyLive={isShowOnlyLive}
                  tootltipRef={tooltipRef}
                  showLine={isViewerShipDataVisible}
                  valueationUnit={valueationUnit}
                  loading={loader}
                  graphType={graphType}
                />
                  {refreshStage && ( <div className="slideNext">
                                <span
                                  className={barStartIndex === 0 ? 'disable' : ''}
                                  onClick={() => livechnageBarData('prev')}
                                >
                                  <Icon path={mdiChevronLeft} size={1.2} />{' '}
                                </span>
                                <span
                                  className={barStartIndex === 10 ? 'disable' : ''}
                                  onClick={() => livechnageBarData('next')}
                                >
                                  <Icon path={mdiChevronRight} size={1.2} />
                                </span>
                    </div>)}
                </div>
              ))}

            {barData.length === 1 &&
              graphType !== 'brands' &&
              graphType !== 'assets' && (
                <BarChart
                  height={387}
                  width={1201}
                  margin={graphMargin}
                  data={barData || []}
                  type="analytics"
                  barsVisible={barTypesToBeVisible || []}
                  isShowOnlyLive={isShowOnlyLive}
                  tootltipRef={tooltipRef}
                  showLine={isViewerShipDataVisible}
                  valueationUnit={valueationUnit}
                  loading={loader}
                  graphType={graphType}
                  projectDetail={projectDetail}
                />
              )}
            {barData.length === 1 &&
              (graphType === 'brands' || graphType === 'assets') && (
                <div style={{ textAlign: 'center', margin: '0 40%' }}>
                  <div className="analysisSponsorAssetImage">
                    <img
                      src={graphData[0] && graphData[0].image}
                      alt=""
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="analysisSponsorAssetContent">
                    <div>
                     { barTypesToBeVisible.indexOf('value') !=-1 && (<div>
                        <span className="geoHeader">Valuation ({valueationUnit}) =  &nbsp;</span>
                        <span className="geoHeader"> 
                          {' '}
                          {graphData[0] &&
                            _numberToHumanReadableFormatConverter(
                              graphData[0].value,
                              true,
                            false,
                            projectDetail
                            )}
                        </span>
                      </div>)}
                      <div>
                        <span className="geoHeader">Quality (%) = </span>
                        &nbsp;<span className="geoHeader"> {graphData[0] && graphData[0].quality}</span>
                      </div>
                      <div>
                        <span className="geoHeader">Quantity (HH:MM:SS) = </span>
                        <span className="geoHeader">
                        &nbsp;{graphData[0] && secToString(graphData[0].quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {graphData && graphData.length > 13 && !isShowOnlyLive ? (
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
            ) : (
              graphData &&
              graphData.length > 13 &&
              isShowOnlyLive && !callbackreturn &&
              graphType !== 'brands' &&
              graphType !== 'assets' && (
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
              )
            )}
          </div>
        </div>
        {insights &&
          insights[REDUCER_KEY_MAP[graphType.toLowerCase()]] &&
          insights[REDUCER_KEY_MAP[graphType.toLowerCase()]].length !== 0 && (
            <Insight
              data={
                (insights &&
                  insights[REDUCER_KEY_MAP[graphType.toLowerCase()]]) ||
                []
              }
              insightTitle={insightTitle}
            />
          )}
      </div>
    </div>
  );
};

AnalysisGraph.propTypes = {
  graphData: PropTypes.array,
  isShowOnlyLive: PropTypes.bool,
  loader: PropTypes.bool,
  isSticky: PropTypes.bool,
  isViewerShipDataVisible: PropTypes.bool,
  header: PropTypes.object,
  tooltipRef: PropTypes.object,
  valueationUnit: PropTypes.string,
  graphType: PropTypes.string,
  index: PropTypes.number,
  viewType: PropTypes.string,
  insightTitle: PropTypes.string,
  insightsCall: PropTypes.func,
  insights: PropTypes.object,
  projectDetail: PropTypes.object,
  appliedFilters: PropTypes.object,
};

export default AnalysisGraph;
