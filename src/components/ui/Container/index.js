import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

Container.propTypes = {

};

export default Container;
