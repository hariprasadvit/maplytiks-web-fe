/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  // mdiChevronDown,
  // mdiMessage,
  // mdiCalendarBlankOutline,
  mdiChevronUp,
  mdiInformationOutline,
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

class DeliverablesWrapper extends Component {
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
              <li>Client Details</li>
              <li>Project Details</li>
              <li>Scope of Work</li>
              <li className="active">
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
                  <div className="brandsContainer">
                    <div className="BrandsContent">
                      <div className="BrandsContent__Header">
                        <h3>Brands</h3>
                        {/* <span className="SlideDown">
                          <Icon path={mdiChevronUp} size={0.8} />
                        </span> */}
                      </div>
                      <div className="BrandsContentOptions">
                        <div className="BrandsContent__Details">
                          <span>Select an Option</span>
                          <div className="brandOption">
                            <span>
                              All Brands, All Assets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />{' '}
                            </span>
                            <span>
                              All Brands, Specific Assets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                            <span className="brandOptionActive">
                              Specific Brands, SpecificAssets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                          </div>
                        </div>
                        <div className="BrandsContent__text">
                          <h5>Enter comments if any</h5>
                          <textarea placeholder="Specify the details here" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="auditWrapper">
                    <ul>
                      <li className="audit">
                        <h4>1</h4>
                        <div className="audit__Content">
                          <div className="audit__Details">
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>Platform changes under scope of …</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>12-03-19 7:30pm</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Action Owner</h6>
                              <h5>Jon Hopkins</h5>
                            </div>
                          </div>
                          <div className="auditBtn">
                            <span>Delete</span>
                            <span>Edit</span>
                          </div>
                        </div>
                      </li>
                      <li className="audit">
                        <h4>2</h4>
                        <div className="audit__Content">
                          <div className="audit__Details">
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>Platform changes under scope of …</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>12-03-19 7:30pm</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Action Owner</h6>
                              <h5>Jon Hopkins</h5>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="audit">
                        <h4>3</h4>
                        <div className="audit__Content">
                          <div className="audit__Details">
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>Platform changes under scope of …</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>12-03-19 7:30pm</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Action Owner</h6>
                              <h5>Jon Hopkins</h5>
                            </div>
                          </div>
                          <div className="auditBtn">
                            <span>Delete</span>
                            <span>Edit</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div />
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

export default DeliverablesWrapper;
