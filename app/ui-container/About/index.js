/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiPlay, mdiChevronDown, mdiChevronUp } from '@mdi/js';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';
import logoTwo from 'images/logoTwo.png';
import AboutBanner from 'images/About-us-Image.png';
import user1 from 'images/team/ravishankar-pathanjali.jpg';
import user2 from 'images/team/suresh-srinivasan.jpg';
import user3 from 'images/team/shankarganesh.jpg';
import user4 from 'images/team/shiva.jpg';
import user5 from 'images/team/maroof.jpg';
import user6 from 'images/team/saikiran.jpg';
import user7 from 'images/team/muruganandham.jpg';
import user8 from 'images/team/maria-selvaraj.jpg';
import user9 from 'images/team/arvind-gautam.jpg';
import user10 from 'images/team/rajat-sinha.jpg';
import user11 from 'images/team/chanti-naik.jpg';
import user12 from 'images/team/luman-prasath.jpg';
import user13 from 'images/team/palani-velayutham.jpg';
import user14 from 'images/team/delliganesh.jpg';
import user15 from 'images/team/ragavendran.jpg';
import user16 from 'images/team/sai-ritheesh.jpg';
import user17 from 'images/team/naga-gopal.jpg';
import user18 from 'images/team/gokulakrishnan.jpg';
import user19 from 'images/team/ajaykumar.jpg';
import user20 from 'images/team/yuvaraj.jpg';
import user21 from 'images/team/nirmalkumar.jpg';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      showMore: false,
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
    const playvideo = document.getElementById('aboutvideobutton');
    playvideo.addEventListener('click', playpause);

    const showreel = document.getElementById('aboutvideo');
    function playpause() {
      if (showreel.paused) {
        showreel.play();
        playvideo.classList.add('play');
      } else {
        showreel.pause();
        playvideo.classList.remove('play');
      }
    }
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

  render() {
    return (
      // Main Wrapper Starts
      <div className="main-wrapper dark-header">
        {/* Header Starts */}
        {/* <header id="header" className={this.state.isTop ? '' : 'sticky'}> */}
        <header id="header" className={this.state.isTop ? '' : 'sticky'}>
          <div className="container">
            <div className="row space-between">
              <div
                className="header-left"
                onClick={() => this.props.history.push('/')}
              >
                {!this.state.isTop && <img src={logo} alt="" />}
                {this.state.isTop && <img src={logoTwo} alt="" />}
              </div>
              <div className="header-right">
                <ul id="menu">
                  <li>
                    <a href="#overview">Overview</a>
                  </li>
                  <li>
                    <a href="#values">Values</a>
                  </li>
                  <li>
                    <a href="#principles">Principles</a>
                  </li>
                  <li>
                    <a href="#miles">Milestones</a>
                  </li>
                  <li>
                    <a href="#gsc">GSC</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  {/* <li className="btn secondary-btn">
                    <a href="/contact">Contact us</a>
                  </li> */}
                  <li className="btn primary-btn">
                    <a href="/sign-in">Sign in</a>
                  </li>
                </ul>
                <div id="menu-toggle">
                  <span className="menu-bar" />
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Ends */}

        {/* Body Wrapper Starts */}
        <div className="about-wrapper">
          <div className="eleventh-block block">
            <div className="title">About Us</div>
            <div className="content">
              Challenge and transform the legacy sponsorship commerce structure
              underpinned by innovation and data-science rather than conjecture
            </div>
            <svg className="line14">
              <line
                x1="0"
                y1="0"
                x2="150"
                y2="0"
                style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1.6 }}
              />
              <line
                x1="150"
                y1="0"
                x2="200"
                y2="50"
                style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1.2 }}
              />
              <line
                x1="200"
                y1="50"
                x2="1250"
                y2="50"
                style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1.6 }}
              />
              <line
                x1="1250"
                y1="50"
                x2="1290"
                y2="0"
                style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1.2 }}
              />
              <line
                x1="1290"
                y1="0"
                x2="1440"
                y2="0"
                style={{ stroke: 'rgb(226, 234, 244)', strokeWidth: 1.6 }}
              />
            </svg>
          </div>
          <div id="overview" className="twelveth-block block">
            <svg className="line15">
              <line
                x1="0"
                y1="0"
                x2="135"
                y2="135"
                style={{ stroke: 'rgb(226, 234, 244, 0.3)', strokeWidth: 1 }}
              />
              <circle
                cx="142"
                cy="142"
                r="10"
                stroke="rgb(226, 234, 244, 0.5)"
                strokeWidth="1"
                fill="rgb(226, 234, 244, 0)"
              />
              <circle cx="142" cy="142" r="4" fill="rgb(226, 234, 244, 0.5)" />
            </svg>
            <svg className="line16">
              <line
                x1="18"
                y1="18"
                x2="155"
                y2="155"
                style={{ stroke: 'rgb(226, 234, 244, 0.3)', strokeWidth: 1 }}
              />
              <circle
                cx="11"
                cy="11"
                r="10"
                stroke="rgb(226, 234, 244, 0.5)"
                strokeWidth="1"
                fill="rgb(226, 234, 244, 0)"
              />
              <circle cx="11" cy="11" r="4" fill="rgb(226, 234, 244, 0.5)" />
            </svg>
            <div className="container">
              <div className="section-title">An Overview</div>
              <div className="content">
                Maplytiks, is a dynamic real-time brand measurement and
                management technology that serves global sports and
                entertainment stakeholders. A wholly owned subsidiary of Global
                Sports Commerce, Maplytiks uses the latest Deep Learning and
                Computer Vision technology to provide clients with a holistic
                value of their brand exposure on-screen with focus on speed,
                accuracy and real-time delivery. As part of the GSC family,
                Maplytiks will leverage the internal synergies and continue to
                push the innovation envelope with the aim to serve its Clients
                with path-breaking solutions.
              </div>
            </div>
            <div className="core-block-bg">
              <img src={AboutBanner} alt="" />
            </div>
          </div>
          <div id="values" className="nineteenth-block">
            <div className="container">
              <div className="title">Core Values</div>
              <div className="core-block">
                <div className="core-grid">
                  <div className="core-count">01</div>
                  <div className="core-title">Innovation</div>
                  <div className="core-content">
                    Focus on innovation to derive insights that enable informed
                    and smarter business decisions.
                  </div>
                </div>
                <div className="core-grid">
                  <div className="core-count">02</div>
                  <div className="core-title">Execution</div>
                  <div className="core-content">
                    Committed to ensuring highest-levels of integrity, accuracy,
                    reliability of our technology process.
                  </div>
                </div>
                <div className="core-grid">
                  <div className="core-count">03</div>
                  <div className="core-title">Client Success</div>
                  <div className="core-content">
                    Unrelenting focus on timely delivery of valuable
                    data-insights for our client partners.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="principles" className="thirteenth-block">
            <div className="container">
              <div className="section-title">Business Principles</div>
              <div className="core-block">
                <div className="core-grid">
                  <div className="core-count">01</div>
                  <div className="core-title text-red">Purpose</div>
                  <div className="core-content">
                    Enable stakeholders to make informed and intelligent
                    commercial sponsorship decisions
                  </div>
                </div>
                <div className="core-grid">
                  <div className="core-count">02</div>
                  <div className="core-title text-blue">Process</div>
                  <div className="core-content">
                    Create a holistic sponsorship measurement product that
                    combines the latest deep learning and computer vision
                    technology (data), backed by domain expertise (intellectual)
                  </div>
                </div>
                <div className="core-grid">
                  <div className="core-count">03</div>
                  <div className="core-title text-green">Outcomes</div>
                  <div className="core-content">
                    Deliver effective insights and decision-making outcomes that
                    unlock new and untapped commercial opportunities to the
                    industry through analytics and data-science
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="miles" className="fourteenth-block block">
            <div className="container">
              <div className="section-title">Maplytiks Milestones</div>
              <div className="milestones-block">
                <div className="milestones-grid">
                  <div className="milestones-count">01</div>
                  <div className="milestones-title">Core Team is Formed</div>
                  <div className="milestones-timestamp">June 2017</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">02</div>
                  <div className="milestones-title">Our First Client</div>
                  <div className="milestones-timestamp">November 2017</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">03</div>
                  <div className="milestones-title">First 10 Employees</div>
                  <div className="milestones-timestamp">March 2018</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">04</div>
                  <div className="milestones-title">
                    Launch real-time brand analytics
                  </div>
                  <div className="milestones-timestamp">June 2018</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">05</div>
                  <div className="milestones-title">
                    First International Federation Client (Cricket Ireland)
                  </div>
                  <div className="milestones-timestamp">July 2018</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">06</div>
                  <div className="milestones-title">
                    First Global Federation Client (International Hockey
                    Federation)
                  </div>
                  <div className="milestones-timestamp">December 2018</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">07</div>
                  <div className="milestones-title">
                    First Brand Client (DHL)
                  </div>
                  <div className="milestones-timestamp">March 2018</div>
                </div>
                <div className="milestones-grid">
                  <div className="milestones-count">08</div>
                  <div className="milestones-title">Completed 10 projects</div>
                  <div className="milestones-timestamp">April 2019</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="fifteenth-block block">
            <div className="container">
              <div className="section-title">An Overview</div>
              <div className="content">
                Maplytiks, is a dynamic real-time brand measurement and
                management technology that serves global sports and
                entertainment stakeholders. A wholly owned subsidiary of Global
                Sports Commerce, Maplytiks uses the latest Deep Learning and
                Computer Vision technology to provide clients with a holistic
                value of their brand exposure on-screen with focus on speed,
                accuracy and real-time delivery. As part of the GSC family,
                Maplytiks will leverage the internal synergies and continue to
                push the innovation envelope with the aim to serve its Clients
                with path-breaking solutions.
              </div>
            </div>
          </div> */}
          <div id="gsc" className="sixteenth-block block">
            <div className="container">
              <div className="section-title">GSC / Global Sports Commerce</div>
              <div className="content">
                Global Sports Commerce (GSC) is one of the world’s largest
                Sports Technology and Management Companies providing dynamic
                Solutions, Sponsorship &amp; Commercial Management, and Premier
                Consulting Services to leading global sports stakeholders –
                including sports bodies, leagues, rights holders, stadiums and
                brands. GSC, headquartered in Singapore, consists of 11
                subsidiary companies with offices in 14 cities, across 10
                countries. GSC’s works with preeminent organizations in sports
                such as FIFA, UEFA, IAAF, ICC, BBCI, EPL, IPL, Bundesliga, IPL,
                AFL etc., through its various subsidiaries.
              </div>
              <div className="watch-more">
                <div className="watch-more-icon">
                  <Icon path={mdiPlay} size={1.6} />
                </div>
                Watch More
              </div>
            </div>
          </div>
          <div id="team" className="seventeenth-block">
            <div className="container">
              <div className="section-title">
                <>The Team</>
                <>
                  {!this.state.showMore && (
                    <Icon
                      path={mdiChevronDown}
                      size={1.2}
                      onClick={() =>
                        this.setState(prevState => ({
                          showMore: !prevState.showMore,
                        }))
                      }
                    />
                  )}
                  {this.state.showMore && (
                    <Icon
                      path={mdiChevronUp}
                      size={1.2}
                      onClick={() =>
                        this.setState(prevState => ({
                          showMore: !prevState.showMore,
                        }))
                      }
                    />
                  )}
                </>
              </div>
              <div className="team-block">
                <div className="user-grid">
                  <div className="user-image">
                    <img src={user1} alt="" />
                  </div>
                  <div className="user-name">Ravishankar Pathanjali</div>
                  <div className="user-designation">
                    Chief Executive Officer
                  </div>
                </div>
                <div className="user-grid">
                  <div className="user-image">
                    <img src={user2} alt="" />
                  </div>
                  <div className="user-name">Suresh Srinivasan</div>
                  <div className="user-designation">Technology Head</div>
                </div>
                <div className="user-grid">
                  <div className="user-image">
                    <img src={user3} alt="" />
                  </div>
                  <div className="user-name">Shankarganesh</div>
                  <div className="user-designation">Project Manager</div>
                </div>
                {this.state.showMore && (
                  <>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user4} alt="" />
                      </div>
                      <div className="user-name">Shiva</div>
                      <div className="user-designation">Business Analyst</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user5} alt="" />
                      </div>
                      <div className="user-name">Maroof</div>
                      <div className="user-designation">Business Analyst</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user6} alt="" />
                      </div>
                      <div className="user-name">Saikiran</div>
                      <div className="user-designation">
                        Sr. Business Analyst
                      </div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user7} alt="" />
                      </div>
                      <div className="user-name">Muruganandham</div>
                      <div className="user-designation">Graphic Designer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user8} alt="" />
                      </div>
                      <div className="user-name">Maria Selvaraj</div>
                      <div className="user-designation">Sr. Technical Lead</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user9} alt="" />
                      </div>
                      <div className="user-name">Arvind Gautam</div>
                      <div className="user-designation">Data Scientist</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user10} alt="" />
                      </div>
                      <div className="user-name">Rajat Sinha</div>
                      <div className="user-designation">
                        Machine Learning Engineer
                      </div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user11} alt="" />
                      </div>
                      <div className="user-name">Chanti Naik</div>
                      <div className="user-designation">Data Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user12} alt="" />
                      </div>
                      <div className="user-name">Luman Prasath</div>
                      <div className="user-designation">
                        Sr. Product Engineer
                      </div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user13} alt="" />
                      </div>
                      <div className="user-name">Palani Velayutham</div>
                      <div className="user-designation">
                        Sr. Product Engineer
                      </div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user14} alt="" />
                      </div>
                      <div className="user-name">Delliganesh</div>
                      <div className="user-designation">Software Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user15} alt="" />
                      </div>
                      <div className="user-name">Ragavendran</div>
                      <div className="user-designation">Software Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user16} alt="" />
                      </div>
                      <div className="user-name">Sai Ritheesh</div>
                      <div className="user-designation">Software Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user17} alt="" />
                      </div>
                      <div className="user-name">Naga Gopal</div>
                      <div className="user-designation">Software Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user18} alt="" />
                      </div>
                      <div className="user-name">Gokulakrishnan</div>
                      <div className="user-designation">Support Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user19} alt="" />
                      </div>
                      <div className="user-name">Ajaykumar</div>
                      <div className="user-designation">Support Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user20} alt="" />
                      </div>
                      <div className="user-name">Yuvaraj</div>
                      <div className="user-designation">Support Engineer</div>
                    </div>
                    <div className="user-grid">
                      <div className="user-image">
                        <img src={user21} alt="" />
                      </div>
                      <div className="user-name">Nirmalkumar</div>
                      <div className="user-designation">Support Engineer</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="eighteenth-block">
            <div className="container">
              <div className="video-block">
                <video id="aboutvideo" width="100%" height="100%" loop>
                  <source
                    src="https://s3.ap-south-1.amazonaws.com/dev.maplytiks.org/api/v1/general/website/website.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="watch-more">
                  <div className="watch-more-icon" id="aboutvideobutton">
                    {/* <Icon path={mdiPlay} size={1.6} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Starts */}

          <footer id="footer">
            {/* <div className="footer-top"> */}
            {/* <div className="footer-top-left">
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
                      <Icon path={mdiTwitter} size={0.8} />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com">
                      <Icon path={mdiLinkedin} size={0.8} />
                    </a>
                  </li>
                </ul>
              </div>
   */}
            {/* </div> */}

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
          </footer>
          {/* Footer Ends */}
        </div>
        {/* Body Wrapper Ends */}
      </div>
      // Main Wrapper Ends
    );
  }
}

export default About;
