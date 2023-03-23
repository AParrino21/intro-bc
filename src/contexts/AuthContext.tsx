import React from "react";
import { auth } from "../firebase";

type AuthProviderProps = {
  currentUser: boolean;
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  alertMessage: string;
  alertStatus: string;
  setAlert: ( aStatus: string, aMessage: string) => void;
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
};

type childrenProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = React.useState<any | null>();
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  function setAlert( aStatus: string, aMessage: string) {
    setOpenAlert(true)
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

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
        displayName: "ant",
      });
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
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
