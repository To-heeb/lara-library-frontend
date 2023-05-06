import React, { createContext, useState, useContext } from 'react'


// create a useContext api for data carriage without passing props down manually
export const AuthContext = createContext({
    currentUser: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
});


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userRole, setUserRole] = useState("admin");
    const [token, _setToken] = useState(localStorage.getItem('BearerToken') || '');

    const setToken = (token) => {

        _setToken(token);

        if (token) {
            localStorage.setItem("BearerToken", token);
        } else {
            localStorage.removeItem("BearerToken");
        }
    }

    const value = {
        currentUser,
        setCurrentUser,
        token,
        setToken,
        userRole,
        setUserRole,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthContext

export const removeToken = () => localStorage.removeItem("BearerToken")
export const getToken = () => localStorage.getItem("BearerToken")
export const useAuthContext = () => useContext(AuthContext)