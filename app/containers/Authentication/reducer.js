/*
 *
 * Authentication reducer
 *
 */

import {
  GET_USER_LOGIN_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  USER_SIGN_OUT_SUCCESS,
} from './constants';

export const initialState = {
  isLoggedIn: false,
  authCheck: false,
  checkAuthorization: true,
  user: {},
  response: {},
};

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LOGIN_SUCCESS: {
      const {
        response: { data },
      } = action;
      return { ...state, isLoggedIn: true, user: data };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      const {
        response: { data },
      } = action;
      return { ...state, response: data };
    }
    case RESET_PASSWORD_SUCCESS: {
      const {
        response: { data },
      } = action;
      return { ...state, response: data };
    }
    case USER_SIGN_OUT_SUCCESS: {
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
}

export default authenticationReducer;
