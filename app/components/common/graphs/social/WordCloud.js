/* eslint-disable no-bitwise */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import * as cloud from 'd3-cloud';

const WordCloud = ({ width, height, data = [] }) => {
  const svgRef = useRef();
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    const layout = cloud()
      .size([width, height])
      .words(data.map(d => ({ text: d.word, size: d.size })))
      .padding(5) // space between words
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize(d => d.size); // font size of words

    const draw = words => {
      svg
        .append('g')
        .attr(
          'transform',
          `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`,
        )
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => d.size)
        .style('fill', (d, i) => colorScale(i))
        .attr('text-anchor', 'middle')
        .style('font-family', 'Impact')
        .attr('transform', d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text(d => d.text);
    };
    layout.on('end', draw);
    layout.start();
  }, [data]);
  return <svg ref={svgRef} />;
};

WordCloud.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object,
};

export default WordCloud;
