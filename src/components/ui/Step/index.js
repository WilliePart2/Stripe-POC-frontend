import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const Step = ({ orderNumber = 1, completed, style, children }) => {
  const orderNumberClassnames = cx('step__order-number', {
    'step__order-number--completed': completed,
  });

  return (
    <div className="step" style={style}>
      <div className={orderNumberClassnames}>{orderNumber}</div>
      <div className="step__content-container">
        {children}
      </div>
    </div>
  );
};

Step.propTypes = {
  orderNumber: PropTypes.number,
  completed: PropTypes.bool,
  style: PropTypes.object,
};

export default Step;
