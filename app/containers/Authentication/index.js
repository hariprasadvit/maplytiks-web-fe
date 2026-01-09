/**
 *
 * Authentication
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import ErrorBoundary from 'components/ErrorBoundary';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectAuthentication from './selectors';
import * as AuthActions from './actions';

/* eslint-disable react/prefer-stateless-function */
export default function AuthenticationHOC(WrapperComponent) {
  function Authentication(props) {
    return (
      <ErrorBoundary>
        <WrapperComponent {...props} />
      </ErrorBoundary>
    );
  }

  const mapStateToProps = createStructuredSelector({
    authentication: makeSelectAuthentication(),
  });

  const withConnect = connect(
    mapStateToProps,
    AuthActions,
  );

  return compose(withConnect)(Authentication);
}
