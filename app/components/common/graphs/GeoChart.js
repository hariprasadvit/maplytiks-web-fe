/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { feature } from 'topojson-client';
import { geoMercator, geoPath } from 'd3-geo';
import { _numberToHumanReadableFormatConverter } from 'utils/helpers';
import pageLoader from 'images/pageLoader.gif';

const GeoChart = ({ geoLocations: cities = [], isLoading, isStickyHeader }) => {
  const [indiaStateData, setIndiaStateData] = useState([]);
  const [cityHovered, setCityHovered] = useState(null);
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  // const [cities, setCities] = useState([]);

  const projection = () => geoMercator().scale(180);

  const handleOnMouseOver = (e, city) => {
    setTop(isStickyHeader ? e.pageY - 160 : e.pageY + 100);
    setLeft(isStickyHeader ? e.pageX - 50 : e.pageX + 170);
    setCityHovered(city);
  };

  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@1.1.4/world/110m.json').then(
      response => {
        if (response.status !== 200) {
          return;
        }
        response.json().then(worldData => {
          setIndiaStateData(
            feature(worldData, worldData.objects.countries).features,
          );
        });
      },
    );
  }, []);

  return !isLoading ? (
    <React.Fragment>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 250"
        transform="translate(75, 0)"
      >
        <g className="countries" transform="translate(120, 0)">
          {indiaStateData.map((d, i) => (
            <path
              // eslint-disable-next-line react/no-array-index-key
              key={`path-${i}`}
              d={geoPath().projection(projection())(d)}
              className="country"
              fill="#BBC6CF"
              stroke="#FFFFFF"
              strokeWidth={2.8}
            />
          ))}
        </g>
        <g className="markers" transform="translate(100, -20)">
          {cities.map((city, i) => (
            <Marker
              style={{ cursor: 'pointer' }}
              key={`marker-${i + 1}`}
              x={projection()(city.coordinates)[0]}
              y={projection()(city.coordinates)[1]}
              onMouseOver={e => handleOnMouseOver(e, city)}
              onMouseOut={handleOnMouseOver}
            />
          ))}
        </g>
      </svg>
      {cityHovered && (
        <div
          className="c3-tooltip-container"
          style={{
            boxShadow: '0 2px 4px 0 #66696c',
            position: 'absolute',
            pointerEvents: 'none',
            borderRadius: '5px',
            color: '#000',
            background: '#fff',
            display: 'block',
            top: `${top - 190}px`,
            left: `${left - 310}px`,
            minWidth: '230px',
            width: 'max-content',
            padding: '18px',
            paddingBottom: '0px',
          }}
        >
          <div>
            <span>{cityHovered.country}</span>
            <span>
              <img
                src={`https://lipis.github.io/flag-icon-css/flags/4x3/${cityHovered.countryCode.toLocaleLowerCase()}.svg`}
                alt=""
                style={{ width: '46px', height: '18px', paddingTop: '2px' }}
              />
            </span>
          </div>
          <br />
          {cityHovered.details.map(
            (d, n) =>
              n === 0 && (
                <>
                  <div
                    style={{
                      fontSize: '12px',
                      textDecoration: 'underline',
                      paddingBottom: '2px',
                    }}
                  >
                    {d.platformName}
                  </div>
                  {d.header && d.header.length>0 && (<div
                    style={{
                      fontSize: '12px',
                      paddingBottom: '2px',
                    }}
                    className="geoHeader"
                  >
                    {d.header}
                  </div>)}
                 { d.comment && d.comment.length >0 &&  (<div
                    style={{
                      fontSize: '12px',
                      paddingBottom: '2px',
                    }}
                  >
                    {d.comment}
                  </div>)}

                  {d.data.map((x, i) => (
                    <div style={{ fontSize: '12px' }}>
                   <span className="spanList"></span>   
                      {/* {') '} */}
                      <span>{x.key}</span> = <span>{x.unit}</span>{' '}
                      <span>
                        {
                          _numberToHumanReadableFormatConverter(
                            x.value,
                            true,
                            true,
                            "Geo-projectID"
                          )[0]
                        }{' '}
                        {
                          _numberToHumanReadableFormatConverter(
                            x.value,
                            true,
                            true,
                            "Geo-projectID"
                          )[1]
                        }
                      </span>
                    </div>
                  ))}
                  <br />
                </>
              ),
          )}
        </div>
      )}
    </React.Fragment>
  ) : (
    <div style={{ margin: '20% 45%' }}>
      <img src={pageLoader} alt="" />
    </div>
  );
};

// GeoChart.defaultProps = {
//   geoLocations: [
//     {
//       countryCode: 'US',
//       country: 'United States',
//       coordinates: [-94.5785667, 39.0997265],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 15000000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 540000000,
//               unit: 'USD',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'CA',
//       country: 'Canada',
//       coordinates: [-107.116226, 59.246292],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 8000000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 370000000,
//               unit: 'CAD',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'IN',
//       country: 'India',
//       coordinates: [78.9629, 20.5937],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 600000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 1464000000,
//               unit: 'INR',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'AU',
//       country: 'Australia',
//       coordinates: [134.489563, -25.734968],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 1630000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 82000000,
//               unit: 'AUD',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'BR',
//       country: 'Brazil',
//       coordinates: [-51.92528, -14.235004],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 7500000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 995000000,
//               unit: 'BRL',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'PH',
//       country: 'Philippines',
//       coordinates: [121.774017, 12.879721],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 5400000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 9778000000,
//               unit: 'PHP',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'GB',
//       country: 'United Kingdom',
//       coordinates: [-3.435973, 55.378051],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 3300000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 93000000,
//               unit: 'GBP',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       countryCode: 'CN',
//       country: 'China',
//       coordinates: [104.1954, 35.8617],
//       details: [
//         {
//           platformID: 'MED101',
//           platformName: 'Broadcast',
//           data: [
//             {
//               title: '',
//               key: 'Average Viewership',
//               value: 25000000,
//               unit: '',
//             },
//             {
//               title: '',
//               key: 'Valuation',
//               value: 6083000000,
//               unit: 'CNH',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

GeoChart.propTypes = {
  geoLocations: PropTypes.array,
  isLoading: PropTypes.bool,
  isStickyHeader: PropTypes.bool,
};

const Marker = ({ x, y, onMouseOver, onMouseOut }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x={`${x}px`}
    y={`${y}px`}
    width="31px"
    height="31px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    style={{
      fill: '#c3002b',
    }}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    <g>
      <path
        d="M256,0C167.641,0,96,71.625,96,160c0,24.75,5.625,48.219,15.672,69.125C112.234,230.313,256,512,256,512l142.594-279.375
        C409.719,210.844,416,186.156,416,160C416,71.625,344.375,0,256,0z M256,256c-53.016,0-96-43-96-96s42.984-96,96-96
		c53,0,96,43,96,96S309,256,256,256z"
      />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

Marker.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

export default GeoChart;
