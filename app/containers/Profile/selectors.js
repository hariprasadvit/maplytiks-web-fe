import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profile state domain
 */

const selectProfileDomain = state => state.profile || initialState;

/**
 * Other specific selectors
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

const makeSelectProfileDetails = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.profile,
  );

const makeSelectProfileImageUploadId = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.profileImageUploadId,
  );

export default makeSelectProfile;
export {
  selectProfileDomain,
  makeSelectProfileDetails,
  makeSelectProfileImageUploadId,
};
