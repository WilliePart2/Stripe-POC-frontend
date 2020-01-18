import React, {useContext, useEffect} from 'react';
import { AccountContext } from '../../../Context';
import RegisterAccount from "../RegisterAccount";
import Dashboard from "../Dashboard";
import PaymentCard from "../PaymentCard";

const UserWorkspace = () => {
    const {
        registerAccount,
        openDashboard,
        checkAccountAuthorisation,
        isAccountAuthorised
    } = useContext(AccountContext.context);

    useEffect(() => {
        checkAccountAuthorisation();
    }, []);

    return isAccountAuthorised
        ? (
            <>
                <PaymentCard/>
                <Dashboard openDashboard={openDashboard} />
            </>
        ) : <RegisterAccount registerAccount={registerAccount} />;
};

UserWorkspace.propTypes = {

};

export default UserWorkspace;
