/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Donut from 'components/common/graphs/Donut';
import {
  secToString,
  _numberToHumanReadableFormatConverter,
} from 'utils/helpers';

const CEGraph = ({
  donutMraphMargin,
  expData: { totalExposure, graphData },
  callback,
  header = {},
  activeIndex,
  projectDetails,
  callbackgraphstatus
}) => {
  //console.log("CEGraph",CEGraph)
  const [activeItem, setActiveItem] = useState(3);

  useEffect(() => {
    setActiveItem(3);
    }, [graphData]);
  
  return (
    <div className="exposure__continous">
      <div style={{ marginBottom: 25 }}>
        <h3 className="matchValuation__title">{header && header.title}</h3>
        <h5 className="matchValuation__subtitle">{header && header.comment}</h5>
      </div>
      <div className="exposure__distribution">
        <div className="exposure__distributionValue">
          <h2>Exposure distribution across bands</h2>
          <span>(HH:MM:SS)</span>
          <h4>
            {/* eslint-disable-next-line no-restricted-globals */}
            {totalExposure && totalExposure.count
              ? secToString(totalExposure.count)
              : '00:00:00'}
          </h4>
        </div>
        <div className="exposure__distributionGraph">
          <Donut
            height={221}
            width={221}
            margin={donutMraphMargin}
            data={graphData}
            colorSheme="ce"
            unit="%"
            activeArc={activeIndex}
            donutThickness={36}
          />
        </div>
      </div>
      <div className="exposure__table exposure__continous__table">
        <div className="exposure__row">
          {header &&
            header.headers &&
            header.headers.map((d, i) => (
              ((d.label=="Value" && callbackgraphstatus.indexOf('value') !=-1) || d.label!="Value") &&( <div
                key={`CE_01_TABLE_HEADER_${d.value}_${i}`}
                className="exposure__col exposure__heading"
              >
                {d.label} <br /> {d.unit ? `(${d.unit})` : ''}
              </div>)
            ))}
        </div>

        {graphData &&
          graphData.map((d, i) => (
            <div
              key={`CE_01_TABLE_${d.name}`}
              className={`exposure__row ${
                i === activeItem ? 'exposure__active' : ''
              }`}
              onClick={() => {
                callback(d.name, i);
                setActiveItem(i);
              }}
            >
              <div className="exposure__col">
                <span className={`ceDot dot__${i + 1}`} />
                {d.name.replace(/ /g, '')}
              </div>
              {callbackgraphstatus.indexOf('value') !=-1 &&(<div className="exposure__col">
                {_numberToHumanReadableFormatConverter(d.rank,true,true,projectDetails)}
              </div>)}
              <div className="exposure__col">{secToString(d.brandExp)}</div>
              <div className="exposure__col">{secToString(d.avgExp)}</div>
              <div className="exposure__col">{_numberToHumanReadableFormatConverter(d.expCount,true,true,projectDetails)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

CEGraph.propTypes = {
  donutMraphMargin: PropTypes.object,
  expData: PropTypes.object,
  callback: PropTypes.func,
  header: PropTypes.object,
  activeIndex: PropTypes.number,
};

export default CEGraph;
