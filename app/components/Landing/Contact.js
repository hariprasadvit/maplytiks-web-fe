/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ history }) => (
  <div className="ninth-block">
    <div className="center-short-block">
      <div className="title title-lg">Explore undiscovered commerce</div>
      <div className="subtitle">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's together optimize your sponsorship investments
      </div>
      <div className="btn light-btn">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          onClick={() => {
            history.push('/contact');
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  history: PropTypes.object,
};
export default Contact;
