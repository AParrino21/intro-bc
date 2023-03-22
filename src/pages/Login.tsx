import React from "react";
import { Button, TextField, Container } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup";

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const Login = () => {
  const styles: StyleSheet = {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
  };
  const navigate = useNavigate();
  const { login, currentUser } = React.useContext(AuthContext);

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [openSignup, setOpenSignup] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser]);

  const handleLogin = () => {
    login(emailRef.current!.value, passwordRef.current!.value);
  };

  const handleClose = () => {
    setOpenSignup(false);
  };

  const handleSignup = () => {};

  return (
    <div>
      <Container style={styles.root}>
        <h1>Login</h1>
        <br />
        <TextField inputRef={emailRef} label="Email"></TextField>
        <br />
        <TextField
          inputRef={passwordRef}
          label="Password"
          type={"password"}
        ></TextField>
        <br />
        <div style={styles.buttonContainer}>
          <Button onClick={handleLogin} color="primary" variant="contained">
            Login
          </Button>
          <p>or</p>
          <Button
            onClick={() => setOpenSignup(!openSignup)}
            color="success"
            variant="contained"
          >
            Signup
          </Button>
        </div>
        <div>
          <Signup open={openSignup} handleClose={handleClose} />
        </div>
      </Container>
    </div>
  );
};

export default Login;
