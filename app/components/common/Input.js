/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiCalendar } from '@mdi/js';
// import useDropdownClose from 'components/common/hooks/useDropdownClose';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

const INPUT_TYPE_CONFIG = {
  default: '',
  form: 'form-control',
  search: 'input-field',
  // selectBox: 'selectBox',
};

function Input({
  inputKey,
  type,
  formType,
  placeholder,
  inputClass,
  id,
  isError,
  errorMsg,
  inputLable,
  value,
  checkboxLableId,
  onChangeHandlerCallback,
  checked,
  checkBoxKey,
  name,
  blur,
  labelImg,
  containerClass,
  selectBoxOptions,
  selectboxClickHandler,
  selectDropdownActive,
}) {
  const selectDropdown = useRef();

  // useDropdownClose(selectDropdown, selectboxClickHandler, {});

  const onChnageHandler = (e, val) => {
    if (type === 'checkbox') {
      //console.log(e.target.checked);
      onChangeHandlerCallback(e.target.checked, checkBoxKey, formType);
    }
    if (type === 'select' || type === 'date') {
      onChangeHandlerCallback(val);
    } else {
      onChangeHandlerCallback(e.target.value);
    }
  };
  const handleOnBlur = e => {
    if (typeof blur === 'function') {
      blur(e.target.value, name);
    }
  };

  return (
    <>
      {type !== 'textarea' && type !== 'select' && type !== 'date' && (
        <>
          {type !== 'checkbox' && inputLable && <label>{inputLable}</label>}
          <input
            type={type}
            className={`${INPUT_TYPE_CONFIG[inputClass]} ${
              isError ? 'onError' : ''
            }`}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChnageHandler}
            checked={checked}
            onBlur={handleOnBlur}
          />
          {isError && containerClass === 'input-block' && (
            <span id="alertMessage"> {errorMsg} </span>
          )}
        </>
      )}

      {type === 'checkbox' && (
        <label htmlFor={id}>
          {labelImg && (
            <div className="overview-tray-item-img">
              <img src={labelImg} alt="" />
            </div>
          )}
          <span id={checkboxLableId}> {inputLable} </span>
        </label>
      )}

      {type === 'select' && (
        <div
          ref={selectDropdown}
          className="selectBox"
          onClick={() => selectboxClickHandler({ [inputKey]: true })}
        >
          <input
            type={type}
            className={`${INPUT_TYPE_CONFIG[inputClass]} ${
              isError ? 'onError' : ''
            }`}
            placeholder={placeholder}
            id={id}
            value={value}
            onBlur={handleOnBlur}
            disabled
          />
          <Icon className="selectBox__icon" path={mdiChevronDown} size={0.8} />
          {selectDropdownActive && (
            <div className="selectBox__options">
              <ul>
                {selectBoxOptions.map(d => (
                  <li onClick={e => onChnageHandler(e, d)} key={d}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {type === 'date' && (
        <div
          className="dateInput"
          onClick={() => selectboxClickHandler({ [inputKey]: true })}
        >
          <input
            type="text"
            className={`${INPUT_TYPE_CONFIG[inputClass]} ${
              isError ? 'onError' : ''
            }`}
            placeholder={placeholder}
            id={id}
            value={value ? moment(value).format('DD MMM YYYY') : ''}
            onBlur={handleOnBlur}
            disabled
          />
          <Icon className="dateInput__icon" path={mdiCalendar} size={0.8} />
          {selectDropdownActive && (
            <DateRangePicker
              onSelect={da => {
                onChangeHandlerCallback(da);
                selectboxClickHandler({});
              }}
              value={value}
              numberOfCalendars={1}
              selectionType="single"
            />
          )}
        </div>
      )}

      {type === 'textarea' && (
        <>
          {type !== 'checkbox' && inputLable && <label>{inputLable}</label>}
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChnageHandler}
          />
        </>
      )}
      {isError && containerClass !== 'input-block' && (
        <span className="alertMessage">{errorMsg} </span>
      )}
    </>
  );
}

Input.defaultProps = {
  inputClass: 'default',
};

Input.propTypes = {
  inputKey: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  inputClass: PropTypes.string,
  errorMsg: PropTypes.string,
  inputLable: PropTypes.string,
  value: PropTypes.string,
  checkboxLableId: PropTypes.string,
  formType: PropTypes.string,
  isError: PropTypes.bool,
  checked: PropTypes.bool,
  selectDropdownActive: PropTypes.bool,
  checkBoxKey: PropTypes.string,
  name: PropTypes.string,
  labelImg: PropTypes.string,
  containerClass: PropTypes.string,
  selectBoxOptions: PropTypes.array,
  blur: PropTypes.func,
  onChangeHandlerCallback: PropTypes.func,
  selectboxClickHandler: PropTypes.func,
};

export default Input;
