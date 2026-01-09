import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the brief state domain
 */

const selectBriefDomain = state => state.brief || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Brief
 */

const makeSelectBrief = () =>
  createSelector(
    selectBriefDomain,
    substate => substate,
  );

export default makeSelectBrief;
export { selectBriefDomain };
