// import queryString from 'query-string';
import { put, putResolve, all } from 'redux-saga/effects';
import * as apiEndPoints from 'config/apiEndPoints';
import { push } from 'connected-react-router';
import axios from 'config/axios';
import { ALL_ERROR_HANDLER } from 'config/errorHandler';
import { _sagaHandler } from 'utils/helpers';
import * as authenticationConstants from './constants';
import * as authenticationActions from './actions';

const actionType = {
  login: {
    method: 'POST',
    api: apiEndPoints.SIGN_IN_API,
    pattern: authenticationConstants.GET_USER_LOGIN_PATTERN,
    cancel: authenticationConstants.CANCEL_SIGN_IN_API_TASK,
    success: authenticationActions.userLoginSuccess,
  },
  resetPassword: {
    method: 'POST',
    api: apiEndPoints.RESET_PASSWORD_API,
    pattern: authenticationConstants.RESET_PASSWORD_PATTERN,
    cancel: authenticationConstants.CANCEL_RESET_PASSWORD_API_TASK,
    success: authenticationActions.userResetPasswordSuccess,
  },
  logout: {
    method: 'GET',
    api: apiEndPoints.SIGN_OUT_API,
    pattern: authenticationConstants.USER_SIGN_OUT_PATTERN,
    cancel: authenticationConstants.CANCEL_SIGN_OUT_API_TASK,
    success: authenticationActions.userSignOutSuccess,
  },
  forgotpassword: {
    method: 'POST',
    api: apiEndPoints.FORGOT_PASSWORD_API,
    pattern: authenticationConstants.FORGOT_PASSWORD_PATTERN,
    cancel: authenticationConstants.CANCEL_FORGOT_PASSWORD_API_TASK,
    success: authenticationActions.userForgotPasswordSuccess,
  },
};

function* successGenerator({ data, method, action }) {
  switch (method) {
    case 'login': {
      yield putResolve(action.success({ data: data.profile }));
      yield put(push('/'));
      break;
    }
    case 'forgotpassword': {
      yield putResolve(action.success({ data }));
      break;
    }
    case 'resetPassword': {
      yield putResolve(action.success({ data }));
      break;
    }
    case 'logout':
      yield putResolve(action.success({ data: {} }));
      yield put(push('/sign-in'));
      break;
    default:
  }
}

function* errorGenerator({ err, method, action }) {
  switch (method) {
    default:
      if (axios.isCancel(err)) console.log('task cancelled', action.cancel);
      else ALL_ERROR_HANDLER(err);
  }
}

export default function*() {
  yield all(_sagaHandler(successGenerator, errorGenerator, actionType));
}
