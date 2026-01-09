/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiMessage,
  mdiCalendarBlankOutline,
  // mdiChevronUp,
  mdiInformationOutline,
} from '@mdi/js';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';
import sigLogo from 'images/sigpic.png';
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
                <div className="messageBox">
                  <Icon path={mdiMessage} size={0.8} />
                </div>
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
                  <div className="projectFormDetails">
                    <div className="projectForm">
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">Project Name</div>
                        <input placeholder="Enter Project Name" />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Name of the event
                        </div>
                        <input placeholder="Event Name" />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Project Industry
                        </div>
                        <input placeholder="Company Inc" />
                        <Icon path={mdiChevronDown} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Project Industry Category{' '}
                        </div>
                        <input placeholder="Sr. Employee" />
                        <Icon path={mdiChevronDown} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">Start Date</div>
                        <input placeholder="Start" />
                        <Icon path={mdiCalendarBlankOutline} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Select Time Zone
                        </div>
                        <input placeholder="Select one" />
                        <Icon path={mdiChevronDown} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">End Date</div>
                        <input placeholder="End" />
                        <Icon path={mdiCalendarBlankOutline} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Select Time Zone
                        </div>
                        <input placeholder="Select One" />
                        <Icon path={mdiChevronDown} size={0.8} />
                      </div>
                      <div className="projectForm__Input">
                        <div className="projectForm__Header">
                          Event Schedule URL
                        </div>
                        <input placeholder="" />
                      </div>
                    </div>
                    <div className="">
                      <div className="attachLinkHeader">
                        Upload Event Schedule
                      </div>
                      <a href="www.google.com" className="attachLink">
                        + Attach files only converted through Maplytiks FTP Link
                        (MP4 or .avi formats only, Max size 2MB
                      </a>
                    </div>
                  </div>
                  <div className="assetsContainer">
                    <div className="assetContent">
                      <div className="BrandsContent__Header">
                        <h3>Brands / Assets</h3>
                        <Icon path={mdiChevronUp} size={0.8} />
                      </div>
                      <div className="BrandsContentOptions">
                        <div className="BrandsContent__Details">
                          <span>Select an Option</span>
                          <div className="brandOption">
                            <span className="brandOptionActive">
                              All Brands, All Assets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />{' '}
                            </span>
                            <span>
                              All Brands, Specific Assets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                            <span>
                              Specific Brands, SpecificAssets{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                          </div>
                        </div>
                        <div className="allAssetWrapper">
                          <div className="">
                            <div className="attachLinkHeader">
                              Upload Event Schedule
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Attach files only converted through Maplytiks
                              FTP Link (MP4 or .avi formats only, Max size 2MB
                            </a>
                          </div>
                        </div>
                        <div className="specificAssetWrapper">
                          <div>
                            <div className="">
                              <div className="attachLinkHeader">
                                Upload Match List
                              </div>
                              <a href="www.google.com" className="attachLink">
                                + Upload Specific Matches List ( Supported
                                formats .DOC and .XLS )
                              </a>
                            </div>
                          </div>
                          <div className="ORWrapper">
                            <span>OR</span>
                            <span className="line" />
                          </div>
                          <div className="MatchForm">
                            <h5>Enter Specific Asset if not uploaded above</h5>
                            <div className="MatchForm__Content">
                              <input placeholder="Asset 1" />
                              <input placeholder="Asset 2" />
                              <input placeholder="Asset 3" />
                              <input placeholder="Asset 4" />
                              <input placeholder="Asset 5" />
                            </div>
                          </div>
                          <div className="attachWrapper">
                            <div className="attachLinkHeader">
                              Upload Brand / Asset Creatives
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Attach files only converted through Maplytiks
                              FTP Link (MP4 or .avi formats only, Max size 2MB)
                            </a>
                          </div>
                        </div>
                        <div className="onlySpecificWrapper">
                          <div className="">
                            <div className="attachLinkHeader">
                              Upload Match List
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Upload Specific Matches List ( Supported formats
                              .DOC and .XLS )
                            </a>
                          </div>
                          <div className="ORWrapper">
                            <span>OR</span>
                            <span className="line" />
                          </div>
                          <div className="MatchForm">
                            <h5>Enter Specific Asset if not uploaded above</h5>
                            <div className="MatchForm__Content">
                              <input placeholder="Asset 1" />
                              <input placeholder="Asset 2" />
                              <input placeholder="Asset 3" />
                              <input placeholder="Asset 4" />
                              <input placeholder="Asset 5" />
                            </div>
                          </div>
                          <div className="ORWrapper">
                            {/* <span>OR</span> */}
                            <span className="line" />
                          </div>
                          <div className="MatchForm">
                            <h5>Enter Specific Asset if not uploaded above</h5>
                            <div className="MatchForm__Content">
                              <input placeholder="Asset 1" />
                              <input placeholder="Asset 2" />
                              <input placeholder="Asset 3" />
                              <input placeholder="Asset 4" />
                              <input placeholder="Asset 5" />
                            </div>
                          </div>
                          <div className="attachWrapper">
                            <div className="attachLinkHeader">
                              Upload Brand / Asset Creatives
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Attach files only converted through Maplytiks
                              FTP Link (MP4 or .avi formats only, Max size 2MB)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="matchContainer">
                      <div className="BrandsContent__Header">
                        <h3>Matches</h3>
                        <Icon path={mdiChevronUp} size={0.8} />
                      </div>
                      <div className="BrandsContentOptions">
                        <div className="BrandsContent__Details">
                          <span>Select an Option</span>
                          <div className="brandOption">
                            <span className="brandOptionActive">
                              All Matches{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                            <span>
                              Specific Matches{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="">
                            <div className="attachLinkHeader">
                              Upload Match List
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Upload Specific Matches List ( Supported formats
                              .DOC and .XLS )
                            </a>
                          </div>
                        </div>
                        <div className="ORWrapper">
                          <span>OR</span>
                          <span className="line" />
                        </div>
                        <div className="MatchForm">
                          <h5>Enter Specific Matches if not uploaded above</h5>
                          <div className="MatchForm__Content">
                            <input placeholder="Match1" />
                            <input placeholder="Match1" />
                            <input placeholder="Match1" />
                            <input placeholder="Match1" />
                            <input placeholder="Match1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="matchContainer">
                      <div className="BrandsContent__Header">
                        <h3>Platforms</h3>
                        <Icon path={mdiChevronUp} size={0.8} />
                      </div>
                      <div className="BrandsContentOptions">
                        <div className="BrandsContent__Details">
                          <span>Select an Option</span>
                          <div className="brandOption">
                            <span className="brandOptionActive">
                              Broadcast{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                            <span>
                              OTT{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                            <span>
                              Social Media{' '}
                              <Icon path={mdiInformationOutline} size={0.8} />
                            </span>
                          </div>
                        </div>
                        <div className="broadcastContainer">
                          <div className="">
                            <div className="attachLinkHeader">
                              Upload Match List
                            </div>
                            <a href="www.google.com" className="attachLink">
                              + Upload Specific Matches List ( Supported formats
                              .DOC and .XLS )
                            </a>
                          </div>
                          <div className="ORWrapper">
                            <span className="line" />
                          </div>
                          <div className="MatchForm">
                            <h5>Broadcast Vision Details</h5>
                            <div className="MatchForm__Content">
                              <div className="formInput">
                                <h6>Primary/ Host Broadcast Partner</h6>
                                <input placeholder="Match1" />
                              </div>
                              <div className="formInput">
                                <h6>Will Client Provide Sourcing?</h6>
                                <input placeholder="Yes" />
                              </div>
                            </div>
                          </div>
                          <div className="MatchForm">
                            <h5>Please Provide Sourcing Details Below</h5>
                            <div className="MatchForm__Content">
                              <div className="formInput">
                                <input placeholder="Select Video Quality" />
                              </div>
                              <div className="formInput">
                                <input placeholder="HOST URL" />
                              </div>
                              <div className="formInput">
                                <input placeholder="Login ID" />
                              </div>
                              <div className="formInput">
                                <input placeholder="Password" />
                              </div>
                              <div className="formInput">
                                <h6>Other broadcast partners</h6>
                                <input placeholder="Match1" />
                              </div>
                            </div>
                          </div>
                          <div className="BroadcastWrapper">
                            <h4>
                              Select Options below for Selective Broadcast
                              Coverage
                            </h4>
                            <div className="BroadcastList">
                              <ul>
                                <li>Studio Show</li>
                                <li>Live Match</li>
                                <li>Commercial Break</li>
                                <li>Broadcast Graphic</li>
                                <li>Others</li>
                              </ul>
                              <ul>
                                <li>Post Match Presentation</li>
                                <li>Post Match Studio Show</li>
                                <li>Half Time Show</li>
                                <li>Highlights</li>
                              </ul>
                            </div>
                          </div>
                          <div className="BrandsContent__text">
                            <h5>
                              {' '}
                              Please mention below if there are any brands or
                              assets specific to broadcast
                            </h5>
                            <textarea placeholder="Specify the details here" />
                          </div>
                        </div>
                        <div className="socialMediaContainer">
                          <div className="ORWrapper">
                            <span className="line" />
                          </div>
                          <div className="socialMediaText">
                            <h4>Social Media Vision Details</h4>
                            <h4>Please provide Sourcing Details below</h4>
                            <h4>Primary/ Host Broadcast Partner</h4>
                          </div>
                          <div className="socialMediaList">
                            <ul>
                              <li>
                                <span className="fbWrapper">Facebook</span>
                                <input placeholder="Enter Handles / Hashtags seperated by commas" />
                              </li>
                              <li>
                                <span className="instaWrapper">Instagram</span>
                                <input placeholder="Enter Handles / Hashtags seperated by commas" />
                              </li>
                              <li>
                                <span className="twitterWrapper">Twitter</span>
                                <input placeholder="Enter Handles / Hashtags seperated by commas" />
                              </li>
                              <li>
                                <span className="youtubeWrapper">Youtube</span>
                                <input placeholder="Enter Handles / Hashtags seperated by commas" />
                              </li>
                            </ul>
                          </div>
                          <div className="MatchForm">
                            <h5>
                              Please provide Details for Social Media Coverage
                              below
                            </h5>
                            <div className="MatchForm__Content">
                              <input placeholder="Start Date" />
                              <input placeholder="Start Date Timezone" />
                              <input placeholder="End Date" />
                              <input placeholder="Start Date Timezone" />
                            </div>
                          </div>
                          <div className="BrandsContent__Details">
                            <span>Please Select source type to track</span>
                            <div className="brandOption">
                              <span className="brandOptionActive">Videos </span>
                              <span>Images </span>
                              <span>Text </span>
                            </div>
                          </div>
                          <div className="BrandsContent__text">
                            <h5>
                              {' '}
                              Please mention below if there are any brands or
                              assets specific to broadcast
                            </h5>
                            <textarea placeholder="Specify the details here" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brandsContainer">
                    <div className="BrandsContent">
                      <div className="BrandsContent__Header">
                        <h3>Brands</h3>
                        <Icon path={mdiChevronUp} size={0.8} />
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

                  <div className="signatoryContainer">
                    <div className="signatoryContent">
                      <div className="signatoryContent__details">
                        <div className="signatoryContent__InputWrapper">
                          <h5>Enter signatory Details</h5>
                          <input placeholder="Full Name" />
                          <input placeholder="Designation" />
                        </div>
                        <div className="optionalWrapper">
                          <h5>Optional</h5>
                          <h5 className="SignatureHyperLink">
                            + Upload Signature ( Supported formats .DOC and .XLS
                            )
                          </h5>
                          <div className="TCWrapper">
                            <h5>
                              I agree to the terms and conditions of Maplytiks
                            </h5>
                            <h5>
                              I have read and approved the content on the
                              briefing document and commission the project
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="signatoryProfile">
                        <div className="signatoryProfileImg">
                          <img src={sigLogo} alt="" />
                        </div>

                        <h4>Designation</h4>
                        <h6>Date</h6>
                      </div>
                    </div>
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

export default Brief;
