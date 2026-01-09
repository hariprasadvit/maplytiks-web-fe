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
  mdiMessage,
  mdiMagnify,
  // mdiChevronRight,
  mdiCalendarBlank,
} from '@mdi/js';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';

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

class createProject extends Component {
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

  render() {
    return (
      <div className="createProject">
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
            <div className="spaceBetween">
              <div>
                <h5 className="briefHeader">Project Brief</h5>
                <h6 className="ContentHeader__date">10th Aug 2019</h6>
              </div>
              <div className="searchBar">
                <Icon path={mdiMagnify} size={1} />
                <input placeholder="Search" />
              </div>
            </div>
            {/* <div className="btn__primary">
              <button type="button">Create Project Brief</button>
            </div> */}
          </div>
        </div>
        <div className="breadCrumbWrapper">
          <div className="breadCrumb">
            <div className="breadCrumb__Content">
              <div className="breadCrumb-submited">
                <span className="active">All Submitted</span>
                <span className="">All Drafts</span>
              </div>
              <div className="dateFilter">
                <span>
                  {' '}
                  From <small>23/4/19</small>
                </span>
                <span className="">
                  To <small>23/4/19</small>
                </span>
                <span className="">
                  <Icon path={mdiCalendarBlank} size={0.8} />{' '}
                </span>
              </div>
            </div>
            {/* <div className="breadCrumb__Content">
              <span>
                {' '}
                From <small>23/4/19</small>
              </span>
              <span className="contentBorder">
                To <small>23/4/19</small>
              </span>
              <span className="arrowRight">
                <Icon path={mdiChevronRight} size={1.2} />{' '}
              </span>
            </div> */}
            <div className="btn__primary">
              <button type="button">Create Project Brief</button>
            </div>
          </div>
        </div>

        <div className="submittedContent">
          <ul>
            <li className="submittedContent__list">
              <h6>1</h6>
              <div className="submittedItem">
                <div className="">
                  <h4 className="EntmentHeader">Entertainment</h4>
                  <h5>San Antonio Spurs 2017-18 Regular Season</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Event Duration</h4>
                  <h5>3/8/18 - 3/9/18</h5>
                </div>
              </div>
              <div className="listView">
                <span>View</span>
                <span>Request Chnages</span>
              </div>
            </li>
            <li className="submittedContent__list SportsItem">
              <h6>2</h6>
              <div className="submittedItem">
                <div className="">
                  <h4 className="sportsHeader">Sports</h4>
                  <h5>San Antonio Spurs 2017-18 Regular Season</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Event Duration</h4>
                  <h5>3/8/18 - 3/9/18</h5>
                </div>
              </div>
              <div className="listView">
                <span>View</span>
                <span>Request Chnages</span>
              </div>
            </li>

            <li className="submittedContent__list SportsItem">
              <h6>3</h6>
              <div className="submittedItem">
                <div className="">
                  <h4 className="sportsHeader">Sports</h4>
                  <h5>San Antonio Spurs 2017-18 Regular Season</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Event Duration</h4>
                  <h5>3/8/18 - 3/9/18</h5>
                </div>
              </div>
              <div className="listView">
                <span>View</span>
                <span>Request Chnages</span>
              </div>
            </li>
            <li className="submittedContent__list">
              <h6>4</h6>
              <div className="submittedItem">
                <div className="">
                  <h4 className="EntmentHeader">Entertainment</h4>
                  <h5>San Antonio Spurs 2017-18 Regular Season</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Modified on</h4>
                  <h5>12-03-19 7:30pm</h5>
                </div>
                <div>
                  <h4>Event Duration</h4>
                  <h5>3/8/18 - 3/9/18</h5>
                </div>
              </div>
              <div className="listView">
                <span>View</span>
                <span>Request Chnages</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="briefContainer" />
      </div>
    );
  }
}

export default createProject;
