/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { ANALYTICS_KEYS } from 'utils/constants';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';

import Timelinepopup from './Timelinepopup';


const UNIT_SHORT_HANDS = {
  hours: 'hr',
  seconds: 'sec',
  minutes: 'min',
};

/**
 * TimelineChart Component
 *
 * This componet is responsible for rendering the
 * Spline and Cumulative data in Analytics Dashboard
 *
 * @param {Number} height
 * @param {Number} width
 * @param {Object} margin
 * @param {Array} data
 * @param {String} type
 * @param {Array} barsVisible
 */

const TimelineChart = ({
  height = 266,
  width = 1210,
  margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
  metrics,
  type,
  data,
  // type,
  // barsVisible,
  // isShowOnlyLive,
  tootltipRef,
  showLine,
  xUnit,
  loading,

  // NOTE Temporarily comment
  setVideoModal,
  setVideoUrl,
  projectDetails
}) => {
  //console.log("Time line data---->",data)
  // <==========================Refs to pre-defined graph DOM nodes==============================>
  const [tooltipDisplayStatus, setTooltipDisplayStatus] = useState(false);
  const [auditSelected, setSelectedAudit] = useState(null);
  const graphGroupRef = useRef();
  const xAxisGroupRef = useRef();
  const yAxisGroupRef = useRef();
  const statsLegendRef = useRef();
  const y4AxisGroupRef = useRef();
  const barGroupContainerRef = useRef();
  const linePathRef = useRef();
  const pulseRef = useRef();
  const svgRef = useRef();
  const tooltipRef = tootltipRef;

  // <==========================(width x height) Setup according to margiin convention==============================>

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const axisStartHeight = innerHeight - 132.8;

  // <==========================Axis Definations==============================>

  // 1) Bar x-Axis
  const xAxis = d3
    .scaleBand()
    .range([0, innerWidth - 81.84])
    .padding(0.9);

  // 2) Bar y-Axis
  const yAxis = d3.scaleLinear().rangeRound([innerHeight - axisStartHeight, 0]);

  // 3) Line y4-Axis
  const y4Axis = d3
    .scaleLinear()
    .rangeRound([innerHeight - axisStartHeight, 0]);

  // <==========================Transition constants==============================>

  const trans = d3.transition().duration(500);
  // const barTrans = d3.transition().duration(800);

  // <==========================Graph Updation/Creation==============================>

  useEffect(() => {
    const graphGroup = d3.select(graphGroupRef.current);
    const xAxisGroup = d3.select(xAxisGroupRef.current);
    const yAxisGroup = d3.select(yAxisGroupRef.current);
    const barGroupContainer = d3.select(barGroupContainerRef.current);
    const statsLegend = d3.select(statsLegendRef.current);
    const y4AxisGroup = d3.select(y4AxisGroupRef.current);
    const linePath = d3.select(linePathRef.current);
    const pulsePath = d3.select(pulseRef.current);
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    // const elementTranslation =
    //   20 +
    //   (innerWidth - 81.84 - xAxisGroup.node().getBoundingClientRect().width) /
    //     2;

    // <==========================Line Generator==============================>

    const line = d3
      .line()
      .x(d => xAxis(d.timespan))
      .y(d => y4Axis(d.avgAudience) + 5)
      .curve(d3.curveMonotoneX);  //curveCardinal

    // <==========================Pulse(Line) Generator==============================>

    const pulse = d3
      .line()
      .x(d => xAxis(d.timespan))
      .y(d => yAxis(d.value) + 5)
      .curve(d3.curveMonotoneX); //curveCardinal

    // Axis Domains

    xAxis.domain(data && data.map(d => d.timespan));
    yAxis.domain([0, d3.max(data, d => d.value) + 10]);
    y4Axis.domain([0, d3.max(data, d => d.avgAudience) + 10]);

    const tx = -30;
    const ty = 42;
    const tw = 60;
    const th = 100;

    const xAxisMetaData = {};

    data.map((d, i) => {
      xAxisMetaData[data[i].timespan] = '<p class="metrics">'
        .concat(secToString(data[i].value), '</p><p class="viewer">')
        .concat(showLine ? data[i].avgAudience : '', '</p>');
      return 0;
    });

    // 1) x-Axis Call



    xAxisGroup.selectAll('.foreign').remove();
    xAxisGroup.transition(trans).call(d3.axisBottom(xAxis));
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
      .html(d => xAxisMetaData[d]);

    // 2) y-Axis Call
    yAxisGroup.transition(trans).call(
      d3
        .axisLeft(yAxis)
        .tickPadding(5)
        .ticks(4)
        .tickSize(-Math.abs(width - 85), 0, 0)
        .tickFormat(
          d => `${_numberToHumanReadableFormatConverter(d, false,false,{projectID:"timeline"})}(s)`,
        )
    );

    // 3) y4-Axis Call
    y4AxisGroup.transition(trans).call(
      d3
        .axisRight(y4Axis)
        .tickPadding(5)
        .ticks(4)
        .tickFormat(d => _numberToHumanReadableFormatConverter(d,true,false,{projectID:"timeline"})),
    );

    // Bar Generation

    const bars = barGroupContainer.selectAll('.tbar').data(data);

    bars.exit().remove();

    bars
      .attr('class', 'tbar')
      .attr('rx', 0)
      .attr('x', d => xAxis(d.timespan))
      .attr('width', 15)
      .attr('fill', '#541CD9')
      .attr('y', d => yAxis(d.value))
      .attr('height', d => innerHeight - axisStartHeight - yAxis(d.value));

    bars
      .enter()
      .append('rect')
      .attr('class', 'tbar')
      .attr('rx', 0)
      .attr('x', d => xAxis(d.timespan))
      .attr('width', 15)
      .attr('fill', '#541CD9')
      .attr('y', d => yAxis(d.value))
      .attr('height', d => innerHeight - axisStartHeight - yAxis(d.value));

    // Line Graph Generation

    linePath
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', '#ddeafa');

    const lineChartDots = graphGroup.selectAll('.dot').data(data);

    lineChartDots.exit().remove();

    lineChartDots
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', d => xAxis(d.timespan))
      .attr('cy', d =>
        data.length > 3
          ? y4Axis(d.avgAudience - 1.2) + 5
          : y4Axis(d.avgAudience - 0.5),
      )
      .attr('r', 2.2)
      .attr('transform', 'translate(83,0)')
      .attr('fill', '#FF1146')
      .style('display', showLine ? 'block' : 'none');

    lineChartDots
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xAxis(d.timespan))
      .attr('cy', d =>
        data.length > 3
          ? y4Axis(d.avgAudience - 1.2) + 5
          : y4Axis(d.avgAudience - 0.5),
      )
      .attr('transform', 'translate(83,0)')
      .attr('r', 2.2)
      .attr('fill', '#FF1146')
      .style('display', showLine ? 'block' : 'none');

    // Pulse Generation
    pulsePath
      .attr('d', pulse(data))
      .attr('fill', 'none')
      .attr('stroke', '#0E35FF');

    const auditDots = graphGroup
      .selectAll('.audit-dot')
      .data(data.filter(d => d.audit));

    auditDots.exit().remove();

    auditDots
      .attr('class', 'audit-dot') // Assign a class for styling
      .attr('cx', d => xAxis(d.timespan))
      .attr('cy', d => yAxis(d.value))
      .attr('r', 3)
      .attr('transform', 'translate(81,4)')
      .style('visibility', type === 'pulse' ? 'visible' : 'hidden')
      .attr('fill', '#c42d2c');

    auditDots
      .enter()
      .append('circle')
      .attr('class', 'audit-dot')
      .attr('cx', d => xAxis(d.timespan))
      .attr('cy', d => yAxis(d.value))
      .attr('transform', 'translate(81,4)')
      .attr('r', 3)
      .style('visibility', type === 'pulse' ? 'visible' : 'hidden')
      .attr('fill', '#c42d2c');

    d3.selectAll('.audit-dot')
      .on('click', d => {
        //console.log("audit--dot",d)
        setTooltipDisplayStatus(!tooltipDisplayStatus);
        setSelectedAudit(d);
      })
      .on('mousemove', () => {
        tooltip
          .style('top', `${d3.event.pageY - 100}px`)
          .style('left', `${d3.event.pageX + 30}px`);
      });

    d3.select('.card > div > i').on('click', () => {
      setTooltipDisplayStatus(!tooltipDisplayStatus);
      setSelectedAudit(null);
      tooltip.style('visibility', 'hidden');
      tooltip.style('display', 'none');
    });

    d3.select('.card > div > button.media').on('click', () => {
      setVideoModal(true);
      setVideoUrl(
        auditSelected.audit.data.filter(x => x.elementType === 'media')[0]
          .details.creativeURL,
      );
      setTooltipDisplayStatus(!tooltipDisplayStatus);
      // tooltip.style('display', 'none');
    });

    d3.select('.card > div > button.social').on('click', () => {
      window.open(
        auditSelected.audit.data.filter(x => x.elementType === 'embed')[0]
          .details.URL,
      );
      setTooltipDisplayStatus(!tooltipDisplayStatus);
      // tooltip.style('display', 'none');
    });

    // Stats Legend
    const statsText = statsLegend
      .selectAll('text.stats-legend-item')
      .data(
        ANALYTICS_KEYS.filter(d =>
          showLine
            ? d.dataKey === metrics || d.dataKey === 'viewer'
            : d.dataKey === metrics,
        ),
      );

    statsText.exit().remove();

    statsText
      .attr('class', 'stats-legend-item')
      .text(d => d.title)
      .attr('transform', (d, i) => `translate(0,${(i + 1) * 2})`)
      .style('font-weight', 600)
      .style('font-size', "11px")
      .style('font-family', 'Montserrat')
      .style('letter-spacing', '0.18px')
      .style('fill', d =>
        d.dataKey === 'viewer' ? d.statsLableColor : '#0E35FF',
      );

    statsText
      .enter()
      .append('text')
      .attr('class', 'stats-legend-item')
      .text(d => d.title)
      .attr('transform', (d, i) => `translate(0,${(i + 1) * 2})`)
      .style('font-weight', 600)
      .style('font-size', "11px")
      .style('font-family', 'Montserrat')
      .style('letter-spacing', '0.18px')
      .style('fill', d =>
        d.dataKey === 'viewer' ? d.statsLableColor : '#0E35FF',
      );
  }, [data, metrics, type, tooltipDisplayStatus, auditSelected]);

  return (
    <>
      <svg ref={svgRef}>
        <g ref={graphGroupRef} width="100%" height={innerHeight}>
          {data.length > 0 && (
            <text
              transform={`translate(0,${innerHeight - 44})`}
              className="x-axis-head"
            >
              Time ({UNIT_SHORT_HANDS[xUnit]})
            </text>
          )}
          <g
            ref={xAxisGroupRef}
            transform={`translate(77,${innerHeight - 60})`}
            className="x-axis"
          />
          <g
            ref={yAxisGroupRef}
            transform="translate(53,5)"
            className="y-axis timeline-y"
          />
          {showLine && (
            <g
              ref={y4AxisGroupRef}
              transform={`translate(${width - 35},6)`}
              className="y4-axis timeline-y4"
            />
          )}
          {type !== 'pulse' && (
            <g
              ref={barGroupContainerRef}
              transform="translate(77,5)"
              className="bars-group-container"
            />
          )}
          {showLine && (
            <path
              ref={linePathRef}
              transform="translate(80,0)"
              className="line"
            />
          )}
          {type === 'pulse' && (
            <path ref={pulseRef} transform="translate(80,0)" className="line" />
          )}
          {data.length > 0 && (
            <g
              ref={statsLegendRef}
              transform={`translate(0,${innerHeight - 4})`}
              className="stats-legend"
            />
          )}
        </g>

        {/* EMPTY STATE */}
        {data.length === 0 && !loading && (
          <GraphEmptyState width={width} height={height + 35} />
        )}

        {/* LOADER */}
        {data.length === 0 && loading && (
          <GraphLoader width={width} height={height + 35} />
        )}
      </svg>
          {
            tooltipDisplayStatus == true && auditSelected !=null ? <Timelinepopup data={auditSelected}  className="popupstyle"/>:null
          }
           
    </>
  );
};


window.onclick = function(event) {
  if (event.target.id === "timelineModal") {
    document.getElementById("timelineModal").style.display = "none";
  }
}

TimelineChart.defaultProps = {
  loading: true,
};

TimelineChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.object,
  metrics: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.array,
  showLine: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  xUnit: PropTypes.string,
  tootltipRef: PropTypes.object,

  // NOTE Temporarily comment
  setVideoModal: PropTypes.func,
  setVideoUrl: PropTypes.func,
};

export default TimelineChart;
