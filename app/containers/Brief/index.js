/**
 *
 * Brief
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import qs from 'query-string';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import BriefingList from 'components/briefing/BriefingList';
import BriefingForm from 'components/briefing/BriefingForm';

import { userSignOut } from 'containers/Authentication/actions';
import { makeSelectUser } from 'containers/Authentication/selectors';

import makeSelectBrief from './selectors';
import * as briefingActions from './actions';

import reducer from './reducer';
import saga from './saga';

export function Brief(props) {
  const { type } = qs.parse(props.location.search);
  switch (type) {
    case 'listing':
      return <BriefingList {...props} />;
    case 'form':
      return <BriefingForm {...props} />;
    default:
      return type;
  }
}

Brief.propTypes = {
  location: PropTypes.object,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  brief: makeSelectBrief(),
  user: makeSelectUser(),
});

const withReducer = injectReducer({ key: 'brief', reducer });
const withSaga = injectSaga({
  key: 'brief',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  { ...briefingActions, userSignOut },
);

export default compose(withConnect)(Brief, withReducer, withSaga);
