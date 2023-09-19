import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const loggedInChecker = () => {
        const loggedInStringifiedData = localStorage.getItem("ecom_credentials");
        if (loggedInStringifiedData) {
            const loggedInData = JSON.parse(loggedInStringifiedData);
            if (loggedInData?.email) {
                setUserLoggedIn(true);
            }
            else setUserLoggedIn(false);
        } else setUserLoggedIn(false);

    };

    const saveLoginCredentials = (res) => {
        const loginData = res?.data;
        const stringifiedLoginData = JSON.stringify(loginData);

        localStorage.setItem("ecom_credentials", stringifiedLoginData);
        setUserLoggedIn(true);
    };

    const logout = async () => {
        localStorage.removeItem("ecom_credentials");
        setUserLoggedIn(false);
    };



    const authInfo = {
        loggedInChecker,
        saveLoginCredentials,
        logout,
        userLoggedIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;