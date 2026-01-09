/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiHome, mdiChevronDown } from '@mdi/js';
// Matra branding
import logoTwo from 'images/matra-logo.png';
import image from '../../images/paul.jpg';

const HomeHeader = ({ history, showHomeIcon, signout, user: { name } }) => {
  // const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setDropDownOpen] = useState(false);

  const dropDownContainer = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   document.addEventListener('mousedown', handleClick);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 0) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };

  // const handleClick = e => {
  //   if (
  //     dropDownContainer.current &&
  //     dropDownContainer.current.contains(e.target)
  //   ) {
  //     return 0;
  //   }
  //   setDropDownOpen(false);
  //   return 0;
  // };

  return (
    <header
      id="header"
      className="small"
      // style={{ paddingBottom: '20px' }}
    >
      <div className="header-left small" onClick={() => history.push('/')}>
        <img src={logoTwo} alt="" />
        {/* {!isSticky && <img src={logoTwo} alt="" />} */}
      </div>
      <div className="header-right small">
        {showHomeIcon && (
          <div className="messageBox" onClick={() => history.push('/home')}>
            <Icon path={mdiHome} size={0.8} />
          </div>
        )}

        <div
          onClick={() => setDropDownOpen(!isDropdownOpen)}
          className={`profile ${isDropdownOpen ? 'show' : ''}`}
        >
          <div className="profile__img">
            <img src={image} alt="" />
            <div className="online" />
          </div>
          <div className="profile__name"> Frank Todd{name}</div>
          <Icon path={mdiChevronDown} size={0.8} />{' '}
          {isDropdownOpen && (
            <div ref={dropDownContainer} className="profileBlock__dropdown">
              <ul>
                {/* <li>Project Brief</li> */}
                <li onClick={() => history.push('/profile')}>Profile</li>
                <li onClick={() => signout()}>Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

HomeHeader.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  signout: PropTypes.func,
  showHomeIcon: PropTypes.bool,
};

export default HomeHeader;
