import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

const Message = ({ type, children }) => {
  const classNames = cx('message', {
    'message--success': type === SUCCESS,
    'message--error': type === ERROR,
  });

  return (
      <div className={classNames}>
        {children}
      </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf([
    SUCCESS,
    ERROR,
  ]),
};

Message.SUCCESS = SUCCESS;
Message.ERROR = ERROR;

export default Message;
