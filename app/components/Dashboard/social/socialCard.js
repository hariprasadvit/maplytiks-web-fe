import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import NumericLabel from 'react-pretty-numbers';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import NotesIcon from '@material-ui/icons/Notes';
import Link from '@material-ui/core/Link';

import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';

const SocialCard = props => {
  const [mediaTypes, setmediaTypes] = useState([]);
  const [mediaNames, setMediaNames] = useState([]);
  const [Potions, setPotions] = useState();
  const [totalValue, setTotalValue] = useState();
  const [mediaValue, setMediaValue] = useState();

  const [totalComment, setTotalComment] = useState();
  const [mediaComment, setMediaComment] = useState();

  const [unit, setUnit] = useState();

  const handleChangeType = event => {
    if ((mediaTypes, event.target.value.length == 0)) {
      setMediaValue(totalValue);
      setMediaComment(totalComment);
    } else {
      let kpicount = 0;
      event.target.value.map((list, i) => {
        const result = mediaTypes.find(({ title }) => title === list);
        kpicount += result.value.data;
        if (event.target.value.length == 1) {
          setMediaComment(result.comment);
        } else {
          setMediaComment(totalComment);
        }
      });
      setMediaValue(kpicount);
    }
    setMediaNames(event.target.value);
  };

  useEffect(() => {
    if (props.mediaelements && props.mediaelements.length > 0) {
      setmediaTypes(props.mediaelements);
    }
  }, [props.mediaelements]);

  useEffect(() => {
    setMediaNames(mediaTypes.map(names => names.title));
  }, [mediaTypes]);

  useEffect(() => {
    if (props.value) {
      setTotalValue(props.value);
      setMediaValue(props.value);
      setMediaComment(props.footer1);
      setTotalComment(props.footer1);
    }
  }, [props.value, props.footer1]);

  useEffect(() => {
    setUnit(props.unit);
    if (props.unit == '#') {
      const option = {
        locales: 'en-US',
        percentage: false,
        precision: 0,
        wholenumber: null,
        commafy: true,
        shortFormat: true,
        shortFormatMinValue: 10000,
        shortFormatPrecision: 1,
      };
      setPotions(option);
    } else if (props.unit == '%') {
      const option = {
        percentage: true,
        precision: 2,
        shortFormatPrecision: 2,
        justification: 'C',
      };
      setPotions(option);
    } else if (props.unit != 'Secs') {
      const option = {
        justification: 'L',
        locales: 'en-US',
        currency: true,
        currencyIndicator: 'USD',
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
      setPotions(option);
    }
  }, [props.unit]);

  return (
    <Card className="root_cardUi2" style={{ height: 221.633 }}>
      <CardContent style={{ padding: '5px 16px' }}>
        <div className="avatarDiv_cardUi2">
          <div className="bgColor">
            <div className="highlights_iconDiv highlights_iconDiv2">
              <DynamicFeedIcon className="highlights_iconbg highlights_iconbg2" />
            </div>
            <Typography
              className="highlights_title_cardUi2 highlights_title_cardUi2Font"
              color="textSecondary"
              gutterBottom
            >
              {props.header}
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Avatar className="avatar_cardUi2">
              {props.socialicon == 'Facebook' && <FacebookIcon />}
              {props.socialicon == 'Twitter' && <TwitterIcon />}
              {props.socialicon == 'Instagram' && <InstagramIcon />}
            </Avatar>
          </div>
        </div>
        <div
          style={{
            height: '6em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ width: '100%' }}>
            {props.activeTab === 'Page Stats' ? (
              <div className="highlights_avatarRow">
                <Link
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="highlights_link"
                  href={props.list.url}
                >
                 {props.list.url !="" && ( <Avatar
                    className="highlights_logoBrand"
                    alt="csk"
                    src={props.list.icon}
                  />)}
                  <div style={{ width: '100%' }}>
                    <Typography variant="h6" style={{ fontSize: '1rem' }}>
                      {props.list.title}
                    </Typography>
                    <div className="highlights_handle">
                      <Typography style={{ fontSize: '0.8rem' }}>
                        {props.list.name}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            ) : null}
            <div className="avatarDiv_cardUi2">
              <div
                className={
                  props.activeTab === 'Page Stats'
                    ? 'highlights_valueDiv highlights_valueDiv2'
                    : 'highlights_valueDiv'
                }
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h4">
                    {unit != 'Secs' && (
                      <NumericLabel params={Potions}>
                        {props.unit == '%' ? mediaValue / 100 : mediaValue}
                      </NumericLabel>
                    )}
                    {unit == 'Secs' && secToString(mediaValue)}
                  </Typography>
                  {unit == 'Secs' ? (
                    <span style={{ fontSize: 16, marginLeft: 5 }}>
                      (HH:MM:SS)
                    </span>
                  ) : null}
                </div>
              </div>
              <div
                className={
                  props.activeTab === 'Page Stats'
                    ? 'highlights_dropDown highlights_dropDown2'
                    : 'highlights_dropDown'
                }
              >
                {props.mediaelements && props.mediaelements.length > 0 && (
                  <div
                    style={
                      props.activeTab === 'Page Stats'
                        ? {
                            marginTop: -18,
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }
                        : {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 10,
                          }
                    }
                  >
                    <div className="filterLists">
                      <NotesIcon className="filterListsIcon" />
                      <FormControl className="formControl">
                        <Select
                          disableUnderline
                          multiple
                          value={mediaNames}
                          onChange={handleChangeType}
                          input={<Input />}
                          renderValue={selected => selected.join(', ')}
                        >
                          {mediaTypes
                            .sort((a, b) => a.orderID - b.orderID)
                            .map(name => (
                              <MenuItem key={name.title} value={name.title}>
                                <Checkbox
                                  style={{
                                    color: '#890b0f',
                                  }}
                                  checked={mediaNames.indexOf(name.title) > -1}
                                />
                                <ListItemText primary={name.title} />
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footerColor">
          <Typography
            className={
              props.activeTab === 'Page Stats'
                ? 'highlights_Footer highlights_Footer2'
                : 'highlights_Footer'
            }
          >
            {mediaComment}
          </Typography>
          <Typography>{props.footer2}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
