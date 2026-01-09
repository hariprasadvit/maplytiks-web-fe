/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import Slider from 'react-slick';
// import { mdiChevronLeft, mdiChevronRight, mdiChevronDown } from '@mdi/js';
import useDropdownClose from 'components/common/hooks/useDropdownClose';
import GraphEmptyState from 'components/common/GraphEmptyState';
import GraphLoader from 'components/common/GraphLoader';
import { _numberToHumanReadableFormatConverter } from 'utils/helpers';
import {
  mdiCalendar,
  mdiClose,
  mdiArrowRight,
  mdiChevronDown,
  mdiFilterOutline,
  mdiChevronLeft,
  mdiChevronRight,
} from '@mdi/js';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import rank1 from 'images/rank/1.png';
import rank2 from 'images/rank/2.png';
import rank3 from 'images/rank/3.png';
import rank4 from 'images/rank/4.png';
import rank5 from 'images/rank/5.png';
import rank6 from 'images/rank/6.png';
import rank7 from 'images/rank/7.png';
import rank8 from 'images/rank/8.png';
import rank9 from 'images/rank/9.png';
import rank10 from 'images/rank/10.png';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Masonry from 'react-masonry-component';

import DateTimeRangeContainer from 'react-advanced-datetimerange-picker';
import { FormControl as DateFormControl } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Select from 'react-dropdown-select';
import Avatar from '@material-ui/core/Avatar';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { connect } from 'react-redux';
import {
  RankPage,
  RankPost,
  RankBrand,
  RankAsset,
  RankProfile,
} from './SocialRankCard';
import SocialPlatformSelector from './socialPlatformSelector';

const totalObject = [];
let twitterState = 'twittertrue';
let fbState = 'fbtrue';
let instaState = 'instatrue';

const Rank = ({
  data: {
    template: { categoriesName = [], tabs = {}, loading: templateLoading } = {},
    rank: { data: ranks = [], loading: ranksLoading } = {},
    categorySelectionCallback,
    tabSelectionCallback,
    activeCategory,
    activeTab,
    selectedRankDateTime,
    rankdatetimeCallback,
    socialsubplatform,
    ranksocialsubplatform,
  } = {},
  mediaPagesProp,
}) => {
  console.log('rankdata', socialsubplatform);
  const [selectedDonut, setSelectedDonut] = useState(socialsubplatform);
  useEffect(() => {
    setSelectedDonut(socialsubplatform);
  }, [socialsubplatform]);
  const slider = useRef();
  const dropdown = useRef();
  const [dropdownActive, setDropdownActive] = useState(false);
  useDropdownClose(dropdown, setDropdownActive);

  const [isDatePickerActive, setIsDatePickerActive] = useState(false);
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const valueDropdown = useRef();
  const datePicker = useRef();
  const [activeName, setactiveName] = useState('');
  const [state, setState] = useState([new Date(), new Date()]);
  const [RankData, setRankData] = useState([]);

  const [MenufeatureID, setMenufeatureID] = useState();
  const [MenusegmentID, setMenusegmentID] = useState();

  const [mediaPages, setMediaPages] = React.useState();
  const [twitterPage, setTwitterPage] = React.useState({});
  const [fbPage, setFbPage] = React.useState({});
  const [instaPage, setInstaPage] = React.useState({});
  const [finalSubCallback, setFinalSubCallback] = useState();
  React.useEffect(() => {
    console.log('mediaPagesProp', mediaPagesProp);
  });

  let twitterObject = {};
  let fbObject = {};
  let instaObject = {};

  const objects = iconState => {
    if(mediaPagesProp && mediaPagesProp.length>0){
    twitterObject = {
      subplatform: 'Twitter',
      Pages:
        twitterState !== 'twitterfalse'
          ? mediaPagesProp.twitter.map(d => d.id)
          : [],
    };
    fbObject = {
      subplatform: 'Facebook',
      Pages:
        fbState !== 'fbfalse' ? mediaPagesProp.facebook.map(d => d.id) : [],
    };
    instaObject = {
      subplatform: 'Instagram',
      Pages:
        instaState !== 'instafalse'
          ? mediaPagesProp.instagram.map(d => d.id)
          : [],
    };
  }
  };
  const filterFromAll = React.useCallback(icon => {
    if(mediaPagesProp && mediaPagesProp.length>0){
    switch (icon) {
      case 'twitter':
        objects();
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
        objects();
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
        objects();
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
      console.log('ranksocialsubplatform', totalObject);
      setFinalSubCallback(totalObject)
      FinalSubCallback();
    }
  }
});

  function FinalSubCallback(){
    if(finalSubCallback){
      ranksocialsubplatform(finalSubCallback)
    }
  }

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

  const iconClick = (icon, iconState) => {
    console.log('iconState3', icon, iconState);
    switch (icon) {
      case 'twitter':
        twitterState = iconState;
        break;
      case 'fb':
        fbState = iconState;
        break;
      case 'insta':
        instaState = iconState;
        break;
      default:
        break;
    }
    filterFromAll(icon);
  };

  const iconClickMain = (icon, iconState) => {
    // console.log('popup', icon, iconState);
    // switch (icon) {
    //   case 'twitter':
    //     setTwitterState(iconState);
    //     break;
    //   case 'fb':
    //     setFbState(iconState);
    //     break;
    //   case 'insta':
    //     setInstaState(iconState);
    //     break;
    //   default:
    //     break;
    // }
    // objects();
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

  useDropdownClose(datePicker, setIsDatePickerActive);

  useEffect(() => {
    if (activeCategory && activeTab) {
      setMenufeatureID(activeCategory);
      setMenusegmentID(activeTab);
    }
  }, [activeCategory, activeTab]);

  useEffect(() => {
    if (ranks && ranks.length > 0) {
      setRankData(ranks.slice(0, 3));
    }
  }, [ranks]);

  const masonryOptions = {
    transitionDuration: 1,
    gutter: 15,
    resize: true,
  };

  const now = new Date();
  const start = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  );
  const end = moment(start)
    .add(1, 'days')
    .subtract(1, 'seconds');
  const ranges = {
    'Today Only': [moment(start), moment(end)],
    'Yesterday Only': [
      moment(start).subtract(1, 'days'),
      moment(end).subtract(1, 'days'),
    ],
    '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
    'Match Day': [
      moment(start).subtract(0, 'days'),
      moment(start).subtract(4, 'days'),
      moment(start).subtract(4, 'days'),
      moment(end),
    ],
  };
  const local = {
    format: 'DD-MM-YYYY HH:mm',
    sundayFirst: false,
  };
  const maxDate = moment(start).add(24, 'hour');

  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 0,
    },
    noLabel: {
      marginTop: theme.spacing(0),
    },
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 0;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  useEffect(() => {
    if (activeCategory) {
      categoriesName.map((d, l) => {
        if (d.segmentID == activeCategory) {
          setactiveName(d.segmentName);
        }
      });
    }
  }, [categoriesName, activeCategory]);

  return (
    <div className="platform__card" style={{ marginBottom: '30px' }}>
      <div className="platform">
        <div className="platform__header">
          <Grid container spacing={0}>
            <Grid item xs={1} sm={1}>
              <h2 className="platform__title">Ranking</h2>
            </Grid>
            <Grid item xs={3} sm={3}>
              {!templateLoading && (
                <ul
                  className="matchsortBy__header rankHeader"
                  ref={dropdown}
                  onClick={() => {
                    setDropdownActive(!dropdownActive);
                  }}
                >
                  {/* <li>
        <h6>{categories[activeCategory]}</h6>
        <Icon path={mdiChevronDown} size={1} />
        {dropdownActive && (
          <ul>
            {Object.keys(categories).map((d, i) => (
              <li
                className={d === activeCategory ? 'active' : ''}
                onClick={() => {
                  setDropdownActive(false);
                  categorySelectionCallback(d);
                  tabSelectionCallback(
                    tabs[Object.keys(categories)[i]][0].id,
                  );
                }}
              >
                {categories[d]}
              </li>
            ))}
          </ul>
        )}
      </li> */}
                  <li>
                    <h6>{activeName}</h6>
                    <Icon path={mdiChevronDown} size={1} />
                    {dropdownActive && (
                      <ul>
                        {categoriesName.map((d, i) => (
                          <li
                            className={
                              d.segmentName === activeName ? 'active' : ''
                            }
                            onClick={() => {
                              setDropdownActive(false);
                              categorySelectionCallback(d.segmentID);
                              tabSelectionCallback(tabs[d.segmentID][0].id);
                            }}
                          >
                            {d.segmentName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </Grid>
            <Grid item xs={6} sm={6}>
              {/* <div>
                    <DateTimeRangeContainer
                        ranges={ranges}
                        start={start}
                        end={end}
                        local={local}
                        maxDate={maxDate}
                        applyCallback={applyCallback}
                    >
                        <DateFormControl
                        id="formControlsTextB"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        />
                    </DateTimeRangeContainer>
                </div> */}

              <div className="socialCrumbs__date-range">
                <span
                  className="socialdaterange__icon socialripple"
                  onClick={() => {
                    if (selectedRankDateTime) {
                      setIsDateSelected(false);
                      setDate(null);
                      rankdatetimeCallback(null);
                    }
                    if (!selectedRankDateTime)
                      setIsDatePickerActive(!isDatePickerActive);
                  }}
                >
                  {selectedRankDateTime && (
                    <Icon path={mdiClose} size={1} color="#fff" />
                  )}
                  {!selectedRankDateTime && (
                    <Icon path={mdiCalendar} size={1} color="#fff" />
                  )}
                </span>
                <div className="socialdaterange__block">
                  <div className="socialdaterange__sec">
                    <div className="socialdaterange__label">
                      {selectedRankDateTime
                        ? moment(selectedRankDateTime.start).format(
                            'DD MMM YYYY'
                          )
                        : 'From'}
                    </div>
                  </div>
                  <Icon path={mdiArrowRight} size={0.9} />
                  <div className="socialdaterange__sec">
                    <div className="socialdaterange__label">
                      {selectedRankDateTime
                        ? moment(selectedRankDateTime.end).format('DD MMM YYYY')
                        : 'To'}
                    </div>
                  </div>
                </div>
                <div className="socialdaterange__dropdown" ref={datePicker}>
                  {isDatePickerActive && (
                    <DateRangePicker
                      onSelect={da => {
                        setDate(da);
                        setIsDateSelected(true);
                        setIsDatePickerActive(false);
                        rankdatetimeCallback(da);
                      }}
                      value={selectedRankDateTime}
                      numberOfCalendars={2}
                    />
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={2} sm={1}>
              <div>
                <SocialPlatformSelector
                  mediaTypes={mediaPages}
                  iconClick={iconClick}
                  iconClickMain={iconClickMain}
                  iconClickValue={iconClickValue}
                  socialsubplatform={selectedDonut}
                  from="rank"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="platform__body">
          <div className="platform__gragh">
            <>
              {!templateLoading && (
                <>
                  <ul className="platform__ranktabs">
                    {tabs[activeCategory] &&
                      tabs[activeCategory].map(d => (
                        <li
                          className={`${activeTab === d.id ? 'active' : ''}`}
                          onClick={() => tabSelectionCallback(d.id)}
                        >
                          {d.name}
                        </li>
                      ))}
                  </ul>
                </>
              )}
              <h5 className="matchValuation__subtitle rankfooter">
                Ranking based on the valuation of the individual post
              </h5>
              <div className="platform__graphSvg">
                <div
                  className="analyticSlider rank"
                  style={
                    MenufeatureID === 'SEG104'
                      ? { height: 400, margin: '-30px 0px 0px 0px' }
                      : MenufeatureID === 'SEG102'
                      ? { height: 490, margin: '-30px 0px 80px 0px' }
                      : MenufeatureID === 'SEG105'
                      ? { height: 350, margin: '-30px 0px -20px 0px' }
                      : MenufeatureID === 'SEG103'
                      ? { height: 480, margin: '-30px 0px 50px 0px' }
                      : { height: 390, margin: '-30px 0px 130px 0px' }
                  }
                >
                  {1 > 0 && ( //! ranksLoading && ranks.length
                    <>
                      {/* {ranks.length > 5 && (
                        <div
                          className="analyticSlider__icon"
                          onClick={() => slider.slickPrev()}
                        >
                          <Icon path={mdiChevronLeft} size={1.2} />
                        </div>
                      )} */}

                      <div
                        style={{ top: '15vh' }}
                        className="analyticSlider__icon"
                        onClick={() => slider.slickPrev()}
                      >
                        <Icon path={mdiChevronLeft} size={1.2} />
                      </div>

                      {/* {ranks.length > 5 ? (
                          <Slider ref={c => (slider = c)} {...settings}>
                            {ranks.map((d,i) => (
                                                     <div className="rankcardstyle">
                                                     <Masonry options={masonryOptions} enableResizableChildren style={{marginLeft:"1%"}}>
                                                             <SocialRankCard rank="1" rankvalue platform="twitter"/>
                                                             <SocialRankCard rank="2" rankvalue platform="facebook"/>
                                                             <SocialRankCard rank="3" rankvalue platform="instagram"/>
                                                             </Masonry>
                                                             </div>
                            ))}
                          </Slider>
                        ) : (
                          ranks.map((d,i) => (
                            <Rankingcard
                              rankingVideo="https://via.placeholder.com/187x310"
                              details={d.topValues || []}
                              count ={i}
                            />
                          ))
                        )} */}

                      <div className="rankcardstyle">
                        {/* <div>{MenufeatureID}{MenusegmentID}</div> */}
                        <Masonry
                          options={masonryOptions}
                          enableResizableChildren
                          style={{ marginLeft: '2%' }}
                        >
                          {MenufeatureID == 'SEG104' &&
                            RankData &&
                            ranks.length > 0 &&
                            RankData.map((list, i) => (
                              <RanksPage list={list} />
                            ))}
                          {MenufeatureID == 'SEG101' &&
                            ranks &&
                            ranks.length > 0 &&
                            RankData.map((list, i) => (
                              <RanksPost list={list} />
                            ))}
                          {MenufeatureID == 'SEG102' &&
                            RankData &&
                            ranks.length > 0 &&
                            RankData.map((list, i) => (
                              <RanksAsset list={list} />
                            ))}
                          {MenufeatureID == 'SEG103' &&
                            RankData &&
                            ranks.length > 0 &&
                            RankData.map((list, i) => (
                              <RanksAsset list={list} />
                            ))}
                          {MenufeatureID == 'SEG105' &&
                            RankData &&
                            ranks.length > 0 &&
                            RankData.map((list, i) => (
                              <RanksProfile list={list} />
                            ))}
                        </Masonry>
                      </div>

                      {/* {ranks.length > 5 && (
                        <div
                          className="analyticSlider__icon"
                          onClick={() => slider.slickNext()}
                          style={{ left: 'initial', right: 0 }}
                        >
                          <Icon path={mdiChevronRight} size={1.2} />
                        </div>
                      )} */}

                      <div
                        className="analyticSlider__icon"
                        onClick={() => slider.slickNext()}
                        style={{ left: 'initial', right: 0, top: '15vh' }}
                      >
                        <Icon path={mdiChevronRight} size={1.2} />
                      </div>
                    </>
                  )}
                  {/* EMPTY STATE */}
                  {ranks.length === 100000 &&
                  !ranksLoading && ( // ranks.length === 0
                      <div style={{ textAlign: 'center' }}>
                        <GraphEmptyState
                          width={1189}
                          height={290}
                          customTranslate="translate(12120, 4955)"
                          customTextTranslate="translate(11882, 4925)"
                        />
                      </div>
                    )}

                  {/* LOADER */}
                  {ranks.length === 100000 &&
                  ranksLoading && ( // ranks.length === 0
                      <GraphLoader
                        width="100%"
                        height={590}
                        customTranslate="translate(500.6078431372549, 140.64285714285714)"
                      />
                    )}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

Rank.propTypes = {
  data: PropTypes.object,
  // mediaPagesProp: PropTypes.object,
};

// Rank.defaultProps = {
//   mediaPagesProp: {
//     facebook: [{}],
//     Twitter: [{}],
//     instagram: [{}],
//   },
// };

const mapStateToProps = state => ({
  mediaPagesProp: state.pageFilter.mediaPages,
});

export default connect(mapStateToProps)(Rank);

function RanksPage(list) {
  // console.log("datalist.",list.list)
  return (
    <div>
      {' '}
      {list.list.page && (
        <RankPage
          brand
          rank={String(list.list.rank)}
          rankvalue={String(list.list.rankValue.data)}
          page={list.list.page}
          supplement={list.list.supplement}
        />
      )}
    </div>
  );
}

function RanksPost(list) {
  // console.log('RanksPost', list.list);
  return (
    <div>
      {' '}
      {list.list.post && (
        <RankPost
          rank={String(list.list.rank)}
          rankvalue={String(list.list.rankValue.data)}
          platform="facebook"
          post={list.list.post}
        />
      )}
    </div>
  );
}

function RanksBrand(list) {
  // console.log('datalist.', list.list);
  return (
    <div>
      {list.list.platforms && (
        <RankBrand
          rank={String(list.list.rank)}
          rankvalue={list.list.rankValue}
          platforms={list.list.platforms}
          supplement={list.list.supplement}
        />
      )}
    </div>
  );
}

function RanksAsset(list) {
  // console.log('datalist....', list.list);
  return (
    <div>
      {list.list.platforms && (
        <RankAsset
          rank={String(list.list.rank)}
          rankvalue={list.list.rankValue}
          platforms={list.list.platforms}
          supplement={list.list.supplement}
        />
      )}
    </div>
  );
}

function RanksProfile(list) {
  // console.log('datalist.....Ranks', list.list);
  return (
    <div>
      {list.list.profile && (
        <RankProfile
          profile={list.list.profile}
          rank={String(list.list.rank)}
          rankvalue={String(list.list.rankValue.data)}
          supplement={list.list.supplement}
        />
      )}
    </div>
  );
}
