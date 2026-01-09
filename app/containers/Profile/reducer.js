/*
 *
 * Profile reducer
 *
 */
import * as profileConstants from './constants';

export const initialState = {
  profile: { loading: false, data: {} },
  profileImageUploadId: { loading: false, id: '' },
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileConstants.PROFILE_GET_PATTERN: {
      return {
        ...state,
        profile: { loading: true, data: {} },
        profileImageUploadId: { loading: false, id: '' },
      };
    }

    case profileConstants.PROFILE_GET_SUCCESS: {
      const {
        response: { data },
      } = action;
      return {
        ...state,
        profile: { loading: false, data },
      };
    }

    case profileConstants.PROFILE_DETAILS_SUBMIT_PATTERN: {
      return {
        ...state,
      };
    }

    case profileConstants.PROFILE_DETAILS_SUBMIT_SUCCESS: {
      return {
        ...state,
        profileImageUploadId: { loading: false, id: '' },
      };
    }

    case profileConstants.PROFILE_IMAGE_UPLOAD_PATTERN: {
      return {
        ...state,
        profileImageUploadId: { loading: true, id: '' },
      };
    }

    case profileConstants.PROFILE_IMAGE_UPLOAD_SUCCESS: {
      const {
        response: { data },
      } = action;

      return {
        ...state,
        profileImageUploadId: { loading: false, id: data[0].uploadID },
      };
    }

    case profileConstants.PROFILE_IMAGE_UPLOAD_DELETE_PATTERN: {
      return {
        ...state,
        profileImageUploadId: { loading: true, id: '' },
      };
    }

    case profileConstants.PROFILE_IMAGE_UPLOAD_DELETE_SUCCESS: {
      return {
        ...state,
        profileImageUploadId: { loading: false, id: '' },
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
