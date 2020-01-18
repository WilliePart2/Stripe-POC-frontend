import React from 'react';
import PropTypes from 'prop-types';
import * as ui from '../../ui';

const Dashboard = ({ openDashboard }) => {
    return (
        <ui.Button onClick={openDashboard} text="Open dashboard" />
    );
};

Dashboard.propTypes = {
    openDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
