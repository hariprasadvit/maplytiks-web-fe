/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DONUT_MARGIN } from 'utils/constants';
import CEGraph from './CEGraph';
import CESponsorTable from './CESponsorTable';
import CESponsorDesc from './CESponsorDesc';

const INDEX_TO_COLOR_MAP = {
  0: 'red',
  1: 'blue',
  2: 'grey',
  3: 'green',
  4: 'pink',
  5: 'teal',
  6: 'yellow',
  7: 'purple',
};

const ContinousExposure = ({ expData: { secOne, secTwo, headers },projectDetails,liveToggleStaterefresh,callbackgraphstatus}) => {
  //console.log("ContinousExposure",projectDetails)
  const [selectedExposure, setSelectedExposure] = useState(
    secOne.graphData && secOne.graphData[3] && secOne.graphData[3].name,
  );
  const [selectedSponsor, setSelectedSponsor] = useState(0);
  const [selectedExposureIndex, setSelectedSponsorIndex] = useState(3);
  const donutMraphMargin = DONUT_MARGIN;

  const intervalSelectionCallback = (name, index) => {
    setSelectedExposure(name);
    setSelectedSponsorIndex(index);  
  };

  useEffect(() => {
    setSelectedExposure(
      secOne.graphData && secOne.graphData[3] && secOne.graphData[3].name,
    );
  }, [secOne]);


  return (
    <div className="exposure">
      <div className="exposure__wrapper">
        <CEGraph
          expData={secOne}
          donutMraphMargin={donutMraphMargin}
          callback={intervalSelectionCallback}
          header={headers && headers[0]}
          containerColor={INDEX_TO_COLOR_MAP[selectedExposureIndex]}
          activeIndex={selectedExposureIndex}
          projectDetails={projectDetails}
          callbackgraphstatus={callbackgraphstatus}
        />
        <CESponsorTable
          expData={secTwo}
          selectedExpInterval={selectedExposure}
          selectedIndex={selectedSponsor}
          callback={setSelectedSponsor}
          header={headers && headers[1]}
          containerColor={INDEX_TO_COLOR_MAP[selectedExposureIndex]}
          projectDetails={projectDetails}
          liveToggleStaterefresh={liveToggleStaterefresh}
          callbackgraphstatus={callbackgraphstatus}
        />

        <CESponsorDesc
          selectSponsorData={
            secTwo &&
            secTwo[selectedExposure] &&
            secTwo[selectedExposure][selectedSponsor]
          }
          expData={secTwo}
          header={headers && headers[2]}
          containerColor={INDEX_TO_COLOR_MAP[selectedExposureIndex]}
          callbackgraphstatus={callbackgraphstatus}
        />
      </div>
    </div>
  );
};

ContinousExposure.propTypes = {
  expData: PropTypes.object,
  liveToggleStaterefresh: PropTypes.bool,
};

export default ContinousExposure;
