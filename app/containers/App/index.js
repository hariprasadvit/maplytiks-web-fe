import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import RouteContainer from 'config/routes';
import { uiRouteConfig } from 'config/routeConfig';
import { routesConfig } from 'config/feRouteConfig';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { DEFAULT_AUTO_CLOSE_DELAY } from 'config';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import landingSaga from 'containers/LandingPage/saga';
import landingReducer from 'containers/LandingPage/reducer';

import reducer from 'containers/Authentication/reducer';
import saga from 'containers/Authentication/saga';
// import GlobalStyle from '../../global-styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ closeToast }) => (
  <button className="Toastify__close-button" type="button" onClick={closeToast}>
    <i className="mdi mdi-close" />
  </button>
);

CloseButton.propTypes = {
  closeToast: PropTypes.func,
};

function App() {
  return (
    <ErrorBoundary>
      <svg width={0} height={0} style={{ display: 'flex' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <ToastContainer
        autoClose={DEFAULT_AUTO_CLOSE_DELAY}
        position={toast.POSITION.TOP_RIGHT}
        closeButton={<CloseButton />}
      />
      <RouteContainer routes={routesConfig.concat(uiRouteConfig)} />
    </ErrorBoundary>
  );
}
const withReducer = injectReducer({ key: 'authentication', reducer });
const withSaga = injectSaga({
  key: 'authentication',
  saga,
});

const withReducerLanding = injectReducer({
  key: 'landingPage',
  reducer: landingReducer,
});
const withSagaLanding = injectSaga({
  key: 'landingPage',
  saga: landingSaga,
});

export default compose(
  withReducer,
  withSaga,
  withReducerLanding,
  withSagaLanding,
)(App);
