/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiChevronRight,
  mdiChevronLeft,
  mdiTwitter,
  mdiLinkedin,
} from '@mdi/js';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';
import slider1 from 'images/second-slider.png';
import projectBrief from 'images/project-brief.png';
import acquire from 'images/process-acquire.png';
import train from 'images/process-train.png';
import report from 'images/process-report.png';
import validate from 'images/process-validate.png';
import inference from 'images/process-inference.png';
import user from 'images/max.jpeg';
import TennisCourt from 'images/Tennis-Court.png';

import brand1 from 'images/brands/FIH.png';  
import brand2 from 'images/brands/Raiders.png';
import brand3 from 'images/brands/CSM.png';
import brand4 from 'images/brands/DHL.png';
import brand5 from 'images/brands/OdishaMWC2018.png';
import brand6 from 'images/brands/FIHPL.png';
import brand7 from 'images/brands/CSK.png';
import brand8 from 'images/brands/RugbyWC2019.png';
import brand9 from 'images/brands/NZC.png'; 
import brand10 from 'images/brands/NBA2019.png';
import brand11 from 'images/brands/FIFAWC2018.png';
import brand12 from 'images/brands/HNZ.png';
import brand13 from 'images/brands/EG.png';
import brand14 from 'images/brands/SOO2018.png';
import brand15 from 'images/brands/CIRE.png';
import brand16 from 'images/brands/Hendrick.png';
import brand17 from 'images/brands/AFC.png';
import brand18 from 'images/brands/RGTennis.png';
import brand19 from 'images/brands/Turnstile.png';
import brand20 from 'images/brands/UMUM.png';


import Banner from '../Banner';

class HomePage extends Component {
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
      const isTop = window.scrollY < screen.height - 130;
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
                    <a href="#how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="#why-us">Why us</a>
                  </li>
                  <li>
                    <a href="index.html">Projects</a>
                  </li>
                  <li className="btn secondary-btn">
                    <a onClick={() => this.props.history.push('/contact')}>
                      Contact us
                    </a>
                  </li>
                  <li className="btn primary-btn">
                    <a onClick={() => this.props.history.push('/sign-in')}>
                      Sign in
                    </a>
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
        <div className="body-wrapper">
          {/* First Block Banner Slider Starts */}
          <div className="first-block block">
            <Banner />
          </div>
          {/* First Block Banner Slider Ends */}

          {/* Second Block Starts */}
          <div className="second-block block" id="why-us">
            <svg className="line1">
              <line
                x1="140"
                y1="0"
                x2="140"
                y2="180"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="140"
                y1="180"
                x2="20"
                y2="315"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="20"
                y1="315"
                x2="20"
                y2="450"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="20"
                cy="460"
                r="10"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="#fff"
              />
              <circle cx="20" cy="460" r="4" fill="#B8BFC5" />
            </svg>
            <svg className="line2">
              <line
                x1="140"
                y1="0"
                x2="140"
                y2="1000"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
            </svg>
            <div className="container">
              <div className="section-title">Why us?</div>
              <ul className="list-capsules row">
                <li className="active">Right Holders</li>
                <li>Sponsors</li>
              </ul>
              <div className="second-block-slider">
                <div className="second-block-slider-left">
                  <div className="second-block-slider-count">02</div>
                  <div className="second-block-slider-title">
                    Transform commercial structure
                  </div>
                  <div className="second-block-slider-content">
                    Future deals based on “guaranteed broadcast time” via
                    dynamic in-venue inventory management (e.g., LED boards;
                    replay screens)
                  </div>
                </div>
                <div className="second-block-slider-right">
                  <div className="random-block random-block-text random-1">
                    analyzing...
                  </div>
                  <div className="random-block random-block-lg random-2">
                    <div className="random-sec">
                      220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
                    </div>
                  </div>
                  {/* <div className="random-block random-block-text random-3">
                    machine learning...
                  </div> */}
                  <div className="random-block random-block-md random-4">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-lg random-5">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-md random-6">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-sm random-7">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-xs random-8">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  {/* <div className="random-block random-block-text random-9">
                    machine learning...
                  </div> */}
                  <div className="random-block random-block-md random-10">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-lg random-11">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-md random-12">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-sm random-13">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-xs random-14">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <img src={slider1} alt="" />
                </div>
              </div>
              <div className="second-block-slider-nav">
                <span>
                  <Icon path={mdiChevronLeft} size={1} />
                </span>
                <ul>
                  <li>01</li>
                  <li className="active">02</li>
                  <li>03</li>
                  <li>04</li>
                </ul>
                <span>
                  <Icon path={mdiChevronRight} size={1} />
                </span>
              </div>
            </div>
          </div>
          {/* Second Block Ends */}
          {/* Third Block Starts */}
          <div className="third-block block">
            <div className="container">
              <div className="third-block-title">
                Streamlined process with focus on accuracy, efficiency and
                customer experience
              </div>
              {/* <div className="third-block-subtitle">To name a few</div> */}
              <div className="process-block">
                <div className="process-row">
                  <div className="process-grid">
                    <div className="process-title">01 Project Brief</div>
                    <div className="process-icon">
                      <img src={projectBrief} alt="" />
                    </div>
                    <div className="process-content">
                      Collaborate with Client to determine the precise brief for
                      each project
                    </div>
                  </div>
                  <div className="process-grid">
                    <div className="process-title">02 Acquire</div>
                    <div className="process-icon">
                      <img src={acquire} alt="" />
                    </div>
                    <div className="process-content">
                      Procure requisite broadcast content to analyze brand
                      presence on-screen
                    </div>
                  </div>
                  <div className="process-grid">
                    <div className="process-title">03 Train</div>
                    <div className="process-icon">
                      <img src={train} alt="" />
                    </div>
                    <div className="process-content">
                      Deploy Deep Learning and train each brand model on the
                      cloud and customized data center
                    </div>
                  </div>
                </div>
                <div className="process-row">
                  <div className="process-grid">
                    <div className="process-title">06 Report</div>
                    <div className="process-icon">
                      <img src={report} alt="" />
                    </div>
                    <div className="process-content">
                      Decision making tools for Clients to make proactive &amp;
                      optimal sponsorship decisions
                    </div>
                  </div>
                  <div className="process-grid">
                    <div className="process-title">05 Validate</div>
                    <div className="process-icon">
                      <img src={validate} alt="" />
                    </div>
                    <div className="process-content">
                      Execute Quality Control protocol across all execution
                      steps for authenticity
                    </div>
                  </div>
                  <div className="process-grid">
                    <div className="process-title">04 Inference</div>
                    <div className="process-icon">
                      <div className="left">
                        <img src={inference} alt="" />
                      </div>
                      <div className="right">
                        {/* <img src={arrowDown} alt="" /> */}
                      </div>
                    </div>
                    <div className="process-content">
                      Analyze quality of brand exposure for each frame through
                      Deep Learning Convolution Neural Network
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third Block Ends */}

          {/* Fourth Block Starts */}

          <div className="fourth-block block" id="how-it-works">
            <div className="random-block random-block-text random-17">
              analyzing...
            </div>
            <div className="random-block random-block-lg random-18">
              <div className="random-sec">
                943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
              </div>
            </div>
            <div className="container">
              <div className="section-title">Our building blocks</div>
              <ul className="popping-list row space-between">
                <li>
                  <div className="list-text">Technology</div>
                  <div className="list-count">01</div>
                </li>
                <li className="active">
                  <div className="list-text">Platforms</div>
                  <div className="list-count">01</div>
                </li>
                <li>
                  <div className="list-text">Assets</div>
                  <div className="list-count">01</div>
                </li>
                <li>
                  <div className="list-text">Reports</div>
                  <div className="list-count">01</div>
                </li>
              </ul>
              <div className="popping-slider">
                <div className="popping-grid show">
                  <div className="random-block random-block-text random-19">
                    analyzing...
                  </div>
                  <div className="random-block random-block-lg random-20">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <img src={slider1} alt="" />
                  <div className="popping-caption">Streaming</div>
                </div>
                <div className="popping-grid">
                  {/* <div className="random-block random-block-text random-21">
                    machine learning
                  </div> */}
                  <div className="random-block random-block-md random-22">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-lg random-23">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-md random-24">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-sm random-25">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <div className="random-block random-block-xs random-26">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <img src={slider1} alt="" />
                  <div className="popping-caption">Live Broadcast</div>
                </div>
                <div className="popping-grid">
                  <div className="random-block random-block-text random-19">
                    analyzing...
                  </div>
                  <div className="random-block random-block-lg random-20">
                    <div className="random-sec">
                      943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                    </div>
                  </div>
                  <img src={slider1} alt="" />
                  <div className="popping-caption">Social Media</div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Block Ends */}

          {/* Fifth Block Starts */}

          <div className="fifth-block block">
            <svg className="line5">
              <line
                x1="140"
                y1="11"
                x2="0"
                y2="151"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="140"
                y1="11"
                x2="490"
                y2="11"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="500"
                cy="11"
                r="10"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="500" cy="11" r="4" fill="#B8BFC5" />
            </svg>

            <div className="center-short-block">
              <div className="title">Brand Advertising Equivalency</div>
              <div className="title title-highlight">Brand Valuation</div>
              <div className="content-sec">
                A proprietary tool that measures the holistic value (quantity
                and quality) of your brand exposure across all assets (location
                of brand on the screen) and platforms (linear TV, digital
                streaming, social media). The BAE value illustrates the net
                advertising value your cumulative on-screen brand exposure
                generated on that particular platform.
              </div>
            </div>
            <div className="fifth-block-sub-slider">
              <div className="fifth-block-sub-slider-left">
                <div className="section-title">
                  Brand Advertising Equivalency
                </div>
                <ul className="fifth-block-sub-slider-list">
                  <li className="active">
                    <div className="main-title">Appearance</div>
                    <div className="main-count">01</div>
                  </li>
                  <li>
                    <div className="main-title">Size</div>
                    <div className="main-count">02</div>
                  </li>
                  <li>
                    <div className="main-title">Location</div>
                    <div className="main-count">03</div>
                  </li>
                  <li>
                    <div className="main-title">Clutter</div>
                    <div className="main-count">04</div>
                  </li>
                  <li>
                    <div className="main-title">Continuous Exposure</div>
                    <div className="main-count">05</div>
                  </li>
                </ul>
              </div>
              <div className="fifth-block-sub-slider-right">
                <div className="random-block random-block-text random-29">
                  analyzing...
                </div>
                <div className="random-block random-block-lg random-30">
                  <div className="random-sec">
                    220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
                  </div>
                </div>
                <div className="random-block random-block-text random-31">
                  analyzing...
                </div>
                {/* <div className="random-block random-block-text random-32">
                  machine learning
                </div> */}
                <div className="random-block random-block-md random-33">
                  <div className="random-sec">
                    943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                  </div>
                </div>
                <div className="random-block random-block-lg random-34">
                  <div className="random-sec">
                    943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                  </div>
                </div>
                <div className="random-block random-block-md random-35">
                  <div className="random-sec">
                    943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                  </div>
                </div>
                <div className="random-block random-block-sm random-36">
                  <div className="random-sec">
                    943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                  </div>
                </div>
                <div className="random-block random-block-xs random-37">
                  <div className="random-sec">
                    943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
                  </div>
                </div>
                <div className="random-block random-block-text random-38">
                  analyzing...
                </div>
                <div className="random-block random-block-lg random-39">
                  <div className="random-sec">
                    220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
                  </div>
                </div>
                <div className="random-block random-block-text random-40">
                  analyzing...
                </div>
                <div className="random-block random-block-lg random-41">
                  <div className="random-sec">
                    220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
                  </div>
                </div>
                <div className="random-block random-block-text random-42">
                  analyzing...
                </div>
                <div className="random-block random-block-lg random-43">
                  <div className="random-sec">
                    220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
                  </div>
                </div>
                <img src={TennisCourt} alt="" />
              </div>
            </div>
            <div className="fifth-block-overlay" />
          </div>

          {/* Fifth Block Ends */}

          {/* Sixth Block Starts */}

          <div className="sixth-block block">
            <svg className="line7">
              <line
                x1="30"
                y1="90"
                x2="120"
                y2="0"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="120"
                y1="0"
                x2="900"
                y2="0"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="20"
                cy="100"
                r="15"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="100" r="6" fill="#B8BFC5" />
            </svg>
            <svg className="line8">
              <line
                x1="30"
                y1="20"
                x2="360"
                y2="20"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="360"
                y1="20"
                x2="500"
                y2="140"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="20"
                cy="20"
                r="10"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="20" r="4" fill="#B8BFC5" />
            </svg>
            <div className="random-block random-block-text random-27">
              analyzing...
            </div>
            <div className="random-block random-block-lg random-28">
              <div className="random-sec">
                220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
              </div>
            </div>
            <div className="container">
              <div className="section-title">Our Stats</div>
              <div className="count-block">
                <div className="count-left">
                  <div className="count-grid">
                    <div className="count-num">8,28,861 s</div>
                    <div className="count-label">Total Duration Tracked</div>
                  </div>
                  <div className="count-grid">
                    <div className="count-num">500</div>
                    <div className="count-label">
                      Number of Brands/Asset Tracking
                    </div>
                  </div>
                </div>
                <div className="count-right">
                  <div className="count-grid">
                    <div className="count-num">5,77,091</div>
                    <div className="count-label">
                      Total Cumulative Brand Exposure
                    </div>
                  </div>
                  <div className="count-grid">
                    <div className="count-num">12,483,203 USD</div>
                    <div className="count-label">
                      Brand Advertisement Equivalency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sixth Block Ends */}

          {/* Seventh Block Starts */}

          <div className="seventh-block block">
            <svg className="line9">
              <line
                x1="15"
                y1="0"
                x2="15"
                y2="50"
                style={{ stroke: 'rgb(209, 0, 29)', strokeWidth: 1 }}
              />
            </svg>
            <svg className="line14">
              <line
                x1="140"
                y1="0"
                x2="140"
                y2="50"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
            </svg>
            <svg className="line15">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="50"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
            </svg>
            <div className="container">
              <div className="section-title">Solutions Engineered for</div>
              <div className="post-block">
                <div className="post-grid">
                  <div className="post-img">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="post-title">U-17 World Cup</div>
                    <div className="post-category">India</div>
                    <div className="post-summary">
                      In recent years people have realized the importance of
                      proper diet and exercise, and recent surveys show that
                      over the last 20 years people are eating better and
                      working out more often, resulting in people living longer,
                      but people are still lacking in their understanding that
                      their mental well being is just as important as their
                      physical health. Today most people get on average 4 to 6
                      hours of exercise every day, and make sure that everything
                      they put in their mouths is not filled with sugars or
                      preservatives, but they pay no attention to their mental
                      health, no vacations, not even the occasional long
                      weekend, 60 hour weeks, taking work home with them and
                      even working weekends. All of this for hopes of one day
                      getting that big promotion. What good will it do you when
                      your brain overloads and you have a breakdown in the
                      office. In the end your physical health will suffer no
                      matter how well you eat and how often you exercise. You
                      will wind up with high blood pressure, stress and tension
                      all of which raises the chances of you having a stroke or
                      heart attack. In hopes of helping you avoid this I am
                      providing you with the things I do to keep my mental
                      health in tip top condition. My absolute favorite thing to
                      do to refocus myself is to go for a long ride on my
                      Harley. Nothing brings the world back into focus like
                      riding free like the wind, there is no better forms of
                      therapy as far as I am concerned. Another great way to
                      relieve the stresses in your life and help put a sparkle
                      in your mental health is a trip to the casinos. Most
                      people go to the casinos and expect to go home a winner, I
                      do not. I go to have a good time. I enjoy the skill
                      required in Sometime I just like to sit at a poker table,
                      blackjack table or roulette table and just make small
                      bets. This may not be as exciting as risking large sums of
                      money, but in the end I play longer, and I probably win
                      more often. The best part is because I do not expect to
                      win I am not disappointed when I don’t win, and on those
                      occasions that I do win beside going home with more money
                      I have a supper big smile on my face because the night was
                      all that much better. Another reason why I love the
                      casinos is how far they are from where I live so I can
                      take my bike out in the morning have a good 3 hour drive
                      to Atlantic City then at the end of the day I get to enjoy
                      another 3 hours on my Harley, and if the weather is really
                      bad I can either take my truck or just stay home and log
                      on to one of the many online casinos available to choose
                      from. I also enjoy watching an hour or 2 of television
                      every night, some light sitcoms are a great way to lighten
                      your minds load, and laughing out loud for 30 seconds
                      every day is a great way to release stress. Video games
                      are also great for stress release, if you are mad at your
                      boss what better way to get it out of you then boxing,
                      just imagine you are pounding on your boss and hope you
                      don’t lose. I hope you try some of these methods or think
                      of some of your own to help keep the stress down in your
                      life and keep your mental health in as good of condition
                      as the rest of you.
                    </div>
                    <div className="post-brand">Brand</div>
                  </div>
                </div>
                <div className="post-grid">
                  <div className="post-img">
                    <img src={slider1} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="post-title">U-17 World Cup</div>
                    <div className="post-category">India</div>
                    <div className="post-summary">
                      In recent years people have realized the importance of
                      proper diet and exercise, and recent surveys show that
                      over the last 20 years people are eating better and
                      working out more often, resulting in people living longer,
                      but people are still lacking in their understanding that
                      their mental well being is just as important as their
                      physical health. Today most people get on average 4 to 6
                      hours of exercise every day, and make sure that everything
                      they put in their mouths is not filled with sugars or
                      preservatives, but they pay no attention to their mental
                      health, no vacations, not even the occasional long
                      weekend, 60 hour weeks, taking work home with them and
                      even working weekends. All of this for hopes of one day
                      getting that big promotion. What good will it do you when
                      your brain overloads and you have a breakdown in the
                      office. In the end your physical health will suffer no
                      matter how well you eat and how often you exercise. You
                      will wind up with high blood pressure, stress and tension
                      all of which raises the chances of you having a stroke or
                      heart attack. In hopes of helping you avoid this I am
                      providing you with the things I do to keep my mental
                      health in tip top condition. My absolute favorite thing to
                      do to refocus myself is to go for a long ride on my
                      Harley. Nothing brings the world back into focus like
                      riding free like the wind, there is no better forms of
                      therapy as far as I am concerned. Another great way to
                      relieve the stresses in your life and help put a sparkle
                      in your mental health is a trip to the casinos. Most
                      people go to the casinos and expect to go home a winner, I
                      do not. I go to have a good time. I enjoy the skill
                      required in Sometime I just like to sit at a poker table,
                      blackjack table or roulette table and just make small
                      bets. This may not be as exciting as risking large sums of
                      money, but in the end I play longer, and I probably win
                      more often. The best part is because I do not expect to
                      win I am not disappointed when I don’t win, and on those
                      occasions that I do win beside going home with more money
                      I have a supper big smile on my face because the night was
                      all that much better. Another reason why I love the
                      casinos is how far they are from where I live so I can
                      take my bike out in the morning have a good 3 hour drive
                      to Atlantic City then at the end of the day I get to enjoy
                      another 3 hours on my Harley, and if the weather is really
                      bad I can either take my truck or just stay home and log
                      on to one of the many online casinos available to choose
                      from. I also enjoy watching an hour or 2 of television
                      every night, some light sitcoms are a great way to lighten
                      your minds load, and laughing out loud for 30 seconds
                      every day is a great way to release stress. Video games
                      are also great for stress release, if you are mad at your
                      boss what better way to get it out of you then boxing,
                      just imagine you are pounding on your boss and hope you
                      don’t lose. I hope you try some of these methods or think
                      of some of your own to help keep the stress down in your
                      life and keep your mental health in as good of condition
                      as the rest of you.
                    </div>
                    <div className="post-brand">Brand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seventh Block Ends */}

          {/* Eighth Block Starts */}

          <div className="eighth-block block">
            <svg className="line10">
              <line
                x1="15"
                y1="0"
                x2="15"
                y2="50"
                style={{ stroke: 'rgb(209, 0, 29)', strokeWidth: 1 }}
              />
              <circle
                cx="15"
                cy="60"
                r="10"
                stroke="#D1001D"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="15" cy="60" r="4" fill="#D1001D" />
            </svg>
            <svg className="line12">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="220"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="0"
                y1="220"
                x2="140"
                y2="360"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="140"
                y1="360"
                x2="140"
                y2="900"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="60"
                cy="190"
                r="6"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            <svg className="line13">
              <line
                x1="140"
                y1="0"
                x2="140"
                y2="220"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="140"
                y1="220"
                x2="0"
                y2="360"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <line
                x1="0"
                y1="360"
                x2="0"
                y2="900"
                style={{ stroke: 'rgb(184, 191, 197)', strokeWidth: 1 }}
              />
              <circle
                cx="80"
                cy="190"
                r="6"
                stroke="#B8BFC5"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            <div className="center-short-block">
              <div className="title title-md">Our journey thus far</div>
              <div className="brand-block">
                <div className="brand-row">
                  <div className="brand-grid">
                    <div className="brand-item">
                      <img src={brand1} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand2} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand3} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand4} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand5} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand6} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand7} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand8} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand9} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand10} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand11} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand12} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand13} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand14} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand15} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand16} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand17} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand18} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand19} alt="" />
                    </div>
                    <div className="brand-item">
                      <img src={brand20} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eighth Block Ends */}

          {/* Tenth Block Starts */}

          <div className="tenth-block block">
            <div className="container">
              <div className="title title-lg">Testimonials</div>
              <div className="testimonials-wrapper">
                <div className="testimonials-block">
                  <div className="testimonials-img">
                    <img src={user} alt="User" />
                  </div>
                  <div className="testimonials-content">
                    <div className="testimonials-client">Denis Cousins</div>
                    <div className="testimonials-message">
                      Maplytiks is a trustworthy and value-driven sponsorship
                      analytics advisory that assisted Cricket Ireland in
                      evaluating the true value of our sponsorship assets. Their
                      insightful report helped secure a renewal commitment from
                      one of our key sponsors. I highly recommend Maplytiks, and
                      look forward to working with them in the future.
                    </div>
                    <div className="testimonials-company">Cricket Ireland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tenth Block Ends */}

          {/* Ninth Block Starts */}

          <div className="ninth-block">
            <div className="center-short-block">
              <div className="title title-lg">
                Explore undiscovered commerce
              </div>
              <div className="subtitle">
                Let's together optimize your sponsorship investments
              </div>
              <div className="btn light-btn">
                <a href="index.html">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Ninth Block Ends */}

          {/* Footer Starts */}
          <footer id="footer">
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
              {/* <div className="footer-top-right" /> */}
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

export default HomePage;
