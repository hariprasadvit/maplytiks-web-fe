/*
 *
 * LandingPage actions
 *
 */
import * as LandingConstants from './constants';

// <============================1) Projects ==============================>

export function getKpiStats({ payload }) {
  return {
    type: LandingConstants.STATS_KPI_PATTERN,
    method: 'kpi',
    payload,
  };
}

export function getKpiStatsSuccess({ data, kpiCategory }) {
  return {
    type: LandingConstants.STATS_KPI_SUCCESS,
    response: {
      data,
      kpiCategory,
    },
  };
}

export function getKpiStatsCancel() {
  return {
    type: LandingConstants.CANCEL_STATS_KPI_API_TASK,
  };
}

// <============================2) Contact Us ==============================>

export function contactUs({ payload }) {
  return {
    type: LandingConstants.CONTACT_US_PATTERN,
    method: 'contact',
    payload,
  };
}

export function contactUsSuccess({ data }) {
  return {
    type: LandingConstants.CONTACT_US_SUCCESS,
    response: {
      data,
    },
  };
}

export function contactUsCancel() {
  return {
    type: LandingConstants.CANCEL_CONTACT_US_API_TASK,
  };
}
