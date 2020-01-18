import React, {useCallback, useMemo, useState} from 'react';
import axios from 'axios';
import {serverApi} from "../constants";
import {logger} from "../utils";

const accountContextFactory = (
    isAccountAuthorised = false,
    registerAccount = () => {},
    checkAccountAuthorisation = () => {},
    openDashboard = () => {},
) => ({
    isAccountAuthorised,
    registerAccount,
    checkAccountAuthorisation,
    openDashboard,
});

const accountContext = React.createContext(accountContextFactory());

export const getUserId = () => 1;
const _ = logger('Account state');

const AccountContext = ({ children }) => {
    const [isAccountAuthorised, setIsAccountAuthorised] = useState(false);

    _.log({ isAccountAuthorised });

    const registerAccount = useCallback(() => {
        window.location.assign(serverApi.auth(getUserId()));
    }, []);

    const openDashboard = useCallback(async () => {
        try {
            const { data } = await axios.get(serverApi.dashboard(getUserId()));
            window.location.assign(data.url);
        } catch (e) {
            console.error(e);
            alert('Getting dashboard URL error!');
        }
    }, []);

    const checkAccountAuthorisation = useCallback(async () => {
        try {
            const { data } = await axios.get(serverApi.login(getUserId()));
            setIsAccountAuthorised(data && data.login);
        } catch (e) {
            console.error(e);
            alert('Getting login state error!')
        }
    }, [setIsAccountAuthorised]);

    const contextValue = useMemo(() => accountContextFactory(
        isAccountAuthorised,
        registerAccount,
        checkAccountAuthorisation,
        openDashboard,
    ), [
        isAccountAuthorised,
        registerAccount,
        openDashboard,
        checkAccountAuthorisation,
    ]);

    return (
        <accountContext.Provider value={contextValue}>
            {children}
        </accountContext.Provider>
    );
};

AccountContext.context = accountContext;

export default AccountContext;