import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';
import {
  BarChart,
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
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import NumericLabel from 'react-pretty-numbers';

const DATE_OPTIONS = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
function createCustomHTMLContent(header, twitter, facebook, instagram) {
  return `
  <div class="Tooptip2Timeline_divider" style="border-radius: 0;" >
  <div>
    <h2 style="color: #000;margin-bottom: 10px" >${header}</h2>
  </div>
  <div
    style="
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          "
  >
    ${
      facebook != '0'
        ? `
        <div style="display: flex;" >
        <div
      style="
          display: flex; align-items: center;
          "
    >
      <img src="https://i.ibb.co/X2LTRw9/facebook.png" style="margin-right: 10px;width:30px; height: 30px" alt="facebook" />
      <p style="margin-right: 10px; color: #000">${facebook}</p>
      </div>
        </div>
      `
        : ``
    }
    ${
      twitter != '0'
        ? `
      <div style="display: flex;" >
      <div style="display: flex; align-items: center">
        <img src="https://i.ibb.co/sPFpJtG/twitter.png" style="margin: 0 10px;width:30px; height: 30px" alt="twitter">
        <p style="margin-right: 10px; color: #000">${twitter}</p>
        </div>
      </div>
    `
        : ``
    }
    ${
      instagram != '0'
        ? `<div
    style="
        display: flex; align-items: center;
        "
  >
  <img src="https://i.ibb.co/4spJjMV/instagram.png" style="margin: 0 10px; width:30px; height: 30px" alt="instagram">
    <p style="margin-right: 10px; color: #000">${instagram}</p>
  </div>`
        : ``
    }
  </div>
</div>
  `;
}

const AnnotationChart = ({
  data = [],
  keys,
  loading,
  selectedCategory,
  socialsubplatform,
}) => {
  // console.log('data time line', data);

  let viewType;
  if (
    selectedCategory == 'Post Count' ||
    selectedCategory == 'Engagement' ||
    selectedCategory == 'Valuation'
  ) {
    viewType = 'N'; // Normal
  } else {
    viewType = 'S'; // Sentiment
  }
  let totalcountpositive = 0;
  let totalcountNegative = 0;
  let totalcountNeutral = 0;

  const prepareFinaldata = [];
  if (viewType == 'S') {
    data.forEach(element => {
      // console.log("elementelement",element)
      const platform = new Date(element.date).toLocaleDateString(
        'en-US',
        DATE_OPTIONS
      );
      let twitterN = 0;
      let facebookN = 0;
      let instagramN = 0;
      let twitterP = 0;
      let facebookP = 0;
      let instagramP = 0;
      let twitterNe = 0;
      let facebookNe = 0;
      let instagramNe = 0;

      if (element.Twitter) {
        const answer_array = String(element.Twitter).split('|');
        twitterN = -answer_array[0];
        twitterNe = answer_array[1];
        twitterP = answer_array[2];
      }
      if (element.Facebook) {
        const answer_array = String(element.Facebook).split('|');
        facebookN = -answer_array[0];
        facebookNe = answer_array[1];
        facebookP = answer_array[2];
      }
      if (element.Instagram) {
        const answer_array = String(element.Instagram).split('|');
        instagramN = -answer_array[0];
        instagramNe = answer_array[1];
        instagramP = answer_array[2];
      }
      prepareFinaldata.push({
        name: platform,
        twitterP,
        twitterN,
        twitterNe,
        facebookP,
        facebookN,
        facebookNe,
        instagramP,
        instagramN,
        instagramNe,
      });
    });
  }

  const twitterP = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.twitterP);
  }, 0);
  const twitterN = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.twitterN);
  }, 0);
  const twitterNe = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.twitterNe);
  }, 0);
  const facebookP = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.facebookP);
  }, 0);
  const facebookN = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.facebookN);
  }, 0);
  const facebookNe = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.facebookNe);
  }, 0);
  const instagramP = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.instagramP);
  }, 0);
  const instagramN = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.instagramN);
  }, 0);
  const instagramNe = prepareFinaldata.reduce(function(prev, cur) {
    return Number(prev) + Number(cur.instagramNe);
  }, 0);
  totalcountpositive = twitterP + facebookP + instagramP;
  totalcountNegative = (twitterN + facebookN + instagramN) * -1;
  totalcountNeutral = twitterNe + facebookNe + instagramNe;
  const total = totalcountpositive + totalcountNegative + totalcountNeutral;
  const sentimentbuletTool = [];
  sentimentbuletTool.push([
    { type: 'string', id: 'Distribution' },
    { type: 'string', id: 'Value' },
    { type: 'string', role: 'tooltip' },
    { type: 'number', id: 'Start' },
    { type: 'number', id: 'End' },
  ]);
  sentimentbuletTool.push([
    'Distribution',
    totalcountNegative,
    createCustomHTMLContent(
      'Negative',
      Math.abs(twitterN),
      Math.abs(facebookN),
      Math.abs(instagramN)
    ),
    0,
    10,
  ]); // Math.floor((total/totalcountNegative)*100)]
  sentimentbuletTool.push([
    'Distribution',
    totalcountNeutral,
    createCustomHTMLContent(
      'Neutral',
      Math.abs(twitterNe),
      Math.abs(facebookNe),
      Math.abs(instagramNe)
    ),
    10,
    20,
  ]); // Math.floor((total/totalcountNegative)*100),Math.floor((total/totalcountNeutral)*100)]
  sentimentbuletTool.push([
    'Distribution',
    totalcountpositive,
    createCustomHTMLContent(
      'Positive',
      Math.abs(twitterP),
      Math.abs(facebookP),
      Math.abs(instagramP)
    ),
    20,
    40,
  ]); // Math.floor((total/totalcountNeutral)*100),Math.floor((total/totalcountpositive)*100)]

  const columns = [
    {
      type: 'date',
      label: 'Date',
    },
    ...keys,
  ];

  const tooltip = '<div><div></div>';

  return (
    <>
      {data.length > 0 && !loading && viewType == 'N' && (
        <div>
          <LineChart
            width={1600}
            height={500}
            data={data}
            margin={{ top: 20, right: 1, left: 10, bottom: 1 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" height={40} tick={<CustomizedAxisTick />} />
            <YAxis
              tick={<CustomizedYAxisTick selectedCategory={selectedCategory} />}
            />
            <Tooltip content={<CustomTimeLineTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="Twitter" stroke="#8884d8" />{' '}
            {/* label={<CustomizedLabel />} */}
            <Line type="monotone" dataKey="Facebook" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Instagram" stroke="#82ca9d" />
            <Brush />
          </LineChart>
        </div>
      )}

      {prepareFinaldata.length > 0 && !loading && viewType == 'S' && (
        <div style={{ marginTop: 40 }}>
          <div style={{ width: '93%', margin: 'auto' }}>
            <Chart
              width="100%"
              height="100px"
              chartType="Timeline"
              loader={<div>Loading Chart</div>}
              data={sentimentbuletTool}
              options={{
                timeline: { showRowLabels: true },
                avoidOverlappingGridLines: false,
                colors: ['#e12f2f', '#e1dc2f', '#24b228'],
              }}
            />
          </div>

          <BarChart
            width={1600}
            height={300}
            data={prepareFinaldata}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={<CustomTooltip socialsubplatform={socialsubplatform} />}
            />
            {/* <Legend formatter={renderColorfulLegendText}/> */}
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="twitterP" fill="#43b1f4" />
            <Bar dataKey="twitterN" fill="#43b1f4" />
            <Bar dataKey="facebookP" fill="#3b579d" />
            <Bar dataKey="facebookN" fill="#3b579d" />
            <Bar dataKey="instagramP" fill="#c333af" />
            <Bar dataKey="instagramN" fill="#c333af" />
            <Brush />
          </BarChart>
          <div align="center" style={{ marginTop: 10 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: 400,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="sentimentBoxColorTwitter" />
                <p style={{ color: 'black' }}>Twitter</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="sentimentBoxColorFb" />
                <p style={{ color: 'black' }}>Facebook</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="sentimentBoxColorInsta" />
                <p style={{ color: 'black' }}>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EMPTY STATE */}
      {data.length === 0 && !loading && (
        <svg width="100%" height={400}>
          <GraphEmptyState width={1189} height={330} />
        </svg>
      )}
      {/* LOADER */}
      {data.length === 0 && loading && (
        <GraphLoader width={1189} height={400} />
      )}
    </>
  );
};

AnnotationChart.propTypes = {
  data: PropTypes.object,
  keys: PropTypes.object,
  loading: PropTypes.bool,
};

function renderColorfulLegendText(value, entry) {
  const { color } = entry;
  if (value == 'twitterP' || value == 'facebookP' || value == 'instagramP') {
    return <span style={{ color }}>{String(value).replace('P', '')}</span>;
  }
  return null;
}

const CustomTooltip = ({ active, payload, label, socialsubplatform }) => {
  console.log('socialsubplatformSentiment', payload);
  if (active) {
    return (
      <div className="Tooptip2Timeline_divider">
        <p style={{ fontWeight: 'bold', color: '#000', marginBottom: 10 }}>
          {payload ? payload[0].payload.name : ''}
        </p>
        {/* <hr style={{ width: "100%" }} /> */}
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #ccc',
            }}
          >
            <div style={{ width: '25%' }} />
            <div style={{ width: '25%', marginBottom: 10 }}>
              <SentimentVeryDissatisfiedIcon style={{ color: 'red' }} />
            </div>
            <div style={{ width: '25%', marginBottom: 10 }}>
              <SentimentSatisfiedIcon style={{ color: '#ffb301' }} />
            </div>
            <div style={{ width: '25%', marginBottom: 10 }}>
              <SentimentSatisfiedAltIcon style={{ color: 'green' }} />
            </div>
          </div>
          <SentimentTip
            payload={payload}
            socialsubplatform={socialsubplatform}
          />
        </div>
      </div>
    );
  }

  return null;
};

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
    {value}
  </text>
);

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
  const cts = payload.value;
  const cdate = new Date(cts).toLocaleDateString('en-US', DATE_OPTIONS);
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {cdate}
      </text>
    </g>
  );
};

const CustomizedYAxisTick = ({ x, y, stroke, payload, selectedCategory }) => {
  let showvalue;
  if (selectedCategory == 'Valuation') {
    showvalue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    }).format(payload.value);
  } else {
    showvalue = payload.value;
  }
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
        {' '}
        {showvalue}
      </text>
    </g>
  );
};

const CustomTimeLineTooltip = ({ active, payload, label }) => {
  let interval;
  if (payload.length > 0) {
    // interval= payload[0].payload.supplement[0].interval //payload.supplement[0].interval
    interval = new Date(
      payload[0].payload.supplement[0].interval
    ).toLocaleDateString('en-US', DATE_OPTIONS);
  }
  if (active) {
    return (
      <div>
        <div className="Tooptip2Timeline_divider">
          <p style={{ fontWeight: 'bold', color: '#000' }}>{interval}</p>
          <hr style={{ width: '100%' }} />
          {payload &&
            payload.length > 0 &&
            payload.map((data, i) =>
              data.payload.supplement.map((subdata, j) =>
                // header
                Object.entries(subdata.value).length <= 0 ? (
                  i === 0 && j === 0 ? (
                    <div>No Data Available</div>
                  ) : null
                ) : (
                  i == 0 && (
                    <div className="width100">
                      <div style={{ width: '100%' }}>
                        <h3
                          style={{
                            color: '#000',
                            marginBottom: 10,
                            fontWeight: 'bold',
                          }}
                        >
                          {subdata.label} {subdata.unit == 'USD' ? '(USD)' : ''}
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
                        <PlatformLoad list={subdata} />
                      </div>
                      {j === 0 ? <hr className="hr" /> : null}
                    </div>
                  )
                )
              )
            )}
        </div>
      </div>
    );
  }
  return null;
};
export default AnnotationChart;

const numberoption = {
  locales: 'en-US',
  percentage: false,
  precision: 0,
  wholenumber: null,
  commafy: true,
  shortFormat: true,
  shortFormatMinValue: 10000,
  shortFormatPrecision: 1,
};
const valueoption = {
  justification: 'L',
  locales: 'en-US',
  currency: true,
  currencyIndicator: '',
  percentage: false,
  precision: 2,
  wholenumber: null,
  commafy: true,
  cssClass: ['red'],
  shortFormat: true,
  shortFormatMinValue: 10000,
  shortFormatPrecision: 1,
  title: true,
};

const Table = data => {
  console.log('listData', data.data);
  const values = data.data[1].split('|');
  return (
    <React.Fragment>
      <div style={{ width: '100%' }}>
        {data.data[0] === 'Facebook' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <FacebookIcon
                style={{ color: '#3b5998', margin: '0 10px 0 20px' }}
              />
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'red' }}>{values[0]}</p>
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: '#ffb301' }}>{values[1]}</p>
            </div>
            <div
              style={{
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'green' }}>{values[2]}</p>
            </div>
          </div>
        ) : null}
        {data.data[0] === 'Twitter' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <TwitterIcon
                style={{ color: '#00acee', margin: '0 10px 0 20px' }}
              />
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'red' }}>{values[0]}</p>
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: '#ffb301' }}>{values[1]}</p>
            </div>
            <div
              style={{
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'green' }}>{values[2]}</p>
            </div>
          </div>
        ) : null}
        {data.data[0] === 'Instagram' ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <InstagramIcon
                style={{ color: '#dd2a7b', margin: '0 10px 0 20px' }}
              />
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'red' }}>{values[0]}</p>
            </div>
            <div
              style={{
                width: '25%',
                borderRight: '1px solid #ccc',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: '#ffb301' }}>{values[1]}</p>
            </div>
            <div
              style={{
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <p style={{ color: 'green' }}>{values[2]}</p>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

function PlatformLoad(list) {
  console.log('list', list);
  try {
    if (list.list) {
      if (Object.entries.length > 0) {
        return (
          <>
            {Object.entries(list.list.value).map((t, k) =>
              // <div>{t[0]}{t[1]}</div>
              list.list.unit == '#' && list.list.label != 'Sentiment' ? (
                <React.Fragment key={k}>
                  {t[0] === 'Facebook' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FacebookIcon
                        style={{ color: '#3b5998', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        {' '}
                        <NumericLabel params={numberoption}>
                          {t[1]}
                        </NumericLabel>
                      </p>
                    </div>
                  ) : null}
                  {t[0] === 'Twitter' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TwitterIcon
                        style={{ color: ' #00acee', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        <NumericLabel params={numberoption}>
                          {t[1]}
                        </NumericLabel>
                      </p>
                    </div>
                  ) : null}
                  {t[0] === 'Instagram' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <InstagramIcon
                        style={{ color: '#dd2a7b', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        <NumericLabel params={numberoption}>
                          {t[1]}
                        </NumericLabel>
                      </p>
                    </div>
                  ) : null}
                </React.Fragment>
              ) : list.list.unit == 'USD' && list.list.label != 'Sentiment' ? (
                <React.Fragment key={k}>
                  {t[0] === 'Facebook' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FacebookIcon
                        style={{ color: '#3b5998', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        {' '}
                        <NumericLabel params={valueoption}>{t[1]}</NumericLabel>
                      </p>
                    </div>
                  ) : null}
                  {t[0] === 'Twitter' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <TwitterIcon
                        style={{ color: ' #00acee', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        <NumericLabel params={valueoption}>{t[1]}</NumericLabel>
                      </p>
                    </div>
                  ) : null}
                  {t[0] === 'Instagram' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <InstagramIcon
                        style={{ color: '#dd2a7b', marginLeft: 10 }}
                      />
                      <p style={{ marginLeft: 10, color: '#000' }}>
                        <NumericLabel params={valueoption}>{t[1]}</NumericLabel>
                      </p>
                    </div>
                  ) : null}
                </React.Fragment>
              ) : (
                <Table data={t} />
              )
            )}
            {Object.entries(list.list).length <= 0 ? (
              <div>No Data Available</div>
            ) : null}
          </>
        );
      }
    }

    return <div>No Data Available</div>;
  } catch (error) {
    console.error(error);
    return <div>No Data Available</div>;
  }
}

const SentimentTip = list => {
  if (list.payload.length > 0) {
    // console.log('socialsubplatformSentiment', list.socialsubplatform);
    return (
      <div>
        {list.payload.map((plist, i) => (
          <React.Fragment key={plist.name}>
            {plist.name === 'facebookP' &&
            list.socialsubplatform.length <= 0 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #ccc',
                  height: 40,
                }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <FacebookIcon style={{ color: '#3b5998' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookP)}
                  </p>
                </div>
              </div>
            ) : null}
            {plist.name === 'facebookP' &&
            list.socialsubplatform[0] === 'Facebook' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #ccc',
                  height: 40,
                }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <FacebookIcon style={{ color: '#3b5998' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.facebookP)}
                  </p>
                </div>
              </div>
            ) : null}
            {plist.name === 'twitterP' && list.socialsubplatform.length <= 0 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #ccc',
                  height: 40,
                }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <TwitterIcon style={{ color: '#00acee' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterP)}
                  </p>
                </div>
              </div>
            ) : null}
            {plist.name === 'twitterP' &&
            list.socialsubplatform[0] === 'Twitter' ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderBottom: '1px solid #ccc',
                  height: 40,
                }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <TwitterIcon style={{ color: '#00acee' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.twitterP)}
                  </p>
                </div>
              </div>
            ) : null}
            {plist.name === 'instagramP' &&
            list.socialsubplatform.length <= 0 ? (
              <div
                style={{ display: 'flex', alignItems: 'center', height: 40 }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <InstagramIcon style={{ color: '#dd2a7b' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramP)}
                  </p>
                </div>
              </div>
            ) : null}
            {plist.name === 'instagramP' &&
            list.socialsubplatform[0] === 'Instagram' ? (
              <div
                style={{ display: 'flex', alignItems: 'center', height: 40 }}
              >
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <InstagramIcon style={{ color: '#dd2a7b' }} />
                  {/* <p style={{ margin: 0, color: '#000' }}>(400 P)</p> */}
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramNe)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ccc',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramN)}
                  </p>
                </div>
                <div
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <p style={{ color: '#000' }}>
                    {Math.abs(plist.payload.instagramP)}
                  </p>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    );
  }
};
