import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import FormularioSignUp from "./pages/SignUp";
import FormularioLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Autodiagnostico from "./pages/autodiagnostico";
import Notificaciones from "./pages/notificaciones";
import EditarPerfil from "./pages/editarPerfil";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<FormularioSignUp />} />
        <Route path="/Login" element={<FormularioLogin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/autodiagnostico" element={<Autodiagnostico />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
