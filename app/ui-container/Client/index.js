/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  // mdiChevronDown,
  mdiChevronUp,
  // mdiMessage,
  // mdiCalendarBlankOutline,
  // mdiChevronUp,
  // mdiInformationOutline,
} from '@mdi/js';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';
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

class Brief extends Component {
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
      <div className="Brief-wrapper">
        {/* Header Starts */}
        <header id="header" className={this.state.isTop ? '' : 'sticky'}>
          <div className="container">
            <div className="row space-between">
              <div className="header-left">
                <img src={logo} alt="" />
              </div>
              <div className="header-right">
                {/* <div className="messageBox">
                  <Icon path={mdiMessage} size={0.8} />
                </div> */}
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
        {/* Header ends */}

        <div className="ContentHeader">
          <div className="ContentHeaderDetails">
            <div className="briefHeader">Project Brief</div>
            <div className="ContentHeader__date">10th Aug 2019</div>
          </div>
        </div>

        <div className="briefContainer">
          <div className="briefList">
            <ul>
              <li className="active">Client Details</li>
              <li>Project Details</li>
              <li>Scope of Work</li>
              <li>
                Deliverables and Comments
                <ul className="listItemWrapper">
                  <li>Audit</li>
                </ul>
              </li>
              <li>Authorized Signatory</li>
            </ul>
          </div>
          <div>
            <div>
              <div>
                <div className="containerForm">
                  <div className="clientBriefForm">
                    <div className="inputForm">
                      <div className="inputForm__Header">Your Full Name</div>
                      <div className="inputForm__bar">
                        <input placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="inputForm">
                      <div className="inputForm__Header">Designation</div>
                      <div className="inputForm__bar">
                        <input placeholder="Sr. Employee" />
                      </div>
                    </div>
                    <div className="inputForm">
                      <div className="inputForm__Header">Organisation Name</div>
                      <div className="inputForm__bar">
                        <input placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="inputForm">
                      <div className="inputForm__Header">Coutry code</div>
                      <div className="inputForm__bar codeInputform">
                        <input placeholder="Enter full Name" />
                        <input placeholder="Local Number" />
                      </div>
                    </div>
                    <div className="inputForm">
                      <div className="inputForm__Header">Email Address</div>
                      <div className="inputForm__bar">
                        <input placeholder="email@address.com" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="briefFormBtn">
                <div className="btn btn__default">
                  <button type="button">Cancel</button>
                </div>
                <div className="btn btn__primary">
                  <button type="button">Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brief;
