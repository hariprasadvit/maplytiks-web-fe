/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import Icon from '@mdi/react';
// import { mdiChartLine } from '@mdi/js';
import * as d3 from 'd3';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';

const BAR_FILL_MAP = {
  quantity: '#2ddd84',
  quality: '#0e35ff',
  value: '#49C9FF',
};
/**
 * Bar Chart Component
 *
 * @param {Number} height
 * @param {Number} width
 * @param {Object} margin
 * @param {Array} livequantitydata
 *  @param {Array} livequalitydata
 *  @param {Array} livevaluedata
 * @param {String} type
 * @param {Array} barsVisible
 * @param {Boolean} isShowOnlyLive
 * @param {String} graphType
 */

const RaceBarChart = ({
  width,
  height,
  margin = {},
  livequantitydata= [],
  livequalitydata= [],
  livevaluedata= [],
  barsVisible = [],
  sortType,
  loading,
  valueationUnit,
  tootltipRef,
  graphType,
}) => {
  const svgRef = useRef();
  const tooltipRef = tootltipRef;

  const valueGraphGroupRef = useRef();
  const valueGraphBarGroupRef = useRef();
  const valueGraphXAxisGroupRef = useRef();
  const valueGraphYAxisGroupRef = useRef();

  const qualityGraphGroupRef = useRef();
  const qualityGraphBarGroupRef = useRef();
  const qualityGraphXAxisGroupRef = useRef();
  const qualityGraphYAxisGroupRef = useRef();

  const quantityGraphGroupRef = useRef();
  const quantityGraphBarGroupRef = useRef();
  const quantityGraphXAxisGroupRef = useRef();
  const quantityGraphYAxisGroupRef = useRef();

  // <==========================(width x height) Setup according to margiin convention==============================>
  const innerWidth = width / barsVisible.length - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // <==========================Axis Definations==============================>

  // 1) Bar x,y-Axis for quality
  const qualityXAxis = d3
    .scaleBand()
    .rangeRound([0, innerHeight])
    .padding(0.9);
  const qualityYAxis = d3.scaleLinear().rangeRound([0, innerWidth - 61.5]);

  // 2) Line x,y-Axisfor quantity
  const quantityXAxis = d3
    .scaleBand()
    .rangeRound([0, innerHeight])
    .padding(0.9);
  const quantityYAxis = d3.scaleLinear().rangeRound([0, innerWidth - 61.5]);

  // 3) Line x,y-Axisfor value
  const valueXAxis = d3
    .scaleBand()
    .rangeRound([0, innerHeight])
    .padding(0.9);
  const valueYAxis = d3.scaleLinear().rangeRound([0, innerWidth - 61.5]);

  const tickDuration = 500;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    // const quantityGraphGroup = d3.select(quantityGraphGroupRef.current);
    // const qualityGraphGroup = d3.select(qualityGraphGroupRef.current);
    // const valueGraphGroup = d3.select(valueGraphGroupRef.current);
    const valueGraphXAxisGroup = d3.select(valueGraphXAxisGroupRef.current);
    const valueGraphYAxisGroup = d3.select(valueGraphYAxisGroupRef.current);
    const qualityGraphXAxisGroup = d3.select(qualityGraphXAxisGroupRef.current);
    const qualityGraphYAxisGroup = d3.select(qualityGraphYAxisGroupRef.current);
    const quantityGraphXAxisGroup = d3.select(
      quantityGraphXAxisGroupRef.current,
    );
    const quantityGraphYAxisGroup = d3.select(
      quantityGraphYAxisGroupRef.current,
    );
    const valueGraphBarGroup = d3.select(valueGraphBarGroupRef.current);
    const qualityGraphBarGroup = d3.select(qualityGraphBarGroupRef.current);
    const quantityGraphBarGroup = d3.select(quantityGraphBarGroupRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    const qualityData = livequalitydata
      .sort((a, b) =>
        sortType === 'Ascending'
          ? a.quality - b.quality
          : b.quality - a.quality,
      )
      .slice(0, 10);
    const quantityData = livequantitydata
      .sort((a, b) =>
        sortType === 'Ascending'
          ? a.quantity - b.quantity
          : b.quantity - a.quantity,
      )
      .slice(0, 10);
    const valueData = livevaluedata
      .sort((a, b) =>
        sortType === 'Ascending' ? a.value - b.value : b.value - a.value,
      )
      .slice(0, 10);

    // Axis Domains
    qualityXAxis.domain(qualityData && qualityData.map(d => d.matchKey));
    quantityXAxis.domain(quantityData && quantityData.map(d => d.matchKey));
    valueXAxis.domain(valueData && valueData.map(d => d.matchKey));

    qualityYAxis.domain([0, d3.max(qualityData, d => d.quality) + 10]);
    quantityYAxis.domain([0, d3.max(quantityData, d => d.quantity)]);
    valueYAxis.domain([0, d3.max(valueData, d => d.value)]);

    const graphGenerator = (
      key,
      gData,
      xAxisGroup,
      xAxis,
      yAxisGroup,
      yAxis,
      yAxisUnit = '',
      barGroupContainer,
    ) => {
      const qx = -48;
      const qy = -17;
      const qw = 35;
      const qh = 35;

      const xAxisMetaData = {};

      gData.map((d, i) => {
        if(graphType == 'assets'){
          xAxisMetaData[gData[i].matchKey] = `<img src=${gData[i].image} style=height:27px;>`;
        }
        else{
          xAxisMetaData[gData[i].matchKey] = `<img src=${gData[i].image}>`;
        }
        
        return 0;
      });

      xAxisGroup.selectAll('.foreign').remove();

      xAxisGroup
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .call(
          d3.axisLeft(xAxis).tickFormat(d => {
            const dataObj = gData.filter(da => da.matchKey === d)[0]
              .disaplayName;
            return dataObj && dataObj.length > 8
              ? `${dataObj.slice(0, 5)}...`
              : dataObj;
          }),
        );

      xAxisGroup
        .selectAll('g')
        .append('svg:foreignObject')
        .attr('class', 'foreign')
        .attr('width', qw)
        .attr('height', qh)
        .attr('x', qx)
        .attr('y', qy)
        .append('xhtml:div')
        .attr('class', 'x-axis-label')
        .html(d => xAxisMetaData[d]);

      yAxisGroup
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .call(
          d3
            .axisTop(yAxis)
            .tickPadding(5)
            .ticks(5)
            .tickFormat(
              d =>
                `${_numberToHumanReadableFormatConverter(
                  d,
                  false,
                  false,
                  "Race-projectID"
                )}${yAxisUnit}`,
            ),
        );

      const bars = barGroupContainer.selectAll('rect').data(gData);

      // Exit and Remove (bars)
      bars
        .exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .remove();

      // Update Existing (bars)
      bars
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => xAxis(d.matchKey))
        .attr('width', d => yAxis(d[key]));

      // Create New (bars)
      bars
        .enter()
        .append('rect')
        .attr('class', `raceBar ${key}bar`)
        .attr('rx', 0)
        .attr('x', 0)
        .attr('width', d => yAxis(d[key]))
        .attr('fill', BAR_FILL_MAP[key])
        .attr('height', 12)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => xAxis(d.matchKey));

      d3.selectAll('.raceBar')
        .on('mouseover', d => {
          tooltip.style('display', 'block');
          tooltip.style('visibility', 'visible');
          tooltip.html(`<div class='analysisBar'>
          <h4>${d.disaplayName}</h4>
          ${barsVisible.indexOf('value') !== -1 && (<h5>Valuation: ${_numberToHumanReadableFormatConverter(d.value,true,false,"Race-projectID")}</h5>),''}
          <h5>Quality: ${d.quality} %</h5>
          <h5>Quantity: ${secToString(d.quantity)}</h5>
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

      const barText = barGroupContainer.selectAll('text').data(gData);
      // Exit and Remove (barText)
      barText
        .exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('height', 0)
        .style('opacity', 0)
        .remove();

      // Update Existing (barText)
      barText
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .text(d =>
          key === 'quantity'
            ? secToString(d[key])
            : `${
                key === 'quality'
                  ? `${_numberToHumanReadableFormatConverter(d[key], false,false,"Race-projectID")} %`
                  : `${valueationUnit} ${_numberToHumanReadableFormatConverter(
                      d[key],
                      false,
                      false,
                      "Race-projectID"
                    )}`
              }`,
        )
        .attr('y', d => xAxis(d.matchKey))
        .attr('x', d => yAxis(d[key]) + 2)
        .attr('width', d => yAxis(d[key]));

      // Create New (barText)
      barText
        .enter()
        .append('text')
        .text(d =>
          key === 'quantity'
            ? secToString(d[key])
            : `${
                key === 'quality'
                  ? `${_numberToHumanReadableFormatConverter(d[key], false,false,"Race-projectID")} %`
                  : `${valueationUnit} ${_numberToHumanReadableFormatConverter(
                      d[key],
                      false,
                      false,
                      "Race-projectID"
                    )}`
              }`,
        )
        .attr('fill', '#000')
        .style('font-size', 9)
        .style('font-weight', 500)
        .attr('y', d => xAxis(d.matchKey))
        .attr('x', d => yAxis(d[key]) + 2)
        .attr('transform', `translate(0,9)`);
    };

    graphGenerator(
      'value',
      valueData,
      valueGraphXAxisGroup,
      valueXAxis,
      valueGraphYAxisGroup,
      valueYAxis,
      '',
      valueGraphBarGroup,
    );
    graphGenerator(
      'quality',
      qualityData,
      qualityGraphXAxisGroup,
      qualityXAxis,
      qualityGraphYAxisGroup,
      qualityYAxis,
      ' %',
      qualityGraphBarGroup,
    );
    graphGenerator(
      'quantity',
      quantityData,
      quantityGraphXAxisGroup,
      quantityXAxis,
      quantityGraphYAxisGroup,
      quantityYAxis,
      ' (s)',
      quantityGraphBarGroup,
    );
  }, [livequantitydata,livequalitydata,livevaluedata, sortType, barsVisible]);

  return (
    <>
      <svg ref={svgRef}>
        {livevaluedata.length > 0 && barsVisible.indexOf('value') !== -1 && (
          <g
            ref={valueGraphGroupRef}
            width={innerWidth}
            height={innerHeight}
            transform="translate(0,15)"
          >
            <g
              ref={valueGraphXAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-x-axis"
            />
            <g
              ref={valueGraphYAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-y-axis"
            />
            <g ref={valueGraphBarGroupRef} transform="translate(50,16)" />
            <text
              transform={`translate(${innerWidth / 2},-6)`}
              textAnchor="middle"
              fontSize={12}
            >
              Valuation
            </text>
          </g>
        )}
        {livequalitydata.length > 0 && barsVisible.indexOf('quality') !== -1 && (
          <g
            ref={qualityGraphGroupRef}
            width={innerWidth}
            height={innerHeight}
            transform={`translate(${
              barsVisible.indexOf('value') === -1
                ? 0
                : innerWidth + margin.right * 2
            },15)`}
          >
            <g
              ref={qualityGraphXAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-x-axis"
            />
            <g
              ref={qualityGraphYAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-y-axis"
            />
            <g ref={qualityGraphBarGroupRef} transform="translate(50,16)" />
            <text
              transform={`translate(${innerWidth / 2},-6)`}
              textAnchor="middle"
              fontSize={12}
            >
              Quality
            </text>
          </g>
        )}
        {livequantitydata.length > 0 && barsVisible.indexOf('quantity') !== -1 && (
          <g
            ref={quantityGraphGroupRef}
            width={innerWidth}
            height={innerHeight}
            transform={`translate(${
              barsVisible.length === 2
                ? innerWidth + margin.right * 2
                : barsVisible.length === 1
                ? 0
                : innerWidth * 2 + margin.right * 4
            },15)`}
          >
            <g
              ref={quantityGraphXAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-x-axis"
            />
            <g
              ref={quantityGraphYAxisGroupRef}
              transform="translate(50,20)"
              className="raceChart-y-axis"
            />
            <g ref={quantityGraphBarGroupRef} transform="translate(50,16)" />
            <text
              transform={`translate(${innerWidth / 2},-6)`}
              textAnchor="middle"
              fontSize={12}
            >
              Quantity
            </text>
          </g>
        )}

        {/* EMPTY STATE */}
        {livequalitydata.length === 0 && !loading && (
          <GraphEmptyState width={width} height={height} />
        )}

        {/* LOADER */}
        {livequalitydata.length === 0 && loading && (
          <GraphLoader width={width} height={height} />
        )}
      </svg>
    </>
  );
};

RaceBarChart.defaultProps = {
  loading: true,
};

RaceBarChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.object,
  livequantitydata: PropTypes.array,
  livequalitydata: PropTypes.array,
  livevaluedata: PropTypes.array,
  sortType: PropTypes.string,
  valueationUnit: PropTypes.string,
  barsVisible: PropTypes.array,
  loading: PropTypes.bool,
  tootltipRef: PropTypes.object,
  graphType :PropTypes.string,
};

export default RaceBarChart;
