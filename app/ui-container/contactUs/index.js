/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiMapMarker,
  mdiEmail,

  // mdiChevronDown,
  //   mdiChevronUp,
  //   mdiMessage,
  // mdiCalendarBlankOutline,
  // mdiChevronUp,
  // mdiInformationOutline,
} from '@mdi/js';
// import logo from 'images/logo-tagline.png';
// import ProfileImg from 'images/max.jpeg';
// import sigLogo from 'images/sigpic.png';
// import slider1 from 'images/second-slider.png';
// import arrowRight from 'images/Arrow-Right.svg';
// import arrowLeft from 'images/Arrow-Left.svg';
// import projectBrief from 'images/Project-Brief.svg';
// import acquire from 'images/Acquire.svg';
// import train from 'images/Train.svg';
// import report from 'images/Report.svg';
// import validate from 'images/Validate.svg';
// import inference from 'images/Inference.svg';
// import Banner from '../Banner';
// import user from 'images/max.jpeg';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
    };
    this.onScroll = this.onScroll.bind(this);
  }

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
      <div className="contactUs">
        <div className="contactUs-content">
          <div className="contactUs-address">
            <span>
              {' '}
              <Icon path={mdiMapMarker} size={1.5} />
            </span>
            <p>
              Nanoyotta Technologies Private Limited, 4th Floor, No. 38,
              Developed Plot industrial Estate, Perungudi, Chennai, TN 600096,
              India
            </p>
          </div>
          <div className="contactUs-email">
            <a href="www.google.com">
              <Icon path={mdiEmail} size={1} />
            </a>
            <a href="www.google.com">info@nanoyotta.com</a>
          </div>
        </div>
        <div className="contactUs-form">
          <form>
            <h3>Contact Us</h3>
            <div className="contactUs-details">
              <div className="contactUs-input">
                <div>
                  <span>Full Name</span>
                  <input placeholder="Enter Your Full Name" />
                </div>
                <div>
                  <span>Email Address</span>
                  <input placeholder="Enter Your Email Address" />
                </div>
              </div>
              <div>
                <span>Leave A Comment</span>
                <textarea />
              </div>
              <div className="">
                <a href="www.google.com">Get In Touch With Us</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
