// /**
//  * Test sagas
//  */
import { userAuthenticationGenerator } from 'containers/Authentication/saga';

/* eslint-disable redux-saga/yield-effects */
import { runSaga } from 'redux-saga';
// import { defaultSaga } from '../saga';

// const generator = defaultSaga();
const dispatch = action => {
  console.warn(action);
};

describe('defaultSaga Saga', () => {
  it('sign in generator', async () => {
    await runSaga(
      {
        dispatch,
        getState: state => {
          console.warn(state);
        },
      },
      userAuthenticationGenerator,
      {
        payload: {
          loginID: 'asiacup2018@nanoyotta.com',
          password: 'ac^2018',
        },
        method: 'login',
      },
    ).toPromise();
    // expect(true).toEqual(false);
  });
});
