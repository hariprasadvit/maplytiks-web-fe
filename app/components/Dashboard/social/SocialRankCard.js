import React, { useRef, useState, useEffect } from 'react';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RepeatIcon from '@material-ui/icons/Repeat';
import CommentIcon from '@material-ui/icons/Comment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import BuildIcon from '@material-ui/icons/Build';
import ImageIcon from '@material-ui/icons/Image';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import NotesIcon from '@material-ui/icons/Notes';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NumericLabel from 'react-pretty-numbers';

// import "../styles.css";

export const RankPage = props => (
  <div className="cards_ranking2">
    <div className="avatarRow">
      <Link
        target="_blank"
        rel="noopener, noreferrer"
        className="link"
        href={props.page.URL}
      >
        <Avatar className="logoBrand" alt="" src={props.rankvalue.image} />
        <div style={{ width: '100%' }}>
          <div className="handle">
            <Typography variant="h6" style={{ textAlign: 'left' }}>
              {props.page.title}
            </Typography>
            {props.page.name.length === 0 ? (
              props.page.subPlatformName === 'Twitter' ? (
                <TwitterIcon className="twitterIcon" />
              ) : props.page.subPlatformName === 'Facebook' ? (
                <FacebookIcon className="facebookIcon" />
              ) : props.page.subPlatformName === 'Instagram' ? (
                <InstagramIcon className="instagramIcon" />
              ) : null
            ) : null}
          </div>
          {props.page.name.length !== 0 ? (
            <div className="handle">
              <Typography style={{ color: 'black', textAlign: 'left' }}>
                {props.page.name}
              </Typography>
              {props.page.subPlatformName === 'Twitter' ? (
                <TwitterIcon className="twitterIcon" />
              ) : props.page.subPlatformName === 'Facebook' ? (
                <FacebookIcon className="facebookIcon" />
              ) : props.page.subPlatformName === 'Instagram' ? (
                <InstagramIcon className="instagramIcon" />
              ) : null}
            </div>
          ) : null}

          <div className="brandDetailsRank">
            <div className="brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  props.page.followers,
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
            <div className="brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  props.page.following,
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
    <div className="footer_ranking">
      {props.rankvalue ? (
        <div>
          <img
            className="rankImg"
            src={
              props.rank === '1'
                ? 'https://i.ibb.co/QkgVywW/first.png'
                : props.rank === '2'
                ? 'https://i.ibb.co/SnDLsBS/second.png'
                : props.rank === '3'
                ? 'https://i.ibb.co/r4nmDkp/third.png'
                : null
            }
            alt=""
          />
        </div>
      ) : null}
      <Typography variant="h4" style={{ marginTop: '-5px' }}>
        {_numberToHumanReadableFormatConverter(
          Number(props.rankvalue).toFixed(2),
          true,
          false,
          'Social Donut'
        )}
      </Typography>
    </div>
    {/* <div className="likesRow">
      <div title="Likes" className="likesRowC1">
        <FavoriteIcon className="iconColor" />
        <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14, textAlign: 'left' }}>8.4k</Typography>
      </div>
      <div title="Retweets" className="likesRowC1">
        <RepeatIcon className="iconColor" />
        <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14, textAlign: 'left' }}>948</Typography>
      </div>
      <div title="Comments" className="likesRowC1">
        <CommentIcon className="iconColor" />
        <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14, textAlign: 'left' }}>8.4 K</Typography>
      </div>
    </div> */}
    <Pagesupplement supplement={props.supplement} />
  </div>
);

function Pagesupplement(supplement) {
  let supplementList = [];
  supplementList = supplement;
  return (
    <div className="commentsRow">
      {supplementList.supplement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          <Avatar alt="" src={list.image} />
          <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14 }}>
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}

const DATE_OPTIONS = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const RankPost = props => (
  <div className="cards_ranking2">
    <div className="avatarRow">
      <Link
        target="_blank"
        rel="noopener, noreferrer"
        className="link"
        href={props.post.URL}
      >
        <Avatar
          className="logoBrand"
          alt=""
          src={props.post.platform.page.image}
        />
        <div style={{ width: '100%' }}>
          <div className="handle">
            <Typography
              variant="h6"
              style={{
                // height: 65,
                textAlign: 'left',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {props.post.platform.page.title}
            </Typography>
            {props.post.handle.length === 0 ? (
              props.post.platform.subPlatformName === 'Twitter' ? (
                <TwitterIcon className="twitterIcon" />
              ) : props.post.platform.subPlatformName === 'Facebook' ? (
                <FacebookIcon className="facebookIcon" />
              ) : props.post.platform.subPlatformName === 'Instagram' ? (
                <InstagramIcon className="instagramIcon" />
              ) : null
            ) : null}
          </div>
          {props.post.handle.length !== 0 ? (
            <div className="handle">
              <Typography
                style={{
                  color: 'black',
                  textAlign: 'left',
                  // height: 50,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {props.post.handle}
              </Typography>
              {props.post.platform.subPlatformName === 'Twitter' ? (
                <TwitterIcon className="twitterIcon" />
              ) : props.post.platform.subPlatformName === 'Facebook' ? (
                <FacebookIcon className="facebookIcon" />
              ) : props.post.platform.subPlatformName === 'Instagram' ? (
                <InstagramIcon className="instagramIcon" />
              ) : null}
            </div>
          ) : null}

          <div className="brandDetailsRank">
            <div className="brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  Number(props.post.platform.page.followers).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
            <div className="brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  Number(props.post.platform.page.following).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
    {props.brand ? null : (
      <>
        <div className="content_ranking">{props.post.text}</div>
        <div>
          <Typography className="dateTime">
            {new Date(props.post.date).toLocaleDateString(
              'en-US',
              DATE_OPTIONS
            )}
          </Typography>
        </div>
      </>
    )}
    <div className="footer_ranking">
      {props.rankvalue ? (
        <div>
          <img
            className="rankImg"
            src={
              props.rank === '1'
                ? 'https://i.ibb.co/QkgVywW/first.png'
                : props.rank === '2'
                ? 'https://i.ibb.co/SnDLsBS/second.png'
                : props.rank === '3'
                ? 'https://i.ibb.co/r4nmDkp/third.png'
                : null
            }
            alt=""
          />
        </div>
      ) : null}
      <Typography variant="h4" style={{ marginTop: '-5px' }}>
        {_numberToHumanReadableFormatConverter(
          Number(props.rankvalue).toFixed(2),
          true,
          false,
          'Social Donut'
        )}
      </Typography>
    </div>
    {/* <Postengagement engagement={props.post.engagement} /> */}
    <Postsupplement supplement={props.post.supplement} />
  </div>
);

function Postengagement(engagement) {
  let supplementList = [];
  supplementList = engagement;
  return (
    <div className="likesRow">
      {supplementList.engagement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          <FlashOnIcon className="iconColor" />
          <Typography
            style={{
              marginLeft: 5,
              color: 'black',
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}

function Postsupplement(supplement) {
  let supplementList = [];
  supplementList = supplement;
  return (
    <div className="commentsRow">
      {supplementList.supplement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          {/* <FlashOnIcon className="iconColor" /> */}

          <Avatar alt="" src={list.image} />

          <Typography
            style={{
              marginLeft: 5,
              color: 'black',
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export const RankBrand = props => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const [Cumulative, setCumulative] = useState(0);
  const [Assets, setAssets] = useState(0);
  const [HighestBrand, setHighestBrand] = useState(0);
  const [PostBrand, setPostBrand] = useState(0);
  const [PresenceBrand, setPresenceBrand] = useState(0);

  useEffect(() => {
    let BrandCummulative = 0;
    let NumberAssets = 0;
    let HighestBrandexposure = 0;
    const PostBrandappeared = 0;
    let PresenceBrandImpact = 0;
    if (props.platforms.length > 4) {
      props.platforms.map((list, i) => {
        BrandCummulative += Number(list.supplement[0].value.data);
        NumberAssets += Number(list.supplement[1].value.data);
        HighestBrandexposure += Number(list.supplement[2].value.data);
        PresenceBrandImpact += Number(list.supplement[4].value.data);
      });
      if (BrandCummulative) {
        setCumulative(BrandCummulative);
      }
      if (NumberAssets) {
        setAssets(NumberAssets.toFixed(2));
      }
      if (HighestBrandexposure) {
        setHighestBrand(HighestBrandexposure.toFixed(2));
      }
      if (PresenceBrandImpact) {
        setPresenceBrand((PresenceBrandImpact / 3).toFixed(2));
      }
    }
  }, [props.platforms]);

  return (
    <div className="cards_ranking2">
      <div className="avatarRow2">
        <img className="logoBrand2" alt="" src={props.rankvalue.image} />
        <div style={{ width: '100%' }}>
          <Typography variant="h5">{props.rankvalue.title}</Typography>
        </div>
      </div>
      <div className="commentsRow">
        <div title="Cumulative Brand Exposure" className="likesRowC1">
          <VisibilityIcon className="iconColor" />
          <Typography style={{ marginLeft: 3, color: 'black' }}>
            {_numberToHumanReadableFormatConverter(
              Cumulative,
              true,
              false,
              'Social Donut'
            )}
          </Typography>
        </div>
        <div title="Number of Assets the brand appeared" className="likesRowC1">
          <ImageIcon className="iconColor" />
          <Typography style={{ marginLeft: 3, color: 'black' }}>
            {_numberToHumanReadableFormatConverter(
              Assets,
              true,
              false,
              'Social Donut'
            )}
          </Typography>
        </div>
        <div
          title="Top asset with highest Brand exposure"
          className="likesRowC1"
        >
          <TrackChangesIcon className="iconColor" />
          <Typography style={{ marginLeft: 3, color: 'black' }}>
            {_numberToHumanReadableFormatConverter(
              HighestBrand,
              true,
              false,
              'Social Donut'
            )}
          </Typography>
        </div>
        {/* <div title="Number of post the brand appeared" className="likesRowC1">
          <NotesIcon className="iconColor" />
          <Typography style={{ marginLeft: 5 }}>8.9 K</Typography>
        </div> */}
        <div title="Brand Presence Impact %" className="likesRowC1">
          <FlashOnIcon className="iconColor" />
          <Typography style={{ marginLeft: 3, color: 'black' }}>
            {PresenceBrand}%
          </Typography>
        </div>
      </div>
      <div className="footer_ranking">
        {props.rankvalue ? (
          <div>
            <img
              className="rankImg"
              src={
                props.rank === '1'
                  ? 'https://i.ibb.co/QkgVywW/first.png'
                  : props.rank === '2'
                  ? 'https://i.ibb.co/SnDLsBS/second.png'
                  : props.rank === '3'
                  ? 'https://i.ibb.co/r4nmDkp/third.png'
                  : null
              }
              alt=""
            />
          </div>
        ) : null}
        <Typography variant="h4" style={{ marginTop: '-5px' }}>
          {_numberToHumanReadableFormatConverter(
            Number(props.rankvalue.data).toFixed(2),
            true,
            false,
            'Social Donut'
          )}
        </Typography>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          showDots
          arrows={false}
          partialVisible
        >
          {props.platforms.map((list, i) => (
            <div className="cardFooterMain">
              <div align="center">
                <img
                  src={list.subPlatformImage}
                  className="footerImage"
                  alt=""
                />
              </div>
              <Brandsupplement supplement={list.supplement} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

function Brandsupplement(supplement) {
  let supplementList = [];
  supplementList = supplement;
  return (
    <div className="commentsRow">
      {supplementList.supplement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          <Avatar alt="" src={list.image} />
          <Typography
            style={{
              marginLeft: 5,
              color: 'black',
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export const RankAsset = props => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const [Cumulative, setCumulative] = useState(0);
  const [Assets, setAssets] = useState(0);
  const [HighestBrand, setHighestBrand] = useState(0);
  const [PostBrand, setPostBrand] = useState(0);
  const [PresenceBrand, setPresenceBrand] = useState(0);

  const [topData, setTopData] = useState();
  const [topimageData, setTopimageData] = useState();
  const [topUnitData, setTopUnitData] = useState();

  useEffect(() => {
    const BrandCummulative = 0;
    const NumberAssets = 0;
    const HighestBrandexposure = 0;
    const PostBrandappeared = 0;
    const PresenceBrandImpact = 0;

    const map1 = new Map();
    const mapimage = new Map();
    const mapunit = new Map();
    props.platforms.map((list, i) => {
      let supplementList = [];
      supplementList = list.supplement;
      if (supplementList.length > 0) {
        supplementList.map((sub, j) => {
          if (map1.has(sub.comment)) {
            if (sub.value.unit != '') {
              map1.set(
                sub.comment,
                Number(map1.get(sub.comment)) + Number(sub.value.data)
              );
            }
          } else {
            mapimage.set(sub.comment, sub.image);
            mapunit.set(sub.comment, sub.value.unit);
            if (sub.value.unit) {
              map1.set(sub.comment, Number(sub.value.data));
            } else {
              map1.set(sub.comment, sub.value.data);
            }
          }
        });
      }
      if (map1) {
        setTopData(map1);
        setTopimageData(mapimage);
        setTopUnitData(mapunit);
      }
    });

    // console.log("list.",map1,mapimage)

    // props.platforms.map((list, i) => {
    //   //console.log("list",list)
    //   BrandCummulative += Number(list.supplement[0].value.data);
    //   NumberAssets += Number(list.supplement[1].value.data);
    //   //HighestBrandexposure += Number(list.supplement[2].value.data);
    //   //console.log("list.supplement[3].value.data",list)
    //   PresenceBrandImpact = PresenceBrandImpact+Number(list.supplement[2].value.data)
    // });
    // if (BrandCummulative) {
    //   setCumulative(BrandCummulative);
    // }
    // if (NumberAssets) {
    //   setAssets(NumberAssets.toFixed(2));
    // }
    // if (HighestBrandexposure) {
    //   setHighestBrand(HighestBrandexposure.toFixed(2));
    // }
    // if (PresenceBrandImpact) {
    //   setPresenceBrand((PresenceBrandImpact / 3).toFixed(2));
    // }
  }, [props.platforms]);

  return (
    <div className="cards_ranking2">
      <div className="avatarRow2">
        <img className="logoBrand2" alt="" src={props.rankvalue.image} />
        <div style={{ width: '100%' }}>
          <Typography variant="h5" style={{ textAlign: 'left' }}>
            {props.rankvalue.title}
          </Typography>
        </div>
      </div>
      <Topsupplement supplement={topData} />
      <div className="footer_ranking">
        {props.rankvalue ? (
          <div>
            <img
              className="rankImg"
              src={
                props.rank === '1'
                  ? 'https://i.ibb.co/QkgVywW/first.png'
                  : props.rank === '2'
                  ? 'https://i.ibb.co/SnDLsBS/second.png'
                  : props.rank === '3'
                  ? 'https://i.ibb.co/r4nmDkp/third.png'
                  : null
              }
              alt=""
            />
          </div>
        ) : null}
        <Typography variant="h4" style={{ marginTop: '-5px' }}>
          {_numberToHumanReadableFormatConverter(
            Number(props.rankvalue.data).toFixed(2),
            true,
            false,
            'Social Donut'
          )}
        </Typography>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          showDots
          arrows={false}
          partialVisible
        >
          {props.platforms.map((list, i) => (
            <div className="cardFooterMain">
              <div align="center">
                <img
                  src={list.subPlatformImage}
                  className="footerImage"
                  alt=""
                />
              </div>
              <Assetsupplement supplement={list.supplement} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

function Topsupplement(supplement) {
  let value = [];
  // console.log('supplement', supplement);
  if (supplement) {
    if (supplement.supplement) {
      supplement.supplement.forEach((key, val) => {
        // console.log('supplement2', key, value);
        value = [
          ...value,
          {
            val,
            key,
          },
        ];
      });
    }
    console.log('supplement3', value);
  }
  return (
    <div className="commentsRow">
      {value !== []
        ? value.map((value, index) => (
            <div title={value.val} className="likesRowC1">
              {value.val == 'Cumulative Asset Exposure' ||
              value.val == 'Cumulative Brand Exposure' ? (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/exposure.svg"
                />
              ) : value.val == 'Number of post the Asset appeared' ? (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/postAsset.svg"
                />
              ) : value.val == 'Number of Brands the asset appeared' ? (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/brand.svg"
                />
              ) : value.val == 'Quality %' ? (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/quality.svg"
                />
              ) : value.val == 'Top Brand with highest Brand Exposure' ? (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/exposure.svg"
                />
              ) : (
                <Avatar
                  alt=""
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/medium/MED103/dashbaord/rank/supplement/quality.svg"
                />
              )}
              <Typography
                style={{
                  marginLeft: 5,
                  color: 'black',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                {Number.isInteger(value.key) && (
                <NumericLabel
                  params={{
                    currency: false,
                    commafy: true,
                    shortFormat: true,
                    justification: 'L',
                    precision: 2,
                  }}
                >
                  {Number(value.key).toFixed(2)}
                </NumericLabel>)}
                { ! Number.isInteger(value.key) && !  isNaN(parseFloat(value.key)) && (
                   <NumericLabel
                   params={{
                     currency: false,
                     commafy: true,
                     shortFormat: true,
                     justification: 'L',
                     precision: 2,
                   }}
                 >
                   {Number(value.key).toFixed(2)}
                 </NumericLabel>
                )}
                
                { isNaN(parseFloat(value.key)) && ! Number.isInteger(value.key) && (
                  <div>{value.key}</div>
                )}

              </Typography>
              {/* {value.val} : {value.key} */}
            </div>
          ))
        : null}
    </div>
  );
}

function Assetsupplement(supplement) {
  let supplementList = [];
  supplementList = supplement;
  return (
    <div className="commentsRow">
      {supplementList.supplement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          <Avatar alt="" src={list.image} />
          <Typography
            style={{
              marginLeft: 5,
              color: 'black',
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : list.value.unit == ''
              ? list.value.data
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export const RankProfile = props => (
  <div className="cards_ranking2">
    <div className="avatarRow">
      <Link
        target="_blank"
        rel="noopener, noreferrer"
        className="link"
        href={props.profile.URL}
      >
        <Avatar className="logoBrand" alt="" src={props.profile.image} />
        <div style={{ width: '100%' }}>
          <Typography variant="h6">{props.profile.title}</Typography>
          <div className="handle">
            <Typography style={{ color: 'black' }}>
              {props.profile.name}
            </Typography>
            {props.profile.subPlatformName === 'Twitter' ? (
              <TwitterIcon className="twitterIcon" />
            ) : props.profile.subPlatformName === 'Facebook' ? (
              <FacebookIcon className="facebookIcon" />
            ) : props.profile.subPlatformName === 'Instagram' ? (
              <InstagramIcon className="instagramIcon" />
            ) : null}
          </div>
          <div className="brandDetails">
            <div className="brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  Number(props.profile.followers).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
            <div className="brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 3, color: 'black' }}>
                {_numberToHumanReadableFormatConverter(
                  Number(props.profile.following).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
    <div className="footer_ranking">
      {props.rankvalue ? (
        <div>
          <img
            className="rankImg"
            src={
              props.rank === '1'
                ? 'https://i.ibb.co/QkgVywW/first.png'
                : props.rank === '2'
                ? 'https://i.ibb.co/SnDLsBS/second.png'
                : props.rank === '3'
                ? 'https://i.ibb.co/r4nmDkp/third.png'
                : null
            }
            alt=""
          />
        </div>
      ) : null}
      <Typography variant="h4">
        {_numberToHumanReadableFormatConverter(
          Number(props.rankvalue).toFixed(2),
          true,
          false,
          'Social Donut'
        )}
      </Typography>
    </div>

    {/* <div className="likesRow">

        <div title="Likes" className="likesRowC1">
          <FavoriteIcon className="iconColor" />
          <Typography style={{ marginLeft: 5 }}>8.4k</Typography>
        </div>
        <div title="Retweets" className="likesRowC1">
          <RepeatIcon className="iconColor" />
          <Typography style={{ marginLeft: 5 }}>948</Typography> supplement
        </div>
        <div title="Comments" className="likesRowC1">
          <CommentIcon className="iconColor" />
          <Typography style={{ marginLeft: 5 }}>8.4 K</Typography>
        </div>

      </div> */}
    <div>
      <Profilesupplement supplement={props.supplement} />
    </div>
    {/* <div className="commentsRow">
      {_numberToHumanReadableFormatConverter(
        Number(props.supplement[0].value.data).toFixed(2),
        true,
        false,
        'Social Donut'
      ) != '0' ? (
        <div title={props.supplement[0].comment} className="likesRowC1">
          <VisibilityIcon className="iconColor" />
          <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14, textAlign: 'left' }}>
            {_numberToHumanReadableFormatConverter(
              Number(props.supplement[0].value.data).toFixed(2),
              true,
              false,
              'Social Donut'
            )}{' '}
            %
          </Typography>
        </div>
      ) : null}
      {_numberToHumanReadableFormatConverter(
        Number(props.supplement[1].value.data).toFixed(2),
        true,
        false,
        'Social Donut'
      ) != '0' ? (
        <div title={props.supplement[1].comment} className="likesRowC1">
          <FlashOnIcon className="iconColor" />
          <Typography style={{ marginLeft: 5, color: 'black', fontSize: 14, textAlign: 'left' }}>
            {_numberToHumanReadableFormatConverter(
              Number(props.supplement[1].value.data).toFixed(2),
              true,
              false,
              'Social Donut'
            )}
          </Typography>
        </div>
      ) : null}
    </div> */}
  </div>
);

function Profilesupplement(supplement) {
  let supplementList = [];
  supplementList = supplement;
  return (
    <div className="commentsRow">
      {supplementList.supplement.map((list, i) => (
        <div title={list.comment} className="likesRowC1">
          <Avatar alt="" src={list.image} />
          <Typography
            style={{
              marginLeft: 5,
              color: 'black',
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {list.value.unit == '%'
              ? `${_numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}%`
              : _numberToHumanReadableFormatConverter(
                  Number(list.value.data).toFixed(2),
                  true,
                  false,
                  'Social Donut'
                )}
          </Typography>
        </div>
      ))}
    </div>
  );
}
