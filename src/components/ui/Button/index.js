import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Button = ({ text, onClick, type = 'button' }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;
