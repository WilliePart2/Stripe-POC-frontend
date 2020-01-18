import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../ui/Button";

const RegisterAccount = ({ registerAccount }) => <Button text="Register account" onClick={registerAccount} />;

RegisterAccount.propTypes = {
    registerAccount: PropTypes.func.isRequired,
};

export default RegisterAccount;