import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const NaviBar = () => {
  const { logout, currentUser } = React.useContext(AuthContext);

  const styles: StyleSheet = {
    root: {
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
      padding: "30px",
    },
    linksContainer: {
      width: "auto",
    },
    links: {
      textDecoration: "none",
    },
  };
  return (
    <div>
      <List style={styles.root}>
        <ListItem style={styles.linksContainer}>
          <Link style={styles.links} to={"/"}>
            Home
          </Link>
        </ListItem>
        <ListItem style={styles.linksContainer}>
          <Link style={styles.links} to={"/profile"}>
            Profile
          </Link>
        </ListItem>
        {!currentUser ? (
          <ListItem style={styles.linksContainer}>
            <Link style={styles.links} to={"/login"}>
              Login
            </Link>
          </ListItem>
        ) : (
          <ListItem style={styles.linksContainer}>
            <Link onClick={logout} style={styles.links} to={"/login"}>
              Logout
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default NaviBar;
