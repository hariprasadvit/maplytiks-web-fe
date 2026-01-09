import authenticationReducer from '../reducer';

describe('authenticationReducer', () => {
  it('returns the initial state', () => {
    expect(authenticationReducer(undefined, {})).toEqual({});
  });
});
