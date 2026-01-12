/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import {
  secToString,
  _numberToHumanReadableFormatConverter,
} from 'utils/helpers';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

// Warm color scheme - Orange/Yellow shades only (brand colors)
const COLOR_SCHEMES = {
  default: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42', '#FFA94D', '#E85D04', '#FFBA49', '#DC6B19'],
  home: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42', '#FFA94D', '#E85D04', '#FFBA49', '#DC6B19'],
  ce: [
    '#FF6B35',  // Primary orange (0.7-1.0)
    '#FFB800',  // Golden yellow (1.0-3.0)
    '#FF8C42',  // Light orange (3.0-5.0)
    '#F7931E',  // Amber (>5.0)
    '#FFA94D',
    '#E85D04',
    '#FFBA49',
    '#DC6B19',
  ],
  red: ['#FF6B35', '#F97316', '#E85D04', '#DC6B19'],
  blue: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
  green: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
  grey: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
  pink: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
  teal: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
  yellow: ['#FFB800', '#F7931E', '#FFA94D', '#FFBA49'],
  purple: ['#FF6B35', '#F7931E', '#FFB800', '#FF8C42'],
};

const FONT_CLASS_CONFIG = {
  sm: { title: 'donut-title-sm', subTitle: 'donut-sub-title-sm' },
  lg: { title: 'donut-title-lg', subTitle: 'donut-sub-title-lg' },
};

const Donut = ({
  width,
  height,
  margin,
  data,
  colorSheme,
  customScheme,
  title,
  activeArc,
  subTitle,
  unit,
  showHeader,
  customInnerCircleRadius,
  fontSize,
  donutThickness,
}) => {
  // <==========================Refs to pre-defined graph DOM nodes==============================>
  const graphGroupRef = useRef();
  const mainDonutRef = useRef();
  const shadowCircleBottomRef = useRef();
  const shadowCircleTopRef = useRef();
  const outerRingCircleRef = useRef();
  // const defsRef = useRef();
  const donutTitleRef = useRef();
  const cache = useRef(data);

  // <==========================Donut Dimension and other general constants==============================>

  // 1) Main graph <g> dimenions
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = innerHeight / 2;

  // 2) InnerMost circle dimensions
  const innerCircleHeight = innerHeight - 100;
  const innerCircleRadius = innerCircleHeight / 2;

  // 3) Main Dounut constants
  const thickness = donutThickness || 10;
  const mainDonutRadius = (innerHeight - 25) / 2;
  const donutPathAnimateDuration = 150;

  // <==========================Arc Generators==============================>

  // 1) Default state arc generator
  const arc = d3
    .arc()
    .innerRadius(mainDonutRadius - thickness)
    .outerRadius(mainDonutRadius);

  // 2) Hover state arc generator
  const arcOver = d3
    .arc()
    .innerRadius(mainDonutRadius - thickness - 3)
    .outerRadius(mainDonutRadius + 3);

  // <==========================Pie Generator==============================>

  const pie = d3
    .pie()
    .value(d => d.value)
    .sort(null);

  // <==========================Graph Updation/Creation=============================>

  useEffect(() => {
    // DOM Nodes for required elements
    const mainDonut = d3.select(mainDonutRef.current);
    const graphGroup = d3.select(graphGroupRef.current);
    const donutPath = mainDonut.selectAll('path').data(pie(data));
    const prevData = pie(cache.current);

    donutPath
      .exit()
      .transition()
      .remove();

    donutPath
      .attr('class', 'donut-path')
      .attr('fill', (d, i) => (customScheme || COLOR_SCHEMES[colorSheme])[i])
      .on('mouseover', (...d) => {
        if (d[1] !== activeArc) {
          d3.select(d[2][d[0].index])
            .transition()
            .attr('d', arcOver)
            .duration(donutPathAnimateDuration)
            .style('filter', 'url(#glow)');

          graphGroup.select('.donut-header').text(d[0].data.name);

          graphGroup
            .select(`.${FONT_CLASS_CONFIG[fontSize].title}`)
            .text(
              subTitle === 'HH:MM:SS'
                ? secToString(d[0].value)
                : `${_numberToHumanReadableFormatConverter(
                    d[0].value,true,false,"Donut-projectID"
                  )} ${unit}`,
            )
            .attr('fill', '#536274');
        }
      })
      .on('mouseout', (...d) => {
        if (d[1] !== activeArc) {
          d3.select(d[2][d[0].index])
            .transition()
            .attr('d', arc)
            .duration(donutPathAnimateDuration)
            .transition(500)
            .style('filter', '');

          graphGroup.select('.donut-header').text('');

          graphGroup
            .select(`.${FONT_CLASS_CONFIG[fontSize].title}`)
            .text(
              activeArc !== null && subTitle !== 'HH:MM:SS' && !showHeader
                ? `${_numberToHumanReadableFormatConverter(
                    data[activeArc].value,true,false,"Donut-projectID"
                  )}`
                : activeArc !== null && subTitle === 'HH:MM:SS'
                ? secToString(data[activeArc].value)
                : title || '',
            )
            .style('fill', '#536274');
        }
      })
      .transition()
      .duration(500)
      .attrTween('d', (d, i) => {
        const interpolator = d3.interpolate(prevData[i], d);
        return t =>
          i !== activeArc ? arc(interpolator(t)) : arcOver(interpolator(t));
      })
      .style('filter', (d, i) => (i === activeArc ? 'url(#glow)' : ''));

    donutPath
      .enter()
      .append('path')
      .on('mouseover', (...d) => {
        if (d[1] !== activeArc) {
          d3.select(d[2][d[0].index])
            .transition()
            .attr('d', arcOver)
            .duration(donutPathAnimateDuration)
            .style('filter', 'url(#glow)');

          graphGroup.select('.donut-header').text(d[0].data.name);

          graphGroup
            .select(`.${FONT_CLASS_CONFIG[fontSize].title}`)
            .text(
              subTitle === 'HH:MM:SS'
                ? secToString(d[0].value)
                : `${_numberToHumanReadableFormatConverter(
                    d[0].value,true,false,"Donut-projectID"
                  )} ${unit}`,
            )
            .attr('fill', '#536274');
        }
      })
      .on('mouseout', (...d) => {
        if (d[1] !== activeArc) {
          d3.select(d[2][d[0].index])
            .transition()
            .attr('d', arc)
            .duration(donutPathAnimateDuration)
            .transition(500)
            .style('filter', '');

          graphGroup.select('.donut-header').text('');

          graphGroup
            .select(`.${FONT_CLASS_CONFIG[fontSize].title}`)
            .text(`${data[activeArc].value} %` || title)
            .style('fill', '#536274');
        }
      })
      .attr('class', 'donut-path')
      .transition()
      .attr('fill', (d, i) => (customScheme || COLOR_SCHEMES[colorSheme])[i])
      .transition()
      .duration(500)
      .style('opacity', d => (d.value === 0 ? 0 : 1))
      .transition()
      .duration(500)
      .attrTween('d', (d, x) => {
        const start = {
          startAngle: 0,
          endAngle: 0,
        };
        const i = d3.interpolate(start, d);
        return j => (x !== activeArc ? arc(i(j)) : arcOver(i(j)));
      })
      .style('filter', (d, i) => (i === activeArc ? 'url(#glow)' : ''));
  }, [data, activeArc]);

  return (
    <svg width={width} height={height}>
      {/* SVG Definitions for glow effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 107, 53, 0.15)"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
      <g ref={graphGroupRef} width={innerWidth} height={innerHeight}>
        {/* Outer glow ring */}
        <circle
          transform={`translate(${radius + margin.left},${radius + margin.top})`}
          r={radius + 2}
          fill="none"
          stroke="rgba(255, 107, 53, 0.1)"
          strokeWidth="1"
        />
        <circle
          ref={shadowCircleBottomRef}
          transform={`translate(${radius + margin.left + 1},${radius +
            margin.top +
            1})`}
          className="shadow-circle-bottom"
          r={innerCircleRadius - 1.5}
          fill="rgba(18, 18, 24, 0.95)"
        />
        <circle
          ref={shadowCircleTopRef}
          transform={`translate(${radius + margin.left},${radius +
            margin.top})`}
          className="shadow-circle-top"
          r={customInnerCircleRadius || innerCircleRadius}
          fill="#0f0f14"
        />
        {/* Inner subtle glow */}
        <circle
          transform={`translate(${radius + margin.left},${radius + margin.top})`}
          r={customInnerCircleRadius || innerCircleRadius}
          fill="url(#innerGlow)"
        />
        <circle
          ref={outerRingCircleRef}
          transform={`translate(${radius + margin.left},${radius +
            margin.top})`}
          className="outer-ring"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />

        {showHeader && (
          <text
            ref={donutTitleRef}
            transform={`translate(${radius + margin.left},${radius +
              margin.top -
              (fontSize === 'lg' ? 20 : 15)})`}
            className="donut-header"
            textAnchor="middle"
            style={{ fontSize: 14 }}
          >
            {/* test  */}
          </text>
        )}

        <text
          ref={donutTitleRef}
          transform={`translate(${radius + margin.left},${radius +
            margin.top +
            5})`}
          className={FONT_CLASS_CONFIG[fontSize].title}
          textAnchor="middle"
        >
          {data[activeArc] && data[activeArc].value && subTitle !== 'HH:MM:SS'
            ? `${data[activeArc] &&
                _numberToHumanReadableFormatConverter(
                  data[activeArc].value,true,false,"Donut-projectID"
                )} ${unit}`
            : data[activeArc] &&
              data[activeArc].value &&
              subTitle === 'HH:MM:SS'
            ? secToString(data[activeArc].value)
            : `${title}`}
        </text>

        {subTitle && (
          <text
            transform={`translate(${radius + margin.left},${radius +
              margin.top +
              22})`}
            className={FONT_CLASS_CONFIG[fontSize].subTitle}
            textAnchor="middle"
          >
            {subTitle}
          </text>
        )}
        <g
          ref={mainDonutRef}
          transform={`translate(${radius + margin.left},${radius +
            margin.top})`}
          className="donut"
        />
      </g>
    </svg>
  );
};

Donut.defaultProps = {
  colorSheme: 'default',
  unit: '',
  title: '',
  activeArc: null,
  fontSize: 'sm',
};

Donut.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  donutThickness: PropTypes.number,
  customInnerCircleRadius: PropTypes.number,
  activeArc: PropTypes.number,
  margin: PropTypes.object,
  data: PropTypes.array,
  customScheme: PropTypes.array,
  colorSheme: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  unit: PropTypes.string,
  fontSize: PropTypes.string,
  showHeader: PropTypes.bool,
};

export default Donut;
