import { putResolve, all } from 'redux-saga/effects';
import * as apiEndPoints from 'config/apiEndPoints';
import axios from 'config/axios';
import {
  ALL_ERROR_HANDLER,
  // SPECIFIC_ERROR_HANDLER,
  // SPECIFIC_SUCCESS_HANDLER,
} from 'config/errorHandler';
import { _sagaHandler } from 'utils/helpers';

import * as homepageConstants from './constants';
import * as homepageActions from './actions';

const actionType = {
  projects: {
    method: 'GET',
    api: apiEndPoints.PROJECT_API,
    pattern: homepageConstants.PROJECT_GET_PATTERN,
    cancel: homepageConstants.CANCEL_GET_PROJECT_API_TASK,
    success: homepageActions.getProjectsSuccess,
  },

  notification: {
    method: 'POST',
    pattern: homepageConstants.PROJECT_NOTIFICATION_GET_PATTERN,
    api: apiEndPoints.PROJECT_NOTIFICATION_API,
    cancel: homepageConstants.CANCEL_GET_PROJECT_NOTIFICATION_API_TASK,
    success: homepageActions.getProjectsNotificationSuccess,
  },
};

function* successGenerator({ data, method, action }) {
  switch (method) {
    case 'notification': {
      yield putResolve(action.success(data));
      break;
    }
    default:
      yield putResolve(action.success({ data: data.data }));
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
