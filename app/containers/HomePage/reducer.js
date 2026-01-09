/*
 *
 * HomePage reducer
 *
 */
import * as homepageConstants from './constants';

export const initialState = {
  projects: [],
  notification: {
    projectStatus: [],
    projectLive: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homepageConstants.PROJECT_GET_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        projects: data,
      };
    }

    case homepageConstants.PROJECT_NOTIFICATION_GET_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        notification: {
          projectLive: data.live.sort(
            (a, b) => a.statusTimestamp - b.statusTimestamp,
          ),
          projectStatus: data.projectStatus.sort(
            (a, b) => a.statusTimestamp - b.statusTimestamp,
          ),
        },
      };
    }

    default:
      return state;
  }
};

export default homePageReducer;
