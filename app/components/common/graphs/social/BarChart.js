/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
// import Icon from '@mdi/react';
// import { mdiChartLine } from '@mdi/js';
import * as d3 from 'd3';
import { ANALYTICS_KEYS } from 'utils/constants';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';
import {
  BarChart as RBarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  LineChart,
  Line,
} from 'recharts';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import NumericLabel from 'react-pretty-numbers';

const BarChart = ({ data, loading, xAxisClick }) => {
  const [Cumulative, setCumulative] = useState();
  useEffect(() => {
    if (data.length > 0) {
      // console.log("dataBarChart",data)
      const finaldata = [];
      data.map(list => {
        const tabs = {};
        tabs.name = list.displayName;
        list.stats.platforms.map((sublist, i) => {
          tabs[`${sublist.subPlatformName}Quantity`] = sublist.details.quantity;
          tabs[`${sublist.subPlatformName}Quality`] = sublist.details.quality;
          tabs[`${sublist.subPlatformName}Value`] = sublist.details.value; // 10; // sublist.details.value;
        });
        finaldata.push(tabs);
      });
      if (finaldata.length > 0) {
        setCumulative(finaldata);
      }
    }
  }, [data]);

  const RenderLegend = props => {
    const { payload } = props;
    console.log('payload.', payload);
    return (
      <ul>
        <li>{10}</li>
      </ul>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    // console.log('activepayload', active, '\n', payload, '\n', label);
    if (active) {
      return (
        <div className="Tooptip2Timeline_divider">
          <div style={{ width: '100%' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: 10 }}>
              Quantity (HH:MM:SS)
            </h3>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: 10, color: '#3b5998' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                {secToString(payload[0].value)}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ margin: '0 10px', color: ' #00acee' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                {secToString(payload[1] ? payload[1].value : 0)}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InstagramIcon style={{ margin: '0 10px', color: '#dd2a7b' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                {secToString(payload[2] ? payload[2].value : 0)}
              </p>
            </div>
          </div>
          <hr style={{ width: '100%', border: '1px dashed', marginTop: 10 }} />
          <div style={{ width: '100%' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: 10 }}>
              Quality (%)
            </h3>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: 10, color: '#3b5998' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[3] ? payload[3].value : 0}
                </NumericLabel>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ margin: '0 10px', color: ' #00acee' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[4] ? payload[4].value : 0}
                </NumericLabel>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InstagramIcon style={{ margin: '0 10px', color: '#dd2a7b' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[5] ? payload[5].value : 0}
                </NumericLabel>
              </p>
            </div>
          </div>

          <hr style={{ width: '100%', border: '1px dashed', marginTop: 10 }} />
          <div style={{ width: '100%' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: 10 }}>
              Value (USD)
            </h3>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: 10, color: '#3b5998' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[6] ? payload[6].value : 0}
                </NumericLabel>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ margin: '0 10px', color: ' #00acee' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[7] ? payload[7].value : 0}
                </NumericLabel>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <InstagramIcon style={{ margin: '0 10px', color: '#dd2a7b' }} />
              <p style={{ marginRight: 10, color: 'black' }}>
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {payload[8] ? payload[8].value : 0}
                </NumericLabel>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderLegend = props => {
    const { payload } = props;
    return (
      <ul>
        <table>
          <tr>
            <td>Quantity</td>
            <td>Quality</td>
            <td>Valuation</td>
          </tr>
        </table>
      </ul>
    );
  };

  return (
    <>
      <RBarChart
        width={1600}
        height={300}
        data={Cumulative}
        margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
      >
        {/* <Legend verticalAlign="top" height={36} content={renderLegend} align="center" layout="horizontal"/> */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" onClick={event => xAxisClick(event.value)} />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#2ddd84"
          tickFormatter={label => `${secToString(label)}`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#0e35ff"
          width={100}
          // dx={10}
          tickFormatter={label => `${Number(label).toFixed(2)} %`}
        />
        <YAxis
          yAxisId="right1"
          orientation="right"
          stroke="#49c9ff"
          tickFormatter={label =>
            `${_numberToHumanReadableFormatConverter(
              Number(label).toFixed(2),
              false,
              false,
              'Social Donut'
            )}`
          }
        />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Bar
          dataKey="FacebookQuantity"
          yAxisId="left"
          stackId="a"
          fill="#3b5998"
          barSize={30}
        />
        <Bar
          dataKey="TwitterQuantity"
          yAxisId="left"
          stackId="a"
          fill="#00acee"
        />
        <Bar
          dataKey="InstagramQuantity"
          yAxisId="left"
          stackId="a"
          fill="#87288d"
        />
        <Bar
          dataKey="FacebookQuality"
          yAxisId="right"
          stackId="a"
          fill="#3b5998"
          barSize={30}
        />
        <Bar
          dataKey="TwitterQuality"
          yAxisId="right"
          stackId="a"
          fill="#00acee"
        />
        <Bar
          dataKey="InstagramQuality"
          yAxisId="right"
          stackId="a"
          fill="#87288d"
        />

        <Bar
          dataKey="FacebookValue"
          yAxisId="right1"
          stackId="c"
          fill="#3b5998"
          barSize={30}
        />
        <Bar
          dataKey="TwitterValue"
          yAxisId="right1"
          stackId="c"
          fill="#00acee"
        />
        <Bar
          dataKey="InstagramValue"
          yAxisId="right1"
          stackId="c"
          fill="#87288d"
        />
      </RBarChart>
    </>
  );
};

export default BarChart;
