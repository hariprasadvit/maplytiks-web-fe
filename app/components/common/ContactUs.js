import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiMapMarker, mdiEmail } from '@mdi/js';
import Input from './Input';
import Button from './Button';

const ContactUs = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const onSubmitHandler = () => {
    const PAYLOAD = {
      paylaod: {
        contactName: name,
        companyName: '',
        contactMailID: email,
        contactNumber: '044- 45865324',
        message: comment,
      },
    };
    //console.log(PAYLOAD);
  };

  return (
    <div className="contactUs block">
      <div className="container">
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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">
              <Icon path={mdiEmail} size={1} />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">info@nanoyotta.com</a>
          </div>
        </div>
        <div className="contactUs-form">
          <form>
            <h3>Contact Us</h3>
            <div className="contactUs-details">
              <div className="contactUs-input">
                <div className="input-block">
                  <span>Full Name</span>

                  <Input
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={name}
                    onChangeHandlerCallback={setName}
                  />
                </div>
                <div className="input-block">
                  <span>Email Address</span>
                  <Input
                    type="text"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChangeHandlerCallback={setEmail}
                  />
                </div>
              </div>
              <div className="input-block">
                <span>Leave A Comment</span>
                <Input
                  type="textarea"
                  placeholder="Enter Your Comment..."
                  value={comment}
                  onChangeHandlerCallback={setComment}
                />
              </div>
              {/* <div style={{ float: 'right' }}> */}
              <div className="contactUs-action">
                <div className="btnGrp">
                  <Button
                    type="secondary"
                    label="Home"
                    onClickHandler={() => history.push('/')}
                  />
                  <Button
                    type="primaryLg"
                    label="Get In Touch With Us"
                    onClickHandler={onSubmitHandler}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  history: PropTypes.object,
};

export default ContactUs;
