/* eslint-disable no-restricted-globals */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useRef } from 'react';
import openSocket from 'socket.io-client';
import BarChart from 'components/common/graphs/BarChart';
// import { SAMPLE_BAR_DATA } from 'utils/constants';

const LiveGraph = () => {
  const socket = openSocket('http://115.248.133.211:8085');
  const tooltipRef = useRef();

  const [matchData, setMatchData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [assetData, setAssetData] = useState([]);
  const [venuData, setVenuData] = useState([]);
  // const [modelData, setModelData] = useState([]);
  const [showLive] = useState(true);

  const graphMargin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const MATCH_PAYLOAD = {
    userEmail: 'asiacup2018@nanoyotta.com',
    projectID: 'PRJ101',
    platformID: 'MED101',
    viewcategory: '01',
    visions: [],
    filter: { brands: [], models: [], assets: [], venues: [] },
  };

  const BRAND_PAYLOAD = {
    userEmail: 'asiacup2018@nanoyotta.com',
    projectID: 'PRJ101',
    platformID: 'MED101',
    viewcategory: '02',
    brands: [],
    filter: { visions: [], models: [], assets: [], venues: [] },
  };

  const ASSET_PAYLOAD = {
    userEmail: 'asiacup2018@nanoyotta.com',
    projectID: 'PRJ101',
    platformID: 'MED101',
    viewcategory: '03',
    assets: [],
    filter: { visions: [], models: [], brands: [], venues: [] },
  };

  const VENUE_PAYLOAD = {
    userEmail: 'asiacup2018@nanoyotta.com',
    projectID: 'PRJ101',
    platformID: 'MED101',
    viewcategory: '01',
    venues: [],
    filter: { visions: [], models: [], assets: [], brands: [] },
  };

  // const MODEL_PAYLOAD = {
  //   userEmail: 'asiacup2018@nanoyotta.com',
  //   projectID: 'PRJ101',
  //   platformID: 'MED101',
  //   // viewcategory: '01',
  //   models: [],
  //   filter: { visions: [], venues: [], assets: [], brands: [] },
  // };

  const subscribeToMatches = () => {
    socket.on('visiondata', d =>
      setMatchData(parser(JSON.parse(d.data).stats)),
    );
    socket.emit('vision/live', MATCH_PAYLOAD, 1000);
  };

  const subscribeToBrands = () => {
    socket.on('branddata', d =>
      setBrandData(parser(JSON.parse(d.data).stats, 'abc')),
    );
    socket.emit('brands/live', BRAND_PAYLOAD, 1000);
  };

  const subscribeToAssets = () => {
    socket.on('assetdata', d =>
      setAssetData(parser(JSON.parse(d.data).stats, 'abc')),
    );
    socket.emit('asset/live', ASSET_PAYLOAD, 1000);
  };

  const subscribeToVenus = () => {
    socket.on('venuedata', d =>
      setVenuData(parser(JSON.parse(d.data).stats, 'abc')),
    );
    socket.emit('venue/live', VENUE_PAYLOAD, 1000);
  };

  // const subscribeToModels = () => {
  //   socket.on('modeldata', d =>
  //     setModelData(parser(JSON.parse(d.data).stats, 'abc')),
  //   );
  //   socket.emit('model/live', MODEL_PAYLOAD, 1000);
  // };

  const parser = (stats, method = 'vision') =>
    stats.map(data => ({
      matchKey: data.id,
      quality: Number(data.stats.quality.toFixed(2)),
      quantity: data.stats.quantity,
      value: data.stats.value,
      viewer:
        method === 'vision'
          ? isNaN(
              Number(data.stats.viewers.slice(data.stats.viewers.length - 2)),
            )
            ? Number(data.stats.viewers.slice(0, -2))
            : Number(data.stats.viewers)
          : '',
      viewerShipUnit:
        method === 'vision'
          ? isNaN(
              Number(data.stats.viewers.slice(data.stats.viewers.length - 2)),
            )
            ? data.stats.viewers.slice(data.stats.viewers.length - 2).trim()
            : ''
          : '',
      isLive: data.liveStatus,
      disaplayName: data.displayName,
      displayDate: data.displayDate,
    }));

  useEffect(() => {
    subscribeToMatches();
    subscribeToBrands();
    subscribeToAssets();
    subscribeToVenus();
    // subscribeToModels();
  }, []);

  return (
    <>
      <div className="analytics-graph">
        <h1>Matches Graph</h1>
        <br />
        <BarChart
          height={377}
          width={1201}
          margin={graphMargin}
          data={matchData}
          type="analytics"
          // barsVisible={barTypesToBeVisible}
          // isShowOnlyLive={isShowOnlyLive}
          tootltipRef={tooltipRef}
          showLine={showLive}
        />
      </div>

      <div className="analytics-graph">
        <h1>Brands Graph</h1>
        <br />
        <BarChart
          height={377}
          width={1201}
          margin={graphMargin}
          data={brandData}
          type="analytics"
          // barsVisible={barTypesToBeVisible}
          // isShowOnlyLive={isShowOnlyLive}
          tootltipRef={tooltipRef}
          // showLine={showLive}
        />
      </div>

      <div className="analytics-graph">
        <h1>Asset Graph</h1>
        <br />
        <BarChart
          height={377}
          width={1201}
          margin={graphMargin}
          data={assetData}
          type="analytics"
          // barsVisible={barTypesToBeVisible}
          // isShowOnlyLive={isShowOnlyLive}
          tootltipRef={tooltipRef}
          // showLine={showLive}
        />
      </div>

      <div className="analytics-graph">
        <h1>Venue Graph</h1>
        <br />
        <BarChart
          height={377}
          width={1201}
          margin={graphMargin}
          data={venuData}
          type="analytics"
          // barsVisible={barTypesToBeVisible}
          // isShowOnlyLive={isShowOnlyLive}
          tootltipRef={tooltipRef}
          // showLine={showLive}
        />
      </div>
      {/*
      <div className="analytics-graph">
        <h1>Models Graph</h1>
        <br />
        <BarChart
          height={377}
          width={1201}
          margin={graphMargin}
          data={modelData}
          type="analytics"
          // barsVisible={barTypesToBeVisible}
          // isShowOnlyLive={isShowOnlyLive}
          tootltipRef={tooltipRef}
          // showLine={showLive}
        />
      </div> */}

      <div ref={tooltipRef} className="card" style={{ visibility: 'hidden' }}>
        <div>
          <h5>M9 - Full Name</h5>

          <div className="card-date">
            <h5>Stadium - Delhi </h5>
            <h5>23rd August 2018</h5>
          </div>
          <h5>INDIA VS PAK</h5>
          <h5>4.46M viewers</h5>
        </div>
      </div>
    </>
  );
};

export default LiveGraph;
