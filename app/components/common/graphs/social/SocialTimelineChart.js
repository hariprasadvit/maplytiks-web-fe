/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import moment from 'moment';
import { _numberToHumanReadableFormatConverter } from 'utils/helpers';

const SocialTimelineChart = ({ width, height, margin, data, yAxisLable }) => {
  console.info("<---data--->",data);
  const svgRef = useRef();
  const graphGroupRef = useRef();
  const tooltipRef = useRef();

  // 1) Focus Graph Refs
  const xAxisGroupRef = useRef();
  const yAxisGroupRef = useRef();
  const lineRef = useRef();
  const overlayRectRef = useRef();
  const mouseOverLineRef = useRef();
  const mouseOverOuterCircleRef = useRef();
  const mouseOverInnerCircleRef = useRef();

  // 1) Context Graph Refs
  const graphContextRef = useRef();
  const xContextAxisGroupRef = useRef();
  const yContextAxisGroupRef = useRef();
  const contextGraphPathRef = useRef();
  const brushRef = useRef();

  // <==========================(width x height) Setup according to margiin convention==============================>

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // <==========================Axis Definations==============================>
  // Focus Graph
  const xAxis = d3.scaleTime().range([0, innerWidth]);
  const yAxis = d3.scaleLinear().rangeRound([innerHeight, 0]);
  // Context Graph
  const xContextAxis = d3.scaleTime().range([0, innerWidth]);
  const yContextAxis = d3.scaleLinear().rangeRound([50, 0]);

  // <==========================Line Generator==============================>
  const lineGen = d3
    .area()
    .x(d => xAxis(moment(d.date)._d))
    .y(d => yAxis(Math.abs(d.value)))
    .curve(d3.curveLinear);

  const contextLineGen = d3
    .area()
    .x(d => xContextAxis(moment(d.date)._d))
    .y(d => yContextAxis(Math.abs(d.value)))
    .curve(d3.curveLinear);

  // <==========================Brush Definations==============================>
  const brush = d3
    .brushX()
    .handleSize(10)
    .extent([[0, 0], [innerWidth, 50]]);

  // <==========================Transition constants==============================>
  const trans = d3.transition().duration(500);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    // 1) Focus Graph
    const xAxisGroup = d3.select(xAxisGroupRef.current);
    const yAxisGroup = d3.select(yAxisGroupRef.current);
    const line = d3.select(lineRef.current);
    const overlayRect = d3.select(overlayRectRef.current);
    const mouseOverLine = d3.select(mouseOverLineRef.current);
    const mouseOverOuterCircle = d3.select(mouseOverOuterCircleRef.current);
    const mouseOverInnerCircle = d3.select(mouseOverInnerCircleRef.current);

    // 2) Context Graph
    const xContextAxisGroup = d3.select(xContextAxisGroupRef.current);
    const yContextAxisGroup = d3.select(yContextAxisGroupRef.current);
    const brushComponent = d3.select(brushRef.current);
    const contextGraphPath = d3.select(contextGraphPathRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    // <=======================Axis Domains===================>
    // 1) Focus Graph
    xAxis.domain(d3.extent(data, d => moment(d.date)._d));
    yAxis.domain([0, d3.max(data, d => Math.abs(d.value))]);
    // 2) Context Graph
    xContextAxis.domain(d3.extent(data, d => moment(d.date)._d));
    yContextAxis.domain([0, d3.max(data, d => Math.abs(d.value))]);

    // <=======================Axis Calls===================>
    // Focus Graph
    xAxisGroup
      .transition(trans)
      .call(d3.axisBottom(xAxis).tickSize(-Math.abs(innerHeight), 0, 0));
    yAxisGroup.transition(trans).call(
      d3
        .axisLeft(yAxis)
        .ticks(4)
        .tickSize(-Math.abs(width - 60), 0, 0)
        .tickFormat(d => `${_numberToHumanReadableFormatConverter(d, false)}%`),
    );
    // Context Graph
    xContextAxisGroup.call(d3.axisBottom(xContextAxis));
    yContextAxisGroup.call(d3.axisLeft(yContextAxis));

    line
      .datum(data)
      .transition(trans)
      .attr('d', lineGen)
      .style('stroke', '#1600FF');

    overlayRect
      .on('mouseout', () => {
        mouseOverLine.style('opacity', '0');
        mouseOverOuterCircle.style('opacity', '0');
        mouseOverInnerCircle.style('opacity', '0');
        tooltip.style('display', 'none');
      })
      .on('mouseover', () => {
        mouseOverLine.style('opacity', '1');
        mouseOverOuterCircle.style('opacity', '1');
        mouseOverInnerCircle.style('opacity', '1');
        tooltip.style('display', 'block');
      })
      .on('mousemove', function() {
        const mouse = d3.mouse(this);
        const xDate = xAxis.invert(mouse[0]);
        let pos;
        mouseOverLine.attr('d', function() {
          let d = `M${mouse[0]},${innerHeight}`;
          d += ` ${mouse[0]},${0}`;
          return d;
        });

        d3.selectAll('.hoverCircle').attr('transform', function() {
          const bisect = d3.bisector(da => moment(da.date)._d).right;
          const idx = bisect(data, xDate);

          //console.log(idx);

          let beginning = 0;
          let end = lineRef.current.getTotalLength();
          let target = null;

          while (true) {
            target = Math.floor((beginning + end) / 2);
            pos = lineRef.current.getPointAtLength(target);
            if (
              (target === end || target === beginning) &&
              pos.x !== mouse[0]
            ) {
              break;
            }
            if (pos.x > mouse[0]) end = target;
            else if (pos.x < mouse[0]) beginning = target;
            else break;
          }

          //   d3.select(this)
          //     .select('text')
          //     .text(yAxis.invert(pos.y).toFixed(2));
          return `translate(${mouse[0]},${pos.y + 10})`;
        });

        tooltip
          .html(
            `<p>${moment(xDate).format(
              'DD MMM YYYY : HH:MM',
            )}<p><p>${yAxis.invert(pos.y).toFixed(2)} ${yAxisLable}(s)<p>`,
          )
          .style('left', `${d3.event.pageX + 20}px`)
          .style('top', `${d3.event.pageY - 20}px`);
      });

    contextGraphPath.datum(data).attr('d', contextLineGen);

    const zoomed = () => {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return; // ignore zoom-by-brush
      const t = d3.event.transform;
      xAxis.domain(t.rescaleX(xContextAxis).domain());
      line.attr('d', lineGen);
      xAxisGroup.call(d3.axisBottom(xAxis));
      brushComponent.call(brush.move, xAxis.range().map(t.invertX, t));
    };

    const zoom = d3
      .zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [innerWidth, innerHeight]])
      .extent([[0, 0], [innerWidth, innerHeight]])
      .on('zoom', zoomed);

    const brushed = () => {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return; // ignore brush-by-zoom
      const s = d3.event.selection || xContextAxis.range();
      xAxis.domain(s.map(xContextAxis.invert, xContextAxis));
      line.attr('d', lineGen);
      xAxisGroup
        .transition()
        .duration(50)
        .call(d3.axisBottom(xAxis));
      overlayRect.call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0),
      );
    };

    overlayRect.call(zoom);
    brushComponent.call(brush).call(brush.move, xAxis.range());

    brush.on('brush end', brushed);
  }, [data]);

  return (
    <>
      <svg ref={svgRef}>
        <defs>
          <clipPath id="clip">
            <rect
              width={innerWidth}
              height={innerHeight + 20}
              x={0}
              y={0}
              transform="translate(50,0)"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#clip)">
          <path ref={lineRef} transform="translate(50,10)" strokeWidth={2.2} />
        </g>
        {/* Focus Graph */}
        <g
          ref={graphGroupRef}
          width={innerWidth}
          height={innerHeight}
          transform="translate(0,10)"
        >
          <g
            ref={xAxisGroupRef}
            className="socialTimeline-x-axis"
            transform={`translate(50,${innerHeight})`}
          />
          <g
            ref={yAxisGroupRef}
            transform="translate(30,0)"
            className="socialTimeline-y-axis"
          />

          <text
            className="socialTimeline-xAxis-lable"
            x="570"
            y="240"
            fill="#000000"
          >
            Time
          </text>
          <text
            className="socialTimeline-yAxis-lable"
            transform="rotate(-90)"
            x="-120"
            y="20"
            fill="#000000"
          >
            {yAxisLable}
          </text>

          <g className="mouseOverEffects">
            <path
              ref={mouseOverLineRef}
              className="mouseOverLine"
              transform="translate(50,0)"
              stroke="#2f47f6"
              strokeWidth={1.5}
            />
            <g className="mouseOverData" transform="translate(50,-10)">
              <circle
                className="hoverCircle"
                ref={mouseOverOuterCircleRef}
                r="9"
                fill="#838AFF"
              />
              <circle
                ref={mouseOverInnerCircleRef}
                r="3"
                className="hoverCircle"
                fill="#fff"
                stroke="#2f47f6"
                strokeWidth="#2f47f6"
              />
            </g>
            <rect
              ref={overlayRectRef}
              className="overlayRect"
              width={innerWidth}
              height={innerHeight}
              transform="translate(50,0)"
              fill="none"
              pointerEvents="all"
            />
          </g>
        </g>
        {/* Context Graph */}
        <g
          ref={graphContextRef}
          width={innerWidth}
          height={height}
          className="socialTimeline-context"
        >
          <g
            ref={xContextAxisGroupRef}
            className="socialTimeline-context-x-axis"
            transform={`translate(50,${height + 42})`}
          />
          <g
            ref={yContextAxisGroupRef}
            className="socialTimeline-context-y-axis"
            transform={`translate(50,${height - 7})`}
          />
          <path
            ref={contextGraphPathRef}
            stroke="#2f47f6"
            transform={`translate(50,${height - 9})`}
          />
          <g
            ref={brushRef}
            className="socialTimeline-brush"
            transform={`translate(50,${height - 10})`}
          />
        </g>
      </svg>
      <div ref={tooltipRef} className="socialTimelineTooltip" />
    </>
  );
};

SocialTimelineChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  yAxisLable: PropTypes.string,
};

export default SocialTimelineChart;
