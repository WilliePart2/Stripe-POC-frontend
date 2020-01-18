import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TextField = ({ onChange, value, label, placeholder, type = 'text' }) => {
  const onFieldChange = useCallback((inputEvent) => {
    onChange(inputEvent.target.value.trim());
  }, []);

  let content = (
    <input
      className="text-field__input"
      type={type}
      placeholder={placeholder}
      onChange={onFieldChange}
    />
  );

  if (label) {
    content = (
      <>
        <label className="text-field__label">
          {label}
        </label>
        {content}
      </>
    );
  }

  return (
    <div className="text-field">{content}</div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TextField;
