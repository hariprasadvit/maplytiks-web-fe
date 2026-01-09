/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';
// import homePageSaga from '../saga';

// const generator = homePageSaga();
import { homepageGenerator } from 'containers/HomePage/saga';

/* eslint-disable redux-saga/yield-effects */
import { runSaga } from 'redux-saga';
// import { defaultSaga } from '../saga';

// const generator = defaultSaga();
const dispatch = action => {
  console.warn(action);
};

describe('homePageSaga Saga', () => {
  it('projects generator', () => {
    jest.setTimeout(100000);
    return runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      homepageGenerator,
      {
        payload: {},
        method: 'projects',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
});
