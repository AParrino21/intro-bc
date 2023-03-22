import React from "react";
import { auth } from "../firebase";

type AuthProviderProps = {
  currentUser: boolean;
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type childrenProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = React.useState<any | null>();

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email: string, password: string) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  function logout() {
    return auth.signOut();
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user?.updateProfile({
        displayName: "ant"
      })
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
