/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
// import twitter from url('');

import {
  mdiChevronDown,
  mdiKeyboardBackspace,
  mdiChevronLeft,
  mdiChevronRight,
} from '@mdi/js';

import Button from '../../components/common/Button';
import youtube from '../../images/youtube.png';
import twitter from '../../images/Group 21.png';
import bullseye from '../../images/bullseye1.png';
import broadcast from '../../images/broadcast.png';
import chart from '../../images/chart 2.png';
const DATAVALUE = [
  {
    title: 'Total \n Duration Tracked',
    count: '09:10:45',
    time: 'HH : MM : SS',
  },
  {
    title: 'Brand Exposure count',
    count: '$12,000',
  },
  {
    title: 'Brand Exposure Quantity',
    count: '09:10:45',
  },
  {
    title: 'Brand Visibility',
    count: '75%',
  },
];
const DATAVALUE1 = [
  {
    title: 'Best Performing Sport',
    count: 'Football',
    time: 'HH : MM : SS',
  },
  {
    title: 'Best Performing Event',
    count: 'MUN vs CHE',
  },
  {
    title: 'Total Viewership',
    count: '1.2 M',
  },
  {
    title: 'Total Viewership',
    count: '166:52:23',
    // time: 'HH : MM : SS',
  },
];
const Programs = ({
  programTitle,
  programDesc,
  startDate,
  startMonth,
  endDate,
  programLogo,
  endMonth,
  programTime,
  programText,
  sports,
  entertainment,
  type,
}) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="programs">
      <div className="programs__header">
        <div className="programs__img">
          <img src={programLogo} alt="program" />
        </div>

        <div className="programs__title">
          <h2>{programTitle}</h2>
          <span>{programDesc}</span>
        </div>

        <div className="programs__date">
          <div>
            <span className="programs__dateDay">{startDate}</span>
            <div className="programs__dateMonth">{startMonth}</div>
          </div>
          <Icon path={mdiKeyboardBackspace} size={0.6} />
          <div>
            <span className="programs__dateDay">{endDate}</span>
            <div className="programs__dateMonth">{endMonth}</div>
          </div>
        </div>

        {programTime && (
          <div className="programs__time">
            <h2 className="programs__dateDay">{programTime}</h2>
            <span className="programs__dateMonth">{programText}</span>
          </div>
        )}

        <div className="programs__type">
          {sports && <h2>{sports}</h2>}
          {entertainment && <h4>{entertainment}</h4>}
        </div>

        <div
          className={`programs__icon ${showContent ? 'active' : ''}`}
          onClick={() => setShowContent(!showContent)}
        >
          <Icon path={mdiChevronDown} size={1.2} />
        </div>
        {/* <button type="button" className="button draw">
        Draw
      </button> */}
      </div>
      {type === 'formula' && (
        <>
          <div className={`programs__body ${showContent ? 'active' : ''}`}>
            <div className="programs__sidenav">
              <div className="programs__navitem active">
                <div className="programs__navimage">
                  <img src={bullseye} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={broadcast} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={twitter} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
            <div className="programs__data">
              <div className="programs__dataHeading">
                <h2>Broadcast</h2>
                <Button type="primaryRipple" label="Dashboard" />
              </div>
              <div className="programs__dataBody">
                <div className="programs__dataChart">
                  <div className="programs__dataChart-wrapper">
                    <div className="programs__dataChart-circular">
                      <svg viewBox="0 0 200 200" className="circular-chart">
                        <circle
                          className="circular-bg"
                          cx="100"
                          cy="100"
                          r="80"
                          fill="none"
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="8"
                        />
                        <circle
                          className="circular-progress"
                          cx="100"
                          cy="100"
                          r="80"
                          fill="none"
                          stroke="#FF6B35"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray="352 502"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 107, 53, 0.5))' }}
                        />
                      </svg>
                      <div className="circular-center">
                        <div className="circular-time">HH:MM:SS</div>
                      </div>
                    </div>
                    <div className="programs__dataChart-label">Exposure Distribution</div>
                  </div>
                </div>
                <div className="programs__dataOverview">
                  <div className="programs__dataGrid">
                    {DATAVALUE.map(item => (
                      <div className="programs__dataColumn">
                        <h4 className="programs__dataTitle">
                          {' '}
                          {item.title.split(' ')[0]}
                          <br />
                          {item.title.split(/ (.+)/)[1]}
                        </h4>
                        <div className="programs__dataCount">{item.count}</div>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="programs__dataGrid">
                    {DATAVALUE1.map(item => (
                      <div className="programs__dataColumn">
                        <h4 className="programs__dataTitle">
                          {' '}
                          {item.title.split(' ')[0]}
                          <br />
                          {item.title.split(/ (.+)/)[1]}
                        </h4>
                        <div className="programs__dataCount">{item.count}</div>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="programs__dataAnalytics">
                    <a href="gg">View broadcast analytics</a>
                  </div>
                </div>
                <div className="programs__dataFooter">
                  <div className="programs__dataStatus">
                    <div className="programs__dataStatus-left active">
                      Project status
                    </div>
                    <div className="programs__dataStatus-right">M- Live</div>
                  </div>
                  <div className="programs__dataUpdate">
                    FIFA Project status 5
                  </div>
                  <div className="programs__dataPagination">
                    <div className="highlights__header-right">
                      {' '}
                      <div className="ripple">
                        <Icon path={mdiChevronLeft} size={0.9} color="#fff" />
                      </div>
                      <div className="ripple">
                        {' '}
                        <Icon path={mdiChevronRight} size={0.9} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {type === 'fifa' && (
        <>
          <div className={`programs__body ${showContent ? 'active' : ''}`}>
            <div className="programs__sidenav">
              <div className="programs__navitem active">
                <div className="programs__navimage">
                  <img src={bullseye} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={broadcast} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={twitter} alt="" />
                </div>
              </div>
              <div className="programs__navitem">
                <div className="programs__navimage">
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
            <div className="programs__data">
              <div className="programs__dataHeading">
                <h2>Broadcast</h2>
                <Button type="primaryRipple" label="Dashboard" />
              </div>
              <div className="programs__dataBody">
                <div className="programs__dataChart">
                  <div className="programs__dataChart-wrapper">
                    <div className="programs__dataChart-circular">
                      <svg viewBox="0 0 200 200" className="circular-chart">
                        <circle
                          className="circular-bg"
                          cx="100"
                          cy="100"
                          r="80"
                          fill="none"
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="8"
                        />
                        <circle
                          className="circular-progress"
                          cx="100"
                          cy="100"
                          r="80"
                          fill="none"
                          stroke="#FF6B35"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray="352 502"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255, 107, 53, 0.5))' }}
                        />
                      </svg>
                      <div className="circular-center">
                        <div className="circular-time">HH:MM:SS</div>
                      </div>
                    </div>
                    <div className="programs__dataChart-label">Exposure Distribution</div>
                  </div>
                </div>
                <div className="programs__dataOverview">
                  <div className="programs__dataGrid">
                    {DATAVALUE.map(item => (
                      <div className="programs__dataColumn">
                        <h4 className="programs__dataTitle">
                          {' '}
                          {item.title.split(' ')[0]}
                          <br />
                          {item.title.split(/ (.+)/)[1]}
                        </h4>
                        <div className="programs__dataCount">{item.count}</div>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="programs__dataGrid">
                    {DATAVALUE1.map(item => (
                      <div className="programs__dataColumn">
                        <h4 className="programs__dataTitle">
                          {' '}
                          {item.title.split(' ')[0]}
                          <br />
                          {item.title.split(/ (.+)/)[1]}
                        </h4>
                        <div className="programs__dataCount">{item.count}</div>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="programs__dataAnalytics">
                    <a href="gg">View broadcast analytics</a>
                  </div>
                </div>
                <div className="programs__dataFooter">
                  <div className="programs__dataStatus">
                    <div className="programs__dataStatus-left">
                      Project status
                    </div>
                    <div className="programs__dataStatus-right active">
                      M- Live
                    </div>
                  </div>
                  <div className="programs__dataUpdate">
                    FIFA Project status 5
                  </div>
                  <div className="programs__dataPagination">
                    <span className="programs__dataPagenumber">1/5</span>
                    <div className="highlights__header-right">
                      {' '}
                      <div className="ripple">
                        <Icon path={mdiChevronLeft} size={0.9} color="#fff" />
                      </div>
                      <div className="ripple">
                        {' '}
                        <Icon path={mdiChevronRight} size={0.9} color="#fff" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
Programs.propTypes = {
  programLogo: PropTypes.string,
  programTitle: PropTypes.string,
  programDesc: PropTypes.string,
  startDate: PropTypes.string,
  startMonth: PropTypes.string,
  endDate: PropTypes.string,
  endMonth: PropTypes.string,
  programTime: PropTypes.string,
  programText: PropTypes.string,
  sports: PropTypes.string,
  entertainment: PropTypes.string,
  type: PropTypes.string,
};
export default Programs;
