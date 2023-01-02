import { Button } from '@mui/material'
import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { loginUser } = useContext(AuthContext)

  return (
    <div>
      <Button onClick={loginUser} color="success" variant='contained'>Login</Button>
    </div>
  )
}

export default Login