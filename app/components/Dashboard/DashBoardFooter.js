/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const DashBoardFooter = ({ history }) => (
  <div className="analyticsFooter small">
    <div className="footerContainer">
      <div>
        <a onClick={() => history.push('/glossary')} target="_blank">
          Glossary
        </a>
        <a onClick={() => history.push('/terms')} target="_blank">
          Terms of use
        </a>
        <a onClick={() => history.push('/privacy')} target="_blank">
          Privacy Policy
        </a>
        <a onClick={() => history.push('/contact')}>Contact us</a>
      </div>
      <div>
        <a target="_blank" href="https://twitter.com/Maplytiks_GSC">
          Twitter
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/maplytiks/F">
          Linkedin
        </a>
        <a>Copyrights 2019. All rights reserved </a>
      </div>
    </div>
  </div>
);

DashBoardFooter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default DashBoardFooter;
