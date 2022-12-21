import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Timeline from "./pages/User/Timeline";
import Profile from "./pages/User/Profile"
import Navbar from "./components/Navbar";
import PrivateRoutes from "./utils/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<Profile />} >
              <Route path="timeline" element={<Timeline />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
