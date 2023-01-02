import React, { createContext, ReactNode, useState } from 'react';

type AuthProviderProps = {
    currentUser: boolean,
    loginUser: () => void
}

type childrenProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthProviderProps)

export const AuthProvider = ({ children }: childrenProps) => {

    const [currentUser, setCurrentUser] = useState<boolean>(false)

    const loginUser = () => {
        setCurrentUser(true)
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                loginUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}