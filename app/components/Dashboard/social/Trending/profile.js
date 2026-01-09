import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export const CardsProfile = props => (
  <div className="socialGeo_cards_ranking">
    <div align="center">
      {props.platform === 'facebook' ? (
        <img
          style={{ marginBottom: 20 }}
          src="https://duckduckgo.com/i/40e06ed9.png"
          alt=""
          className="socialGeo_brand"
        />
      ) : props.platform === 'twitter' ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVQV5g2SEwoHbDQUnHZx0b6wrHvYPVer1Oow9iD1YmNjhyu5jI"
          alt=""
          className="socialGeo_brand"
        />
      ) : props.platform === 'instagram' ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
          className="socialGeo_brand"
        />
      ) : null}
    </div>
    <div className="socialGeo_avatarRow">
      <Link
        target="_blank"
        rel="noopener, noreferrer"
        className="socialGeo_link"
        href="https://twitter.com/narendramodi"
      >
        <Avatar
          className="socialGeo_logoBrand"
          alt="csk"
          src="https://pbs.twimg.com/profile_images/1134082549041393672/QbihPzrL_400x400.png"
        />
        <div style={{ width: '100%' }}>
          <Typography variant="h6">Narendra Modi</Typography>
          <div className="socialGeo_handle">
            <Typography>@narendramodi</Typography>
          </div>
          <div className="socialGeo_brandDetails">
            <div className="socialGeo_brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 10 }}>53.9 M</Typography>
            </div>
            <div className="socialGeo_brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 10 }}>2.4 K</Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
    {/* <a href="#" target="_blank" rel="noopener noreferrer">
      <Typography style={{ margin: '-10px 0 20px 80px' }}>modi.com</Typography>
    </a> */}
    <div align="center" style={{ marginTop: 10 }}>
      <Typography
        style={{
          color: '#262626',
          textDecoration: 'underline',
          fontWeight: 'bold',
        }}
        variant="h6"
      >
        Last 3 Days
      </Typography>
    </div>
    <div className="socialGeo_likesRow">
      <div title="Engagement" className="socialGeo_detailsFooter">
        <TouchAppIcon className="socialGeo_iconColor" />
        <Typography variant="h4" className="socialGeo_detailsFooterText">
          1.25 M
        </Typography>
        <Typography style={{ display: 'flex', alignItems: 'center' }}>
          (
          <TrendingUpIcon style={{ color: 'green', margin: '0 3px' }} /> 5% )
        </Typography>
      </div>
      <div title="Value" className="socialGeo_detailsFooter">
        <LocalAtmIcon className="socialGeo_iconColor" />
        <Typography variant="h5" className="socialGeo_detailsFooterText">
          1.25 M USD
        </Typography>
        <Typography style={{ display: 'flex', alignItems: 'center' }}>
          (
          <TrendingUpIcon style={{ color: 'green', margin: '0 3px' }} /> 5% )
        </Typography>
      </div>
    </div>
  </div>
);
