/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';

class Glossary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      // showMore: false,
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
      <div className="main-wrapper">
        {/* Header Starts */}
        {/* <header id="header" className={this.state.isTop ? '' : 'sticky'}> */}
        <header
          id="header"
          className={this.state.isTop ? '' : 'sticky'}
          style={{ paddingTop: 15, paddingBottom: 10, background: '#081621' }}
        >
          <div className="container">
            <div className="row space-between">
              <div
                className="header-left"
                onClick={() => this.props.history.push('/')}
              >
                <img src={logo} alt="" />
              </div>
              <div className="header-right">
                
              </div>
            </div>
          </div>
        </header>
        {/* Header Ends */}

        {/* Body Wrapper Starts */}
        <div className="about-wrapper">
          <div id="principles" className="twentieth-block">
            <div className="container">
              <div className="section-title">Glossary</div>
              <div className="static-block">
                <div className="static-content">
                  <div className="static-title">
                    Definitions: Tracking &amp; Processing
                  </div>
                  <div className="static-subtitle">Asset</div>
                  <p>
                    Inventory (e.g., perimeter signage, on-field branding etc.)
                    made available by Rights Holders to Brands to showcase their
                    sponsorship branding
                  </p>
                  <div className="static-subtitle">Model</div>
                  <p>
                    Unique inventory available within each Asset to a Brand
                    (e.g., LED - Composite Logo, LED - Retail Message, LED -
                    Creative campaign)
                  </p>
                  <div className="static-subtitle">Frame</div>
                  <p>
                    Single Image of the video sequence captured to analyze
                    Brands at a given instance. Each second of video is divided
                    into multiple frames
                  </p>
                  <div className="static-subtitle">Tracked Time</div>
                  <p>Duration of the entire video feed analyzed by Maplytiks</p>
                  <div className="static-subtitle">
                    Brand Exposure Time (in HH:MM:SS)
                  </div>
                  <p>
                    Total duration for which a Brand is seen (cumulative of all
                    the exposure across all of its Brand Model) on the video.
                  </p>
                  <div className="static-subtitle">Brand Visibility (in %)</div>
                  <p>
                    Total duration of a brand exposure on video, irrespective of
                    the asset/model. Note: If two unique models of the same
                    Brand are visible in a single Frame only one unique Brand
                    exposure will be considered for Brand Visibility
                    calculation.
                  </p>
                  <div className="static-subtitle">
                    Continuous Brand Exposure(in seconds)
                  </div>
                  <p>
                    Consecutive number of frames/seconds in which a Brand is
                    detected on the video analyzed
                  </p>
                  <div className="static-subtitle">
                    Cumulative Brand Exposure
                  </div>
                  <p>
                    The "cumulative brand exposure" is calculated by adding the
                    exposure (in frames/seconds) of each brand individually.
                    Hence in a single second of the broadcast footage, if all 3
                    Brands appear, then each brand gets 1 second of exposure -
                    so when adding it up across the seconds of exposure, it's
                    possible that the cumulative brand exposure is greater than
                    the broadcast footage.
                  </p>
                  <div className="static-title">Definitions: Methodology</div>
                  <div className="static-subtitle">
                    Brand Advertising Equivalency (BAE)
                  </div>
                  <p>
                    Combine the BEI score with broadcast advertising rate card
                    (bespoke to each broadcast partner/programing event) to
                    derive a Brand’s in-venue/program sponsorship return
                    relative to the equivalent advertising investment on that
                    broadcast channel (calculated for each model)
                  </p>
                  <div className="static-subtitle">
                    Brand Exposure Index (BEI)
                  </div>
                  <p>
                    Proprietary methodology that is derived by multiplying the
                    Brand’s Weighted Quality Index (WQI) for each frame with the
                    overall Continuous Exposure Index (CEI) for the duration of
                    the analyzed broadcast video (calculated for each model).
                    BEI of a Brand is the weighted average of BEI of all its
                    Brand Models
                  </p>
                  <div className="static-subtitle">
                    Weighted Quality Index (WQI)
                  </div>
                  <p>
                    Derives the quality of a Brand’s presence on every single
                    video Frame, calculated for the entire tracked time.
                    Attributes to calculate the quality of a Brand’s exposure
                    includes:
                  </p>
                  <div className="static-highlights">
                    <p>
                      <span>Appearance:</span> Number of times a Brand is
                      visible on a frame; the more the better
                    </p>
                    <p>
                      <span>Size:</span> The size of your brand’s logo relative
                      to the total frame size; the larger the better
                    </p>
                    <p>
                      <span>Location:</span> On which portion of the frame is
                      the logo is visible; closer to the center is more valuable
                    </p>
                    <p>
                      <span>Clutter:</span> Presence of other unique Brands in
                      the same Frame; the fewer the better
                    </p>
                  </div>
                  <div className="static-subtitle">
                    Continuous Exposure Index (CEI)
                  </div>
                  <p>
                    Value assigned to each Brand appearance based on the
                    duration of continuous exposures that it receives during the
                    video analyzed. Brands with a higher number of significant
                    continuous exposure (measured in seconds) for each
                    Appearance, will be rewarded with a higher CEI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Starts */}

          <footer id="footer">
            <div className="footer-top">
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
          </footer>
          {/* Footer Ends */}
        </div>
        {/* Body Wrapper Ends */}
      </div>
      // Main Wrapper Ends
    );
  }
}

export default Glossary;
