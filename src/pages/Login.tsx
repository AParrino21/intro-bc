import React from "react";
import { Button, TextField, Container } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup/Signup";

import "./styles/Login.css";

const Login = () => {
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

  return (
    <div>
      <Container className="login-container">
        <h1 className="loginPropeties">Login</h1>
        <br />
        <TextField
          className="loginPropeties"
          inputRef={emailRef}
          label="Email"
        ></TextField>
        <br />
        <TextField
          className="loginPropeties"
          inputRef={passwordRef}
          label="Password"
          type={"password"}
        ></TextField>
        <br />
        <div className="buttonContainer">
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
