import * as routesConstants from 'config/routeConstants';
import AuthenticationHOC from 'containers/Authentication';
import SignIn from 'components/Auth/SignIn';
import Dashboard from 'containers/Dashboard';
import HomePage from 'containers/HomePage';
import Profile from 'containers/Profile';
import ContactUs from 'components/common/ContactUs';
import LandingPage from 'containers/LandingPage';
import Brief from 'containers/Brief';

export const routesConfig = [
  {
    path: routesConstants.LANDING_PAGE,
    exact: true,
    component: LandingPage,
    loginComponent: HomePage,
  },
  {
    path: routesConstants.SIGN_IN,
    // auth: true,
    exact: true,
    component: AuthenticationHOC(SignIn),
  },
  {
    path: routesConstants.HOME_PAGE,
    auth: true,
    exact: true,
    component: HomePage,
  },
  {
    path: routesConstants.PROFILE_PAGE,
    auth: true,
    exact: true,
    component: Profile,
  },
  {
    path: routesConstants.DASHBOARD,
    auth: true,
    exact: true,
    component: Dashboard,
  },
  {
    path: routesConstants.FORGOT_PASSWORD,
    // auth: true,
    exact: true,
    component: AuthenticationHOC(SignIn),
  },
  {
    path: routesConstants.RESET_PASSWORD,
    // auth: true,
    exact: true,
    component: AuthenticationHOC(SignIn),
  },
  {
    path: routesConstants.CONTACT_US,
    // auth: true,
    exact: true,
    component: ContactUs,
  },
  {
    path: routesConstants.BRIEF,
    // auth: true,
    exact: true,
    component: Brief,
  },
];
