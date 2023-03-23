import React from "react";
import { Button, TextField, Modal, Box } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";
import "./Signup.css"

interface SignupProps {
  open: boolean;
  handleClose: () => void;
}

const Signup: React.FC<SignupProps> = ({ open, handleClose }) => {
  const { setAlert, signup } = React.useContext(AuthContext);

  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const newEmailRef = React.useRef<HTMLInputElement>(null);
  const newPasswordRef = React.useRef<HTMLInputElement>(null);
  const newPasswordRefConfirm = React.useRef<HTMLInputElement>(null);

  const [pwdError, setPwdError] = React.useState<boolean>(false);

  const handleSignup = () => {
    if (
      firstNameRef.current!.value !== "" ||
      lastNameRef.current!.value !== "" ||
      newEmailRef.current!.value !== "" ||
      newPasswordRef.current!.value !== "" ||
      newPasswordRefConfirm.current!.value !== ""
    ) {
      if (
        newPasswordRef.current?.value !== newPasswordRefConfirm.current!.value
      ) {
        setPwdError(true);
        return setAlert("failed", "Your passwords do not match!");
      }
      setAlert("success", "Account created successfully!");
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modalProperties">
          <h2 id="parent-modal-title">Sign Up With Email</h2>
          <br />
          <p id="parent-modal-description">
            Create an account to access admin features to be fully prepared for
            the interview process in the ever changing tech world!
          </p>
          <br />
          <TextField
            className="modalPropertiesChildren"
            inputRef={firstNameRef}
            label="First Name"
            type={"text"}
          ></TextField>
          <br />
          <TextField
            className="modalPropertiesChildren"
            inputRef={lastNameRef}
            label="Last Name"
            type={"text"}
          ></TextField>
          <br />
          <TextField
            className="modalPropertiesChildren"
            inputRef={newEmailRef}
            label="Email"
            type={"email"}
          ></TextField>
          <br />
          <TextField
            className={
              !pwdError
                ? "modalPropertiesChildren"
                : "modalPropertiesChildren modalPwdError"
            }
            inputRef={newPasswordRef}
            label="Password"
            type={"password"}
          ></TextField>
          <br />
          <TextField
            className={
              !pwdError
                ? "modalPropertiesChildren"
                : "modalPropertiesChildren modalPwdError"
            }
            inputRef={newPasswordRefConfirm}
            label="Re-Confirm Password"
            type={"password"}
          ></TextField>
          <br />
          <div className="modalPropertiesBtns">
            <Button onClick={handleSignup} color="primary" variant="contained">
              Create Account
            </Button>
            <Button onClick={handleClose} color="error" variant="contained">
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Signup;
