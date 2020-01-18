import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Text = ({ children }) => {
  return (
      <div className="text">{children}</div>
  );
};

Text.propTypes = {

};

export default Text;
