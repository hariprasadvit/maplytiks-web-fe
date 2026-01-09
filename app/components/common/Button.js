/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const BUTTON_TYPE_CONFIG = {
  primary: 'btn btn__primary',
  primaryLg: 'btn btn__primary btn__primary__lg',
  search: 'inline-button',
  secondary: 'btn btn__default',
  primaryRipple: 'btn btn__primary ripple',
  default: '',
};

function Button({ type, label, onClickHandler, customStyle }) {
  const onClickEvent = e => {
    e.preventDefault();
    onClickHandler();
  };
  return (
    <button
      style={customStyle}
      className={BUTTON_TYPE_CONFIG[type]}
      onClick={onClickEvent}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: 'default',
  onClickHandler: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  customStyle: PropTypes.object,
  onClickHandler: PropTypes.func,
};

export default Button;
