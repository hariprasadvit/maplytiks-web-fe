import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the landingPage state domain
 */

const selectLandingPageDomain = state => state.landingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate,
  );

const makeSelectLandingKpi = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate.landing,
  );

const makeSelectHomeKpi = () =>
  createSelector(
    selectLandingPageDomain,
    substate =>
      (({ homeMain, project, graph }) => ({
        homeMain,
        project,
        graph,
      }))(substate),
  );

const makeSelectAnalyticsKpi = () =>
  createSelector(
    selectLandingPageDomain,
    substate => substate.analytics,
  );

export default makeSelectLandingPage;
export {
  selectLandingPageDomain,
  makeSelectLandingKpi,
  makeSelectHomeKpi,
  makeSelectAnalyticsKpi,
};
