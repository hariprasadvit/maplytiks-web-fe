/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import cloneDeep from 'lodash/cloneDeep';
import {
  secToString,
  _numberToHumanReadableFormatConverter,
} from 'utils/helpers';

const CESponsorTable = ({
  selectedExpInterval,
  expData,
  selectedIndex,
  callback,
  header = {},
  projectDetails,
  liveToggleStaterefresh,
  callbackgraphstatus
}) => {
  //console.log("CEGraph",selectedExpInterval,selectedIndex)
  const [activeIndex, setActiveIndex] = useState(0);
  const data = cloneDeep(expData);
  const [sortBy, setSortBy] = useState('exposureCount');
  const [sortType, setSortType] = useState('Descending');
  const content = [];
  while (
    data &&
    data[selectedExpInterval] &&
    data[selectedExpInterval].length > 0
  ) {
    content.push(
      data &&
        data[selectedExpInterval] &&
        data[selectedExpInterval].splice(0, 10).map(d => d),
    );
  }

  useEffect(() => {
    setActiveIndex(0);
    callback(0);
  }, [selectedExpInterval]);

  // useEffect(() => {
  //   //console.log(selectedIndex, selectedIndex - activeIndex * 10);
  // }, [selectedIndex]);

  return (
    <div className="exposure__sponsorList">
      <div style={{ marginBottom: 25 }}>
        <h3 className="matchValuation__title">{header && header.title}</h3>
        <h5 className="matchValuation__subtitle">{header && header.comment}</h5>
      </div>
      <div className="exposure__table" style={{ minHeight: 373 }}>
        <div className="exposure__row exposure__row--big">
          {header &&
            header.headers &&
            header.headers.map((d, i) => (
              ((d.label=="Value" && callbackgraphstatus.indexOf('value') !=-1) || d.label!="Value") &&( <div
                key={`CE_02_TABLE_HEADER_${d.value}_${i}`}
                className="exposure__col exposure__heading"
              >
                {d.label} <br /> {d.unit ? `(${d.unit})` : ''}
              </div>)
            ))}
        </div>

        {content &&
          content[activeIndex] &&
          content[activeIndex].map((d, i) => (
            //(d.name=="value" && callbackgraphstatus.indexOf('value') !=-1)?
            <div
              key={`CE_02_TABLE_${d.name}`}
              className={`exposure__row ${
                i === selectedIndex - activeIndex * 10
                  ? 'exposure__row--big active'
                  : ''
              }`}
              onClick={() => callback(Math.abs(activeIndex * 10 + i))}
            >
              <div className="exposure__col">{d.name}</div>
              
              {callbackgraphstatus.indexOf('value') !=-1 &&(<div className="exposure__col">
                {_numberToHumanReadableFormatConverter(d.value.toFixed(2),true,false,projectDetails) ||
                  '-'}
              </div>)}

              <div className="exposure__col">
                {secToString(d.exposureCount) || '-'}
              </div>
              <div className="exposure__col">
                {d.distributionPercentage || '-'}
              </div>
              <div className="exposure__col">
                {secToString(d.avgExposure) || '-'}
              </div>
              <div className="exposure__col">{_numberToHumanReadableFormatConverter(d.apperance,true,true,projectDetails) || '-'}</div>
            </div>
            //:""
          ))}
      </div>
      {content.length > 1 && ! liveToggleStaterefresh &&(
        <div className="exposure__pagination">
          <span>
            {activeIndex + 1}/{content.length}
          </span>
          <div
            className="exposure__pageArrow ripple"
            onClick={() => {
              if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
                callback((activeIndex - 1) * 10);
              }
            }}
          >
            <Icon path={mdiChevronLeft} size={1.2} color="#fff" />
          </div>
          <div
            className="exposure__pageArrow ripple"
            onClick={() => {
              if (activeIndex < content.length - 1) {
                setActiveIndex(activeIndex + 1);
                callback((activeIndex + 1) * 10);
              }
            }}
          >
            <Icon path={mdiChevronRight} size={1.2} color="#fff" />
          </div>
        </div>
      )}
    </div>
  );
};

CESponsorTable.propTypes = {
  selectedExpInterval: PropTypes.string,
  expData: PropTypes.object,
  header: PropTypes.object,
  selectedIndex: PropTypes.number,
  callback: PropTypes.func,
  liveToggleStaterefresh: PropTypes.bool,
};

export default CESponsorTable;
