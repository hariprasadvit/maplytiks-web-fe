/*
 *
 * Authentication actions
 *
 */

import * as authenticationConstants from './constants';

// <============================1) Sign In ==============================>

export function userLogin({ payload }) {
  return {
    type: authenticationConstants.GET_USER_LOGIN_PATTERN,
    method: 'login',
    payload,
  };
}

export function userLoginSuccess({ data }) {
  return {
    type: authenticationConstants.GET_USER_LOGIN_SUCCESS,
    response: {
      data,
    },
  };
}

export function userLoginCancel() {
  return {
    type: authenticationConstants.CANCEL_SIGN_IN_API_TASK,
  };
}

// <============================2) Sign Out ==============================>

export function userSignOut() {
  return {
    type: authenticationConstants.USER_SIGN_OUT_PATTERN,
    method: 'logout',
  };
}

export function userSignOutSuccess({ data }) {
  return {
    type: authenticationConstants.USER_SIGN_OUT_SUCCESS,
    response: {
      data,
    },
  };
}

export function userSignOutCancel() {
  return {
    type: authenticationConstants.CANCEL_SIGN_OUT_API_TASK,
  };
}

// <============================3) Forgot Password ==============================>

export function userForgotPassword({ payload }) {
  return {
    type: authenticationConstants.FORGOT_PASSWORD_PATTERN,
    method: 'forgotpassword',
    payload,
  };
}

export function userForgotPasswordSuccess({ data }) {
  return {
    type: authenticationConstants.FORGOT_PASSWORD_SUCCESS,
    response: {
      data,
    },
  };
}

export function userForgotPasswordCancel() {
  return {
    type: authenticationConstants.CANCEL_FORGOT_PASSWORD_API_TASK,
  };
}

// <============================4) Reset Password ==============================>

export function userResetPassword({ payload }) {
  return {
    type: authenticationConstants.RESET_PASSWORD_PATTERN,
    method: 'resetPassword',
    payload,
  };
}

export function userResetPasswordSuccess({ data }) {
  return {
    type: authenticationConstants.RESET_PASSWORD_SUCCESS,
    response: {
      data,
    },
  };
}

export function userResetPasswordCancel() {
  return {
    type: authenticationConstants.CANCEL_RESET_PASSWORD_API_TASK,
  };
}
