import React from "react";
import {
    Route,
    Routes,
} from "react-router-dom";

import Login from './pages/Login'
//import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Login />} />
                </Routes>
            </div>
        </>
  );
}

export default App;
