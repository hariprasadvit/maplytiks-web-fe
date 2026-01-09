import React, { Component } from 'react';
import Slider from 'react-slick';
// eslint-disable-next-line import/no-unresolved
import banner1 from 'images/Landing-Page-Image.png';
import banner2a from 'images/Forefront.png';
import banner2b from 'images/Trustworthy.png';
import banner2c from 'images/Technical.png';
import banner2d from 'images/Discover.png';
import banner2e from 'images/BEST-IN-CLASS.png';
import banner3a from 'images/real-time.png';
import banner3b from 'images/Highly-Accurate.png';
import banner3c from 'images/Deep-learning.png';
import banner3d from 'images/Holistic.png';
import banner3e from 'images/Actionable.png';
import arrowWhiteRight from 'images/Arrow-White-Right.svg';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings1 = {
      className: 'main-slider',
      dots: true,
      fade: true,
      vertical: true,
      // verticalSwiping: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const settings2 = {
      className: 'sub-slider',
      dots: true,
      fade: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="banner-block">
        <Slider {...settings1}>
          <div>
            <div className="banner-block">
              <div className="banner-img">
                <img src={banner1} alt="" />
                {/* <div className="banner-overlay" /> */}
              </div>
              <div className="banner-caption-block">
                <div className="banner-title">
                  We build AI products that actually ship.
                </div>
                <div className="banner-subtitle">
                  No endless meetings. No scope creep. Just engineering teams who understand AI and know how to deliver.
                </div>
                <div className="banner-readmore">
                  <img src={arrowWhiteRight} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings2}>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner2a} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">01</div>
                    </div>
                    <div className="banner-title">
                      Forefront of innovation and sponsorship deep data-science.
                    </div>
                    <div className="banner-subtitle">Business Principles</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner2b} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">02</div>
                    </div>
                    <div className="banner-title">
                      Trustworthy and time sensitive analytics
                    </div>
                    <div className="banner-subtitle">Business Principles</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner2c} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">03</div>
                    </div>
                    <div className="banner-title">
                      Technical excellence underpinned by domain expertise
                    </div>
                    <div className="banner-subtitle">Business Principles</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner2d} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">04</div>
                    </div>
                    <div className="banner-title">
                      Discover &amp; deliver optimized commercial solutions
                    </div>
                    <div className="banner-subtitle">Business Principles</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner2e} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">05</div>
                    </div>
                    <div className="banner-title">
                      Best-in-class client user experience and advisory
                    </div>
                    <div className="banner-subtitle">Business Principles</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div>
            <Slider {...settings2}>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner3a} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">01</div>
                    </div>
                    <div className="banner-title">
                      Near real-time processing and analytics
                    </div>
                    <div className="banner-subtitle">Product Capabilities</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner3b} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">02</div>
                    </div>
                    <div className="banner-title">
                      Highly accurate and streamlined core engine
                    </div>
                    <div className="banner-subtitle">Product Capabilities</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner3c} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">03</div>
                    </div>
                    <div className="banner-title">
                      Latest Deep Learning and Computer Vision frameworks
                    </div>
                    <div className="banner-subtitle">Product Capabilities</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner3d} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">04</div>
                    </div>
                    <div className="banner-title">
                      Holistic brand tracking &amp; valuation
                    </div>
                    <div className="banner-subtitle">Product Capabilities</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-block">
                  <div className="banner-img">
                    <img src={banner3e} alt="" />
                    {/* <div className="banner-overlay" /> */}
                  </div>
                  <div className="slider-block">
                    <div className="slider-nav-block">
                      <div className="slider-count">05</div>
                    </div>
                    <div className="banner-title">
                      Actionable insights and intelligence
                    </div>
                    <div className="banner-subtitle">Product Capabilities</div>
                    <div className="banner-readmore">
                      <img src={arrowWhiteRight} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Slider>
      </div>
    );
  }
}
