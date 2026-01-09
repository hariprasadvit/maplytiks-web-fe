/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiMessage,
  mdiRepeat,
  mdifilter,
  mdiChevronLeft,
  mdiMagnify,
  mdiClose,
  // mdiHandPointingUp,
  // mdiMagnify,
  mdiChevronRight,
} from '@mdi/js';
import OverviewImg from 'images/Holistic.png';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';

class Analytics extends Component {
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
    // debugger;
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
      <div className="analyticsWrapper">
        {/* Header Starts */}
        <div className="analyticsHeader">
          {/* <header id="header" className={this.state.isTop ? '' : 'sticky'}> */}
          <header id="header" className="">
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
                <span
                  onClick={() => {
                    this.props.history.push('/overview');
                  }}
                >
                  Overview
                </span>
                <span>Key Metrics</span>
                <span className="active">Analytics</span>
              </div>
              <div className="platformList">
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
              </div>
            </div>
          </div>
        </div>
        {/* Header ends */}

        <div className="analyties">
          <div className="dashboard">
            <div className="dashboard__container">
              <div className="dashboardDetails">
                <div className="dashboardDetails__content">
                  <h4>Dashboard View</h4>
                  <div className="dashboardMatch">
                    Matches
                    <span>
                      <Icon path={mdiChevronDown} size={0.7} />
                    </span>
                    <ul>
                      <li>Matches 1</li>
                      <li>Matches 2</li>
                      <li>Matches 3</li>
                      <li>Matches 4</li>
                    </ul>
                  </div>
                  <div>
                    <div>
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
                          <div className="platformList-bottom">
                            <span>
                              Click here to change the project platform anytime
                            </span>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboardFitter">
                <div className="Pulse">
                  <div className="Pulse__Checkbox">
                    <div className="showLive">Show only Live Matches</div>
                    <input type="checkbox" id="checkbox6" />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label
                      htmlFor="checkbox6"
                      className="switch switch-radius"
                    />
                  </div>
                  {/* <span className="Pulsetext">Pulse</span> */}
                </div>
                <span>
                  <Icon path={mdiRepeat} size={1} />
                </span>
                <span className="active">
                  <Icon path={mdifilter} size={1} />
                </span>
              </div>
            </div>
            <div className="alert alert-action">
              <div className="alert-action-left">
                Applied for: <span>100 Matches Selected</span>
                <span>05 Sponsors Selected</span>
                <span>10 Assets Selected</span>
                <span>2 Venues Selected</span>
              </div>
              <div className="alert-action-right">
                <div className="viewStatus-btn">
                  <button type="button">Clear All</button>
                </div>
                <div className="btn btn__primary">
                  <a title className="btn button-cta" href="index.html">
                    Modify
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="matchwiseQuality">
            <div className="matchwiseQualityContent">
              <div className="matchwiseQualityContent__header">
                <div className="contentDetails">
                  <div className="matchwiseQuality__header">
                    <div>
                      <h3>Matchwise Quality, Quantity and Valuation</h3>
                      <h5>
                        Quality (in percentage), Quantity (in secs) and
                        Valuation (in currency) across matches
                      </h5>
                      <div className="matchwiseQuality__checkboxWrapper">
                        <label htmlFor="Quality">
                          <input type="checkbox" id="Quality" />
                          Quality
                        </label>
                        <label htmlFor="Quantity">
                          <input type="checkbox" id="Quantity" />
                          <span> Quantity</span>
                        </label>
                        <label htmlFor="val">
                          <input type="checkbox" id="val" />
                          <span> Valuation</span>
                        </label>
                      </div>
                    </div>
                    <div className="sortBy">
                      <div className="sortBy__text">
                        {/* class added to ul */}
                        <ul className="sortBy__header">
                          <li>
                            <span>Sort by :</span>
                            <h6>Ascending</h6>
                            <Icon path={mdiChevronDown} size={0.7} />

                            <ul>
                              <li>Ascending</li>
                              <li>Descending</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="slideNext">
                  <span>
                    <Icon path={mdiChevronLeft} size={1.2} />{' '}
                  </span>
                  <span>
                    <Icon path={mdiChevronRight} size={1.2} />
                  </span>
                </div> */}
                    </div>
                  </div>
                  <div className="matchGraph">
                    <div className="card">
                      <div>
                        <h5>M9 - Full Name</h5>

                        <div className="card-date">
                          <h5>Stadium - Delhi </h5>
                          <h5>23rd August 2018</h5>
                        </div>
                        <h5>INDIA VS PAK</h5>
                        <h5>4.46M viewers</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slideNext">
                  <span>
                    <Icon path={mdiChevronLeft} size={0.7} />{' '}
                  </span>
                  <span>
                    <Icon path={mdiChevronRight} size={0.7} />
                  </span>
                </div>
              </div>
              <div className="matchwiseQualityContent__footer">
                <div className="show-more">
                  Show Key Insights of Matches
                  <span>
                    <Icon path={mdiChevronDown} size={0.7} />
                  </span>
                </div>
                <div className="matchwiseQualityContent__comments">
                  Table Goes Here
                </div>
              </div>
            </div>
          </div>
          <div className="temporWrapper">
            <div className="temporWrapper__content">
              <div className="temporWrapperContainer">
                <div className="temporWrapperContainer__header">
                  <h2>09:10:45</h2>
                  <h5>HH : MM : SS</h5>
                </div>
                <div className="temporWrapperContainer__text">
                  <h5>Broadcast Duration</h5>
                  <h5>
                    Tempor incididunt ut labore et dolore magna aliqua sports
                    and stuff
                  </h5>
                </div>
              </div>
              <div className="temporWrapperContainer">
                <div className="temporWrapperContainer__header">
                  <h2>100%</h2>
                </div>
                <div className="temporWrapperContainer__text">
                  <h5>Broadcast Duration</h5>
                  <h5>
                    Tempor incididunt ut labore et dolore magna aliqua sports
                    and stuff
                  </h5>
                </div>
              </div>
              <div className="temporWrapperContainer">
                <div className="temporWrapperContainer__header">
                  <h2>8,600,420 USD</h2>
                </div>
                <div className="temporWrapperContainer__text">
                  <h5>Broadcast Duration</h5>
                  <h5>
                    Tempor incididunt ut labore et dolore magna aliqua sports
                    and stuff
                  </h5>
                </div>
              </div>

              {/* Change */}

              <div className="slideNext">
                <span>
                  <Icon path={mdiChevronLeft} size={0.7} />{' '}
                </span>
                <span>
                  <Icon path={mdiChevronRight} size={0.7} />
                </span>
              </div>
            </div>
          </div>
          <div className="timelineWrapper">
            <div className="timelineWrapper__details">
              <div className="timelineWrapper__Content">
                <div className="matchwiseQuality__header">
                  <div>
                    <h3>Timeline</h3>
                    <span>Cumulative Exposure across time</span>
                  </div>
                  <div className="sortBy">
                    <div className="Pulse">
                      <div className="Pulse__Checkbox">
                        <span>Cumulative</span>
                        <input type="checkbox" id="checkbox1" />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label
                          htmlFor="checkbox1"
                          className="switch switch-radius"
                        />
                      </div>
                      <span className="Pulsetext">Pulse</span>
                    </div>
                    {/* <div className="sortBy__text"> */}
                    {/* class added to ul - this is a comment */}
                    {/* <ul className="sortBy__header">
                        <li>
                          <span>Intervals :</span>
                          <h6>5 minutes</h6>
                          <Icon path={mdiChevronDown} size={0.7} />

                          <ul>
                            <li>Matches 1</li>
                            <li>Matches 2</li>
                            <li>Matches 3</li>
                            <li>Matches 4</li>
                          </ul>
                        </li>
                      </ul>
                    </div> */}

                    {/* Change */}

                    <div className="dropdown">
                      <span className="title">Intervals :</span>
                      <span className="options">5 minutes</span>
                      <Icon path={mdiChevronDown} size={0.7} />
                    </div>
                    <div className="dropdown">
                      <span className="title">Intervals :</span>
                      <span className="options">5 minutes</span>
                      <Icon path={mdiChevronDown} size={0.7} />
                    </div>
                  </div>
                </div>
                <div className="timeWrappergraph" />
              </div>
              <div className="slideNext">
                <span>
                  <Icon path={mdiChevronLeft} size={0.7} />{' '}
                </span>
                <span>
                  <Icon path={mdiChevronRight} size={0.7} />
                </span>
              </div>
            </div>
          </div>
          <div className="exposureWrapper">
            <div className="exposureWrapper__Details">
              <div className="continuousWrapper">
                <div className="continuousWrapper__content">
                  <div className="continuousWrapperheader">
                    <h4>01 Continuous Exposure</h4>
                    <span>CE Distribution across time</span>
                  </div>
                  <div className="continuousTotal">
                    <div className="continuousTotal__text">
                      <span>Total Brand Exposure -Quality (secs)</span>
                      <h3 className="activeBlue">12308s</h3>
                    </div>
                    <div className="continuousTotal__piechart" />
                  </div>

                  <div className="exposure-table">
                    <div className="exposure-row">
                      <div className="exposure-col exposure-heading">CE</div>
                      <div className="exposure-col exposure-heading">
                        Total BE
                      </div>
                      <div className="exposure-col exposure-heading">Rank</div>
                      <div className="exposure-col exposure-heading">
                        Avg. Exposure
                      </div>
                      <div className="exposure-col exposure-heading">
                        Exposure Count
                      </div>
                    </div>
                    <div className="exposure-row">
                      <div className="exposure-col">
                        <span className="ceDot dot-1" />
                        &#60;1s
                      </div>
                      <div className="exposure-col">34s</div>
                      <div className="exposure-col">3</div>
                      <div className="exposure-col">0.45s</div>
                      <div className="exposure-col">12</div>
                    </div>
                    <div className="exposure-row">
                      <div className="exposure-col">
                        <span className="ceDot dot-2" />
                        1-2s
                      </div>
                      <div className="exposure-col">34s</div>
                      <div className="exposure-col">3</div>
                      <div className="exposure-col">0.45s</div>
                      <div className="exposure-col">12</div>
                    </div>
                    <div className="exposure-row">
                      <div className="exposure-col">
                        <span className="ceDot dot-3" />
                        2-3s
                      </div>
                      <div className="exposure-col">34s</div>
                      <div className="exposure-col">3</div>
                      <div className="exposure-col">0.45s</div>
                      <div className="exposure-col">12</div>
                    </div>
                    <div className="exposure-row">
                      <div className="exposure-col">
                        <span className="ceDot dot-4" />
                        &#62;3s
                      </div>
                      <div className="exposure-col">34s</div>
                      <div className="exposure-col">3</div>
                      <div className="exposure-col">0.45s</div>
                      <div className="exposure-col">12</div>
                    </div>
                  </div>
                </div>
                {/* <div className="matchwiseQualityContent__bottom">
                <Icon path={mdiHandPointingUp} size={0.5} />

                <span>
                  {' '}
                  In the graph, click on a section to view its CE across
                  sponsors
                </span>
              </div> */}
              </div>
              <div className="SponsorsWrapper category-1">
                <div className="continuousWrapper__content">
                  <div className="continuousWrapperheader">
                    <h4 className="activeBlue">CE across Sponsors</h4>
                    <div className="continuousWrapperheader__subText">
                      <span>
                        CE, no. of exposure count and avg CE across sponsors
                      </span>
                      <span>Showing results for all Product 1</span>
                    </div>
                  </div>
                  <div className="SponsorsWrapper__content">
                    {/* <div className="SponsorListHeader">
                    <ul>
                      <li>Sponsors</li>
                      <li>Rank</li>
                      <li>% Exposure</li>
                      <li>Avg. Exposure</li>
                      <li>Total Exposure</li>
                      <li>Exposure Count</li>
                    </ul>
                  </div> */}

                    <div className="SponsorsWrapperTable">
                      <div className="table-container">
                        <div className="table-header">
                          <div className="table-data table-heading">
                            Sponsors
                          </div>
                          <div className="table-data table-heading">Rank</div>
                          <div className="table-data table-heading">
                            % Exposure
                          </div>
                          <div className="table-data table-heading">
                            Avg. Exposure
                          </div>
                          <div className="table-data table-heading">
                            Total Exposure
                          </div>
                          <div className="table-data table-heading">
                            Exposure Count
                          </div>
                        </div>
                      </div>
                      <div className="table-row active">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                      <div className="table-row">
                        <div className="table-data">Amazon</div>
                        <div className="table-data">4</div>
                        <div className="table-data">13%</div>
                        <div className="table-data">0.24s</div>
                        <div className="table-data">2349s</div>
                        <div className="table-data">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timespanContainer">
            <div className="timespanContainer__details">
              <div className="timespanContainer__content">
                <div>
                  <div className="continuousWrapperheader">
                    <h4 className="activeBlue">
                      03 CE for Sponsor across Timespan
                    </h4>
                    <div className="continuousWrapperheader__subText">
                      <span>Cumulative CE, for a sponsor across timespan</span>
                    </div>
                  </div>
                  <div className="modelsWrapper">
                    <div className="modelsWrapper__content">
                      <div className="modelContentHeader">
                        <h5>Amazon</h5>
                        <span>3 models</span>
                      </div>
                      <div className="modelContentList">
                        <div className="modelContentItem">
                          <span>Exposure</span>
                          <small>2.6%</small>
                        </div>
                        <div className="modelContentItem">
                          <span>Total Exposure Secs</span>
                          <small>2349s</small>
                        </div>
                        <div className="modelContentItem">
                          <span>Exposure count</span>
                          <small>12</small>
                        </div>
                        <div className="modelContentItem">
                          <span>Avg. Exposure</span>
                          <small>0.45s</small>
                        </div>
                      </div>
                    </div>
                    {/* added content 1 start */}
                    <div className="graph">
                      <div className="graph-container">
                        {/* <h4>Avg. Exposure</h4> */}

                        <div className="graph-content">
                          <div className="graph-stage">
                            <div className="graph-col">
                              <div className="graph-item">
                                <span className="stage1">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage2">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage3">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage4">CE </span>
                                <small>26s</small>
                              </div>
                            </div>
                          </div>
                          <div className="graph-details">
                            {' '}
                            <h4>Exposure</h4>
                            <div className="graph-block" />
                          </div>
                        </div>
                      </div>
                      <div className="graph-container">
                        {/* <h4>Avg. Exposure</h4> */}

                        <div className="graph-content">
                          <div className="graph-stage">
                            <div className="graph-col">
                              <div className="graph-item">
                                <span className="stage1">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage2">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage3">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage4">CE </span>
                                <small>26s</small>
                              </div>
                            </div>
                          </div>
                          <div className="graph-details">
                            {' '}
                            <h4>% of Total Exposure</h4>
                            <div className="graph-block" />
                          </div>
                        </div>
                      </div>
                      <div className="graph-container">
                        {/* <h4>Avg. Exposure</h4> */}

                        <div className="graph-content">
                          <div className="graph-stage">
                            <div className="graph-col">
                              <div className="graph-item">
                                <span className="stage1">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage2">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage3">CE </span>
                                <small>26s</small>
                              </div>
                              <div className="graph-item">
                                <span className="stage4">CE </span>
                                <small>26s</small>
                              </div>
                            </div>
                          </div>
                          <div className="graph-details">
                            {' '}
                            <h4>Avg. Exposure</h4>
                            <div className="graph-block" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* added content 1 ended */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="analyticsFooter">
          <div>
            <a href="hi">Glossary</a>
            <a href="hi">Terms of use</a>
            <a href="hi">Privacy Policy</a>
            <a href="hi">Contact us</a>
          </div>
          <div>
            <a href="hi">Twitter</a>
            <a href="hi">Linkedin</a>
            <a href="hi">Copyrights 2019. All rights reserved </a>
          </div>
        </div>
        <div className="global-filter">
          <div className="global-filter-overlay" />
          <div className="global-filter-modal">
            <div className="global-filter-header">
              <div className="global-filter-title">Filter Matches</div>
              <div className="global-filter-close">
                <Icon path={mdiClose} size={0.8} />
              </div>
            </div>
            <div className="global-filter-nav">
              <span className="active">Matches</span>
              <span>Sponsors</span>
              <span>Venues</span>
              <span>Assets</span>
            </div>
            <div className="global-filter-body">
              <div className="global-filter-left">
                <div className="global-filter-gender">
                  <div className="dashboardMatch">
                    Matches
                    <span>
                      <Icon path={mdiChevronDown} size={0.7} />
                    </span>
                    <ul>
                      <li>Matches 1</li>
                      <li>Matches 2</li>
                      <li>Matches 3</li>
                      <li>Matches 4</li>
                    </ul>
                  </div>
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
                  <div className="form_label">
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                  </div>
                  <div className="global-filter-more">
                    See more(20)
                    <Icon path={mdiChevronDown} size={0.6} />
                  </div>
                </div>
                <div className="global-filter-countries">
                  <div className="global-filter-title">Select Countries</div>
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
                  <div className="form_label">
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                  </div>
                  <div className="global-filter-more">
                    See more(20)
                    <Icon path={mdiChevronDown} size={0.6} />
                  </div>
                </div>
                <div className="global-filter-sessions">
                  <div className="global-filter-title">Select Sessions</div>
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
                  <div className="form_label">
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                    <div className="checkbox_label">
                      <input
                        type="checkbox"
                        value="None"
                        name="check"
                        id="test1"
                      />
                      <label htmlFor="test1">
                        <span id="checktype"> Women </span>
                      </label>
                    </div>
                  </div>
                  <div className="global-filter-more">
                    See more(20)
                    <Icon path={mdiChevronDown} size={0.6} />
                  </div>
                </div>
              </div>
              <div className="global-filter-right">
                <div className="alert">
                  Applied Filters: <span>100 Matches</span> |{' '}
                  <span>5 Sponsors</span> | <span>10 Assets</span> |{' '}
                  <span>2 Venues</span>
                </div>
                <div className="global-filter-main">
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
                  <div className="global-filter-right-header">
                    <div className="Pulse">
                      <div className="Pulse__Checkbox">
                        <div className="showLive">Show only Live Matches</div>
                        <input type="checkbox" id="checkbox6" />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label
                          htmlFor="checkbox6"
                          className="switch switch-radius"
                        />
                      </div>
                      {/* <span className="Pulsetext">Pulse</span> */}
                    </div>
                    <div className="global-filter-right-selected">
                      0 Selected
                    </div>
                  </div>
                  <div className="global-filter-right-result">
                    <div className="global-filter-right-alphaHeader">A</div>
                    <div className="form_label row5">
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="global-filter-main">
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
                  <div className="global-filter-right-header">
                    <div className="Pulse">
                      <div className="Pulse__Checkbox">
                        <div className="showLive">Show only Live Matches</div>
                        <input type="checkbox" id="checkbox6" />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label
                          htmlFor="checkbox6"
                          className="switch switch-radius"
                        />
                      </div>
                      {/* <span className="Pulsetext">Pulse</span> */}
                    </div>
                    <div className="global-filter-right-selected">
                      0 Selected
                    </div>
                  </div>
                  <div className="global-filter-right-result">
                    <div className="global-filter-right-alphaHeader">A</div>
                    <div className="form_label row3">
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                        <div className="text-link text-red text-underline m-l-5">
                          Customize
                        </div>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                      <div className="checkbox_label">
                        <input
                          type="checkbox"
                          value="None"
                          name="check"
                          id="test1"
                        />
                        <label htmlFor="test1">
                          <span id="checktype"> Women </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="global-filter-customize">
                    <div className="global-filter-customize-title">
                      Showing 5 Models for Emirates
                    </div>
                    <div className="global-filter-customize-actions-top">
                      <div className="text-link select m-r-25">Select All</div>
                      <div className="text-link text-red">Reset</div>
                    </div>
                    <div className="global-filter-customize-options m-t-40">
                      <div className="form_label row3 thumbnail-options">
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                        <div className="checkbox_label">
                          <input
                            type="checkbox"
                            value="None"
                            name="check"
                            id="test1"
                          />
                          <label htmlFor="test1">
                            <div className="overview-tray-item-img">
                              <img src={OverviewImg} alt="" />
                            </div>
                            <span id="checktype"> Women </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="global-filter-customize-actions-bottom">
                      <div className="button button-action-default m-r-15">
                        <button type="button">Cancel</button>
                      </div>
                      <div className="button button-action-primary">
                        <button type="button">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="global-filter-footer">
                  <div className="text-link text-red m-r-15">
                    Reset Sponsors
                  </div>
                  <div className="button button-action-default m-r-15">
                    <button type="button">Cancel</button>
                  </div>
                  <div className="button button-action-primary">
                    <button type="button" className="shadow">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submodal Starts */}

            <div className="global-filter-body">
              <div className="global-filter-submodal">
                <div className="global-filter-main">Content Goes here</div>
                <div className="global-filter-footer">
                  <div className="text-link text-red m-r-15">
                    Reset Sponsors
                  </div>
                  <div className="button button-action-default m-r-15">
                    <button type="button">Cancel</button>
                  </div>
                  <div className="button button-action-primary">
                    <button type="button" className="shadow">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submodal Ends */}
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
