/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Home from 'components/homePage/Home';
import { getKpiStats } from 'containers/LandingPage/actions';
import { userSignOut } from 'containers/Authentication/actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectHomeKpi } from 'containers/LandingPage/selectors';
import { makeSelectUser } from 'containers/Authentication/selectors';

import * as homePageActions from './actions';
import makeSelectHomePage, {
  makeSelectHomePageProjects,
  makeSelectHomePageProjectNotification,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

export function HomePage(props) {
  return (
    <div>
      <Home {...props} />
    </div>
  );
}

HomePage.propTypes = {
  getProjects: PropTypes.func.isRequired,
  getProjectsNotification: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  notifications: PropTypes.object,
  history: PropTypes.object.isRequired,
  kpi: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  projects: makeSelectHomePageProjects(),
  notifications: makeSelectHomePageProjectNotification(),
  // landing: makeSelectLandingPage(),
  kpi: makeSelectHomeKpi(),
  user: makeSelectUser(),
});

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({
  key: 'homePage',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  { ...homePageActions, getKpiStats, userSignOut },
);

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(HomePage);
