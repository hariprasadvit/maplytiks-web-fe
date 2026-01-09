/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import exposureGraph from '../../images/exposureGraph.png';
const ExposureSection = () => (
  <div className="exposure">
    <div className="exposure__wrapper">
      <div className="exposure__continous">
        <div style={{ marginBottom: 25 }}>
          <h3 className="matchValuation__title">01 Continuous Exposure</h3>
          <h5 className="matchValuation__subtitle">
            Cumulative Exposure across
          </h5>
        </div>
        <div className="exposure__distribution">
          <div className="exposure__distributionValue">
            <h2>Exposure distribution across bands</h2>
            <span>(HH:MM:SS)</span>
            <h4>04:46:46</h4>
          </div>
          <div className="exposure__distributionGraph" />
        </div>
        <div className="exposure__table">
          <div className="exposure__row">
            <div className="exposure__col exposure__heading">
              Brand <br />{' '}
            </div>
            <div className="exposure__col exposure__heading">
              Value <br />
              <span> (USD)</span>
            </div>
            <div className="exposure__col exposure__heading">
              Exposure <br />
              <span>(HH:MM:SS)</span>
            </div>
            <div className="exposure__col exposure__heading">
              Avg. Exposure <br />
              <span> (HH:MM:SS)</span>
            </div>
            <div className="exposure__col exposure__heading">
              # of Count <br />
              <span> </span>
            </div>
          </div>
          <div className="exposure__row exposure__active">
            <div className="exposure__col">
              <span className="ceDot dot__1" />
              0.7-1.0
            </div>
            <div className="exposure__col">3.81M</div>
            <div className="exposure__col">00:07:04</div>
            <div className="exposure__col">00:00:00</div>
            <div className="exposure__col">487</div>
          </div>
          <div className="exposure__row ">
            <div className="exposure__col">
              <span className="ceDot dot__2" />
              1.0-3.0
            </div>
            <div className="exposure__col">42.93M</div>
            <div className="exposure__col">01:19:44</div>
            <div className="exposure__col">00:00:02</div>
            <div className="exposure__col">2391</div>
          </div>
          <div className="exposure__row ">
            <div className="exposure__col">
              <span className="ceDot dot__3" />
              3.0-5.0
            </div>
            <div className="exposure__col">45.68M</div>
            <div className="exposure__col">01:24:50</div>
            <div className="exposure__col">00:00:03</div>
            <div className="exposure__col">1327</div>
          </div>
          <div className="exposure__row ">
            <div className="exposure__col">
              <span className="ceDot dot__4" />
              &gt;5.0
            </div>
            <div className="exposure__col">61.97M</div>
            <div className="exposure__col">01:55:07</div>
            <div className="exposure__col">00:00:07</div>
            <div className="exposure__col">953</div>
          </div>
        </div>
      </div>
      <div className="exposure__sponsorList">
        <div style={{ marginBottom: 25 }}>
          <h3 className="matchValuation__title">
            02 Continuous Exposure - Sponsor Listing
          </h3>
          <h5 className="matchValuation__subtitle">
            Continuous Exposure details for the list of Sponsors within the
            selected Band
          </h5>
        </div>
        <div className="exposure__table">
          <div className="exposure__row exposure__row--big">
            <div className="exposure__col exposure__heading">
              Brand <br />{' '}
            </div>
            <div className="exposure__col exposure__heading">
              Value <br />
              <span> (USD)</span>
            </div>
            <div className="exposure__col exposure__heading">
              Exposure <br />
              <span>(HH:MM:SS)</span>
            </div>
            <div className="exposure__col exposure__heading">
              Avg. Exposure <br />
              <span> (HH:MM:SS)</span>
            </div>
            <div className="exposure__col exposure__heading">
              # of Count <br />
              <span> </span>
            </div>
          </div>
          <div className="exposure__row exposure__row--big active">
            <div className="exposure__col">
              {/* <span className="ceDot dot__1" /> */}
              Emirates
            </div>
            <div className="exposure__col">3.81M</div>
            <div className="exposure__col">00:07:04</div>
            <div className="exposure__col">00:00:00</div>
            <div className="exposure__col">487</div>
          </div>
          <div className="exposure__row exposure__row--big">
            <div className="exposure__col">
              {/* <span className="ceDot dot__2" /> */}
              Rolex
            </div>
            <div className="exposure__col">42.93M</div>
            <div className="exposure__col">01:19:44</div>
            <div className="exposure__col">00:00:02</div>
            <div className="exposure__col">2391</div>
          </div>
          <div className="exposure__row exposure__row--big">
            <div className="exposure__col">
              {/* <span className="ceDot dot__3" /> */}
              DHL
            </div>
            <div className="exposure__col">45.68M</div>
            <div className="exposure__col">01:24:50</div>
            <div className="exposure__col">00:00:03</div>
            <div className="exposure__col">1327</div>
          </div>
          <div className="exposure__row exposure__row--big">
            <div className="exposure__col">
              {/* <span className="ceDot dot__4" /> */}
              Pirelli
            </div>
            <div className="exposure__col">61.97M</div>
            <div className="exposure__col">01:55:07</div>
            <div className="exposure__col">00:00:07</div>
            <div className="exposure__col">953</div>
          </div>
          <div className="exposure__row exposure__row--big">
            <div className="exposure__col">
              {/* <span className="ceDot dot__4" /> */}
              Pirelli
            </div>
            <div className="exposure__col">61.97M</div>
            <div className="exposure__col">01:55:07</div>
            <div className="exposure__col">00:00:07</div>
            <div className="exposure__col">953</div>
          </div>
        </div>
        <div className="exposure__pagination">
          <span>1/5</span>
          <div className="exposure__pageArrow ripple">
            <Icon path={mdiChevronLeft} size={1.2} color="#fff" />
          </div>
          <div className="exposure__pageArrow ripple">
            <Icon path={mdiChevronRight} size={1.2} color="#fff" />
          </div>
        </div>
      </div>
      <div className="exposure__sponsorSelected">
        {' '}
        <div style={{ marginBottom: 25 }}>
          <h3 className="matchValuation__title">
            03 Continuous Exposure - Selected Sponsor across Brands
          </h3>
          <h5 className="matchValuation__subtitle">
            Continuous Exposure details for the selected Sponsor for all the
            Bands
          </h5>
        </div>
        <div className="flexRow">
          <div className="exposure__sponsorContent">
            <div className="exposure__sponsorheader">
              <div className="exposure__sponsorImg">
                <img
                  alt="test"
                  src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v2/projects/PRJ101/sponsors/SPR162/primary.png"
                />
              </div>
              <h5>BYJU's</h5>
            </div>
            <div className="exposure__contentList">
              <div className="exposure__contentItem">
                <span>Exposure %</span>
                <small>99.99 %</small>
              </div>
              <div className="exposure__contentItem">
                <span>Total Exposure</span>
                <small>04:46:46</small>
              </div>
              <div className="exposure__contentItem">
                <span>Exposure count</span>
                <small>5158</small>
              </div>
              <div className="exposure__contentItem">
                <span>Avg. Exposure</span>
                <small>00:00:13</small>
              </div>
            </div>
          </div>
          <div className="exposure__sponsorGraph">
            <img src={exposureGraph} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
// Durationcard.propTypes = {
//   title: PropTypes.string,
//   result: PropTypes.string,
//   type: PropTypes.string,
//   desc: PropTypes.string,
// };
export default ExposureSection;
