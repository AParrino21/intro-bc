import { createContext, ReactNode, useState } from 'react';
import { auth } from "../firebase"

type AuthProviderProps = {
    currentUser: boolean,
    signup: (email: string, password: string) => void,
    login: (email: string, password: string) => void,
    logout: () => void
}

type childrenProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthProviderProps)

export const AuthProvider = ({ children }: childrenProps) => {

    const [currentUser, setCurrentUser] = useState<boolean>(false)

    function signup(email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                signup,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}