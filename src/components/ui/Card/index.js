import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

Card.propTypes = {

};

export default Card;
