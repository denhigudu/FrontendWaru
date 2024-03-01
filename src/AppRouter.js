import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import FormularioSignUp from "./pages/SignUp";
import FormularioLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Autodiagnostic from "./pages/Autodiagnostic";
import Notification from "./pages/Notification";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";
import MyBusiness from "./pages/MyBusiness";
import NewBusiness from "./pages/NewBusiness";
import Services from "./pages/services";
import Configurations from "./pages/Configurations";
import MailPassword from "./pages/MailPassword";
import NewPassword from "./pages/NewPassword";
import Suppliers from "./pages/suppliers";
import ServiceHiring from "./pages/ServiceHiring";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<FormularioSignUp />} />
        <Route path="/Login" element={<FormularioLogin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Autodiagnostic" element={<Autodiagnostic />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/MyBusiness" element={<MyBusiness />} />
        <Route path="/NewBusiness" element={<NewBusiness />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Configurations" element={<Configurations />} />
        <Route path="/MailPassword" element={<MailPassword />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Suppliers" element={<Suppliers />} />
        <Route path="/ServiceHiring" element={<ServiceHiring />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
