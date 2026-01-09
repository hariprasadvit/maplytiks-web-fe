import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectHomePageProjects = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.projects,
  );

const makeSelectHomePageProjectNotification = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.notification,
  );

export default makeSelectHomePage;

export {
  selectHomePageDomain,
  makeSelectHomePageProjects,
  makeSelectHomePageProjectNotification,
};
