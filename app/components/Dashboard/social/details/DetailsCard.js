import React from 'react';
// import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { BarChart, Bar } from 'recharts';
import NumericLabel from 'react-pretty-numbers';
// import Styles from "./CardUi.module.css";

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

const numberoption = {
  locales: 'en-US',
  percentage: false,
  precision: 0,
  wholenumber: null,
  commafy: true,
  shortFormat: true,
  shortFormatMinValue: 10000,
  shortFormatPrecision: 1,
  justification: 'L',
};


export const DetailsCard = props => {
  
  return (
    <>
      <div className="root_cardUi">
        <div>
        <a href={props.brandUrl} target="_blank" rel="noopener noreferrer">
            <Avatar className="logoBrand" alt="" src={props.brandImg} />
          </a>
        </div>
        <div className="divideBrand">
        <a
            href={props.brandUrl}
            target="_blank"
            style={{ textDecoration: 'none', color: 'black' }}
            rel="noopener noreferrer"
          >
          <Typography variant="h5" style={{ color: 'black' }}>
            {props.brandName}
          </Typography>
          </a>
          <div className="brandDetails">
            <div className="brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 10, color: 'black' }}>
                <NumericLabel params={numberoption}>{props.followers}</NumericLabel>
              </Typography>
            </div>
            <div className="brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 10, color: 'black' }}>
                <NumericLabel params={numberoption}>{props.following}</NumericLabel>
              </Typography>
            </div>
          </div>
        </div>
        <div className="divideValue">
          <Typography className="info">Page Value</Typography>
          <Typography variant="h5" className="mainValue">
            <NumericLabel params={option}>{props.pageValue}</NumericLabel>
          </Typography>
        </div>
        <div className="divideNumber">
          <Typography className="info"># of Posts Valued</Typography>
          <Typography variant="h5" className="mainValue">
            <NumericLabel params={numberoption}>{props.noOfPosts}</NumericLabel>
          </Typography>
        </div>
        <div className="divideGraph">
          <Typography className="info">
            Last {props.dataHead.period} {props.dataHead.unit}{' '}
          </Typography>
          <div align="center" style={{ margin: 'auto' }}>
            <BarChart width={150} height={40} data={props.data}>
              <Bar dataKey={props.dataKey} fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div>
          <img src={props.imgUrl} alt="" className="brand" />
        </div>
      </div>
    </>
  );
};

export const DetailsCardSub = props => {
  
  return (
    <>
      <div className="root_cardUi">
        <div>
          <a href={props.brandUrl} target="_blank" rel="noopener noreferrer">
            <Avatar className="logoBrand" alt="" src={props.brandImg} />
          </a>
        </div>
        <div className="divideBrand">
          <a
            href={props.brandUrl}
            target="_blank"
            style={{ textDecoration: 'none', color: 'black' }}
            rel="noopener noreferrer"
          >
            <Typography variant="h5" style={{ color: 'black' }}>
              {props.brandName}
            </Typography>
          </a>
          <div className="brandDetails">
            <div className="brandDetailsIcon">
              <GroupIcon />
              <Typography style={{ marginLeft: 10, color: 'black' }}>
                <NumericLabel params={numberoption}>{props.followers}</NumericLabel>
              </Typography>
            </div>
            <div className="brandDetailsIcon">
              <GroupAddIcon />
              <Typography style={{ marginLeft: 10, color: 'black' }}>
                <NumericLabel params={numberoption}>{props.following}</NumericLabel>
              </Typography>
            </div>
          </div>
        </div>
        <div className="divideValue">
          <Typography variant="h5" className="mainValue">
            <NumericLabel params={option}>{props.pageValue}</NumericLabel>
          </Typography>
        </div>
        <div className="divideNumber">
          <Typography variant="h5" className="mainValue">
            <NumericLabel params={numberoption}>{props.noOfPosts}</NumericLabel>
          </Typography>
        </div>
        <div className="divideGraph">
          <div align="center" style={{ marginLeft: '3em' }}>
            <BarChart width={150} height={40} data={props.data}>
              <Bar dataKey={props.dataKey} fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div>
          <img src={props.imgUrl} alt="" className="brand" />
        </div>
      </div>
    </>
  );
};
