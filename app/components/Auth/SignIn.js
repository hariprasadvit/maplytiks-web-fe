/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { toast } from 'react-toastify';
import formValidator from 'utils/formValidator';
import logo from 'images/logo-tagline.png';
import ReactGA from 'react-ga';

const SignIn = ({
  history,
  userLogin,
  userForgotPassword,
  userResetPassword,
  authentication,
  userResetPasswordCancel,
  userLoginCancel,
  userForgotPasswordCancel,
}) => {
  ReactGA.initialize('UA-129684001-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [form, setForm] = useState({
    signIn: { userName: '', password: '' },
    forgotPassword: { mobile: '', mail: '' },
    resetPassword: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
  });

  const [mode, setMode] = useState('signIn');
  const [submitted, setSubmitted] = useState(false);
  const AUTH_FORM_FIELD_CONFIG = {
    signIn: [
      {
        field: 'userName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Username is required.',
        inputConfig: {
          placeholder: 'Username',
          type: 'text',
          value: form.signIn.userName,
          inputClass: 'form',
        },
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.',
        inputConfig: {
          placeholder: 'Password',
          type: 'password',
          value: form.signIn.password,
          inputClass: 'form',
        },
      },
    ],
    forgotPassword: [
      {
        field: 'mobile',
        method: 'isEmpty',
        validWhen: false,
        message: 'Mobile Number is required.',
        inputConfig: {
          placeholder: 'Mobile Number',
          type: 'text',
          value: form.forgotPassword.mobile,
          inputClass: 'form',
        },
      },
      {
        field: 'mail',
        method: 'isEmpty',
        validWhen: false,
        message: 'Mail is required.',
        inputConfig: {
          placeholder: 'E-mail',
          type: 'text',
          value: form.forgotPassword.mail,
          inputClass: 'form',
        },
      },
    ],
    resetPassword: [
      {
        field: 'oldPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Old password is required.',
        inputConfig: {
          placeholder: 'Old Password',
          type: 'password',
          value: form.resetPassword.oldPassword,
          inputClass: 'form',
        },
      },
      {
        field: 'newPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'New password is required.',
        inputConfig: {
          placeholder: 'New Password',
          type: 'password',
          value: form.resetPassword.newPassword,
          inputClass: 'form',
        },
      },
      {
        field: 'confirmNewPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Confirm new password is required.',
        inputConfig: {
          placeholder: 'New Password',
          type: 'password',
          value: form.resetPassword.confirmNewPassword,
          inputClass: 'form',
        },
      },
    ],
  };

  // let validation;

  // const handleOnBlur = () => {

  //   validation = formValidator(
  //     AUTH_FORM_FIELD_CONFIG[mode],
  //     form[mode],
  //     'validate',
  //   );
  // };

  const onSubmitHandler = () => {
    setSubmitted(true);

    const validationResult = formValidator(
      AUTH_FORM_FIELD_CONFIG[mode],
      form[mode],
      'validate',
    );

    if (validationResult.isValid) {
      if (mode === 'signIn') {
        const PAYLOAD = {
          payload: {
            loginID: form.signIn.userName,
            password: form.signIn.password,
          },
        };
        userLogin(PAYLOAD);
      }

      if (mode === 'forgotPassword') {
        const PAYLOAD = {
          payload: {
            mobile_No: form.forgotPassword.userName,
            email_id: form.forgotPassword.userName,
          },
        };
        userForgotPassword(PAYLOAD);
      }

      if (mode === 'resetPassword') {
        const PAYLOAD = {
          payload: {
            old_password: form.resetPassword.oldPassword,
            new_password: form.resetPassword.newPassword,
            confirm_password: form.resetPassword.confirmNewPassword,
          },
        };
        userResetPassword(PAYLOAD);
      }
    }
  };

  useEffect(
    () => () => {
      userResetPasswordCancel();
      userLoginCancel();
      userForgotPasswordCancel();
    },
    [],
  );

  useEffect(() => {
    setMode(
      history.location.pathname === '/sign-in'
        ? 'signIn'
        : history.location.pathname === '/forgot-password'
        ? 'forgotPassword'
        : 'resetPassword',
    );
  }, [mode]);

  useEffect(() => {
    if (mode === 'forgotPassword' || mode === 'resetPassword') {
      toast.error(authentication.response.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [authentication]);

  const handleEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmitHandler();
    }
  };

  const validation = submitted
    ? formValidator(AUTH_FORM_FIELD_CONFIG[mode], form[mode], 'validate')
    : formValidator(AUTH_FORM_FIELD_CONFIG[mode], form[mode], 'valid');

  return (
    <div className="Sign-in-wrapper">
      <div className="header-left" onClick={() => history.push('/')}>
        <img src={logo} alt="" />
      </div>
      <div className="Welcome-wrapper" onKeyPress={handleEnter}>
        <div className="Welcome-content">
          <h2 className="Content-Heading">Welcome to Maplytiks</h2>
          <p className="Content-paragraph">
            We have created a customized and secure dashboard that will give you
            a comprehensive and accurate visualization of your inventory’s brand
            exposure accross matches, sponsors, assets, and venues.
          </p>
          <p className="Content-paragraph">
            We hope you enjoy your experience!
          </p>
        </div>
        <div className="Form-SignIn">
          <h2 className="form-heading">
            {mode === 'signIn'
              ? 'Sign In'
              : mode === 'forgotPassword'
              ? 'Forgot Password'
              : 'Reset Password'}
          </h2>
          <form>
            {AUTH_FORM_FIELD_CONFIG[mode].map(d => (
              <div key={`Auth_${d.field}`} className="input-block">
                <Input
                  {...d.inputConfig}
                  onChangeHandlerCallback={val =>
                    setForm({
                      ...form,
                      [mode]: { ...form[mode], [d.field]: val },
                    })
                  }
                  isError={
                    validation &&
                    validation[d.field] &&
                    validation[d.field].isInvalid
                  }
                  errorMsg={
                    validation &&
                    validation[d.field] &&
                    validation[d.field].message
                  }
                  // blur={handleOnBlur}
                />
              </div>
            ))}

            <div className="form_label">
              {mode === 'signIn' && (
                <div className="checkbox_label">
                  <Input
                    type="checkbox"
                    placeholder="Enter Password"
                    id="test1"
                    inputClass="default"
                    inputLable="Remember me"
                    checkboxLableId="Remember_me"
                  />
                </div>
              )}
              <span
                onClick={() => {
                  history.push(
                    mode === 'signIn' ? '/forgot-password' : '/sign-in',
                  );
                }}
                className="option_section"
              >
                {mode !== 'resetPassword' &&
                  (mode === 'signIn' ? 'Forgot Password?' : 'Sign In?')}
              </span>
            </div>

            <div className="btnGrp">
              <Button
                type="secondary"
                label="Home"
                onClickHandler={() => history.push('/')}
              />
              <Button
                type="primary"
                label={mode === 'signIn' ? 'Log In' : 'Submit'}
                onClickHandler={onSubmitHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  userLogin: PropTypes.func,
  userForgotPassword: PropTypes.func,
  userResetPassword: PropTypes.func,
  userResetPasswordCancel: PropTypes.func,
  userLoginCancel: PropTypes.func,
  userForgotPasswordCancel: PropTypes.func,
  history: PropTypes.object,
  authentication: PropTypes.object,
  // userSignOut: PropTypes.func,
};

export default SignIn;
