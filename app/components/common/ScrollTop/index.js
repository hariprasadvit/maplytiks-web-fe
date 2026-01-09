import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * This Is react component to reset scroll position when path changes
 * @param {Node} children
 * @param {Object} location
 * @param {string} pathname
 * @returns children | null
 */
const ScrollTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);
  return children || null;
};

export default withRouter(ScrollTop);
