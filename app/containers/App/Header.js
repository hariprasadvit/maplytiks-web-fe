import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Header = ({ location }) => <div>Header at {location.pathname} path</div>;

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
