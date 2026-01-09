/* eslint-disable no-unused-expressions */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthentication from 'containers/Authentication/selectors';
import * as routesConstants from 'config/routeConstants';
// import ScrollTop from '../components/common/ScrollTop';

const Routes = ({
  authentication: { checkAuthorization, isLoggedIn },
  routes,
}) =>
  checkAuthorization ? (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={routingProps => {
            if (isLoggedIn || !route.auth) {
              if (isLoggedIn && route.loginComponent)
                return <route.loginComponent {...routingProps} />;
              return <route.component {...routingProps} />;
            }
            return (
              <Redirect from={route.path} to={routesConstants.LANDING_PAGE} />
            );
          }}
        />
      ))}
    </Switch>
  ) : (
    <h1>Loading....</h1>
  );

Routes.propTypes = {
  routes: PropTypes.array,
  authentication: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authentication: makeSelectAuthentication(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(React.memo(Routes));
