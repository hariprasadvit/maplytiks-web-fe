import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PeopleIcon from '@material-ui/icons/People';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NumericLabel from 'react-pretty-numbers';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
// import "./Modal.css";
import { connect } from 'react-redux';
import { DetailsCardSub } from './DetailsCard';
import data from './api';
import SocialPlatformSelector from '../socialPlatformSelector';

const totalObject = [];
const filteredArr = [];
let twitterState = 'twittertrue';
let fbState = 'fbtrue';
let instaState = 'instatrue';

const ModalAlert = props => {
  const [fb, setFb] = React.useState(true);
  const [twitter, setTwitter] = React.useState(true);
  const [insta, setInsta] = React.useState(true);
  const [mediaNames, setMediaNames] = React.useState();
  const [postNames, setPostNames] = React.useState();
  const [categoryNames, setCategoryNames] = React.useState();
  const [detailsData, setDetailsData] = React.useState();
  const [mediaPages, setMediaPages] = React.useState();
  const [twitterPage, setTwitterPage] = React.useState();
  const [fbPage, setFbPage] = React.useState();
  const [instaPage, setInstaPage] = React.useState();
  const [postSearchValue, setPostSearchValue] = React.useState();
  const [media1, setMedia1] = React.useState();
  const [media2, setMedia2] = React.useState();
  const [media3, setMedia3] = React.useState();

  const [pageNamestatus, setPageNamestatus] = React.useState(true);
  const [pageValuestatus, setPageValuestatus] = React.useState(true);
  const [postValuetatus, setPostValuetatus] = React.useState(true);

  let twitterObject = {};
  let fbObject = {};
  let instaObject = {};

  function postSearch(event) {
    try {
      // console.log("event",event.target.value)
      setPostSearchValue(event.target.value);
    } catch (error) {}
  }

  const handleChange = event => {
    setMediaNames(event.target.value);
  };
  const handleChange2 = event => {
    setPostNames(event.target.value);
  };
  const handleChange3 = event => {
    setCategoryNames(event.target.value);
  };

  useEffect(() => {
    if (props.modeldata && props.modeldata.length > 0) {
      let result = [];
      result = props.modeldata;
      if (postSearchValue && postSearchValue.length > 0) {
        const postresult = result.filter(function(data) {
          return data.pages.title
            .toLowerCase()
            .startsWith(postSearchValue.toLowerCase());
        });
        if (postresult.length > 0) {
          result = postresult;
        }
      }

      console.log('tested', result);

      if (mediaNames && mediaNames.length > 0) {
        const typeofmedia = [];
        result.map((list, i) => {
          let countpagevalue = 0;
          list.pages.category.mediaType.map((medialist, j) => {
            if (mediaNames.includes(medialist.typeName)) {
              countpagevalue += medialist.value.data;
            }
          });
          const pageresult = list;
          pageresult.totalvalue = countpagevalue;
          typeofmedia.push(pageresult);
        });
        if (typeofmedia.length > 0) {
          result = typeofmedia;
        }
      } else {
        console.log('tested', result);
      }

      if (postNames && postNames.length > 0) {
        const typeofpostNames = [];
        result.map((list, i) => {
          list.pages.category.postType.map((medialist, j) => {
            if (postNames.includes(medialist.typeName)) {
              typeofpostNames.push(list);
            }
          });
        });
        if (typeofpostNames.length > 0) {
          result = typeofpostNames;
        }
      }

      if (categoryNames && categoryNames.length > 0) {
        const typeofcategoryNames = [];
        result.map((list, i) => {
          list.pages.category.postCategory.map((medialist, j) => {
            if (categoryNames.includes(medialist.typeName)) {
              typeofcategoryNames.push(list);
            }
          });
        });
        if (typeofcategoryNames.length > 0) {
          result = typeofcategoryNames;
        }
      }

      if (result.length > 0) {
        setDetailsData(result);
      } else {
        setDetailsData(props.modeldata);
      }

      console.log('result', result);
    }
  }, [props.modeldata, postSearchValue, mediaNames, postNames, categoryNames]);

  // detailsPage.sort((a,b)=>b.pages.value.data - a.pages.value.data)

  useEffect(() => {
    if (props.modeldata && props.modeldata.length > 0) {
      setDetailsData(props.modeldata);
      const mediaTypes = [];
      const postTypes = [];
      const categoryTypes = [];
      props.modeldata.map((list, i) => {
        list.pages.category.mediaType.map((medialist, j) => {
          // console.log("list.",medialist.typeName)
          if (!mediaTypes.includes(medialist.typeName)) {
            if (medialist) {
              mediaTypes.push(medialist.typeName);
            }
          }
        });
        list.pages.category.postType.map((postT, j) => {
          if (!postTypes.includes(postT.typeName)) {
            if (postT) {
              postTypes.push(postT.typeName);
            }
          }
        });
        list.pages.category.postCategory.map((postCat, j) => {
          if (!categoryTypes.includes(postCat.typeName)) {
            if (postCat) {
              categoryTypes.push(postCat.typeName);
            }
          }
        });
      });
      if (mediaTypes.length > 0) {
        setMediaNames(mediaTypes);
        setMedia1(mediaTypes);
      }
      if (postTypes.length > 0) {
        setPostNames(postTypes);
        setMedia2(postTypes);
      }
      if (categoryTypes.length > 0) {
        setCategoryNames(categoryTypes);
        setMedia3(categoryTypes);
      }
    }
  }, [props.modeldata]);

  const pageNameSort = () => {
    if (pageNamestatus) {
      setPageNamestatus(false);
      setDetailsData(
        detailsData.sort(function(a, b) {
          if (a.pages.title < b.pages.title) {
            return -1;
          }
          if (a.pages.title > b.pages.title) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      setPageNamestatus(true);
      setDetailsData(
        detailsData.sort(function(a, b) {
          if (b.pages.title < a.pages.title) {
            return -1;
          }
          if (b.pages.title > a.pages.title) {
            return 1;
          }
          return 0;
        })
      );
    }
  };
  const pageValueSort = () => {
    if (pageValuestatus) {
      setPageValuestatus(false);
      setDetailsData(
        detailsData.sort((a, b) => a.pages.value.data - b.pages.value.data)
      );
    } else {
      setPageValuestatus(true);
      setDetailsData(
        detailsData.sort((a, b) => b.pages.value.data - a.pages.value.data)
      );
    }
  };
  const postValueSort = () => {
    if (postValuetatus) {
      setPostValuetatus(false);
      setDetailsData(
        detailsData.sort((a, b) => a.pages.postCount - b.pages.postCount)
      );
    } else {
      setPostValuetatus(true);
      setDetailsData(
        detailsData.sort((a, b) => b.pages.postCount - a.pages.postCount)
      );
    }
  };
  const objects = iconState => {
    console.log('iconAndState', twitterState, fbState, instaState);
    twitterObject = {
      subplatform: 'Twitter',
      Pages:
        twitterState !== 'twitterfalse'
          ? props.mediaPages.twitter.map(d => d.id)
          : [],
    };
    fbObject = {
      subplatform: 'Facebook',
      Pages:
        fbState !== 'fbfalse' ? props.mediaPages.facebook.map(d => d.id) : [],
    };
    instaObject = {
      subplatform: 'Instagram',
      Pages:
        instaState !== 'instafalse'
          ? props.mediaPages.instagram.map(d => d.id)
          : [],
    };
  };

  const filterFromAll = React.useCallback(icon => {
    switch (icon) {
      case 'twitter':
        objects();
        setTwitterPage(
          props.mediaPages.twitter.map(d => ({
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
          props.mediaPages.facebook.map(d => ({
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
          props.mediaPages.instagram.map(d => ({
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
      console.log('totalObjectlist', totalObject);
      props.filtersubplatform(totalObject)
    }
  });

  React.useEffect(() => {
    setMediaPages(twitterPage);
    // console.log('twitterPage', twitterPage);
  }, [twitterPage]);
  React.useEffect(() => {
    setMediaPages(fbPage);
    // console.log('fbPage', fbPage);
  }, [fbPage]);
  React.useEffect(() => {
    setMediaPages(instaPage);
    // console.log('instaPage', instaPage);
  }, [instaPage]);

  const iconClick = (icon, iconState) => {
    // console.log(icon);
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

  const iconClickMain = iconState => {
    // console.log('popup', iconState);
    // objects(iconState);
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

  // const filterData = () => {

  // };

  // React.useEffect(() => {
  //   if (detailsData && detailsData.length > 0) {
  //     filteredArr = detailsData.reduce((acc, current) => {
  //       const x = acc.find(
  //         item =>
  //           item.subPlatformName === current.subPlatformName &&
  //           item.pages.title === current.pages.title
  //       );
  //       if (!x) {
  //         console.log('acc.concat([current])', acc.concat([current]));
  //         return acc.concat([current]);
  //       }
  //       return acc;
  //     }, []);
  //   }
  // }, [detailsData]);

  const option = {
    locales: 'en-US',
    percentage: false,
    precision: 2,
    wholenumber: null,
    commafy: true,
    shortFormat: true,
    shortFormatMinValue: 10000,
    shortFormatPrecision: 1,
    justification: 'L',
  };

  const tempArr = Array.from('ABCDEFG');
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const [brandName, setBrandName] = React.useState(names);
  const handleChangeBrand = event => {
    setBrandName(event.target.value);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Modal open={props.open} onClose={props.SetOpen}>
      <div className="modalPopup">
        <div>
          {props.title !== 'Page Value' && (
            <div className="filterSearch">
              <div
                className="filterLists_table"
                style={{ border: '1px solid' }}
              >
                <Select
                  style={{ width: 250, paddingLeft: 10 }}
                  disableUnderline
                  multiple
                  value={brandName}
                  onChange={handleChangeBrand}
                  input={<Input />}
                  renderValue={selected => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={brandName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          )}
          <Typography
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 'bold',
            }}
            variant="h5"
          >
            {props.title}
          </Typography>
          <div className="filterSocial">
            <SocialPlatformSelector
              mediaTypes={mediaPages}
              iconClick={iconClick}
              iconClickMain={iconClickMain}
              iconClickValue={iconClickValue}
              socialsubplatform={props.socialsubplatform}
            />
          </div>
        </div>
        {props.title === 'Page Value' ? (
          <div className="filterList">
            <div className="filterLists_table">
              <FingerprintIcon className="filterListsIcon" />
              <input
                onKeyUp={postSearch}
                autoFocus
                placeholder={props.searchPlaceholder}
                style={{
                  border: 'none',
                  width: '100%',
                  backgroundColor: 'transparent',
                  outline: 'none',
                }}
              />
              <SearchIcon className="filterListsIcon2" />
            </div>
            <div className="filterLists_table">
              <LocationOnIcon className="filterListsIcon" />
              <FormControl className="formControl">
                <Select
                  disableUnderline
                  multiple
                  value={mediaNames}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={selected => selected.join(', ')}
                >
                  <MenuItem value="none" disabled>
                    Media Type
                  </MenuItem>
                  {media1 &&
                    media1.length > 0 &&
                    media1.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          style={{
                            color: '#890b0f',
                          }}
                          checked={mediaNames.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="filterLists_table">
              <CreditCardIcon className="filterListsIcon" />
              <FormControl className="formControl">
                <Select
                  disableUnderline
                  multiple
                  value={postNames}
                  onChange={handleChange2}
                  input={<Input />}
                  renderValue={selected => selected.join(', ')}
                >
                  <MenuItem value="none" disabled>
                    Post Type
                  </MenuItem>
                  {media2 &&
                    media2.length > 0 &&
                    media2.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          style={{
                            color: '#890b0f',
                          }}
                          checked={postNames.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div className="filterLists_table">
              <PeopleIcon className="filterListsIcon" />
              <FormControl className="formControl">
                <Select
                  disableUnderline
                  multiple
                  value={categoryNames}
                  onChange={handleChange3}
                  input={<Input />}
                  renderValue={selected => selected.join(', ')}
                >
                  <MenuItem value="none" disabled>
                    Post Category
                  </MenuItem>
                  {media3 &&
                    media3.length > 0 &&
                    media3.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          style={{
                            color: '#890b0f',
                          }}
                          checked={categoryNames.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </div>
        ) : (
          <div className="filterList">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0 20px',
                width: '100%',
              }}
            >
              <div className="popupInfoCard">
                <div style={{ width: '20%' }}>
                  <img
                    src="https://i.ibb.co/QkrcNZk/loss.png"
                    alt=""
                    style={{ width: '75%' }}
                  />
                </div>
                <div className="popupInfoCardDiv2">
                  <div style={{ fontSize: '12px' }}>Brand Value (USD)</div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <NumericLabel params={option}>153248</NumericLabel> USD
                  </div>
                </div>
              </div>
              <div className="popupInfoCard">
                <div style={{ width: '20%' }}>
                  <img
                    src="https://i.ibb.co/QkrcNZk/loss.png"
                    alt=""
                    style={{ width: '75%' }}
                  />
                </div>
                <div className="popupInfoCardDiv2">
                  <div style={{ fontSize: '12px' }}>Brand Quality (%)</div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <NumericLabel
                      params={{
                        percentage: true,
                        precision: 1,
                        shortFormatPrecision: 2,
                        justification: 'L',
                      }}
                    >
                      {88.2 / 100}
                    </NumericLabel>
                  </div>
                </div>
              </div>
              <div className="popupInfoCard">
                <div style={{ width: '20%' }}>
                  <img
                    src="https://i.ibb.co/QkrcNZk/loss.png"
                    alt=""
                    style={{ width: '75%' }}
                  />
                </div>
                <div className="popupInfoCardDiv2">
                  <div style={{ fontSize: '12px' }}>
                    Brand Presence Impact (%)
                  </div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <NumericLabel
                      params={{
                        percentage: true,
                        precision: 1,
                        shortFormatPrecision: 2,
                        justification: 'L',
                      }}
                    >
                      {72.9 / 100}
                    </NumericLabel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="rows">
          <div className="tableHead">
            <Typography
              className="modalDivideName"
              style={props.title !== 'Page Value' ? { width: '60%' } : null}
              onClick={props.title === 'Page Value' ? pageNameSort : null}
            >
              {props.title === 'Page Value' ? 'Page Name' : 'Posts'}{' '}
              <ImportExportIcon />
            </Typography>
            <Typography
              className="modalDivideValue"
              onClick={props.title === 'Page Value' ? pageValueSort : null}
            >
              {props.title === 'Page Value' ? 'Page Value' : 'Post Value'}{' '}
              <ImportExportIcon />
            </Typography>
            {props.title === 'Page Value' && (
              <Typography className="modalDivideNumber" onClick={postValueSort}>
                # of Post Valued <ImportExportIcon />
              </Typography>
            )}
            {props.title !== 'Page Value' && (
              <Typography
                className="modalDivideNumber"
                style={{ width: '21%', justifyContent: 'flex-end' }}
              >
                Media Analysis
              </Typography>
            )}
            {props.title === 'Page Value' && (
              <Typography className="modalDivideGraph">Last 7 days</Typography>
            )}
            <Typography
              style={
                props.title === 'Page Value'
                  ? { color: 'black' }
                  : { color: 'black', width: '20%' }
              }
            >
              Platform
            </Typography>
          </div>
          <div
            className="tableRows"
            style={
              props.title === 'Page Value' ? { height: 625 } : { height: 535 }
            }
          >
            {props.title === 'Page Value' &&
              detailsData &&
              detailsData.length > 0 &&
              detailsData.map((v, i) => (
                <DetailsCardSub
                  key={i}
                  brandImg={v.pages.image}
                  brandUrl={v.pages.URL}
                  imgUrl={v.subPlatformImage}
                  brandName={v.pages.title}
                  followers={v.pages.followers}
                  following={v.pages.following}
                  pageValue={v.totalvalue ? v.totalvalue : v.pages.value.data}
                  noOfPosts={v.pages.postCount}
                  data={v.pages.compare.details}
                  dataKey="value"
                  dataHead={v.pages.compare.duration}
                />
              ))}
            {props.title !== 'Page Value' &&
              tempArr.map(v => (
                <div className="root_cardUi" style={{ maxHeight: '175px' }}>
                  <div
                    style={{
                      width: '65%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ display: 'flex', margin: '10px 0' }}>
                      <div>
                        <Avatar
                          className="logoBrandHash"
                          alt="csk"
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4166466.jpg&f=1&nofb=1"
                        />
                      </div>
                      <div className="divideBrandHash">
                        <Typography
                          style={{
                            color: 'black',
                            fontSize: '1rem',
                            textAlign: 'left',
                          }}
                        >
                          Chennai Super Kings
                        </Typography>
                        <div className="timestampHash">
                          <div style={{ padding: 2 }}>May 20, 2020</div>
                          <div
                            className="timestampHashIcon"
                            style={
                              'positive === positive'
                                ? { backgroundColor: '#90ee905e' }
                                : 'positive' === 'neutral'
                                ? { backgroundColor: '#ffb3017d' }
                                : 'positive' === 'negative'
                                ? { backgroundColor: '#ff000059' }
                                : null
                            }
                          >
                            {'positive' === 'positive' ? (
                              <SentimentSatisfiedAltIcon
                                style={{ color: 'green' }}
                              />
                            ) : 'positive' === 'neutral' ? (
                              <SentimentSatisfiedIcon
                                style={{ color: '#ffb301' }}
                              />
                            ) : 'positive' === 'neagtive' ? (
                              <SentimentVeryDissatisfiedIcon
                                style={{ color: 'red' }}
                              />
                            ) : null}{' '}
                            {'positive' === 'positive' ? (
                              <p
                                style={{
                                  color: 'green',
                                  marginLeft: 5,
                                  fontWeight: 'bold',
                                }}
                              >
                                Positive
                              </p>
                            ) : 'positive' === 'neutral' ? (
                              <p
                                style={{
                                  color: '#ffb301',
                                  marginLeft: 5,
                                  fontWeight: 'bold',
                                }}
                              >
                                Neutral
                              </p>
                            ) : 'positive' === 'neagtive' ? (
                              <p
                                style={{
                                  color: 'red',
                                  marginLeft: 5,
                                  fontWeight: 'bold',
                                }}
                              >
                                Negative
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflowHide">
                      On the 12th anniversary of our first outing at Chepauk,
                      here's to the GOAT, the real GOAT! #WhistlePodu #Yellove
                    </div>
                    <div
                      className="brandDetailsHash"
                      style={{ paddingLeft: 25 }}
                    >
                      <div className="brandDetailsIcon">
                        <FavoriteIcon style={{ fontSize: '1rem' }} />
                        <Typography
                          style={{
                            marginLeft: 10,
                            color: '#000',
                            fontSize: '1rem',
                          }}
                        >
                          <NumericLabel params={option}>153248</NumericLabel>
                        </Typography>
                      </div>
                      <div className="brandDetailsIcon">
                        <CommentIcon style={{ fontSize: '1rem' }} />
                        <Typography
                          style={{
                            marginLeft: 10,
                            color: '#000',
                            fontSize: '1rem',
                          }}
                        >
                          <NumericLabel params={option}>183</NumericLabel>
                        </Typography>
                      </div>
                      <div className="brandDetailsIcon">
                        <ShareIcon style={{ fontSize: '1rem' }} />
                        <Typography
                          style={{
                            marginLeft: 10,
                            color: '#000',
                            fontSize: '1rem',
                          }}
                        >
                          <NumericLabel params={option}>183</NumericLabel>
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="divideValueHash">
                    {/* <Typography className="info">Page Value</Typography> */}
                    <Typography
                      variant="h5"
                      className="mainValue"
                      style={{ fontSize: '1.6rem', fontWeight: 700 }}
                    >
                      <NumericLabel params={option}>1226544</NumericLabel> USD
                      <Typography style={{ color: 'black' }}>
                        (Total 3 posts)
                      </Typography>
                    </Typography>
                  </div>
                  <div className="divideNumber" style={{ width: '22%' }}>
                    {/* <Typography className="info">Media Analysis</Typography> */}
                    <div align="center" className="brandsHash">
                      <Avatar
                        className="logoBrandIndex"
                        alt="csk"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4166466.jpg&f=1&nofb=1"
                      />
                      <Avatar
                        className="logoBrandIndex2"
                        alt="csk"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4166466.jpg&f=1&nofb=1"
                      />
                      <Avatar className="logoBrandIndex3">+2</Avatar>
                    </div>
                  </div>
                  <div style={{ width: '13%' }}>
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/general/subplatform/Facebook.png"
                      alt=""
                      className="brand"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
const mapStateToProps = state => ({
  mediaPages: state.pageFilter.mediaPages,
});

export default connect(mapStateToProps)(ModalAlert);
