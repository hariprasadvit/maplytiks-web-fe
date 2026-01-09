/* eslint-disable indent */
/*
 *
 * LandingPage reducer
 *
 */
import * as landingConstants from './constants';

const CATEGORY_MAP = {
  KPI101: 'landing',
  KPI102: 'homeMain',
  KPI103: 'project',
  KPI104: 'analytics',
  KPI105: 'analytics',
  KPI106: 'analytics',
  KPI107: 'analytics',
  KPI109: 'graph',
};

export const initialState = {
  landing: { loading: false, data: [] },
  homeMain: { loading: false, data: [] },
  project: [],
  analytics: [],
  graph: [],
};

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case landingConstants.STATS_KPI_PATTERN: {
      const {
        payload: { kpiCategory },
      } = action;
      return kpiCategory !== 'KPI103' && kpiCategory !== 'KPI102'
        ? { ...state, [CATEGORY_MAP[kpiCategory]]: [] }
        : {
            ...state,
            [CATEGORY_MAP[kpiCategory]]: { loading: true, data: [] },
          };
    }
    case landingConstants.STATS_KPI_SUCCESS: {
      const {
        response: { data, kpiCategory },
      } = action;
      return kpiCategory !== 'KPI103' && kpiCategory !== 'KPI102'
        ? { ...state, [CATEGORY_MAP[kpiCategory]]: data }
        : {
            ...state,
            [CATEGORY_MAP[kpiCategory]]: { loading: false, data },
          };
    }
    default:
      return state;
  }
};

export default landingPageReducer;
