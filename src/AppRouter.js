import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import FormularioSignUp from "./pages/SignUp";
import FormularioLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Autodiagnostico from "./pages/autodiagnostico";
import Notificaciones from "./pages/notificaciones";
import EditarPerfil from "./pages/editarPerfil";
import Mensajes from "./pages/mensajes";
import MisNegocios from "./pages/misNegocios";
import NuevoProyecto from "./pages/nuevoProyecto";
import Servicios from "./pages/servicios";
import Ajustes from "./pages/ajustes";
import CorreoContrasena from "./pages/correoContrasena";
import CambioContrasena from "./pages/cambioContrasena";

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
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/misnegocios" element={<MisNegocios />} />
        <Route path="/nuevoproyecto" element={<NuevoProyecto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/correoContrasena" element={<CorreoContrasena />} />
        <Route path="/cambioContrasena" element={<CambioContrasena />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
