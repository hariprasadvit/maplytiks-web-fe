/*
 *
 * Profile actions
 *
 */

import * as profileConstants from './constants';

// <============================ 1) GET PROFILE DETAILS ===============================>

export function getProfile() {
  return {
    type: profileConstants.PROFILE_GET_PATTERN,
    method: 'profile',
    payload: {},
  };
}

export function getProfileSuccess({ data }) {
  return {
    type: profileConstants.PROFILE_GET_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProfileCancel() {
  return {
    type: profileConstants.CANCEL_PROFILE_GET_API_TASK,
  };
}

// <============================ 2) PROFILE DETAILS POST ===============================>

export function profileSubmit({ payload }) {
  return {
    type: profileConstants.PROFILE_DETAILS_SUBMIT_PATTERN,
    method: 'profileSubmit',
    payload,
  };
}

export function profileSubmitSuccess({ data }) {
  return {
    type: profileConstants.PROFILE_DETAILS_SUBMIT_SUCCESS,
    response: {
      data,
    },
  };
}

export function profileSubmitCancel() {
  return {
    type: profileConstants.CANCEL_PROFILE_DETAILS_SUBMIT_API_TASK,
  };
}

// <============================ 3) PROFILE IMAGE UPLOAD ===============================>

export function profileImageSubmit(payload) {
  return {
    type: profileConstants.PROFILE_IMAGE_UPLOAD_PATTERN,
    method: 'profileImageSubmit',
    payload,
  };
}

export function profileImageSubmitSuccess({ data }) {
  return {
    type: profileConstants.PROFILE_IMAGE_UPLOAD_SUCCESS,
    response: {
      data,
    },
  };
}

export function profileImageSubmitCancel() {
  return {
    type: profileConstants.CANCEL_PROFILE_IMAGE_UPLOAD_API_TASK,
  };
}

// <============================ 4) PROFILE IMAGE UPLOAD DELETE ===============================>

export function profileImageDelete({ payload }) {
  return {
    type: profileConstants.PROFILE_IMAGE_UPLOAD_DELETE_PATTERN,
    method: 'profileImageDelete',
    payload,
  };
}

export function profileImageDeleteSuccess({ data }) {
  return {
    type: profileConstants.PROFILE_IMAGE_UPLOAD_DELETE_SUCCESS,
    response: {
      data,
    },
  };
}

export function profileImageDeleteCancel() {
  return {
    type: profileConstants.CANCEL_PROFILE_IMAGE_UPLOAD_DELETE_API_TASK,
  };
}
