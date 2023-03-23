import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

import NaviBar from "./components/Navibar/NaviBar";
import Alert from "./components/Alert/Alert";

const App = () => {
  const { openAlert, setOpenAlert, alertMessage, alertStatus } = React.useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
      <Alert
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        alertMessage={alertMessage}
        alertStatus={alertStatus}
      />
    </div>
  );
};

export default App;
