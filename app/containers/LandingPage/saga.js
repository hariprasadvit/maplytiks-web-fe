/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
// import queryString from 'query-string';
import { all, putResolve } from 'redux-saga/effects';
import * as apiEndPoints from 'config/apiEndPoints';
// import { push } from 'connected-react-router';
import axios from 'config/axios';
import {
  ALL_ERROR_HANDLER,
  // SPECIFIC_ERROR_HANDLER,
  // SPECIFIC_SUCCESS_HANDLER,
} from 'config/errorHandler';
import { _sagaHandler } from 'utils/helpers';
import * as landingConstants from './constants';
import * as landingActions from './actions';

const actionType = {
  kpi: {
    method: 'POST',
    api: apiEndPoints.KPI_STATS_API,
    pattern: landingConstants.STATS_KPI_PATTERN,
    cancel: landingConstants.CANCEL_STATS_KPI_API_TASK,
    success: landingActions.getKpiStatsSuccess,
  },
  contact: {
    method: 'POST',
    api: apiEndPoints.CONTACT_US_API,
    pattern: landingConstants.CONTACT_US_PATTERN,
    cancel: landingConstants.CANCEL_CONTACT_US_API_TASK,
    success: landingActions.contactUsSuccess,
  },
};

function* successGenerator({
  data: { data },
  method,
  action,
  payload: { kpiCategory },
}) {
  switch (method) {
    default:
      yield putResolve(action.success({ data, kpiCategory }));
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
