import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Chart from 'react-google-charts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function createCustomHTMLContent(header, twitter, facebook, instagram) {
  return `<div class="Tooptip2Timeline_divider" style="border-radius: 0;" >
  <div>
    <h2 style="color: #000" >${header}</h2>
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
      'fb' === 'fb'
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
      <div
          style="
                  height: 30px;
                  width: 1px;
                  margin: 0 0 0 10px;
                  background-color: black"
        />
        </div>
      `
        : ``
    }
    ${
      'twitter' === 'twitter'
        ? `
      <div style="display: flex;" >
      <div style="display: flex; align-items: center">
        <img src="https://i.ibb.co/sPFpJtG/twitter.png" style="margin: 0 10px;width:30px; height: 30px" alt="twitter">
        <p style="margin-right: 10px; color: #000">${twitter}</p>
        </div>
        <div
          style="
                  height: 30px;
                  width: 1px;
                  margin: 0 0 0 10px;
                  background-color: black"
        />
      </div>
    `
        : ``
    }
    ${
      'insta' === 'insta'
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
</div>`;
}

export const Location = props => {
  const data = [
    ['Region', 'Number Of Posts'],
    ['Canada', 400],
    ['United States', 700],
    ['United Kingdom', 400],
    ['Europe', 400],
    ['Vietnam', 500],
    ['Portugal', 300],
    ['Japan', 200],
    ['India', 100],
    ['Australia', 300],
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  const [selectedGeoTab, setSelectedGeoTab] = React.useState(0);
  const [selectedGeoCountry, setSelectedGeoCountry] = React.useState('Overall');
  const [value, setValue] = React.useState('Overall');
  const handleChange = event => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (value === 'Overall') {
      setSelectedGeoCountry('Overall');
    }
  }, [value]);
  const handleChangeGeoTab = (event, newValue) => {
    setSelectedGeoTab(newValue);
  };
  const totalcountpositive = 32512;
  const totalcountNegative = -26142;
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
    createCustomHTMLContent('Negative', 200, 200, 200),
    1,
    5,
  ]);
  sentimentbuletTool.push([
    'Distribution',
    totalcountpositive,
    createCustomHTMLContent('Positive', 200, 200, 200),
    5,
    12,
  ]);

  const fanTip = () => (
    <div className="Tooptip2Timeline_divider">
      <div style={{ width: '100%' }}>
        <h3 style={{ color: '#000' }}>Value (in USD)</h3>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {'facebook' === 'facebook' ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: 10, color: '#3b5998' }} />
              <p style={{ marginRight: 10, color: '#000' }}>200</p>
            </div>
            <div
              style={{
                height: 30,
                width: 1,
                margin: '0 0 0 10px',
                backgroundColor: 'black',
              }}
            />
          </>
        ) : null}
        {'twitter' === 'twitter' ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ margin: '0 10px', color: ' #00acee' }} />
              <p style={{ marginRight: 10, color: '#000' }}>200</p>
            </div>
            <div
              style={{
                height: 30,
                width: 1,
                margin: '0 0 0 10px',
                backgroundColor: 'black',
              }}
            />
          </>
        ) : null}
        {'instagram' === 'instagram' ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InstagramIcon style={{ margin: '0 10px', color: '#dd2a7b' }} />
            <p style={{ marginRight: 10, color: '#000' }}>200</p>
          </div>
        ) : null}
      </div>
      <hr style={{ width: '100%', border: '1px dashed' }} />
      <div style={{ width: '100%' }}>
        <h3 style={{ color: '#000' }}>Engagement (# 's)</h3>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {'facebook' === 'facebook' ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: 10, color: '#3b5998' }} />
              <p style={{ marginRight: 10, color: '#000' }}>200</p>
            </div>
            <div
              style={{
                height: 30,
                width: 1,
                margin: '0 0 0 10px',
                backgroundColor: 'black',
              }}
            />
          </>
        ) : null}
        {'twitter' === 'twitter' ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ margin: '0 10px', color: ' #00acee' }} />
              <p style={{ marginRight: 10, color: '#000' }}>200</p>
            </div>
            <div
              style={{
                height: 30,
                width: 1,
                margin: '0 0 0 10px',
                backgroundColor: 'black',
              }}
            />
          </>
        ) : null}
        {'instagram' === 'instagram' ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InstagramIcon style={{ margin: '0 10px', color: '#dd2a7b' }} />
            <p style={{ marginRight: 10, color: '#000' }}>200</p>
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <div>
      <div
        style={{ display: 'flex', width: '43%', justifyContent: 'flex-end' }}
      >
        <FormControl component="fieldset" style={{ width: '44%' }}>
          <RadioGroup
            aria-label="Type"
            name="Type"
            value={value}
            onChange={handleChange}
            style={{ height: 50 }}
          >
            <FormControlLabel
              value="Overall"
              control={<Radio style={{ color: '#e12f2f' }} />}
              label="UnIdentified"
              style={{ color: 'black' }}
            />
            <FormControlLabel
              value="Geo"
              control={<Radio style={{ color: '#e12f2f' }} />}
              label="Default"
              style={{ color: 'black' }}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="socialGeo_cardsUi">
        <div className="socialGeo_donutUi">
          <Chart
            height={400}
            chartEvents={[
              {
                eventName: 'select',
                callback: ({ chartWrapper }) => {
                  if (value !== 'Overall') {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    // console.log(region);
                    // alert(`Selected : ${region}`);
                    setSelectedGeoCountry(region[0]);
                  }
                },
              },
            ]}
            // width={"32vw"}
            // height={"300px"}
            chartType="GeoChart"
            data={data}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
            options={{
              colorAxis: { colors: ['#d2e3fc', '#174ea6'] },
              enableRegionInteractivity: true,
            }}
          />
        </div>
        <div
          style={{ width: 2, backgroundColor: '#d1d1d5', marginLeft: '3vw' }}
        />
        <div style={{ flex: 2, marginTop: -60 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="socialGeo_banner socialGeo_banner6">
              <h1 className="socialGeo_h1">{selectedGeoCountry}</h1>
              {selectedGeoCountry !== 'Overall' ? (
                <p style={{ fontSize: 16, marginTop: 10, color: '#37535b' }}>
                  (IST)
                </p>
              ) : null}
            </div>
          </div>
          <div className="socialGeo_geoTabCenter">
            <Tabs
              value={selectedGeoTab}
              onChange={handleChangeGeoTab}
              TabIndicatorProps={{ style: { background: '#890b0f' } }}
            >
              <Tab
                style={{ width: 'min-content' }}
                label={
                  <div align="center">
                    <DashboardIcon />
                    <Typography className="socialGeo_profileNamesGeo">
                      General
                    </Typography>
                  </div>
                }
              />
              <Tab
                style={{ width: 'min-content' }}
                label={
                  <div align="center">
                    <SentimentSatisfiedAltIcon />
                    <Typography className="socialGeo_profileNamesGeo">
                      Demographic
                    </Typography>
                  </div>
                }
              />
              <Tab
                style={{ width: 'min-content' }}
                label={
                  <div align="center">
                    <SentimentSatisfiedAltIcon />
                    <Typography className="socialGeo_profileNamesGeo">
                      Fan Preference
                    </Typography>
                  </div>
                }
              />
            </Tabs>
          </div>
          <TabPanel value={selectedGeoTab} index={0}>
            <div className="socialGeo_geoData">
              <div style={{ width: '45vw' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '-2.5em',
                  }}
                >
                  <a data-tip data-for="circle1">
                    <div className="socialGeo_CircleDiv">
                      <Typography
                        style={{
                          margin: '10px 0 30px 0',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        Posts
                      </Typography>
                      <CircularProgressbarWithChildren
                        value={75}
                        strokeWidth={8}
                        styles={buildStyles({
                          pathColor: '#3b579d',
                          trailColor: 'transparent',
                        })}
                      >
                        {/*
                          Width here needs to be (100 - 2 * strokeWidth)%
                          in order to fit exactly inside the outer progressbar.
                        */}
                        <div style={{ width: '84%' }}>
                          <CircularProgressbarWithChildren
                            value={70}
                            strokeWidth={8}
                            styles={buildStyles({
                              pathColor: '#43b1f4',
                              trailColor: 'transparent',
                            })}
                          >
                            <div style={{ width: '84%' }}>
                              <CircularProgressbarWithChildren
                                value={81}
                                strokeWidth={8}
                                styles={buildStyles({
                                  pathColor: '#b9007d',
                                  trailColor: 'transparent',
                                })}
                              >
                                <p style={{ fontSize: 20, color: 'black' }}>
                                  8/14
                                </p>
                              </CircularProgressbarWithChildren>
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </a>
                  <ReactTooltip
                    id="circle1"
                    backgroundColor="#fff"
                    textColor="#000"
                  >
                    <div className="Tooptip2Timeline_divider">
                      <div style={{ width: '100%' }}>
                        <h3 style={{ fontWeight: 'bold' }}>
                          Match/Non-Match Day
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <FacebookIcon
                            style={{ marginRight: 10, color: '#3b5998' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <TwitterIcon
                            style={{ margin: '0 10px', color: ' #00acee' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <InstagramIcon
                            style={{ margin: '0 10px', color: '#dd2a7b' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                      </div>
                      <hr style={{ width: '100%', border: '1px dashed' }} />
                      <div style={{ width: '100%' }}>
                        <h3 style={{ fontWeight: 'bold' }}>Original/Shared</h3>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <FacebookIcon
                            style={{ marginRight: 10, color: '#3b5998' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <TwitterIcon
                            style={{ margin: '0 10px', color: ' #00acee' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <InstagramIcon
                            style={{ margin: '0 10px', color: '#dd2a7b' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                      </div>
                      <hr style={{ width: '100%', border: '1px dashed' }} />
                      <div style={{ width: '100%' }}>
                        <h3 style={{ fontWeight: 'bold' }}>Promoted/Organic</h3>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <FacebookIcon
                            style={{ marginRight: 10, color: '#3b5998' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <TwitterIcon
                            style={{ margin: '0 10px', color: ' #00acee' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <InstagramIcon
                            style={{ margin: '0 10px', color: '#dd2a7b' }}
                          />
                          <p style={{ marginRight: 10, color: 'black' }}>200</p>
                        </div>
                      </div>
                    </div>
                  </ReactTooltip>
                  <a data-tip data-for="circle1">
                    <div className="socialGeo_CircleDiv">
                      <Typography
                        style={{
                          margin: '10px 0 30px 0',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        Value
                      </Typography>
                      <CircularProgressbarWithChildren
                        value={75}
                        strokeWidth={8}
                        styles={buildStyles({
                          pathColor: '#3b579d',
                          trailColor: 'transparent',
                        })}
                      >
                        {/*
                          Width here needs to be (100 - 2 * strokeWidth)%
                          in order to fit exactly inside the outer progressbar.
                        */}
                        <div style={{ width: '84%' }}>
                          <CircularProgressbarWithChildren
                            value={70}
                            strokeWidth={8}
                            styles={buildStyles({
                              pathColor: '#43b1f4',
                              trailColor: 'transparent',
                            })}
                          >
                            <div style={{ width: '84%' }}>
                              <CircularProgressbarWithChildren
                                value={81}
                                strokeWidth={8}
                                styles={buildStyles({
                                  pathColor: '#b9007d',
                                  trailColor: 'transparent',
                                })}
                              >
                                <p style={{ fontSize: 20, color: 'black' }}>
                                  8/14
                                </p>
                              </CircularProgressbarWithChildren>
                            </div>
                          </CircularProgressbarWithChildren>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </a>
                  <div className="socialGeo_CircleDiv">
                    <Typography
                      style={{
                        marginTop: -20,
                        color: '#000',
                        fontWeight: 'bold',
                      }}
                    >
                      Sentiment
                    </Typography>
                    <div style={{ margin: '50% 0 0 0', width: 250 }}>
                      <Chart
                        width="100%"
                        height="100px"
                        chartType="Timeline"
                        loader={<div>Loading Chart</div>}
                        data={sentimentbuletTool}
                        options={{
                          timeline: {
                            showRowLabels: false,
                          },
                          avoidOverlappingGridLines: false,
                          colors: ['#e12f2f', '#24b228'],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="socialGeo_ViewMore">View Post Details</div>
            </div> */}
          </TabPanel>
          <TabPanel value={selectedGeoTab} index={1}>
            <div className="socialGeo_geoData">
              <div style={{ width: '45vw' }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="socialGeo_CircleDiv">
                    <Typography
                      style={{
                        width: 300,
                        margin: '-2em auto -2em 0',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      Active Zone Of The Day
                    </Typography>
                    <div style={{ margin: '0 auto 0 0' }}>
                      <Chart
                        width="300px"
                        height="300px"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['task', 'Hours'],
                          ['00:00 - 5:59', 100],
                          ['06:00 - 11:59', 100],
                          ['12:00 - 17:59', 100],
                          ['18:00 - 23:59', 100],
                        ]}
                        options={{
                          // Just add this option
                          legend: { position: 'bottom' },
                          pieSliceText: 'value',
                          is3D: true,
                          backgroundColor: 'transparent',
                        }}
                        rootProps={{ 'data-testid': '2' }}
                      />
                    </div>
                  </div>
                  <div className="socialGeo_CircleDiv">
                    <Typography
                      style={{
                        width: 300,
                        margin: '-2em auto -2em 0',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
                    >
                      Active Day Of The Week
                    </Typography>
                    <div style={{ margin: '0 auto 0 0' }}>
                      <Chart
                        width="300px"
                        height="300px"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['day', 'value'],
                          ['Sunday', 100],
                          ['Monday', 100],
                          ['Tuesday', 100],
                          ['Wednesday', 100],
                          ['Thursday', 100],
                          ['Friday', 100],
                          ['Saturday', 100],
                        ]}
                        options={{
                          // Just add this option
                          legend: { position: 'bottom' },
                          pieSliceText: 'value',
                          is3D: true,
                          backgroundColor: 'transparent',
                        }}
                        rootProps={{ 'data-testid': '2' }}
                      />
                    </div>
                  </div>
                  <div className="socialGeo_CircleDiv">
                    <Typography
                      style={{
                        marginTop: '-3em',
                        color: 'black',
                        marginLeft: '4vw',
                        fontWeight: 'bold',
                      }}
                    >
                      Gender
                    </Typography>
                    <div className="socialGeo_Box" style={{ marginTop: '1vw' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                          margin: '0 1vw 0 4vw',
                        }}
                      >
                        <img
                          src="https://i.ibb.co/hW25GV3/man.png"
                          alt="male"
                          width="100px"
                          height="100px"
                        />
                        <p
                          style={{
                            fontSize: '3em',
                            color: 'black',
                          }}
                        >
                          60%
                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <img
                          src="https://i.ibb.co/VgMJ6Nb/girl.png"
                          alt="male"
                          width="100px"
                          height="100px"
                        />
                        <p
                          style={{
                            fontSize: '3em',
                            color: 'black',
                          }}
                        >
                          40%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="socialGeo_ViewMore">View Post Details</div>
            </div> */}
          </TabPanel>
          <TabPanel value={selectedGeoTab} index={2}>
            <div align="center" style={{ marginTop: '15vh' }}>
              No data available
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};
