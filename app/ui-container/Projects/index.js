/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  // mdiFacebook,
  // mdiGooglePlus,
  // mdiLinkedin,
  mdiArrowUp,
  mdiMagnify,
  mdiEye,
  mdiMonitor,
  mdiCameraOutline,
  mdiCellphone,
  mdiChevronRight,
} from '@mdi/js';
import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import logo from 'images/logo-tagline.png';
import slider1 from 'images/second-slider.png';
// import chart from 'images/chart.png';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      // startDate: new Date(),
      // endDate: new Date(),
    };
    this.onScroll = this.onScroll.bind(this);
  }

  static propTypes = {
    history: PropTypes.object,
  };

  // handleChange = data => {
  //   this.setState({
  //     startDate: data,
  //   });
  // };

  // handleChangeEnd = data => {
  //   this.setState({
  //     endDate: data,
  //   });
  // };

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

  menuToggle() {
    const menu = document.getElementById('menu');
    const menuStyle = getComputedStyle(menu);
    if (menuStyle.opacity === '0') {
      menu.style.opacity = '1';
      menu.classList.add('show');
    } else {
      menu.style.opacity = '0';
      menu.classList.remove('show');
    }
    const toggleMenu = document.getElementById('menu-toggle');
    toggleMenu.classList.toggle('show');
  }

  handleSelect(ranges) {
    console.log(ranges);
    // {
    // 	selection: {
    // 		startDate: [native Date Object],
    // 		endDate: [native Date Object],
    // 	}
    // }
  }

  render() {
    // const selectionRange = {
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   key: 'selection',
    // };
    return (
      // Main Wrapper Starts
      <div className="main-wrapper">
        {/* Header Starts */}
        <header id="header" className={this.state.isTop ? '' : 'sticky'}>
          <div className="container">
            <div className="row space-between">
              <div className="header-left">
                <img src={logo} alt="" />
              </div>
              <div className="header-right">
                <ul id="menu">
                  <li>
                    <a href="index.html">About</a>
                  </li>
                  <li>
                    <a href="index.html">How it works</a>
                  </li>
                  <li>
                    <a href="index.html">Why us</a>
                  </li>
                  <li>
                    <a href="index.html">Projects</a>
                  </li>
                  <li className="btn secondary-btn">
                    <a href="index.html">Contact us</a>
                  </li>
                  <li className="btn primary-btn">
                    <a href="index.html">Sign in</a>
                  </li>
                </ul>
                <div id="menu-toggle" onClick={this.menuToggle}>
                  <span className="menu-bar" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Ends */}

        {/* Body Wrapper Starts */}
        <div className="body-wrapper inner-wrapper">
          {/* Banner Mini Starts */}
          {/* <div className="banner-mini">
            <img src={bannerMini} alt="" />
          </div> */}
          {/* Banner Mini Ends */}

          {/* Project Highlights Starts */}

          <div className="project-highlights container">
            <div className="project-highlights-header show">
              <div className="project-highlights-header-left">
                Project Highlights
              </div>
              <div className="project-highlights-header-right" />
            </div>
            <div className="project-highlights-body">
              <div className="row">
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Total Duration Tracked
                      </div>
                      <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                        09:10:45
                      </div>
                      <div className="project-highlights-grid-details-bottom">
                        HH : MM : SS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-low">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Brand Exposure Value
                      </div>
                      <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                        56:31:05
                      </div>
                      <div className="project-highlights-grid-details-bottom">
                        HH : MM : SS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Brand Exposure Quantity
                      </div>
                      <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                        49
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-low">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Brand Visibility Percentage
                      </div>
                      <div className="project-highlights-grid-details-generic text-m">
                        <span>75%</span>
                        <div className="progress-bar">
                          <div className="progress-bar-filled" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Best Performing Sport/Media
                      </div>
                      <div className="project-highlights-grid-details-generic text-m">
                        Football
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Best Performing Event
                      </div>
                      <div className="project-highlights-grid-details-count text-m">
                        MUN vs CHE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-low">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Total Viewership
                      </div>
                      <div className="project-highlights-grid-details-count text-m">
                        300,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="project-highlights-grid">
                    <span className="project-highlights-status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="project-highlights-grid-details">
                      <div className="project-highlights-grid-details-title">
                        Avg. Viewership/Event
                      </div>
                      <div className="project-highlights-grid-details-count text-m">
                        50,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2" />
                <div className="col-2" />
              </div>
            </div>
          </div>

          {/* Project Highlights Ends */}

          <div className="separator m-b-40" />

          {/* My Projects Starts */}

          <div className="container">
            <div className="my-projects-header">
              <div className="my-projects-title">My Projects</div>
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
              <div className="my-projects-date-range">
                <label>From</label>
                <span className="date-span">21 Jun 2019</span>
                <label>To</label>
                <span className="date-span">21 Jun 2019</span>
                {/* <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={this.handleSelect}
                  className="date-range"
                  months={2}
                  direction="horizontal"
                  showSelectionPreview
                  moveRangeOnFirstSelection={false}
                /> */}
                <button type="submit" className="inline-button" />
              </div>
            </div>
            <div className="my-projects-body">
              <div className="my-projects-grid sports">
                <div className="project-highlights-header show">
                  <div className="project-highlights-header-left">
                    <div className="project-img">
                      <img src={slider1} alt="" />
                    </div>
                    <div className="project-details">
                      <div className="project-title">San Antonio Spurs</div>
                      <div className="project-sub-section">
                        <span>2019-20</span>
                        <span>NBA Regular Season</span>
                        <span>15th March - 27th March 2019</span>
                        <span className="category">#Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-highlights-header-right">
                    <div className="btn btn__primary">
                      <a
                        // href="index.html"
                        title=""
                        className="btn button-cta"
                        onClick={() => this.props.history.push('/analytics')}
                      >
                        Dashboard
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-highlights-body">
                  <div className="row">
                    <div className="view-type">
                      <button className="view-all" type="button">
                        <Icon path={mdiEye} size={0.8} />
                      </button>
                      <ul className="view-list">
                        <li>
                          <button className="view-broadcast" type="button">
                            <Icon path={mdiMonitor} size={0.8} />
                            <span className="view-title">BC</span>
                          </button>
                        </li>
                        <li>
                          <button className="view-ott" type="button">
                            <Icon path={mdiCameraOutline} size={0.8} />
                            <span className="view-title">OTT</span>
                          </button>
                        </li>
                        <li>
                          <button className="view-socialMedia" type="button">
                            <Icon path={mdiCellphone} size={0.8} />
                            <span className="view-title">SM</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="project-highlights-data">
                      <div className="project-highlights-data-top">
                        <div className="project-highlights-data-chart">
                          {/* <img src={chart} alt="" /> */}
                          <div className="svg-title text-m">Test Title</div>
                        </div>
                        <div className="project-highlights-data-overview">
                          <div className="project-highlights-data-row m-b-25">
                            <div className="project-highlights-data-title">
                              Project Highlights
                            </div>
                            <div className="project-highlights-data-submit">
                              <button type="submit" className="inline-button" />
                            </div>
                          </div>
                          <div className="project-highlights-data-row space-between">
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Total Duration Tracked
                                  </div>
                                  <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                                    09:10:45
                                  </div>
                                  <div className="project-highlights-grid-details-bottom">
                                    HH : MM : SS
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Brand Exposure Value
                                  </div>
                                  <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                                    $ 12,000
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Brand Exposure Quantity
                                  </div>
                                  <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                                    09:10:45
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Brand Visibility
                                  </div>
                                  <div className="project-highlights-grid-details-count text-blue text-ms text-m">
                                    75%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="project-highlights-data-row space-between">
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Best Performing Sport
                                  </div>
                                  <div className="project-highlights-grid-details-count text-m">
                                    Football
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Best Performing Event
                                  </div>
                                  <div className="project-highlights-grid-details-count text-m">
                                    MUN vs CHE
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Total Viewership
                                  </div>
                                  <div className="project-highlights-grid-details-count text-m">
                                    1.2M
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="project-highlights-data-col">
                              <div className="project-highlights-grid">
                                <div className="project-highlights-grid-details">
                                  <div className="project-highlights-grid-details-title">
                                    Average Viewership
                                  </div>
                                  <div className="project-highlights-grid-details-count text-m">
                                    300,000
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-highlights-data-bottom space-between">
                        <div className="project-highlights-data-space">
                          <div className="project-highlights-data-status">
                            <span className="title">Project Status</span>
                            <span className="live">M - Live</span>
                          </div>
                          <div className="project-highlights-data-ticker">
                            Manchester City vs Liverpool scheduled for 4:20 GMT
                            today
                          </div>
                        </div>

                        {/* added new element-1 start */}
                        <div className="page">
                          <span>01</span>

                          <div className="page-list">
                            <ul>
                              <li className="page-dot active" />
                              <li className="page-dot" />
                              <li className="page-dot" />
                              <li className="page-dot" />
                              <li className="page-dot" />
                              <li>
                                <Icon path={mdiChevronRight} size={0.8} />
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* added new element-1 ended */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW FOOTER START  */}
          <div className="analyticsFooter">
            <div className="analyticsFooter__top">
              <a href="hi">Glossary</a>
              <a href="hi">Terms of use</a>
              <a href="hi">Privacy Policy</a>
              <a href="hi">Contact us</a>
            </div>
            <div className="analyticsFooter__bottom">
              <a href="hi">Twitter</a>
              <a href="hi">Linkedin</a>
              <a href="hi">Copyrights 2019. All rights reserved </a>
            </div>
          </div>
          {/* NEW FOOTER END  */}

          {/* My Projects Ends */}

          {/* Footer Starts */}

          {/* old footer start  (REMOVED) */}

          {/* <footer id="footer">
            <div className="footer-top">
              <div className="footer-top-left">
                <ul className="footer-quick-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">About</a>
                  </li>
                  <li>
                    <a href="index.html">How it works</a>
                  </li>
                  <li>
                    <a href="index.html">Why us</a>
                  </li>
                  <li>
                    <a href="index.html">Projects</a>
                  </li>
                </ul>
                <ul className="footer-social-links">
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiFacebook} size={0.8} />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiLinkedin} size={0.8} />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiGooglePlus} size={0.9} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-top-right" />
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-left">
                <div className="footer-brand">
                  <img src={logo} alt="" />
                </div>
                <div className="footer-copyright">Maplytiks &copy; 2019</div>
              </div>
              <div className="footer-bottom-right">
                <ul className="footer-legal">
                  <li>
                    <a href="index.html">Glossary</a>
                  </li>
                  <li>
                    <a href="index.html">Terms of Use</a>
                  </li>
                  <li>
                    <a href="index.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer> */}
          {/* old footer END  (REMOVED) */}
          {/* Footer Ends */}
        </div>
        {/* Body Wrapper Ends */}
      </div>
      // Main Wrapper Ends
    );
  }
}

export default Projects;
