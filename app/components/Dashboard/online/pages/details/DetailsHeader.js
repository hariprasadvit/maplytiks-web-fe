import React, { useState, useRef, useEffect, Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import useDropdownClose from 'components/common/hooks/useDropdownClose';
import BarChart from 'components/common/graphs/social/BarChart';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import Radio from '@material-ui/core/Radio';
import LinearProgress from '@material-ui/core/LinearProgress';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { connect } from 'react-redux';
import { Location } from './Location';
import { CardsPost } from '../Trending/posts';
import { CardsProfile } from '../Trending/profile';

import { CardsHashTag } from '../Trending/hashtag';
import ModalAlert from './ModalAlert';
import { DetailsCard } from './DetailsCard';
import SocialPlatformSelector from '../socialPlatformSelector';

const totalObject = [];

const DetailsHeader = ({
  digitalReport: {
    template: { tabs = {}, categoriesName = [], loading: tempalteLoading } = {},
    report: {
      data: graphData = [],
      bargraphdata: bargraphdata = [],
      type: graphType,
      loading: digitalReportGraphLoading,
    } = {},
    categorySelectionCallback,
    tabSelectionCallback,
    activeCategory,
    activeTab,
    socialsubplatform,
    modelsocialsubplatform,
  } = {},
  mediaPagesProp,
}) => {
  console.log('graphData.', graphData);
  const [open, setOpen] = React.useState(false);
  const [values, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  1;

  const platformDropdown = useRef();
  const reportDropdown = useRef();
  const [barStartIndex, setBarStartIndex] = useState(0);
  const [barEndIndex, setBarEndIndex] = useState(5);
  const [barData, setBarData] = useState(bargraphdata);
  const [headerDetails, setHeaderDetails] = useState();
  const [sortType, setSortType] = useState('Descending');
  const [sortBy, setSortBy] = useState('value');
  const isShowOnlyLive = false;

  const graphMargin = {
    top: 0,
    right: 20,
    bottom: 60,
    left: 20,
  };
  const [mediaPages, setMediaPages] = React.useState();
  const [twitterPage, setTwitterPage] = React.useState({});
  const [fbPage, setFbPage] = React.useState({});
  const [instaPage, setInstaPage] = React.useState({});

  let twitterObject = {};
  let fbObject = {};
  let instaObject = {};

  const objects = iconState => {
    console.log('iconAndState', iconState);
    twitterObject = {
      subplatform: 'Twitter',
      Pages:
        iconState !== 'twitterfalse'
          ? mediaPagesProp.twitter.map(d => d.id)
          : [],
    };
    fbObject = {
      subplatform: 'Facebook',
      Pages:
        iconState !== 'fbfalse' ? mediaPagesProp.facebook.map(d => d.id) : [],
    };
    instaObject = {
      subplatform: 'Instagram',
      Pages:
        iconState !== 'instafalse'
          ? mediaPagesProp.instagram.map(d => d.id)
          : [],
    };
  };

  const filterFromAll = React.useCallback(icon => {
    switch (icon) {
      case 'twitter':
        objects('twittertrue');
        setTwitterPage(
          mediaPagesProp.twitter.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      case 'fb':
        objects('fbtrue');
        setFbPage(
          mediaPagesProp.facebook.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      case 'insta':
        objects('instatrue');
        setInstaPage(
          mediaPagesProp.instagram.map(d => ({
            value: d.id,
            label: d.title,
            img: d.image,
            id: d.id,
          }))
        );
        break;
      default:
        setMediaPages({});
        break;
    }
    totalObject.push(twitterObject, fbObject, instaObject);
    if (totalObject.length > 3) {
      totalObject.splice(0, totalObject.length - 3);
      console.log('totalObject', totalObject);
    }
  });

  React.useEffect(() => {
    setMediaPages(twitterPage);
    console.log('twitterPage', twitterPage);
  }, [twitterPage]);
  React.useEffect(() => {
    setMediaPages(fbPage);
    console.log('fbPage', fbPage);
  }, [fbPage]);
  React.useEffect(() => {
    setMediaPages(instaPage);
    console.log('instaPage', instaPage);
  }, [instaPage]);

  const iconClick = icon => {
    console.log('icon', icon);
    filterFromAll(icon);
  };

  const iconClickMain = iconState => {
    console.log('popup', iconState);
    objects(iconState);
  };

  const iconClickValue = (valuesObject, platform) => {
    console.log('iconClickValue', valuesObject, platform);
    const temp = totalObject;
    if (platform === 'twitter') {
      twitterObject = {
        subplatform: 'Twitter',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Twitter' ? (totalObject[i] = twitterObject) : null
      );
      console.log('totalObjectTwitter', totalObject);
    }
    if (platform === 'fb') {
      fbObject = {
        subplatform: 'Facebook',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Facebook' ? (totalObject[i] = fbObject) : null
      );
      console.log('totalObjectFb', totalObject);
    }
    if (platform === 'insta') {
      instaObject = {
        subplatform: 'Instagram',
        Pages: valuesObject,
      };
      temp.map((d, i) =>
        d.subplatform === 'Instagram' ? (totalObject[i] = instaObject) : null
      );
      console.log('totalObjectInsta', totalObject);
    }
  };

  useEffect(() => {
    const detailsPage = [];
    if (graphData && graphData.length > 0) {
      graphData.map((list, i) => {
        list.pages.map((pagelist, j) => {
          detailsPage.push({
            subPlatformID: list.subPlatformID,
            subPlatformImage: list.subPlatformImage,
            subPlatformName: list.subPlatformName,
            pages: pagelist,
          });
        });
      });
      console.log('graphDataList.', detailsPage);
      if (detailsPage.length > 0) {
        setHeaderDetails(
          detailsPage.sort((a, b) => b.pages.value.data - a.pages.value.data)
        );
      }
    }
  }, [graphData]);

  // const chnageBarData = dir => {
  //   if (dir === 'prev' && barStartIndex !== 0) {
  //     setBarStartIndex(barStartIndex - 1);
  //     setBarEndIndex(barEndIndex - 1);
  //   }
  //   if (dir === 'next' && barEndIndex < graphData.length) {
  //     setBarStartIndex(barStartIndex + 1);
  //     setBarEndIndex(barEndIndex + 1);
  //   }
  // };

  const [barTypesToBeVisible, setBarTypesToBeVisible] = useState(['quality']);

  const [dropdownActive, setDropdownActive] = useState(false);
  const [activeSubplatform, setActiveSubplatform] = useState('');
  const [activeName, setactiveName] = useState('');
  const [activeSubplatformIndex, setActiveSubplatformIndex] = useState(0);

  const [reportDropdownActive, setReportDropdownActive] = useState(false);
  const [finalSubCallback, setFinalSubCallback] = useState();
  useDropdownClose(platformDropdown, setDropdownActive);
  useDropdownClose(reportDropdown, setDropdownActive);

  useEffect(() => {
    if (activeCategory) {
      categoriesName.map((d, l) => {
        if (d.segmentID == activeCategory) {
          setactiveName(d.segmentName);
        }
      });
    }
  }, [categoriesName, activeCategory]);

  useEffect(() => {
    if (bargraphdata.length > 0) {
      setBarData(bargraphdata.slice(barStartIndex, barEndIndex));
    }
  }, [barEndIndex, barStartIndex, bargraphdata]);

  useEffect(() => {
    if (bargraphdata.length > 0) {
      setBarData(bargraphdata.slice(barStartIndex, barEndIndex));
      console.log('barData.', bargraphdata.slice(barStartIndex, barEndIndex));
    }
  }, [barEndIndex, barStartIndex, bargraphdata, bargraphdata.length]);

  const chnageprev = dir => {
    if (barStartIndex !== 0) {
      setBarStartIndex(barStartIndex - 1);
      setBarEndIndex(barEndIndex - 1);
    }
  };
  const chnagenext = dir => {
    setBarStartIndex(barStartIndex + 1);
    setBarEndIndex(barEndIndex + 1);
  };

  const [mediaAnalysisOpen, setMediaAnalysisOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  // const [filtersubplatform, setfiltersubplatform] = useState();

  const filtersubplatform = filtersubplatform => {
    if (filtersubplatform && filtersubplatform.length > 0) {
      setFinalSubCallback(filtersubplatform);
      FinalSubCallback();
    }
  };

  function FinalSubCallback() {
    if (finalSubCallback) {
      modelsocialsubplatform(finalSubCallback);
    }
  }

  return (
    <div className="platform__card">
      <div className="platform">
        {1 > 0 && ( // barData.length
          <div
            className="platform_card"
            style={{ width: '100%', marginTop: '0%', height: 555 }}
          >
            <div className="platform__header" style={{ alignItems: 'center' }}>
              {!tempalteLoading && (
                <>
                  <h2 className="platform__title">Detail Report</h2>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="platform__dropdown">
                      <ul
                        className="matchsortBy__header"
                        style={{ margin: 0, minWidth: 187.53 }}
                        ref={reportDropdown}
                        onClick={() => {
                          setReportDropdownActive(!reportDropdownActive);
                        }}
                      >
                        <li>
                          <h6>{activeName}</h6>
                          <Icon path={mdiChevronDown} size={1} />
                          {reportDropdownActive && (
                            <ul>
                              {categoriesName.map((d, i) => (
                                <li
                                  className={
                                    d.segmentName === activeName ? 'active' : ''
                                  }
                                  onClick={() => {
                                    setReportDropdownActive(false);
                                    categorySelectionCallback(d.segmentID);
                                    tabSelectionCallback(
                                      tabs[d.segmentID][0].id
                                    );
                                    // socialsubplatformCallback("test123") //segmentName
                                  }}
                                >
                                  {d.segmentName}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                    {activeCategory === 'SEG103' ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          marginLeft: 20,
                        }}
                      >
                        <SocialPlatformSelector
                          mediaTypes={mediaPages}
                          iconClick={iconClick}
                          iconClickMain={iconClickMain}
                          iconClickValue={iconClickValue}
                          socialsubplatform={socialsubplatform}
                        />
                      </div>
                    ) : null}
                  </div>
                </>
              )}
            </div>
            <div className="platform__body">
              <>
                {activeCategory != 'SEG103' && !tempalteLoading && (
                  <ul className="platform__tabs">
                    {tabs[activeCategory] &&
                      tabs[activeCategory].map(d => (
                        <li
                          className={`${activeTab === d.id ? 'active' : ''}`}
                          onClick={() => {
                            tabSelectionCallback(d.id);
                            console.log('activeTab', activeTab);
                          }}
                        >
                          {d.name}
                        </li>
                      ))}
                  </ul>
                )}
                <div className="matchValuation__graph">
                  {bargraphdata &&
                  bargraphdata.length > 0 &&
                  activeCategory == 'SEG106' ? (
                    <>
                      <BarChart
                        data={barData}
                        loading={digitalReportGraphLoading}
                      />
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <Button
                          onClick={() => setMediaAnalysisOpen(true)}
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            width: 'max-content',
                          }}
                        >
                          View More
                        </Button>
                      </div>
                      <ModalAlert
                        open={mediaAnalysisOpen}
                        SetOpen={() => setMediaAnalysisOpen(false)}
                        title={
                          activeTab === 'FET121'
                            ? 'Brand Analysis'
                            : activeTab === 'FET122'
                            ? 'Asset Analysis'
                            : null
                        }
                        searchPlaceholder={
                          activeTab === 'FET121'
                            ? 'Search by Brand'
                            : activeTab === 'FET122'
                            ? 'Search by Asset'
                            : null
                        }
                        modeldata={[]}
                        socialsubplatform={socialsubplatform}
                        // data={data}
                        // dataKey="uv"
                        // pass table data array to modal to loop over
                        // tableData={}
                      />
                    </>
                  ) : null}
                  {bargraphdata &&
                  bargraphdata.length > 0 &&
                  activeCategory == 'SEG106' ? (
                    <div>
                      <div
                        style={{ top: '30vh' }}
                        className={
                          barStartIndex === 0
                            ? 'disable'
                            : 'analyticSlider__icon'
                        }
                        onClick={() => chnageprev()}
                      >
                        <Icon path={mdiChevronLeft} size={1.2} />
                      </div>
                      <div
                        className={
                          barEndIndex + 2 > bargraphdata.length
                            ? 'disable'
                            : 'analyticSlider__icon'
                        }
                        onClick={() => chnagenext()}
                        style={{ left: 'initial', right: '9vw', top: '30vh' }}
                      >
                        <Icon path={mdiChevronRight} size={1.2} />
                      </div>
                    </div>
                  ) : null}
                  {activeCategory == 'SEG101' && (
                    <div>
                      {headerDetails &&
                        headerDetails.length > 0 &&
                        headerDetails.slice(0, 3).map((v, i) => (
                          <div>
                            {/* <div>{v.pages.title}</div>  */}
                            <DetailsCard
                              key={i}
                              brandImg={v.pages.image}
                              imgUrl={v.subPlatformImage}
                              brandUrl={v.pages.URL}
                              brandName={v.pages.title}
                              followers={v.pages.followers}
                              following={v.pages.following}
                              pageValue={v.pages.value.data}
                              noOfPosts={v.pages.postCount}
                              data={v.pages.compare.details}
                              dataKey="value"
                              dataHead={v.pages.compare.duration}
                            />
                          </div>
                        ))}
                      {headerDetails && headerDetails.length > 0 ? (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <Button
                            onClick={() => setOpen(true)}
                            style={{
                              fontWeight: 'bold',
                              fontSize: 20,
                              width: 'max-content',
                            }}
                          >
                            View More
                          </Button>
                        </div>
                      ) : (
                        <svg width="100%" height={400}>
                          <GraphLoader width={1189} height={400} />
                        </svg>
                      )}
                      {headerDetails && headerDetails.length > 0 && (
                        <ModalAlert
                          open={open}
                          SetOpen={() => setOpen(!open)}
                          title="Page Value"
                          searchPlaceholder="Search by Page Name"
                          modeldata={headerDetails}
                          socialsubplatform={socialsubplatform}
                          filtersubplatform={filtersubplatform}
                          // data={data}
                          // dataKey="uv"
                          // pass table data array to modal to loop over
                          // tableData={}
                        />
                      )}
                    </div>
                  )}

                  {activeCategory == 'SEG105' && (
                    <div align="center">No Data Available</div>
                  )}

                  {activeCategory == 'SEG103' && (
                    <div>
                      <Location />
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                        }}
                      >
                        <Button
                          onClick={() => setLocationOpen(true)}
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            width: 'max-content',
                            marginLeft: '40vw',
                          }}
                        >
                          View More
                        </Button>
                      </div>
                      <ModalAlert
                        open={locationOpen}
                        SetOpen={() => setLocationOpen(false)}
                        title="Location Analysis"
                        searchPlaceholder="Search by Post"
                        modeldata={[]}
                        socialsubplatform={socialsubplatform}
                        // data={data}
                        // dataKey="uv"
                        // pass table data array to modal to loop over
                        // tableData={}
                      />
                    </div>
                  )}
                  {activeTab == 'FET106' && (
                    <div className="socialGeo_cardsUi">
                      <div className="socialGeo_cardsRightUi">
                        <CardsPost platform="twitter" />
                        <CardsPost platform="facebook" />
                        <CardsPost platform="instagram" />
                        {/* <CardsPost platform="twitter" />
                        <CardsPost platform="facebook" /> */}
                      </div>
                    </div>
                  )}
                  {activeTab == 'FET120' && (
                    <div>
                      {' '}
                      <ProfileDetails />
                    </div>
                  )}
                  {activeTab == 'FET102' && (
                    <div>
                      {' '}
                      <HashTagDetails socialsubplatform={socialsubplatform} />
                    </div>
                  )}
                  {activeTab == 'FET103' && (
                    <div align="center">No Data Available</div>
                  )}
                  {activeTab == 'FET105' && (
                    <div align="center">No Data Available</div>
                  )}
                </div>
                <div
                  className={`platform__graphSvg ${
                    graphType === 'Geomap' ? 'platform__graphSvg__geomap' : ''
                  } socialheatmap`}
                >
                  {graphData.length === 1000 && !digitalReportGraphLoading && (
                    <div style={{ textAlign: 'center' }}>
                      <GraphEmptyState
                        width={734}
                        height={250}
                        customTranslate="translate(11890, 4925)"
                        customTextTranslate="translate(11882, 4925)"
                      />
                    </div>
                  )}
                  {graphData.length === 10000 && digitalReportGraphLoading && (
                    <GraphLoader
                      width={734}
                      height={250}
                      customTranslate="translate(300.6078431372549, 70.64285714285714)"
                    />
                  )}
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mediaPagesProp: state.pageFilter.mediaPages,
});

// DetailsHeader.propTypes = {
//   mediaPagesProp: PropTypes.object,
// };

// DetailsHeader.defaultProps = {
//   mediaPagesProp: {
//     facebook: [{}],
//     Twitter: [{}],
//     instagram: [{}],
//   },
// };

export default connect(mapStateToProps)(DetailsHeader);

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

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      selectedTabVertical: 0,
    };
  }

  handleChangeVertical = (event, newValue) => {
    this.setState({
      selectedTabVertical: newValue,
    });
  };

  render() {
    return (
      <>
        <div className="socialGeo_cardsUi">
          <div className="socialGeo_verticalSelector">
            <Tabs
              value={this.state.selectedTabVertical}
              onChange={this.handleChangeVertical}
              orientation="vertical"
              TabIndicatorProps={{ style: { background: 'transparent' } }}
            >
              <Tab
                classes={{ wrapper: { textAlign: 'left' } }}
                label={
                  <Typography
                    style={
                      this.state.selectedTabVertical === 0
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                    className="socialGeo_profileNames"
                  >
                    {' '}
                    <GroupIcon style={{ marginRight: 10 }} /> Follower
                  </Typography>
                }
                style={
                  this.state.selectedTabVertical === 0
                    ? {
                        backgroundColor: 'rgb(0, 98, 204)',
                        textTransform: 'capitalize',
                        color: 'white',
                        borderRadius: 10,
                      }
                    : { textTransform: 'capitalize' }
                }
              />
              <Tab
                classes={{ wrapper: { textAlign: 'left' } }}
                label={
                  <Typography
                    style={
                      this.state.selectedTabVertical === 1
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                    className="socialGeo_profileNames"
                  >
                    {' '}
                    <GroupIcon style={{ marginRight: 10 }} /> Engagers
                  </Typography>
                }
                style={
                  this.state.selectedTabVertical === 1
                    ? {
                        backgroundColor: 'rgb(0, 98, 204)',
                        textTransform: 'capitalize',
                        color: 'white',
                        borderRadius: 10,
                      }
                    : { textTransform: 'capitalize' }
                }
              />
              <Tab
                classes={{ wrapper: { textAlign: 'left' } }}
                label={
                  <Typography
                    style={
                      this.state.selectedTabVertical === 2
                        ? { color: 'white' }
                        : { color: 'black' }
                    }
                    className="socialGeo_profileNames"
                  >
                    {' '}
                    <GroupIcon style={{ marginRight: 10 }} /> Influencers
                  </Typography>
                }
                style={
                  this.state.selectedTabVertical === 2
                    ? {
                        backgroundColor: 'rgb(0, 98, 204)',
                        textTransform: 'capitalize',
                        color: 'white',
                        borderRadius: 10,
                      }
                    : { textTransform: 'capitalize' }
                }
              />
            </Tabs>
          </div>
          <div className="socialGeo_cardsRightUi">
            <TabPanel value={this.state.selectedTabVertical} index={0}>
              <div className="socialGeo_profileCards">
                <CardsProfile platform="twitter" rank="1" rankvalue />
                <CardsProfile platform="facebook" rank="1" rankvalue />
                <CardsProfile platform="instagram" rank="1" rankvalue />
              </div>
            </TabPanel>
            <TabPanel value={this.state.selectedTabVertical} index={1}>
              <div className="socialGeo_profileCards">
                <CardsProfile platform="twitter" rank="1" rankvalue />
                <CardsProfile platform="facebook" rank="1" rankvalue />
                <CardsProfile platform="instagram" rank="1" rankvalue />
              </div>
            </TabPanel>
            <TabPanel value={this.state.selectedTabVertical} index={2}>
              <div className="socialGeo_profileCards">
                <CardsProfile platform="twitter" rank="1" rankvalue />
                <CardsProfile platform="facebook" rank="1" rankvalue />
                <CardsProfile platform="instagram" rank="1" rankvalue />
              </div>
            </TabPanel>
          </div>
        </div>
      </>
    );
  }
}

class HashTagDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashValue: '$12 M',
      hashAppear: '1.2 M',
      radiovalue: 'hashtags',
      title: 'Overall',
      color: '',
      open: false,
    };
  }

  onPieEnter = (title, hashAppear, hashValue, color) => {
    this.setState({
      title,
      hashAppear,
      hashValue,
      color,
    });
    // //console.log(data);
  };

  handleChangeRadio = event => {
    this.setState({
      radiovalue: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="socialGeo_cardsUi">
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                width: 'max-content',
              }}
            >
              <Radio
                checked={this.state.radiovalue === 'hashtags'}
                onChange={this.handleChangeRadio}
                value="hashtags"
                name="hashtags"
                style={{
                  color: '#890b0f',
                }}
              />{' '}
              <Typography style={{ color: 'black' }}>Hashtags</Typography>
              <Radio
                checked={this.state.radiovalue === 'mentions'}
                onChange={this.handleChangeRadio}
                value="mentions"
                name="mentions"
                style={{
                  color: '#890b0f',
                }}
              />{' '}
              <Typography style={{ color: 'black' }}>Mentions</Typography>
              <Radio
                checked={this.state.radiovalue === 'brandmentions'}
                onChange={this.handleChangeRadio}
                value="brandmentions"
                name="brandmentions"
                style={{
                  color: '#890b0f',
                }}
              />{' '}
              <Typography style={{ color: 'black' }}>Brand Mentions</Typography>
            </div>
            <div className="socialGeo_donutUi">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '80%',
                }}
              >
                <div
                  className="socialGeo_progressHover"
                  style={{ borderLeftColor: 'lightgreen', height: 60 }}
                  onMouseOver={() =>
                    this.onPieEnter('#One', '1.2 M', '$12 M', 'lightgreen')
                  }
                  onFocus={() =>
                    this.onPieEnter('#One', '1.2 M', '$12 M', 'lightgreen')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      #One
                    </Typography>
                    <div className="socialGeo_progressRight">
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        1.2 M
                      </Typography>
                      <div align="right" style={{ marginTop: 5, width: 100 }}>
                        <LinearProgress variant="determinate" value={92} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 20 }} />
                <div
                  className="socialGeo_progressHover"
                  style={{ borderLeftColor: 'skyblue', height: 60 }}
                  onMouseOver={() =>
                    this.onPieEnter('#Two', '1 M', '$10 M', 'skyblue')
                  }
                  onFocus={() =>
                    this.onPieEnter('#Two', '1 M', '$10 M', 'skyblue')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      #Two
                    </Typography>
                    <div className="socialGeo_progressRight">
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        1 M
                      </Typography>
                      <div align="right" style={{ marginTop: 5, width: 100 }}>
                        <LinearProgress variant="determinate" value={87} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 20 }} />
                <div
                  className="socialGeo_progressHover"
                  style={{ borderLeftColor: 'burlywood', height: 60 }}
                  onMouseOver={() =>
                    this.onPieEnter('#Three', '80 k', '$12 M', 'burlywood')
                  }
                  onFocus={() =>
                    this.onPieEnter('#Three', '80 k', '$12 M', 'burlywood')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      #Three
                    </Typography>
                    <div className="socialGeo_progressRight">
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        82 K
                      </Typography>
                      <div align="right" style={{ marginTop: 5, width: 100 }}>
                        <LinearProgress variant="determinate" value={70} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 20 }} />
                <div
                  className="socialGeo_progressHover"
                  style={{ borderLeftColor: 'cadetblue', height: 60 }}
                  onMouseOver={() =>
                    this.onPieEnter('#Four', '12 K', '$12 M', 'cadetblue')
                  }
                  onFocus={() =>
                    this.onPieEnter('#Four', '1.2 M', '$12 M', 'cadetblue')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      #Four
                    </Typography>
                    <div className="socialGeo_progressRight">
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        34 K
                      </Typography>
                      <div align="right" style={{ marginTop: 5, width: 100 }}>
                        <LinearProgress variant="determinate" value={52} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: 20 }} />
                <div
                  className="socialGeo_progressHover"
                  style={{ borderLeftColor: 'tomato', height: 60 }}
                  onMouseOver={() =>
                    this.onPieEnter('#Five', '12 K', '$12 M', 'tomato')
                  }
                  onFocus={() =>
                    this.onPieEnter('#Five', '1.2 M', '$12 M', 'tomato')
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      #Five
                    </Typography>
                    <div className="socialGeo_progressRight">
                      <Typography
                        variant="h4"
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        12 K
                      </Typography>
                      <div align="right" style={{ marginTop: 5, width: 100 }}>
                        <LinearProgress variant="determinate" value={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="socialGeo_cardsRightUi"
            style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <div className="socialGeo_banner socialGeo_banner6">
              <h1 className="socialGeo_h1">{this.state.title}</h1>
            </div>
            <CardsHashTag
              // textappear="No. of Apperances"
              // text="Total value"
              value="$12 M"
              appear="1.2 M"
              color={this.state.color}
              // textFb="Total value"
              // textFbappear="No. of Apperances"
              valueFb={this.state.hashValue}
              appearFb={this.state.hashAppear}
              imgUrlFb="https://duckduckgo.com/i/40e06ed9.png"
              // textTwitterappear="No. of Apperances"
              // textTwitter="Total value"
              valueTwitter={this.state.hashValue}
              appearTwitter={this.state.hashAppear}
              imgUrlTwitter="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVQV5g2SEwoHbDQUnHZx0b6wrHvYPVer1Oow9iD1YmNjhyu5jI"
              // textInstaappear="No. of Apperances"
              // textInsta="Total value"
              valueInsta={this.state.hashValue}
              appearInsta={this.state.hashAppear}
              imgUrlInsta="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Button
                onClick={() =>
                  this.setState({
                    open: true,
                  })
                }
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  width: 'max-content',
                }}
              >
                View More
              </Button>
            </div>
            <ModalAlert
              open={this.state.open}
              SetOpen={() => {
                this.setState({ open: false });
              }}
              title="Hashtag Analysis"
              searchPlaceholder="Search by Brand"
              modeldata={[]}
              socialsubplatform={this.props.socialsubplatform}
              // data={data}
              // dataKey="uv"
              // pass table data array to modal to loop over
              // tableData={}
            />
          </div>
        </div>
      </>
    );
  }
}
