/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events, no-restricted-globals */
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiHome, mdiPencil } from '@mdi/js';
import PropTypes from 'prop-types';
import logo from 'images/logo-tagline.png';
import ProfileImg from 'images/max.jpeg';
import OverviewImg from 'images/Holistic.png';

class Profile extends Component {
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
    const { history } = this.props;
    return (
      // Main Wrapper Starts
      // Main Ends Starts
      <div className="analyticsWrapper profileWrapper">
        {/* Header Starts */}
        {/* Header Ends */}
        <div className="analyticsHeader">
          <header id="header" className={this.state.isTop ? '' : 'sticky'}>
            <div className="container">
              <div className="row space-between">
                <div
                  className="header-left"
                  onClick={() => this.props.history.push('/')}
                >
                  <img src={logo} alt="" />
                </div>
                <div className="header-right">
                  <div className="messageBox">
                    <Icon
                      onClick={() => history.push('/home')}
                      path={mdiHome}
                      size={0.8}
                    />
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
        </div>
        {/* Header ends */}
        {/* Overview Starts */}
        <div className="container">
          <div className="profile-block">
            <form>
              <div className="profile-image">
                <img src={ProfileImg} alt="" />
                <div className="edit">
                  <Icon path={mdiPencil} size={0.8} />
                </div>
              </div>
              <div className="input-wrapper">
                <div className="input-wrapper-top">
                  <div className="col-5">
                    <div className="input-block">
                      <label>Your Full Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Role</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block input-block-sm">
                      <label>Contact Number</label>
                      <input type="number" />
                      <input type="tel" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Email ID</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Password</label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Confirm Password</label>
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="input-wrapper-bottom">
                  <div className="col-5">
                    <div className="input-block">
                      <label>Company Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Company Website (if any)</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="input-block">
                      <label>Company Contact Number</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="input-block">
                      <label>Company Address</label>
                      <textarea rows="4" />
                    </div>
                  </div>
                  <div className="input-action">
                    <div className="btn__primary">
                      <button type="button">Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Overview Ends */}
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.object,
};

export default Profile;
