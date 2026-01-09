import React from 'react';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const CardsHashTag = props => (
  <div className="socialGeo_detailsHashHead">
    <div className="socialGeo_detailsHash">
      <div className="socialGeo_detailsHash" style={{ marginLeft: '-2.5vw' }}>
        <div style={{ height: '19vh', display: 'flex', alignItems: 'center' }}>
          <VisibilityIcon style={{ fontSize: '3em' }} />
        </div>
        <div style={{ height: 95, display: 'flex', alignItems: 'center' }}>
          <MonetizationOnIcon style={{ fontSize: '3em' }} />
        </div>
      </div>
    </div>
    <div className="socialGeo_detailsHash">
      <Typography variant="h4">Overall</Typography>
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textappear} className="socialGeo_detailsHash">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.appear}{' '}
            </Typography>
            <Typography variant="h5">{props.textappear}</Typography>
          </div>
        </div>
      </div>
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.text} className="socialGeo_detailsHash">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.value}{' '}
            </Typography>
            <Typography variant="h5">{props.text}</Typography>
          </div>
        </div>
      </div>
    </div>
    <div className="socialGeo_detailsHash">
      <img
        src={props.imgUrlFb}
        style={{ marginTop: 20 }}
        alt=""
        className="socialGeo_brand"
      />
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textFbappear} className="socialGeo_detailsHash">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.appearFb}{' '}
            </Typography>
            <Typography variant="h5">{props.textFbappear}</Typography>
          </div>
        </div>
      </div>
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textFb} className="socialGeo_detailsHash">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.valueFb}{' '}
            </Typography>
            <Typography variant="h5">{props.textFb}</Typography>
          </div>
        </div>
      </div>
    </div>
    <div className="socialGeo_detailsHash">
      <img src={props.imgUrlTwitter} alt="" className="socialGeo_brand" />
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div
            title={props.textTwitterappear}
            className="socialGeo_detailsHash"
          >
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.appearTwitter}{' '}
            </Typography>
            <Typography variant="h5">{props.textTwitterappear}</Typography>
          </div>
        </div>
      </div>
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textTwitter} className="socialGeo_detailsHash ">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.valueTwitter}{' '}
            </Typography>
            <Typography variant="h5">{props.textTwitter}</Typography>
          </div>
        </div>
      </div>
    </div>
    <div className="socialGeo_detailsHash">
      <img src={props.imgUrlInsta} alt="" className="socialGeo_brand" />
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textInstaappear} className="socialGeo_detailsHash ">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.appearInsta}{' '}
            </Typography>
            <Typography variant="h5">{props.textInstaappear}</Typography>
          </div>
        </div>
      </div>
      <div
        className="socialGeo_cards_ranking_Hashtags"
        style={{ borderLeftColor: props.color }}
      >
        <div className="socialGeo_detailsHashHead">
          <div title={props.textInsta} className="socialGeo_detailsHash">
            <Typography
              variant="h4"
              className="socialGeo_textDashed detailshashHover"
            >
              {' '}
              {props.valueInsta}{' '}
            </Typography>
            <Typography variant="h5">{props.textInsta}</Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
);
