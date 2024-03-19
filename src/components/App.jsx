import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing components
import Home from "./Home";
import LoginFormPage from "./LoginFormPage";
import RegisterFormPage from "./RegisterFormPage";
import Keeper from "./Keeper";

function App() {
  return (
    // Main container div for the entire application
    <div style={{ height: "100%", width: "100%" }}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="/Keeper" element={<Keeper />} />
      </Routes>
    </div>
  );
}

export default App;
