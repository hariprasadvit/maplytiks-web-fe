/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/white_tagline_logo.png';
import { Container, Row, Col } from 'react-grid-system';
import logostick from 'images/logo_stickyheder.png';
const menuToggle = () => {
  const menu = document.getElementById('menu');
  menu.classList.toggle('opacity');
  const toggleMenu = document.getElementById('menu-toggle');
  toggleMenu.classList.toggle('show');
};


const LandingHeader = ({ history, headerSticky,headerStickylogos }) => (
  <header id="header" className={headerSticky ? 'sticky' : ''}>  
    <div >
      <div >
      <Container className="bannerconter">
      <Row>
      <Col sm={1}></Col>
        <Col sm={2}>
        <div>
        <a href="#"> <img src={headerStickylogos ? logostick : logo} alt="" /> </a>
        </div>
        </Col>
        <Col sm={4} ></Col>
        <Col sm={5} >
        <div className="header-right">
          <ul id="menu" >
          <li className="example">
              <a href="#" className="hover hover-1 active">Intro</a>
            </li>
            <li className="example">
              <a href="#why-us" className="hover hover-1">USP</a>
            </li>
            <li className="example">
              <a href="#how-it-works" className="hover hover-1">Building Blocks</a>
            </li>
            <li className="example">
              <a href="#brands" className="hover hover-1">Works</a>
            </li>
            {/* <li className="example">
              <a href="#" className="hover hover-1">About</a>
            </li> */}
            <li className="btn primary-btn">
              <a className="login-btn" onClick={() => history.push('/sign-in')}>Dashboard</a>
            </li>
          </ul>
          <div id="menu-toggle" onClick={menuToggle}>
            <span className="menu-bar" />
          </div>
          </div>
        </Col>
        </Row>
        </Container>
      </div>
    </div>
  </header>
);

LandingHeader.propTypes = {
  history: PropTypes.object,
  headerSticky: PropTypes.bool.isRequired,
};

export default React.memo(LandingHeader);
