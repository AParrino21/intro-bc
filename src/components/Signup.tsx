import React from "react";
import { Button, TextField, Modal, Box } from "@mui/material";

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

interface SignupProps {
  open: boolean;
  handleClose: () => void;
}

const styles: StyleSheet = {
  modalProperties: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "24",
    padding: "40px",
    borderRadius: "10px",
  },
};

const Signup: React.FC<SignupProps> = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box style={styles.modalProperties}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default Signup;
