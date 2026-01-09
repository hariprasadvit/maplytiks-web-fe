/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '@mdi/react';
import { mdiTwitter, mdiLinkedin,mdiFacebookBox } from '@mdi/js';
import logo from 'images/logo-tagline.png';
import PropTypes from 'prop-types';
// import { Row } from 'react-bootstrap';
import { Container, Row, Col } from 'react-grid-system';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';

const LandingFooter = ({ history }) => (
  <footer id="footer">
    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <div className="footer-brand">
          <img src={logo} alt="" />
        </div>
        <div className="footer-copyright copyrights">Maplytiks &copy; 2020</div>
      </div>
      <div className="footer-legal">
      <ul>
        <li>
          {/* <button className="footerbuttonstyle" startIcon={<EmailIcon />}>Get In Touch</button> */}
          <Button
        variant="contained"
        color="secondary"
        className="cursorstyle" 
        startIcon={<EmailIcon />}
      >
        info@nanoyotta.com
      </Button>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <div>
        <ul className="footer-legal">
          <li>
            <a onClick={() => history.push('/glossary')} target="_blank">
              Glossary
            </a>
          </li>
          <li>
            <a onClick={() => history.push('/terms')} target="_blank">
              Terms of Use
            </a>
          </li>
          <li>
            <a onClick={() => history.push('/privacy')} target="_blank">
              Privacy Policy
            </a>
          </li>
        </ul>
        </div>

      </div>
      <div>
      <ul className="footer-social-links">
      <li>
            <a target="_blank" href="https://twitter.com/Maplytiks_GSC">
              <Icon path={mdiTwitter} size={0.8} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/pg/maplytiks.GSC/">
              <Icon path={mdiFacebookBox} size={0.8} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/maplytiks/"
            >
              <Icon path={mdiLinkedin} size={0.8} />
            </a>
          </li>
        </ul>
      </div>
    </div>

  </footer>
);

export default LandingFooter;
LandingFooter.propTypes = {
  history: PropTypes.object,
};
