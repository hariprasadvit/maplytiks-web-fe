// /**
//  * Test sagas
//  */
import { dashboardGenerator } from 'containers/Dashboard/saga';

/* eslint-disable redux-saga/yield-effects */
import { runSaga } from 'redux-saga';
// import { defaultSaga } from '../saga';

// const generator = defaultSaga();
const dispatch = action => {
  console.warn(action);
};

describe('defaultSaga Saga', () => {
  xit('vision generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      dashboardGenerator,
      {
        payload: {
          projectID: 'PRJ101',
          platformID: 'MED101',
          viewcategory: '01',
          visions: [],
          filter: {
            brands: [],
            models: [],
            assets: [],
            venues: [],
          },
        },
        method: 'vision',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
  it('assets generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      dashboardGenerator,
      {
        payload: {
          projectID: 'PRJ101',
          platformID: 'MED101',
          viewcategory: '03',
          assets: [],
          filter: {
            brands: [],
            models: [],
            visions: [],
            venues: [],
          },
        },
        method: 'assets',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
  xit('brands generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      dashboardGenerator,
      {
        payload: {
          projectID: 'PRJ101',
          platformID: 'MED101',
          viewcategory: '02',
          brands: [],
          filter: {
            visions: [],
            models: [],
            assets: [],
            venues: [],
          },
        },
        method: 'brands',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
  xit('models generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      dashboardGenerator,
      {
        payload: {
          projectID: 'PRJ101',
          platformID: 'MED101',
          models: [],
          filter: {
            brands: [],
            visions: [],
            assets: [],
            venues: [],
          },
        },
        method: 'models',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
  xit('venues generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      dashboardGenerator,
      {
        payload: {
          projectID: 'PRJ101',
          platformID: 'MED101',
          viewcategory: '01',
          venues: [],
          filter: {
            brands: [],
            models: [],
            assets: [],
            visions: [],
          },
        },
        method: 'venues',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
});
