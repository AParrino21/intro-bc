import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";

const UserProfile = () => {
  const { currentUser } = React.useContext(AuthContext);

  console.log(currentUser);
  console.log(auth.currentUser && auth.currentUser)

  if (!currentUser) return <Navigate to="/login" replace />;
  return (
    <div>
      <h1>UserProfile for {auth.currentUser?.email}</h1>
    </div>
  );
};

export default UserProfile;
