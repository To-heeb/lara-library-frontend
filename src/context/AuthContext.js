import React, { createContext, useState } from 'react'


// create a useContext api for data carriage without passing props down manually
export const AuthContext = createContext({
    currentUser: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
});


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('BearerToken') || '');

    const setToken = (token) => {

        _setToken(token);

        if (token) {
            localStorage.setItem("BearerToken", token);
        } else {
            localStorage.removeItem("BearerToken");
        }
    }
    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser,
            token,
            setToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext