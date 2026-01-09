/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { VIEW_CATEGORIES } from 'utils/constants';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import useDropdownClose from 'components/common/hooks/useDropdownClose';

const DROPDOWN_CONFIG = {
  viewSelector: {
    containerClass: 'dashboardMatch',
    listContainerClass: '',
  },

  sort: {
    containerClass: 'matchsortBy__text',
    listContainerClass: 'matchsortBy__header',
  },

  profile: {
    containerClass: 'profileBlock__dropdown',
    listContainerClass: '',
  },
};

const MultiDropdown = ({
  callback,
  activeItem,
  type,
  dropdownList,
  title,
  selectedItem,
}) => {
  const [isActive, setIsActive] = useState(
    !!(screen.width < 768 && type === 'viewSelector'),
  );

  const dropDownContainer = useRef();

  useDropdownClose(dropDownContainer, setIsActive);

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    if (dropDownContainer.current.contains(e.target)) {
      return 0;
    }
    setIsActive(false);
    return 0;
  };

  return (
    <div
      ref={dropDownContainer}
      className={`${isActive ? 'show' : ''} ${DROPDOWN_CONFIG[type] &&
        DROPDOWN_CONFIG[type].containerClass}`}
      onClick={() => {
        if (screen.width < 768 && type === 'viewSelector') {
          setIsActive(true);
        } else {
          setIsActive(!isActive);
        }
      }}
    >
      {type !== 'sort' && (
        <>
          {activeItem}
          <span>
            <Icon path={mdiChevronDown} size={0.7} />
          </span>
        </>
      )}
      {(type === 'sort' || type === 'profile') && (
        <ul
          className={
            DROPDOWN_CONFIG[type] && DROPDOWN_CONFIG[type].listContainerClass
          }
        >
          <li>
            <span>{title} :</span>
            <h6>{selectedItem}</h6>
            <Icon path={mdiChevronDown} size={0.7} />
            {isActive && (
              <ul>
                {dropdownList.map(d => (
                  <li
                    key={`DROPDOWN_${d}`}
                    onClick={() => callback(d)}
                    className={selectedItem === d ? 'active' : ''}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}

      {isActive && type === 'viewSelector' && (
        <ul>
          {dropdownList.map((d, i) => (
            <li
              key={`VIEW_DROPDOWN_${d}`}
              className={selectedItem === d ? 'active' : ''}
              onClick={() => callback(d, i)}
            >
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MultiDropdown.propTypes = {
  callback: PropTypes.func,
  activeItem: PropTypes.string,
  type: PropTypes.string,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dropdownList: PropTypes.array,
  title: PropTypes.string,
};

export default MultiDropdown;
