import { useEffect } from 'react';

const useDropdownClose = (ref, callback, callbackVal = false) => {
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = e => {
    if (ref && ref.current && ref.current.contains(e.target)) {
      return 0;
    }
    callback(callbackVal);
    return 0;
  };
};

export default useDropdownClose;
