/**
 *
 * Profile
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ProfilePage from 'components/ProfilePage';

import { userSignOut } from 'containers/Authentication/actions';
import { makeSelectUser } from 'containers/Authentication/selectors';

import {
  makeSelectProfileDetails,
  makeSelectProfileImageUploadId,
} from './selectors';
import * as profileActions from './actions';
import reducer from './reducer';
import saga from './saga';

export function Profile(props) {
  return <ProfilePage {...props} />;
}

Profile.propTypes = {
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfileDetails(),
  uploadID: makeSelectProfileImageUploadId(),
  user: makeSelectUser(),
});

const withReducer = injectReducer({ key: 'profile', reducer });
const withSaga = injectSaga({
  key: 'profile',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  { ...profileActions, userSignOut },
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(Profile);
