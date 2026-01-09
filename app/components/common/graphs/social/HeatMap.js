/* eslint-disable func-names */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

// import { _numberToHumanReadableFormatConverter } from 'utils/helpers';
// import { tooltipGen } from './Tooltip';

/** TODO: Adding search icon is pending for Input box */

const HeatMap = ({ width, height, margin, data = [] }) => {
  const [searchString, setSearchString] = useState('');
  const [minVal, setMinVal] = useState('');
  const [maxVal, setMaxVal] = useState('');

  const lowColor = '#a5abb5';
  const highColor = '#a5abb5';

  // <====================SVG Elements Refs==========================>
  const svgRef = useRef();
  const rangeRef = useRef();
  const tooltipRef = useRef();

  // <==========================(width x height) Setup according to margiin convention==============================>

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // <==========================Color Defination==============================>

  const projection = d3
    .geoMercator()
    .scale(71)
    .translate([innerWidth / 1.45, innerHeight / 1.5]);

  const path = d3.geoPath().projection(projection);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const range = d3.select(rangeRef.current);
    const tooltip = d3.select(tooltipRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    const colorRange = svg
      .append('defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '100%')
      .attr('y1', '100%')
      .attr('x2', '0%')
      .attr('y2', '0%')
      .attr('spreadMethod', 'pad');

    colorRange
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', highColor)
      .attr('stop-opacity', 1);

    colorRange
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', lowColor)
      .attr('stop-opacity', 1);

    range.style('fill', 'url(#gradient)');

    const dataArray = [];
    data.map(d => dataArray.push(parseFloat(d.value)));

    const minValue = d3.min(dataArray);
    const maxValue = d3.max(dataArray);

    setMinVal(minValue);
    setMaxVal(maxValue);

    const ramp = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .range([lowColor, highColor]);

    fetch(
      'https://raw.githubusercontent.com/jdamiani27/Data-Visualization-and-D3/master/lesson4/world_countries.json',
    ).then(response => {
      if (response.status !== 200) {
        return;
      }
      response.json().then(json => {
        data.map(da => {
          const dataCountry = da.name;
          const dataValue = da.value;
          json.features.map(d => {
            const jsonCountry = d.properties.name;
            if (dataCountry === jsonCountry) {
              // eslint-disable-next-line no-param-reassign
              d.properties.value = dataValue;
            }
            return 0;
          });
          return 0;
        });
        svg
          .append('g')
          .attr('width', innerWidth)
          .attr('height', innerHeight)
          .attr('class', 'countries')
          .selectAll('path')
          .data(json.features)
          .enter()
          .append('path')
          .attr('d', path)

          .style('fill', d => ramp(d.properties.value))
          .style('stroke', '#bc151a')
          .style('stroke-width', 1.5)
          .style('opacity', 0.8)
          .style('stroke', '#bc151a')
          .style('stroke-width', 0.3)
          .on('mouseover', function(d) {
            tooltip.style('visibility', 'visible');
            tooltip.html(
              `<p>${d.properties.name}</p><br /><p>${d.properties.value}</p>`,
            );
            d3.select(this)
              .style('opacity', 1)
              .style('stroke', '#bc151a')
              .style('stroke-width', 3);
          })
          .on('mouseout', function() {
            tooltip.style('visibility', 'hidden');

            d3.select(this)
              .style('opacity', 0.8)
              .style('stroke', '#bc151a')
              .style('stroke-width', 0.3);
          })
          .on('mousemove', () =>
            tooltip
              .style('top', `${d3.event.pageY - 490}px`)
              .style('left', `${d3.event.pageX - 540}px`),
          );
      });
    });
  }, [data]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        <g transform={`translate(30,${innerHeight + 30})`}>
          <text transform="translate(-10,-1)" style={{ fontSize: 11 }}>
            {minVal}{' '}
          </text>
          <rect ref={rangeRef} width={60} height={7} y={-10} />
          <text transform="translate(63,-1)" style={{ fontSize: 11 }}>
            {maxVal}
          </text>
        </g>
      </svg>
      <div className="geoChart__search">
        <div className="geoChart__search__heading">
          <span>Target</span>
          <span>Value</span>
        </div>
        <div className="geoChart__search__input">
          <input
            type="text"
            placeholder="Search"
            onChange={e => setSearchString(e.target.value)}
            value={searchString}
          />
        </div>
        <div className="geoChart__search__list">
          {data
            .filter(
              d =>
                d.name.toLowerCase().search(searchString.toLowerCase()) !== -1,
            )
            .map(d => (
              <div>
                <span>{d.name}</span>
                <span>{d.value}</span>
              </div>
            ))}
        </div>
      </div>
      <div ref={tooltipRef} className="heatmapTooltip" />
    </>
  );
};

HeatMap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object,
  margin: PropTypes.object,
};

export default HeatMap;
