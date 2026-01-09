import { showToast } from 'config/toast';
const ACTIVE_TOAST = {};
const SHOWTOAST = (key, message, errorType = 'error') =>
  showToast(ACTIVE_TOAST, key, message, errorType, 0);
function ErrorHandler(errorArray = [], error, messages = []) {
  const errorStatus =
    typeof error === 'number' || typeof error === 'string'
      ? error
      : error && error.response && error.response.status;
  if (error.request && error.message === 'Network Error')
    SHOWTOAST(
      'request error',
      "We're having trouble connecting. Please check your connection",
    );
  else if (errorStatus && errorArray.includes(Number(errorStatus))) {
    const index = errorArray.indexOf(Number(errorStatus));
    const message = index > -1 ? messages[index] : null;
    switch (Number(errorStatus)) {
      case 200:
        SHOWTOAST(
          'New resource creation',
          message || error.response.data.message,
          'success',
        );
        break;
      case 201:
        SHOWTOAST(
          'Successful fetch or update',
          message || error.response.data.message,
          'success',
        );
        break;
      case 400:
        SHOWTOAST(
          'Resource not found',
          message || error.response.data.data.message,
        );
        break;
      case 401:
        SHOWTOAST(
          'Authentication failed',
          message || error.response.data.message,
        );
        break;
      case 403:
        SHOWTOAST(
          'Authorization failed',
          message || error.response.data.message,
        );
        break;
      case 404:
        SHOWTOAST('Resource not found', message || error.response.data.message);
        // SHOWTOAST('Resource not found', message || error.response.data.message);
        break;
      case 409:
        SHOWTOAST('Duplicate record', message || error.response.data.message);
        break;
      case 500:
        SHOWTOAST(
          'Internal server error',
          'We are facing some technical issues please try after some time',
        );
        break;
      case 503:
        SHOWTOAST(
          'Service Temporarily Unavialable',
          'We are facing some technical issues please try after some time',
        );
        break;
      default:
        SHOWTOAST('unknown record', error.message);
    }
  } else if (error.message) SHOWTOAST('response error', error.message);
}
const ALL_ERROR_HANDLER = ErrorHandler.bind({}, [
  400,
  401,
  403,
  404,
  409,
  500,
  503,
]);
const ALL_SUCCESS_HANDLER = ErrorHandler.bind({}, [200, 201]);
const SPECIFIC_ERROR_HANDLER = ErrorHandler;
const SPECIFIC_SUCCESS_HANDLER = ErrorHandler;
export {
  ALL_ERROR_HANDLER,
  SPECIFIC_ERROR_HANDLER,
  ALL_SUCCESS_HANDLER,
  SPECIFIC_SUCCESS_HANDLER,
};
