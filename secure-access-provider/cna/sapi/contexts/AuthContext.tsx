import { createContext, useContext, useState } from 'react';
import { AuthContextType, Props } from '../interfaces/index';

const defaultAuthContext: AuthContextType = {
    user: false,
    login: () => { console.log('defaultAuthContext login function') },
    logout: () => { console.log('defaultAuthContext logout function') }
};

const authContext = createContext<AuthContextType>(defaultAuthContext);

export function useAuthContext() {
    return useContext(authContext);
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    }

    const value: AuthContextType = { user, login, logout };

    return(
        <>
            <authContext.Provider value={value}>
                {children}
            </authContext.Provider>
        </>
    );
}