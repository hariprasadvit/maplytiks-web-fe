/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import useDropdownClose from 'components/common/hooks/useDropdownClose';
import Donut from 'components/common/graphs/social/Donut';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {
  _numberToHumanReadableFormatConverter,
  secToString,
} from 'utils/helpers';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import SocialHighlights from './SocialHighlights';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const PlatformReport = ({
  subPlatforms,
  isSticky,
  baseReport = {},
  socialHighlights: socialHighlightsData = [],
  onSaveAll,
}) => {
  const [callbacklinearData, setcallbacklinearData] = useState('');
  const [totalcallbacklinearData, settotalcallbacklinearData] = useState();
  const [ResetPlatfom, setresetPlatfom] = useState();
  const [lquality, setQuality] = useState();
  const [lquantity, setQuantity] = useState();
  const [lvalue, setLValue] = useState();

  const [lqualityP, setQualityP] = useState();
  const [lquantityP, setQuantityP] = useState();
  const [lvalueP, setLValueP] = useState();
  const [platformName, setPlatformName] = useState();

  const [twitterPage, setTwitterPage] = useState([]);
  const [fbPage, setFbPage] = useState([]);
  const [instaPage, setInstaPage] = useState([]);

  const getPages = useCallback(() => {
    if(baseReport&& baseReport.length>0){
    let pages = [];
    pages = baseReport.data.map(d => d.pages);
    setTwitterPage(pages[0]);
    setFbPage(pages[1]);
    setInstaPage(pages[2]);
    onSaveAll(twitterPage, fbPage, instaPage);
    }
  });

  useEffect(() => {
    if(baseReport&& baseReport.length>0){
         getPages();
    }
  });

  useEffect(() => {
    let qualitysum = 0;
    let quantitysum = 0;
    let valuesum = 0;
    if (callbacklinearData) {
      callbacklinearData.map((data, i) => {
        if (data.quality.title == 'Quality of Exposure (%)') {
          qualitysum += data.quality.value;
        }
        if (data.quantity.title == 'Quantity (HH:MM:SS)') {
          quantitysum += data.quantity.value;
        }
        if (data.value.title == 'Platform Value') {
          valuesum += data.value.value;
        }
      });
      setQuality(qualitysum.toFixed(2));
      setQuantity(quantitysum);
      setLValue(valuesum);
    }
  }, [callbacklinearData]);

  useEffect(() => {
    if (totalcallbacklinearData) {
      let qualitysum = 0;
      let quantitysum = 0;
      let valuesum = 0;
      totalcallbacklinearData.map((data, i) => {
        if (data.quality.title == 'Quality of Exposure (%)') {
          qualitysum += data.quality.value;
        }
        if (data.quantity.title == 'Quantity (HH:MM:SS)') {
          quantitysum += data.quantity.value;
        }
        if (data.value.title == 'Platform Value') {
          valuesum += data.value.value;
        }
      });
      setQualityP(
        ((lquality / Number(qualitysum.toFixed(2))) * 100).toFixed(2)
      );
      setQuantityP(((lquantity / Number(quantitysum)) * 100).toFixed(2));
      setLValueP(((lvalue / Number(valuesum)) * 100).toFixed(2));
    }
  }, [totalcallbacklinearData, lquality, lquantity, lvalue]);

  function applyCallback() {
    setresetPlatfom(new Date());
  }
  const DATE_OPTIONS = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const cts = new Date();
  const cdate = new Date(cts).toLocaleDateString('en-US', DATE_OPTIONS);

  return (
    <div className={`platform__card ${isSticky ? 'platform__stickyCard' : ''}`}>
      <div className="platform" style={{ width: '60%' }}>
      { baseReport  && (<div>
        <table className="donutheader">
          <tr>
            <td className="doutitle1">
              <h2 className="platform__title">Global Valuation</h2>
            </td>
            <td className="doutitle2"> -</td>
            <td>
              <span className="matchValuation__subtitle donutfooter doutitle3">
                As on {cdate}
              </span>
            </td>
            <td className="doutitle4">
              <SettingsBackupRestoreIcon onClick={applyCallback} />
            </td>
          </tr>
        </table>

        <h5 className="matchValuation__subtitle donutfooter">
          Select the donut section to view more details
        </h5>
        <Grid container>
          <Grid item xs={12}>
            <div className="platform__graghdonutstyle">
              <Donut
                baseReport={baseReport}
                callbacklinearData={setcallbacklinearData}
                totalcallbacklinearData={settotalcallbacklinearData}
                platformName={setPlatformName}
                resetPlatfom={ResetPlatfom}
              />
            </div>
            <div className="detailsheader">
              <Grid container>
                <Grid item xs={4}>
                  <div className="text-muted">Platform Value</div>
                  <strong style={{ fontSize: '0.8em' }}>
                    {_numberToHumanReadableFormatConverter(
                      lvalue,
                      true,
                      false,
                      'Social Donut'
                    )}{' '}
                    ({lvalueP}%)
                  </strong>
                  <div align="right" style={{ marginTop: 5, width: 150 }}>
                    <LinearProgress
                      variant="determinate"
                      value={lvalueP}
                      color="secondary"
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="text-muted">Quality of Exposure (%)</div>
                  {/* <strong>{lquality} ({lqualityP}%)</strong> */}
                  <strong style={{ fontSize: '0.8em' }}>{lqualityP}%</strong>
                  <div align="right" style={{ marginTop: 5, width: 150 }}>
                    <LinearProgress variant="determinate" value={lqualityP} />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="text-muted">Quantity (HH:MM:SS)</div>
                  <strong style={{ fontSize: '0.8em' }}>
                    {secToString(lquantity)} ({lquantityP}%)
                  </strong>
                  <div align="right" style={{ marginTop: 5, width: 150 }}>
                    <LinearProgress
                      variant="determinate"
                      value={lquantityP}
                      color="secondary"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} />
        </Grid>
        </div>)}
      </div>
      <div className="platform" style={{ width: '100%' }}>
        {socialHighlightsData &&  (
          <SocialHighlights
            socialHighlightsdata={socialHighlightsData}
            platformName={platformName}
          />
        )}
      </div>
    </div>
  );
};
PlatformReport.propTypes = {
  subPlatforms: PropTypes.array,
  baseReport: PropTypes.object,
  digitalReport: PropTypes.object,
  subPlatformListLoading: PropTypes.bool,
  isSticky: PropTypes.bool,
  socialHighlights: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onSaveAll: (twitter, fb, insta) =>
    dispatch({
      type: 'saveAll',
      payload: {
        twitter,
        facebook: fb,
        instagram: insta,
      },
    }),
});

export default connect(
  null,
  mapDispatchToProps
)(PlatformReport);
