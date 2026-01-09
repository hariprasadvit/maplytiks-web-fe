import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Slider from 'react-slick';

import Masonry from 'react-masonry-component';
import Grid from '@material-ui/core/Grid';
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiLaunch,
  mdiChevronDown,
} from '@mdi/js';
import {
  _numberToHumanReadableFormatConverter,
  // secToString,
} from 'utils/helpers';
import post from 'images/rank/post.png';
import value from 'images/rank/value.png';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import hightlightImage from '../../../../images/football.jpeg';
import data from './api';
import SocialCard from './socialCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SocialHighlightsOnline = ({
  socialHighlightsdata: {
    data: highlightsmData = [],
    projStartDateTime,
    projEndDateTime,
    loading: tempalteLoading,
    socialsubplatform
  } = {},
  platformName: platformName = '',
}) => {
 //console.log("SocialHighlights...",socialsubplatform)  //loading: tempalteLoading

  const d1 = new Date(projStartDateTime); // firstDate
  const d2 = new Date(projEndDateTime); // SecondDate
  const diff = Math.abs(d1 - d2); // in milliseconds

  const classes = useStyles();
  const [completed, setCompleted] = useState(0);
  const [KpiData, setKpiData] = useState();
  const [activeTab, setactiveTab] = useState('Post');
  const [barStartIndex, setBarStartIndex] = useState(0);
  const [barEndIndex, setBarEndIndex] = useState();
  const [kpilength, setkpilength] = useState(0);
  const [kpifinalData, setkpifinalData] = useState([]);

  useEffect(() => {
    const resultKpi = highlightsmData.find(val => val.title == activeTab);
    if (resultKpi) {
      setBarEndIndex(2);
      setkpilength(resultKpi.kpis.length);
      setKpiData(
        resultKpi.kpis.sort((a, b) => a.orderID - b.orderID).slice(0, 2)
      );
    }
  }, [highlightsmData, activeTab]);

  useEffect(() => {
    const resultKpi = highlightsmData.find(val => val.title == activeTab);
    if (resultKpi) {
      setKpiData(
        resultKpi.kpis
          .sort((a, b) => a.orderID - b.orderID)
          .slice(barStartIndex, barEndIndex)
      );
    }
  }, [activeTab, barEndIndex, barStartIndex, highlightsmData]);

  const chnageprev = dir => {
    if (barStartIndex !== 0) {
      setBarStartIndex(barStartIndex - 1);
      setBarEndIndex(barEndIndex - 1);
    }
  };
  const chnagenext = dir => {
    const resultKpi = highlightsmData.find(val => val.title == activeTab);
    if (barEndIndex < resultKpi.kpis.length) {
      setBarStartIndex(barStartIndex + 1);
      setBarEndIndex(barEndIndex + 1);
    }
  };

  useEffect(() => {
    const perc = (barEndIndex / Number(kpilength)) * 100;
    setCompleted(perc);
  }, [barEndIndex, kpilength]);

  useEffect(() => {
    const result = [];
    if (KpiData) {
      // KpiData.sort((a,b) => a.orderID - b.orderID);
      KpiData.map((data, i) => {
        result.push({
          title: data.title,
          value: data.value.data,
          unit: data.value.unit,
          comment: data.comment,
          elements: data.elements,
          link: data.link,
          orderID: data.orderID,
        });
      });
    }
    if (result.length > 0) {
      setkpifinalData(result);
      console.log('setkpifinalData.', result);
    }
  }, [KpiData]);

  const masonryOptions = {
    transitionDuration: 1,
    gutter: 15,
    resize: true,
  };
  function tabSelectionCallback(title) {
    setCompleted(0);
    setactiveTab(title);
    setBarStartIndex(0);
    setBarEndIndex(2);
    setkpilength(0);
  }

  const DATE_OPTIONS = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const fromDate = new Date(projStartDateTime).toLocaleDateString(
    'en-US',
    DATE_OPTIONS
  );
  const endDate = new Date(projEndDateTime).toLocaleDateString(
    'en-US',
    DATE_OPTIONS
  );

  return (
    <>
      <div className="platform__body">
        <div>
          <Grid container>
            <Grid item xs={6}>
              <h2 className="platform__title">Highlights</h2>
            </Grid>
            <Grid item xs={6}>
              <table>
                <tr>
                  <td className="matchValuation__subtitle donutfooter">
                    Duration
                  </td>
                  <td style={{ width: 10,textAlignLast:"center"}}> : </td>
                  <td style={{ width: 140,textAlignLast:"center"}}>
                    <h2 className="matchValuation__subtitle donutfooter">
                      {fromDate}
                    </h2>
                  </td>
                  <td style={{ width: 20,textAlignLast:"center" }}>-</td>
                  <td style={{ width: 130,textAlignLast:"center"}}>
                    <h2 className="matchValuation__subtitle donutfooter">
                      {endDate}
                    </h2>
                  </td>
                  <td className="matchValuation__subtitle donutfooter">
                     ({diff / (1000 * 3600 * 24)} Days)
                  </td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </div>
        {kpifinalData.length > 0 && !tempalteLoading && (
          <ul className="platform__tabs">
            {highlightsmData &&
              highlightsmData.map(d => (
                <li
                  className={`${activeTab === d.title ? 'active' : ''}`}
                  onClick={() => tabSelectionCallback(d.title)}
                >
                  {d.title}
                </li>
              ))}
          </ul>
        )}
        {!tempalteLoading && (
          <div className="matchValuation__graph socialkpicard">
            <Masonry options={masonryOptions} enableResizableChildren>
              <div
                className={
                  barStartIndex === 0 ? 'disable' : 'analyticSlider__icon'
                }
                onClick={() => chnageprev('prev')}
                style={{ left: 'initial', right: 0, marginTop: 80 }}
              >
                <Icon path={mdiChevronLeft} size={1.2} />
              </div>
              {!tempalteLoading &&
                kpifinalData.length > 0 &&
                kpifinalData &&
                kpifinalData.map((d, i) => (
                  <SocialCard
                    list={d.link}
                    header={d.title}
                    value={d.value}
                    unit={d.unit}
                    footer1={d.comment}
                    footer2=""
                    socialicon={platformName}
                    mediaelements={d.elements}
                    activeTab={activeTab}
                  />
                ))}
              <div
                className={
                  barEndIndex === kpilength ? 'disable' : 'analyticSlider__icon'
                }
                onClick={() => chnagenext('next')}
                style={{ left: 'initial', right: 0, marginTop: 80 }}
              >
                <Icon path={mdiChevronRight} size={1.2} />
              </div>
            </Masonry>
            <div className={classes.root}>
              <div>
                {barEndIndex}/{kpilength}
              </div>
              <LinearProgress
                variant="determinate"
                value={completed}
                color="secondary"
              />
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {highlightsmData.length === 0 && !tempalteLoading && (
          <svg width="100%" height={400}>
            <GraphEmptyState width={1189} height={330} />
          </svg>
        )}
        {/* LOADER */}
        {highlightsmData.length === 0 && tempalteLoading && (
          <GraphLoader width={1189} height={400} />
        )}
      </div>
    </>
  );
};

SocialHighlightsOnline.propTypes = {
  socialHighlightsdata: PropTypes.object,
};

export default SocialHighlightsOnline;
