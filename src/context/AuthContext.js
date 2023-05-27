import React, { useEffect, useState, createContext } from 'react';
import { LSGet } from '../services/localStorage';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const myUser = LSGet('user');
        setCurrentUser(myUser);
        return () => { };
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
    )
}
