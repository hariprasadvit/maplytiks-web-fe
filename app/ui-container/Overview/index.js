/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiMessage, mdiMagnify } from '@mdi/js';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';
import OverviewImg from 'images/Holistic.png';

class overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  static propTypes = {
    history: PropTypes.object,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < screen.height - 120;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  // menuToggle() {
  //   const menu = document.getElementById('menu');
  //   const menuStyle = getComputedStyle(menu);
  //   if (menuStyle.opacity === '0') {
  //     menu.style.opacity = '1';
  //     menu.classList.add('show');
  //   } else {
  //     menu.style.opacity = '0';
  //     menu.classList.remove('show');
  //   }
  //   const toggleMenu = document.getElementById('menu-toggle');
  //   toggleMenu.classList.toggle('show');
  // }

  render() {
    return (
      // Main Wrapper Starts
      // Main Ends Starts
      <div className="analyticsWrapper">
        {/* Header Starts */}
        {/* Header Ends */}
        <div className="analyticsHeader">
          <header id="header" className={this.state.isTop ? '' : 'sticky'}>
            <div className="container">
              <div className="row space-between">
                <div
                  className="header-left"
                  onClick={() => this.props.history.push('/')}
                >
                  <img src={logo} alt="" />
                </div>
                <div className="header-right">
                  <div className="messageBox">
                    <Icon path={mdiMessage} size={0.8} />
                  </div>
                  <div className="profileBlock">
                    <div className="profileBlock__img">
                      <img src={ProfileImg} alt="" />
                    </div>
                    <h4> Welcome, Max</h4>
                    <Icon path={mdiChevronUp} size={0.8} />
                    <div className="profileBlock__dropdown">
                      <ul>
                        <li>Profile Brief</li>
                        <li>Profile</li>
                        <li>Log Out</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="HeaderContent">
            <div className="HeaderContent__details">
              <div className="HeaderContent__Status">
                <div className="ContentImg">
                  <img src={ProfileImg} alt="" />
                </div>
                <div className="ContentText">
                  <div className="ContentTextHeader">
                    <h3>San Antonio Spurs</h3>
                    <span className="live" />
                  </div>
                  <div className="ContentTextDetails">
                    <span>2019-20</span>
                    <span>NBA Regular Season</span>
                    <span>15th March - 27th March 2019</span>
                    <span className="active">#Sports</span>
                  </div>
                </div>
                {/* <div className="ContentMenu">
            <span />
            <span />
            <span />
          </div> */}
              </div>
              <div className="viewStatus">
                <div className="viewStatus-btn">
                  <button type="button">View Briefing</button>
                  {/* <button type="button">Comments</button> */}
                </div>
                {/* <div className="viewStatus-process">
            <h5>Project Status</h5>
            <span>Processing</span>
          </div> */}
              </div>
            </div>
          </div>
          <div className="analiticsBreadCrumbs">
            <div className="analiticsBreadCrumbs__content">
              <div className="analiticsBreadCrumbs__tabs">
                <span className="active">Overview</span>
                {/* <span>Key Metrics</span> */}
                <span
                  onClick={() =>
                    this.props.history.push(
                      `/dashboard${this.props.history.location.search}`,
                    )
                  }
                >
                  Analytics
                </span>
              </div>

              {/* <div className="platformList">
                <h5>Platforms</h5>

                <div className="platformList-item">
                  <span>Social Media</span>{' '}
                  <Icon path={mdiChevronDown} size={0.7} />
                  <ul>
                    <li>Matches 1</li>
                    <li>Matches 2</li>
                    <li>Matches 3</li>
                    <li>Matches 4</li>
                  </ul>
                </div>
                <div className="platformList-bottom">
                  <span>Click here to change the project platform anytime</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Header ends */}
        {/* Overview Starts */}
        <div className="container">
          <div className="overview-wrapper">
            <div className="overview-sidebar">
              <ul>
                <li className="active">Matches</li>
                <li>Venues</li>
                <li>Sponsors</li>
                <li>Assets</li>
                <li>Platforms</li>
              </ul>
            </div>

            <div className="overview-main">
              <div className="global-filter-right-header">
                <div className="global-filter-right-result">
                  Showing 100 matches
                </div>
                <div className="global-filter-right-search">
                  <div className="my-projects-search">
                    <span className="search-icon">
                      <Icon path={mdiMagnify} size={1} />
                    </span>
                    <form>
                      <input
                        type="text"
                        placeholder="Search"
                        className="input-field"
                      />
                      {/* <input type="submit" value="" className="inline-button" /> */}
                      <button type="submit" className="inline-button" />
                    </form>
                  </div>
                </div>
              </div>
              <div id="overview-matches">
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Spain 2019</div>
                      <div className="overview-card-top-subtitle">
                        Formula 1 Emirates Gran Premio De Espana 2019
                      </div>
                      <div className="overview-card-top-date">May 10 - 12</div>
                    </div>
                    <div className="overview-card-bottom">
                      <span className="text-underline">View Team</span>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-tray arrow-top-2">
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-tray arrow-top-center">
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">
                        World Cup Russia
                      </div>
                      <div className="overview-card-top-subtitle">
                        Match 1 : Wembley
                      </div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>

                      <div className="overview-card-bottom-vs">vs</div>
                      <div className="overview-card-bottom-team">
                        <div className="overview-card-bottom-flag">
                          <img src={OverviewImg} alt="" />
                        </div>
                        <h6>ENG</h6>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  {/* <div className="overview-card-bottom">
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-card-bottom-teams">
                      England vs Argentina
                    </div>
                    <div className="overview-card-bottom-flag">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div> */}
                </div>
                <div className="overview-tray arrow-top-right">
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                </div>
              </div>
              <div id="overview-sponsors">
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-tray arrow-pos-1 arrow-pos-2 arrow-pos-3 arrow-pos-4 arrow-pos-5 arrow-pos-6 arrow-pos-7">
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                  <div className="overview-tray-item">
                    <div className="overview-tray-item-img">
                      <img src={OverviewImg} alt="" />
                    </div>
                    <div className="overview-tray-item-title">Team Name</div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                  <div className="overview-card-bottom">
                    <div className="overview-card-bottom-title">Sponsor 1</div>
                    <div className="overview-card-bottom-subtitle">
                      (5 Models)
                    </div>
                  </div>
                </div>
              </div>
              <div id="overview-episodes">
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <div className="overview-card-top">
                    <div className="overview-card-top-details">
                      <div className="overview-card-top-title">Episode 1</div>
                      <div className="overview-card-top-date">28/07/19</div>
                    </div>
                    <div className="overview-card-bottom">
                      <div className="overview-card-bottom-text">
                        <p>Chowdiah Meorial Hall</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                    <div className="overview-card-top-image">
                      <img src={OverviewImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overview Ends */}
      </div>
    );
  }
}

export default overview;
