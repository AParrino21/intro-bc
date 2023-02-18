import { Button, TextField, Container } from '@mui/material'
import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const Login = () => {

  const styles: StyleSheet = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    }
  }
  const { login } = useContext(AuthContext)

  const handleLogin = () => {

  }

  return (
    <div>
      <Container style={styles.root}>
        <h1>Login</h1>
        <br />
        <TextField label='Email'></TextField>
        <br />
        <TextField label='Password' type={'password'}></TextField>
        <br />
        <div style={styles.buttonContainer}>
          <Button onClick={handleLogin} color="primary" variant='contained'>Login</Button>
          <p>or</p>
          <Button onClick={handleLogin} color="success" variant='contained'>Signup</Button>
        </div>
      </Container>
    </div>
  )
}

export default Login