import { toast } from 'react-toastify';
import { DEFAULT_AUTO_CLOSE_DELAY } from '.';

/* eslint-disable */

/**
 * this methods show/udpates toast
 * @param {Object} TOASTS current active toasts key object
 * @param {string} key key for current toast
 * @param {String} message msg should appear in toast
 * @param {String} type type for toast error || success || info; default = error
 * @param {Number} extraDelay (optional) if we want to add more delay ot toast default = 0
 * @param {Function} onClose (optional) callback
 */
export const showToast = (
  TOASTS,
  key,
  message,
  type = 'error',
  extraDelay = 0,
  onClose,
) => {
  const toastId = TOASTS[key];
  if (toast.isActive(toastId)) {
    toast.update(toastId, {
      render: message,
      autoClose: DEFAULT_AUTO_CLOSE_DELAY + extraDelay,
      type,
      onClose,
    });
  } else {
    TOASTS[key] = toast(message, {
      autoClose: DEFAULT_AUTO_CLOSE_DELAY + extraDelay,
      toastId: key,
      type,
      onClose,
    });
  }
};
