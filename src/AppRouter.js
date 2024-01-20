import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import FormularioSignUp from "./pages/SignUp";
import FormularioLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<FormularioSignUp/>} />
        <Route path="/ALogin" element={<FormularioLogin/>} />
        <Route path="/BMenu" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
