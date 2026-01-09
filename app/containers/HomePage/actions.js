/*
 *
 * HomePage actions
 *
 */
import * as homepageConstants from './constants';

// <============================ 1) PROJECT LISTING ===============================>

export function getProjects() {
  return {
    type: homepageConstants.PROJECT_GET_PATTERN,
    method: 'projects',
    payload: {},
  };
}

export function getProjectsSuccess({ data }) {
  return {
    type: homepageConstants.PROJECT_GET_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectsCancel() {
  return {
    type: homepageConstants.CANCEL_GET_PROJECT_API_TASK,
  };
}

// <============================ 2) PROJECT NOTIFICATIONS ===============================>

export function getProjectsNotification({ payload }) {
  return {
    type: homepageConstants.PROJECT_NOTIFICATION_GET_PATTERN,
    method: 'notification',
    payload,
  };
}

export function getProjectsNotificationSuccess(data) {
  return {
    type: homepageConstants.PROJECT_NOTIFICATION_GET_SUCCESS,
    response: {
      data,
    },
  };
}

export function getProjectsNotificationCancel() {
  return {
    type: homepageConstants.CANCEL_GET_PROJECT_NOTIFICATION_API_TASK,
  };
}
