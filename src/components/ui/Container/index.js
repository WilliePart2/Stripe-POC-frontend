import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const Container = ({
  children,
  column,
  center,
  style,
}) => {
  const classNames = useMemo(() => cx('container', {
    'container--center': center,
    'container--column': column,
  }), [column]);

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  style: PropTypes.object,
  column: PropTypes.bool,
  center: PropTypes.bool,
};

export default Container;
