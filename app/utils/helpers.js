/* eslint-disable */ 
import {
  takeLatest,
  call,
  putResolve,
  cancelled,
  race,
  take,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'config/axios';
export const _numberToHumanReadableFormatConverter = (
  number,
  decimal = true,
  sepValUnit = false,
  projectID
) => {
  //console.log("projectID-",projectID)
  let num;

if(projectID.projectID=="PRJ119" || projectID.displayUnit=="INR" || projectID.projectID=="PRJ115"){
  num =
  Math.abs(Number(number)) >= 1.0e7
    ? `${(Math.abs(Number(number)) / 1.0e7).toFixed(decimal ? 2 : 0)} C`  
    : Math.abs(Number(number)) >= 1.0e5
    ? `${(Math.abs(Number(number)) / 1.0e5).toFixed(decimal ? 2 : 0)} L`
    : Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(decimal ? 2 : 0) + ' K'
    : Math.abs(Number(number));
     if (sepValUnit && typeof num === 'string') {
       num = [num.slice(0, num.length - 1), num.slice(num.length - 1, num.length)];
    }
} else if(projectID.projectID=="timeline"){
  num =
       Math.abs(Number(number)) >= 1.0e9 ? `${(Math.abs(Number(number)) / 1.0e9).toFixed(decimal ? 2 : 0)}B` 
                                  : Math.abs(Number(number)) >= 1.0e6 ? `${(Math.abs(Number(number)) / 1.0e6).toFixed(decimal ? 2 : 0)}M`
                                  : Math.abs(Number(number)) >= 1.0e3 ? (Math.abs(Number(number)) / 1.0e3).toFixed(decimal ? 2 : 0) + 'K'
                                  : Math.abs(Number(number));
} 
else {
  num =
    Math.abs(Number(number)) >= 1.0e9
      ? `${(Math.abs(Number(number)) / 1.0e9).toFixed(decimal ? 2 : 0)} B`  
      : Math.abs(Number(number)) >= 1.0e6
      ? `${(Math.abs(Number(number)) / 1.0e6).toFixed(decimal ? 2 : 0)} M`
      : Math.abs(Number(number)) >= 1.0e3
      ? (Math.abs(Number(number)) / 1.0e3).toFixed(decimal ? 2 : 0) + ' K'
      : Math.abs(Number(number));
      if (sepValUnit && typeof num === 'string') {
        num = [num.slice(0, num.length - 1), num.slice(num.length - 1, num.length)];
      }
}

  // let num =
  //   Math.abs(Number(number)) >= 1.0e9
  //     // ? `${(Math.abs(Number(number)) / 1.0e9).toFixed(decimal ? 2 : 0)}B`  Removed by palani velayutham 24/1/2020
  //     // : Math.abs(Number(number)) >= 1.0e6
  //     ? `${(Math.abs(Number(number)) / 1.0e6).toFixed(decimal ? 2 : 0)}M`
  //     : Math.abs(Number(number)) >= 1.0e3
  //     ? (Math.abs(Number(number)) / 1.0e3).toFixed(decimal ? 2 : 0) + 'K'
  //     : Math.abs(Number(number));

  if (num === 0) {
    return '0';
  }
  else if(num === NaN){
    return '0';
  }
  else{
    return num % 1 != 0 ? num : num / 1;
  }
};

export const secToString = secs => {
  var sec_num = parseInt(secs, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var result= hours + ':' + minutes + ':' + seconds
  if(result.includes(NaN)){
    return '00:00:00';
  }else{
    return result;
  }
};

// <===============================SAGA HELPERS============================================>

export const _sagaHandler = (successGenerator, errorGenerator, actionType) => {
  function* commonGenerator({ payload, method }) {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    const action = actionType[method];
    const request = {
      cancelToken: source.token,
      url: action.api,
      method: action.method,
      data: payload,
    };

    if (action.method === 'GET') delete request.data;
    if (process.env.NODE_ENV !== 'test') delete request.headers;
    try {
      const { posts: data, cancel: cancelTask } = yield race({
        posts: call(axios, request),
        cancel: take(action.cancel),
      });

      if (data && data.data && data.data.status === 200) {
        yield call(successGenerator, {
          data: data && data.data,
          method,
          action,
          payload,
        });
      } else if (data && data.data && data.data.error) {
        const err = data.data.error[0];
        yield call(errorGenerator, { err, method, action });
      } else if (process.env.NODE_ENV === 'test' && !cancelTask)
        yield putResolve(action.success({ data: data && data.data }));
      else if (cancelTask && typeof source.cancel === 'function')
        source.cancel();
    } catch (err) {
      yield call(errorGenerator, { err, method, action });
    } finally {
      if (yield cancelled() && typeof source.cancel === 'function')
        source.cancel();
    }
  }

  return Object.values(actionType)
    .filter(({ pattern }) => pattern)
    .reduce(
      (acc, { pattern }) => (acc.includes(pattern) ? acc : acc.concat(pattern)),
      [],
    )
    .map(pattern => {
      return (pattern === 'app/LandingPage/STATS_KPI_PATTERN' ||
        pattern === 'app/Dashboard/GRAPH_INSIGHTS_PATTERN'
        ? takeEvery
        : takeLatest)(pattern, commonGenerator);
    });
};
