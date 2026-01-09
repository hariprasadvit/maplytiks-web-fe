/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

// const COLOR_MAP = [
//   'rgb(241, 92, 128)',
//   'rgb(128, 133, 233)',
//   'rgb(247, 163, 92)',
//   'rgb(144, 237, 125)',
//   'rgb(228, 211, 84)',
// ];

const COLOR_MAP = ['#86E3CE', '#D0E6A5', '#FFDD94', '#FA897B', '#CCABD8'];

function ThreeDPieChart({ width, height, bindId, data = [] }) {
  const svgRef = useRef();
  const legendRef = useRef();

  const Donut3D = {};

  function pieTop(d, rx, ry, ir) {
    if (d.endAngle - d.startAngle === 0) return 'M 0 0';
    const sx = rx * Math.cos(d.startAngle);
    const sy = ry * Math.sin(d.startAngle);
    const ex = rx * Math.cos(d.endAngle);
    const ey = ry * Math.sin(d.endAngle);

    const ret = [];
    ret.push(
      'M',
      sx,
      sy,
      'A',
      rx,
      ry,
      '0',
      d.endAngle - d.startAngle > Math.PI ? 1 : 0,
      '1',
      ex,
      ey,
      'L',
      ir * ex,
      ir * ey,
    );
    ret.push(
      'A',
      ir * rx,
      ir * ry,
      '0',
      d.endAngle - d.startAngle > Math.PI ? 1 : 0,
      '0',
      ir * sx,
      ir * sy,
      'z',
    );
    return ret.join(' ');
  }

  const pieOuter = (d, rx, ry, h) => {
    const startAngle = d.startAngle > Math.PI ? Math.PI : d.startAngle;
    const endAngle = d.endAngle > Math.PI ? Math.PI : d.endAngle;

    const sx = rx * Math.cos(startAngle);
    const sy = ry * Math.sin(startAngle);
    const ex = rx * Math.cos(endAngle);
    const ey = ry * Math.sin(endAngle);

    const ret = [];
    ret.push(
      'M',
      sx,
      h + sy,
      'A',
      rx,
      ry,
      '0 0 1',
      ex,
      h + ey,
      'L',
      ex,
      ey,
      'A',
      rx,
      ry,
      '0 0 0',
      sx,
      sy,
      'z',
    );
    return ret.join(' ');
  };

  const pieInner = (d, rx, ry, h, ir) => {
    const startAngle = d.startAngle < Math.PI ? Math.PI : d.startAngle;
    const endAngle = d.endAngle < Math.PI ? Math.PI : d.endAngle;

    const sx = ir * rx * Math.cos(startAngle);
    const sy = ir * ry * Math.sin(startAngle);
    const ex = ir * rx * Math.cos(endAngle);
    const ey = ir * ry * Math.sin(endAngle);

    const ret = [];
    ret.push(
      'M',
      sx,
      sy,
      'A',
      ir * rx,
      ir * ry,
      '0 0 1',
      ex,
      ey,
      'L',
      ex,
      h + ey,
      'A',
      ir * rx,
      ir * ry,
      '0 0 0',
      sx,
      h + sy,
      'z',
    );
    return ret.join(' ');
  };

  const getPercent = d =>
    d.endAngle - d.startAngle > 0.2
      ? `${Math.round((1000 * (d.endAngle - d.startAngle)) / (Math.PI * 2)) /
          10}%`
      : '';

  Donut3D.transition = function(id, drawData, rx, ry, h, ir) {
    function arcTweenInner(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return pieInner(i(t), rx + 0.5, ry + 0.5, h, ir);
      };
    }
    function arcTweenTop(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return pieTop(i(t), rx, ry, ir);
      };
    }
    function arcTweenOuter(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return pieOuter(i(t), rx - 0.5, ry - 0.5, h);
      };
    }
    function textTweenX(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return 0.6 * rx * Math.cos(0.5 * (i(t).startAngle + i(t).endAngle));
      };
    }
    function textTweenY(a) {
      const i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return 0.6 * rx * Math.sin(0.5 * (i(t).startAngle + i(t).endAngle));
      };
    }

    const pieData = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      })(drawData);

    d3.select(`#${id}`)
      .selectAll('.innerSlice')
      .data(pieData)
      .transition()
      .duration(750)
      .attrTween('d', arcTweenInner);

    d3.select(`#${id}`)
      .selectAll('.topSlice')
      .data(pieData)
      .transition()
      .duration(750)
      .attrTween('d', arcTweenTop);

    d3.select(`#${id}`)
      .selectAll('.outerSlice')
      .data(pieData)
      .transition()
      .duration(750)
      .attrTween('d', arcTweenOuter);

    d3.select(`#${id}`)
      .selectAll('.percent')
      .data(pieData)
      .transition()
      .duration(750)
      .attrTween('x', textTweenX)
      .attrTween('y', textTweenY)
      .text(getPercent);
  };

  Donut3D.draw = function(
    id,
    drawData,
    x /* center x */,
    y /* center y */,
    rx /* radius x */,
    ry /* radius y */,
    h /* height */,
    ir /* inner radius */,
  ) {
    const pieData = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      })(drawData);

    const slices = d3
      .select(`#${id}`)
      .append('g')
      .attr('transform', `translate(${x + 60},${y - 30})`)
      .attr('class', 'slices');

    slices
      .selectAll('.innerSlice')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'innerSlice')
      .style('fill', function(d, i) {
        return d3.hsl(COLOR_MAP[i]).darker(0.7);
      })
      .attr('d', function(d) {
        return pieInner(d, rx + 0.5, ry + 0.5, h, ir);
      })
      .each(function(d) {
        this._current = d;
      });

    slices
      .selectAll('.topSlice')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'topSlice')
      .style('fill', function(d, i) {
        return COLOR_MAP[i];
      })
      .style('stroke', function(d) {
        return d.data.color;
      })
      .attr('d', function(d) {
        return pieTop(d, rx, ry, ir);
      })
      .each(function(d) {
        this._current = d;
      });

    slices
      .selectAll('.outerSlice')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'outerSlice')
      .style('fill', function(d, i) {
        return d3.hsl(COLOR_MAP[i]).darker(0.7);
      })
      .attr('d', function(d) {
        return pieOuter(d, rx - 0.5, ry - 0.5, h);
      })
      .each(function(d) {
        this._current = d;
      });

    slices
      .selectAll('.percent')
      .data(pieData)
      .enter()
      .append('text')
      .attr('class', 'percent')
      .attr('x', function(d) {
        return 0.6 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle));
      })
      .attr('y', function(d) {
        return 0.6 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle));
      })
      .text(getPercent)
      .each(function(d) {
        this._current = d;
      });
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const legend = d3.select(legendRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMinYMin');

    Donut3D.draw(bindId, data, 150, 150, 130, 100, 30, 0.4);

    const legendRect = legend.selectAll('rect').data(data);

    legendRect.exit().remove();

    legendRect
      .enter()
      .append('rect')
      .attr('width', 15)
      .attr('height', 15)
      .attr('fill', (d, i) => COLOR_MAP[i])
      .attr('rx', 3)
      .attr('ry', 3)
      .attr('transform', (d, i) => `translate(${width / 1.5},${i * 38 + 40})`);

    legendRect
      .enter()
      .append('text')
      .text(d => d.label)
      .attr('transform', (d, i) => `translate(${width / 1.4},${i * 38 + 52})`);
  }, [data]);

  return (
    <svg ref={svgRef}>
      <g id={bindId} />
      <g ref={legendRef} />
    </svg>
  );
}

ThreeDPieChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  bindId: PropTypes.string,
  data: PropTypes.object,
};

export default ThreeDPieChart;
