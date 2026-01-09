import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import Intro from './Intro';
import WhyUs from './WhyUs';
import Process from './Process';
import BuildingBlocks from './BuildingBlocks';
import BAE from './BAE';
import Brands from './Brands';
import Testinomials from './Testinomials';
import Contact from './Contact';
import OurStats from './OurStats';
import {RemoveScroll} from 'react-remove-scroll';
import landing from 'images/banner/landing.png';
import discover from 'images/banner/discover.gif';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';
const LandingPage = ({ history, getKpiStats, kpi, getKpiStatsCancel }) => {
  ReactGA.initialize('UA-129684001-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const bannerRef = useRef(null);
  const [headerSticky, setHeaderSticky] = useState(false);
  const [headerStickylogo, setHeaderStickylogo] = useState(false);

  const [firstpage, setfirstpage] = useState("block");
  const [dashboard, setdashboard] = useState("none");

  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("stickyheder");
        setHeaderStickylogo(true);
      } else {
        header.classList.remove("stickyheder");
        setHeaderStickylogo(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll", scrollCallBack);
    // };

    if (window.pageYOffset > bannerRef.current.offsetHeight) {
      setHeaderSticky(true);
    }
    const PAYLOAD = {
      payload: {
        kpiCategory: 'KPI101',
        projectID: [],
      },
    };

    getKpiStats(PAYLOAD);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      getKpiStatsCancel();
    };
  }, []);

  setTimeout(btimerFun, 2800);
  function btimerFun(){
       setfirstpage("none")
       setdashboard("block")
  }

  return (
    <div className="main-wrapper">
        <div className="bg"  style={{display: firstpage}}>
              <img src={discover}></img>
            </div>
      <RemoveScroll style={{display: dashboard}}> 
      <LandingHeader history={history} headerSticky={headerSticky} headerStickylogos={headerStickylogo} />
      <div className="body-wrapper">
        <Waypoint
          topOffset={140}
          // bottomOffset={60}
          onEnter={() => {
            if (headerSticky) {
              setHeaderSticky(false);
            }
          }}
          onLeave={() => {
            if (!headerSticky) {
              setHeaderSticky(true);
            }
          }}
        >
          <div className="first-block block" ref={bannerRef}>
            <Intro  history={history}/>
          </div>
        </Waypoint>
         <WhyUs /> 
        {/* <Process /> */}
         <BuildingBlocks /> 
        {/* <BAE /> */}

        {/* Sixth Block Starts */}
        {/* <OurStats stats={kpi} /> */}
        {/* Sixth Block Ends */}
        {/* Seventh Block Starts */}
        {/* Seventh Block Ends */}

        {/* <div className="eighth-block block" style={{ padding: 0 }}> */}
        {/* eslint-disable-next-line react/jsx-boolean-value */}
        {/* </div> */}
        <div className="Seventh-block block" style={{ padding: 0 }}>
        <Brands  history={history} />
        </div>
        {/* <Testinomials /> */}
        {/* <Contact history={history} /> */}
        {/* <LandingFooter history={history} /> */}
      </div>
      </RemoveScroll>
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.object,
  kpi: PropTypes.array,
  getKpiStats: PropTypes.func,
  getKpiStatsCancel: PropTypes.func,
};

export default LandingPage;
