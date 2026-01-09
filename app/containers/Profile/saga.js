import { putResolve, all } from 'redux-saga/effects';
import * as apiEndPoints from 'config/apiEndPoints';
import axios from 'config/axios';
import {
  ALL_ERROR_HANDLER,
  // SPECIFIC_ERROR_HANDLER,
  // SPECIFIC_SUCCESS_HANDLER,
} from 'config/errorHandler';
import { _sagaHandler } from 'utils/helpers';
import { toast } from 'react-toastify';
import { userLoginSuccess } from 'containers/Authentication/actions';

import * as profileConstants from './constants';
import * as profileActions from './actions';

const actionType = {
  profile: {
    method: 'GET',
    api: apiEndPoints.GET_PROFILE_API,
    pattern: profileConstants.PROFILE_GET_PATTERN,
    cancel: profileConstants.CANCEL_PROFILE_GET_API_TASK,
    success: profileActions.getProfileSuccess,
  },
  profileSubmit: {
    method: 'PUT',
    api: apiEndPoints.GET_PROFILE_API,
    pattern: profileConstants.PROFILE_DETAILS_SUBMIT_PATTERN,
    cancel: profileConstants.CANCEL_PROFILE_DETAILS_SUBMIT_API_TASK,
    success: profileActions.profileSubmitSuccess,
  },
  profileImageSubmit: {
    method: 'POST',
    api: apiEndPoints.PROFILE_IMAGE_UPLOAD_API,
    pattern: profileConstants.PROFILE_IMAGE_UPLOAD_PATTERN,
    cancel: profileConstants.CANCEL_PROFILE_IMAGE_UPLOAD_API_TASK,
    success: profileActions.profileImageSubmitSuccess,
  },
  profileImageDelete: {
    method: 'POST',
    api: apiEndPoints.PROFILE_IMAGE_UPLOAD_DELETE_API,
    pattern: profileConstants.PROFILE_IMAGE_UPLOAD_DELETE_PATTERN,
    cancel: profileConstants.CANCEL_PROFILE_IMAGE_UPLOAD_DELETE_API_TASK,
    success: profileActions.profileImageDeleteSuccess,
  },
};

function* successGenerator({ data, action }) {
  yield putResolve(action.success({ data: data.data }));
  if (action.pattern === 'app/Profile/PROFILE_DETAILS_SUBMIT_PATTERN') {
    toast.success('Profile Successfully Updated', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    const { image, name } = data.data;
    yield putResolve(userLoginSuccess({ data: { image, name } }));
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
