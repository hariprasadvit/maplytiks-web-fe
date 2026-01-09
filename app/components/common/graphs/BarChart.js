/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef } from 'react';
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

/**
 * Bar Chart Component
 *
 * @param {Number} height
 * @param {Number} width
 * @param {Object} margin
 * @param {Array} data
 * @param {String} type
 * @param {Array} barsVisible
 * @param {Boolean} isShowOnlyLive
 */

const BarChart = ({
  height,
  width,
  margin,
  data,
  type,
  barsVisible,
  isShowOnlyLive,
  tootltipRef,
  showLine,
  valueationUnit,
  loading,
  projectDetail
  // graphType,
}) => {
  // <==========================Refs to pre-defined graph DOM nodes==============================>
  //console.log("Bar entred",projectDetail)
  const graphGroupRef = useRef();
  const xAxisGroupRef = useRef();
  const yAxisGroupRef = useRef();
  const y2AxisGroupRef = useRef();
  const y3AxisGroupRef = useRef();
  const y4AxisGroupRef = useRef();
  const barGroupContainerRef = useRef();
  const linePathRef = useRef();
  const statsLegendRef = useRef();
  const svgRef = useRef();
  const tooltipRef = tootltipRef;

  // <==========================(width x height) Setup according to margiin convention==============================>

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const axisStartHeight = innerHeight - 230;

  // <==========================Axis Definations==============================>

  // 1) Bar x-Axis
  const xAxis = d3
    .scaleBand()
    .rangeRound([0, innerWidth - 130])
    .padding(0.9);

  // 2) Bar y-Axis
  const yAxis = d3.scaleLinear().rangeRound([innerHeight - axisStartHeight, 0]);

  // 3) Line y2-Axis
  const y2Axis = d3
    .scaleLinear()
    .rangeRound([innerHeight - axisStartHeight, 0]);

  // 4) Line y3-Axis
  const y3Axis = d3
    .scaleLinear()
    .rangeRound([innerHeight - axisStartHeight, 0]);

  // 5) Line y4-Axis
  const y4Axis = d3
    .scaleLinear()
    .rangeRound([innerHeight - axisStartHeight, 0]);

  // <==========================Line Generator==============================>

  const line = d3
    .line()
    .x(d => xAxis(d.matchKey) + 56)
    .y(d => y4Axis(d.viewer) - 40)
    .curve(d3.curveLinear);

  // <==========================Transition constants==============================>
  const trans = d3.transition().duration(500);
  // const barTrans = d3.transition().duration(800);
  // <==========================Graph Updation/Creation==============================>

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const graphGroup = d3.select(graphGroupRef.current);
    const xAxisGroup = d3.select(xAxisGroupRef.current);
    const yAxisGroup = d3.select(yAxisGroupRef.current);
    const y2AxisGroup = d3.select(y2AxisGroupRef.current);
    const y3AxisGroup = d3.select(y3AxisGroupRef.current);
    const y4AxisGroup = d3.select(y4AxisGroupRef.current);
    const barGroupContainer = d3.select(barGroupContainerRef.current);
    const linePath = d3.select(linePathRef.current);
    const statsLegend = d3.select(statsLegendRef.current);
    const tooltip = d3.select(tooltipRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    // Axis Domains
    xAxis.domain(data && data.map(d => d.matchKey));
    yAxis.domain([0, d3.max(data, d => d.quality) + 10]);
    y2Axis.domain([0, d3.max(data, d => d.quantity)]);
    y3Axis.domain([0, d3.max(data, d => d.value)]);
    y4Axis.domain([0, d3.max(data, d => d.viewer) + 10]);

    // Axis Calls

    const tx = -30;
    const ty = 42;
    const tw = 60;
    const th = 100;

    const xAxisMetaData = {};

    data.map((d, i) => {
      xAxisMetaData[data[i].matchKey] = '<p class="value">'
        .concat(
          _numberToHumanReadableFormatConverter(data[i].value,true,false,projectDetail),
          '</p><p class="quality">',
        )
        .concat(data[i].quality, '</p><p class="quantity">')
        .concat(secToString(data[i].quantity), '</p><p class="viewership">')
        .concat(
          showLine ? _numberToHumanReadableFormatConverter(data[i].viewer,true,false,projectDetail) : '',
          '</p>',
        );
      return 0;
    });

    // 1) x-Axis Call

    xAxisGroup.selectAll('.foreign').remove();

    xAxisGroup.transition(trans).call(
      d3.axisBottom(xAxis).tickFormat(d => {
        const dataObj = data.filter(da => da.matchKey === d)[0].disaplayName;
        return dataObj && dataObj.length > 8
          ? `${dataObj.slice(0, 5)}...`
          : dataObj;
      }),
    );

    xAxisGroup
      .selectAll('g')
      .append('svg:foreignObject')
      .attr('class', 'foreign')
      .attr('width', tw)
      .attr('height', th)
      .attr('x', tx)
      .attr('y', ty)
      .append('xhtml:div')
      .attr('class', 'x-axis-label')
      .html(d => type === 'analytics' && xAxisMetaData[d]);

    // 2) y-Axis Call
    yAxisGroup.transition(trans).call(
      d3
        .axisLeft(yAxis)
        .tickPadding(5)
        .tickSize(-Math.abs(width - 85), 0, 0)
        .tickFormat(d => `${_numberToHumanReadableFormatConverter(d, false,false,projectDetail)}%`),
    );

    // 3) y2-Axis Call
    y2AxisGroup.transition(trans).call(
      d3
        .axisRight(y2Axis)
        .tickPadding(5)
        .tickFormat(
          d => `${_numberToHumanReadableFormatConverter(d, false,false,projectDetail)}(s)`,
        ),
    );

    // 4) y3-Axis Call
    y3AxisGroup.transition(trans).call(
      d3
        .axisLeft(y3Axis)
        .tickPadding(20)
        .tickFormat(d => _numberToHumanReadableFormatConverter(d, false,false,projectDetail)),
    );

    // 5) y4-Axis Call
    y4AxisGroup.transition(trans).call(
      d3
        .axisRight(y4Axis)
        .tickPadding(-10)
        .tickFormat(d => _numberToHumanReadableFormatConverter(d, false,false,projectDetail)),
    );

    // Bar Generation/Updates

    const barGroups = barGroupContainer.selectAll('g.bar-group').data(data);

    // Exit and Remove (bars groups)
    barGroups.exit().remove();

    // Update (bars groups)
    barGroups
      .attr('class', 'bar-group')
      .attr('transform', d => `translate(${xAxis(d.matchKey)},0)`);

    // Enter  (bars groups)
    barGroups
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .attr('transform', d => `translate(${xAxis(d.matchKey)},0)`);

    const bars = barGroupContainer
      .selectAll('g.bar-group')
      .selectAll('rect')
      .data(d =>
        ANALYTICS_KEYS.filter(key => key.type === 'bar').map(key => ({
          key: key.dataKey,
          value: d[key.dataKey],
          color: key.graphColor,
          isLive: d.isLive,
          tooltip: { ...d.tooltip },
        })),
      );

    // Exit and Remove (bars)
    bars
      .exit()
      .transition(trans)
      // .attr('y', yAxis(0))
      .attr('height', 0)
      .style('opacity', 0)
      .remove();

    // Update Existing (bars)
    bars
      .attr('rx', 0)
      .attr('x', d => {
        const vBars = sortBy(barsVisible, e => {
          const rank = {
            quantity: 3,
            viewer: 4,
            value: 1,
            quality: 2,
          };
          return rank[e];
        }).filter(da => da !== 'viewer');
        return vBars.indexOf(d.key) !== -1
          ? (vBars.indexOf(d.key) +
              (vBars.length === 3 ? 0 : vBars.length === 2 ? 0.7 : 1)) *
              18
          : -10000;
      })
      // .attr('x', (d, i) => i * 18)
      .attr('width', 15)
      .transition()
      .duration(750)
      .attr('height', d => innerHeight - axisStartHeight - yAxis(d.value))
      .attr('transform', `translate(${50}, ${0})`)
      .attr('fill', d => d.color)
      .attr('y', d => {
        if (d.key === 'quality') {
          return yAxis(d.value);
        }
        if (d.key === 'quantity') {
          return y2Axis(d.value);
        }
        if (d.key === 'value') {
          return y3Axis(d.value);
        }
        return 0;
      })
      .attr('height', d => {
        if (d.key === 'quality') {
          return innerHeight - axisStartHeight - yAxis(d.value);
        }
        if (d.key === 'quantity') {
          return innerHeight - axisStartHeight - y2Axis(d.value);
        }
        if (d.key === 'value') {
          return innerHeight - axisStartHeight - y3Axis(d.value);
        }
        return 0;
      });

    // Create New (bars)
    bars
      .enter()
      .append('rect')
      .attr('class', d => `bar ${d.key}bar`)
      .attr('rx', 0)
      .attr('x', (d, i) => i * 18)
      .attr('width', 15)
      .attr('fill', d => d.color)
      .attr('transform', `translate(${50}, ${0})`)
      .attr('y', d => {
        if (d.key === 'quality') {
          return yAxis(d.value);
        }
        if (d.key === 'quantity') {
          return y2Axis(d.value);
        }
        if (d.key === 'value') {
          return y3Axis(d.value);
        }
        return 0;
      })
      .attr('height', d => {
        if (d.key === 'quality') {
          return innerHeight - axisStartHeight - yAxis(d.value);
        }
        if (d.key === 'quantity') {
          return innerHeight - axisStartHeight - y2Axis(d.value);
        }
        if (d.key === 'value') {
          return innerHeight - axisStartHeight - y3Axis(d.value);
        }
        return 0;
      });

    d3.selectAll('.bar').transition(300);

    // .attr('fill-opacity', d => (isShowOnlyLive && !d.isLive ? 0.2 : 1));

    d3.selectAll('.bar')
      .on('mouseover', d => {
        tooltip.style('display', 'block');
        tooltip.style('visibility', 'visible');
        tooltip.html(`<div class='analysisBar'>
          ${d.tooltip &&
            Object.keys(d.tooltip).map(tooltipData =>
              tooltipData === 'date'
                ? `<h5>${moment(d.tooltip[tooltipData]).format(
                    'DD MMM YYYY',
                  )}</h5>`
                : `<h5>${d.tooltip[tooltipData]}</h5>`,
            )}
            <h5>${d.key.charAt(0).toUpperCase() + d.key.slice(1)}: ${
          d.key === 'value'
            ? _numberToHumanReadableFormatConverter(d.value,true,false,projectDetail)
            : d.key === 'quantity'
            ? `${secToString(d.value)} (HH:MM:SS)`
            : d.value
        } ${d.key === 'quality' ? '%' : ''}</h5>
        </div>`);
      })
      .on('mousemove', () => {
        tooltip
          .style('top', `${d3.event.pageY - 100}px`)
          .style('left', `${d3.event.pageX + 30}px`);
      })
      .on('mouseout', () => {
        tooltip.style('visibility', 'hidden');
        tooltip.style('display', 'none');
      });

    // Line Graph Generation

    linePath
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', '#ddeafa')
      .attr('transform', `translate(${60}, 43)`);

    const lineChartDots = graphGroup.selectAll('.dot').data(data);

    lineChartDots.exit().remove();

    lineChartDots
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', d => {
        if (data.length === 1) {
          return xAxis(d.matchKey) + margin.left + 115;
        }
        return xAxis(d.matchKey) + margin.left + 96;
      })
      .attr('cy', d => y4Axis(d.viewer - 1.2) + 3)
      .attr('r', 2.2)
      .attr('fill', '#FF1146')
      .style('display', showLine ? 'block' : 'none');

    lineChartDots
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => {
        if (data.length === 1) {
          return xAxis(d.matchKey) + margin.left + 115;
        }
        return xAxis(d.matchKey) + margin.left + 96;
      })
      .attr('cy', d => y4Axis(d.viewer - 1.2) + 3)
      .attr('r', d => (d.isLive ? 3 : 2.2))
      .attr('fill', d => (d.isLive ? '#FF1146' : '#FF1146'))
      .style('display', showLine ? 'block' : 'none');

    if (type === 'analytics') {
      const statsText = statsLegend.selectAll('text.stats-legend-item').data(
        ANALYTICS_KEYS.filter(d => (!showLine ? d.dataKey !== 'viewer' : d))
          .map(d => barsVisible && barsVisible.includes(d.dataKey) && d)
          .filter(d => d),
      );

      statsText.exit().remove();

      statsText
        .attr('class', 'stats-legend-item')
        .text(d =>
          d.title === 'Valuation' ? `${d.title} (${valueationUnit})` : d.title,
        )
        .attr('transform', (d, i) => `translate(0,${i * 26})`)
        .style('font-weight', 600)
        .style('font-size', '12px')
        .style('font-family', 'Montserrat')
        .style('letter-spacing', '0.18px')
        .style('fill', d => d.statsLableColor);

      statsText
        .enter()
        .append('text')
        .attr('class', 'stats-legend-item')
        .text(d =>
          d.title === 'Valuation' ? `${d.title} (${valueationUnit})` : d.title,
        )
        .attr('transform', (d, i) => `translate(0,${i * 26})`)
        .style('font-weight', 600)
        .style('font-size', '12px')
        .style('font-family', 'Montserrat')
        .style('letter-spacing', '0.18px')
        .style('fill', d => d.statsLableColor);

      // Hide bars accoding to bars visisble
      d3.selectAll(`.qualitybar`).style('display', 'none');
      d3.selectAll(`.quantitybar`).style('display', 'none');
      d3.selectAll(`.valuebar`).style('display', 'none');

      barsVisible.map(d => {
        d3.selectAll(`.${d}bar`).style('display', 'block');
        return 0;
      });

      // Hide Stats accoding to bars visisble
      d3.selectAll(`.quality`).style('display', 'none');
      d3.selectAll(`.quantity`).style('display', 'none');
      d3.selectAll(`.value`).style('display', 'none');

      barsVisible.map(d => {
        d3.selectAll(`.${d}`).style('display', 'block');
        return 0;
      });
    }

    // if (!showLine) d3.selectAll(`.viewership`).style('display', 'none');
  }, [data, isShowOnlyLive, barsVisible]);

  return (
    <>
      <svg ref={svgRef}>
        <g ref={graphGroupRef} width={innerWidth} height={innerHeight}>
          <g
            ref={xAxisGroupRef}
            transform={`translate(110,${innerHeight - 95})`}
            className="x-axis"
          />
          <g
            ref={yAxisGroupRef}
            transform="translate(30,5)"
            className="y-axis"
          />
          <g
            ref={y2AxisGroupRef}
            transform="translate(20,7)"
            className="y2-axis"
          />
          <g
            ref={y3AxisGroupRef}
            transform={`translate(${width - 17},5)`}
            className="y3-axis"
          />
          {showLine && (
            <g
              ref={y4AxisGroupRef}
              transform={`translate(${width - 35},5)`}
              className="y4-axis"
            />
          )}
          <g
            ref={barGroupContainerRef}
            transform={
              data.length === 1
                ? `translate(60,5)`
                : `translate(${data.length > 4 ? 40 : 45},5)`
            }
            className="bars-group-container"
          />
          {showLine && <path ref={linePathRef} className="line" />}
          {data.length > 0 && (
            <g
              ref={statsLegendRef}
              transform={`translate(15,${innerHeight - 35})`}
              className="stats-legend"
            />
          )}
        </g>

        {/* EMPTY STATE */}
        {data.length === 0 && !loading && (
          <GraphEmptyState width={width} height={height} />
        )}

        {/* LOADER */}
        {data.length === 0 && loading && (
          <GraphLoader width={width} height={height} />
        )}
      </svg>
    </>
  );
};

BarChart.defaultProps = {
  loading: true,
};

BarChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.object,
  data: PropTypes.array,
  type: PropTypes.string,
  // graphType: PropTypes.string,
  valueationUnit: PropTypes.string,
  barsVisible: PropTypes.array,
  isShowOnlyLive: PropTypes.bool,
  showLine: PropTypes.bool,
  tootltipRef: PropTypes.object,
  loading: PropTypes.bool,
};

export default BarChart;
