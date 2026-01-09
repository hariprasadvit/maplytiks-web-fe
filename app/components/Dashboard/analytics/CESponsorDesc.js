import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DONUT_MARGIN } from 'utils/constants';
import Donut from 'components/common/graphs/Donut';
import { secToString } from 'utils/helpers';

const CESponsorDesc = ({
  selectSponsorData,
  expData,
  header,
  containerColor
}) => {
  
// 
  // <====================CALCULATIONs (START) based on selected interval and sponsor ===============================>
  const sponsorArr = [];
  const expIntervals = Object.keys(expData);

  const brandsData = Object.keys(expData).map(d =>
    expData[d].filter(x => {
      if (x.name === (selectSponsorData && selectSponsorData.name)) {
        sponsorArr.push(x);
      }
      return x.name === (selectSponsorData && selectSponsorData.name);
    }),
  );

  const sponsorExpData = {};
  // eslint-disable-next-line no-return-assign
  expIntervals.map((d, i) => (sponsorExpData[d] = brandsData[i]));

  // 1) Overall Stats for the sponsor selected
  const overallSponsorStats = sponsorArr.reduce(
    (a, v) => ({
      exp: a.exp + Number(v.distributionPercentage),
      totalExp: a.totalExp + Number(v.exposureCount),
      expCount: a.expCount + Number(v.apperance),
      avgExp: a.avgExp + Number(v.avgExposure),
    }),
    { exp: 0, totalExp: 0, expCount: 0, avgExp: 0 },
  );

  // 2) Graph 1 (Exposure) calculaition
  const expGraphData = Object.keys(sponsorExpData)
    .filter(d => sponsorExpData[d].length > 0)
    .map(d => ({
      name: d,
      value: sponsorExpData[d].reduce((a, v) => a + Number(v.exposureCount), 0),
    }));

  // 3) Graph 2 (% Total Exp) calculaition
  const totalExp = sponsorArr.reduce((a, v) => a + Number(v.exposureCount), 0);

  const totalExpGraphData = Object.keys(sponsorExpData)
    .filter(d => sponsorExpData[d].length > 0)
    .map(d => ({
      name: d,
      value: sponsorExpData[d].reduce((a, v) => a + Number(v.exposureCount), 0),
    }));

  const totalExpPercent = totalExpGraphData.map(d => ({
    name: d.name,
    // eslint-disable-next-line no-restricted-globals
    value: isNaN((d.value / totalExp) * 100)
      ? 0
      : ((d.value / totalExp) * 100).toFixed(2),
  }));

  // 4) Graph 3 (Avg Exposure) calculaition
  const avgExpGraphData = Object.keys(sponsorExpData)
    .filter(d => sponsorExpData[d].length > 0)
    .map(d => ({
      name: d,
      value: sponsorExpData[d].reduce((a, v) => a + Number(v.avgExposure), 0),
    }));

  // 5) Common Legend
  const graphLegend = (
    <div className="graph-stage" style={{ paddingLeft: 42 }}>
      <div className="graph-col">
        {expIntervals
          .filter(d => sponsorExpData[d].length > 0)
          .map((d, i) => (
            <div key={`CE_LEGEND_${String(i)}_$d`} className="graph-item">
              <span className={`stage${i + 1}`}>CE</span>
              <small>{d}</small>
            </div>
          ))}
      </div>
    </div>
  );

  const DONUT_CONFIG = [
    {
      title: 'Exposure',
      data: expGraphData,
      donutTitle: secToString(totalExp),
      subtitle: 'HH:MM:SS',
    },
    {
      title: '% of Total Exposure',
      data: totalExpPercent,
      donutTitle: '100%',
    },
    {
      title: 'Avg. Exposure',
      data: avgExpGraphData,
      donutTitle: secToString(avgExpGraphData.reduce((a, v) => a + v.value, 0)),
      subtitle: 'HH:MM:SS',
    },
  ];

  // <=================================CALCULATIONs (END)===================================>

  return (
    <div className={`exposure__sponsorSelected selected-${containerColor}`}>
      {' '}
      <div style={{ marginBottom: 25 }}>
        <h3 className="matchValuation__title">{header && header.title}</h3>
        <h5 className="matchValuation__subtitle">{header && header.comment}</h5>
      </div>
      <div className="flexRow">
        <div className="exposure__sponsorContent">
          <div className="exposure__sponsorheader">
            <div className="exposure__sponsorImg">
              <img
                alt=""
                src={selectSponsorData && selectSponsorData.imagePath}
              />
            </div>
            <h5>{selectSponsorData && selectSponsorData.name}</h5>
          </div>
          <div className="exposure__contentList">
            {/* <div className="exposure__contentItem">               Removed by palani velayutham  24/01/2020
              <span>Exposure %</span>
              <small>{overallSponsorStats.exp.toFixed(2) || '-'} %</small>
            </div> */}
            <div className="exposure__contentItem">
              <span>Cumulative Exposure (HH:MM:SS)</span>
              <small>{secToString(overallSponsorStats.totalExp) || '-'}</small>
            </div>
            <div className="exposure__contentItem">
              <span>Exposure count</span>
              <small>{overallSponsorStats.expCount || '-'}</small>
            </div>
            <div className="exposure__contentItem">
              <span>Avg. Exposure (HH:MM:SS)</span>
              <small>{secToString(overallSponsorStats.avgExp) || '-'}</small>
            </div>
          </div>
        </div>
        <div className="exposure__sponsorGraph">
          {graphLegend}
          {DONUT_CONFIG.map((d, i) => (
            <div className="exposure__sponsorGraph__graphItem">
              <label>{d.title}</label>
              <Donut
                height={231}
                width={231}
                margin={DONUT_MARGIN}
                data={d.data}
                colorSheme={containerColor}
                title={d.donutTitle}
                subTitle={d.subtitle}
                unit={i === 1 ? '%' : ''}
                donutThickness={36}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CESponsorDesc.propTypes = {
  selectSponsorData: PropTypes.object,
  expData: PropTypes.object,
  header: PropTypes.object,
  containerColor: PropTypes.string,
};

export default CESponsorDesc;
