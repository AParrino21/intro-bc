import React from "react"
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const UserProfile = () => {
  const { currentUser } = React.useContext(AuthContext)

  console.log(currentUser)
  
  if (!currentUser) return <Navigate to='/login' replace />
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile