/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Landing from 'components/Landing';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as landingPageActions from './actions';
import { makeSelectLandingKpi } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function LandingPage(props) {
  return <Landing history={props.history} {...props} />;
}

LandingPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const withReducer = injectReducer({ key: 'landingPage', reducer });
const withSaga = injectSaga({
  key: 'landingPage',
  saga,
});

const mapStateToProps = createStructuredSelector({
  kpi: makeSelectLandingKpi(),
});

const withConnect = connect(
  mapStateToProps,
  landingPageActions,
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(LandingPage);
