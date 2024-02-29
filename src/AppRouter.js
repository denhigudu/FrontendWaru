import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import FormularioSignUp from "./pages/SignUp";
import FormularioLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Autodiagnostic from "./pages/autodiagnostic";
import Notification from "./pages/notification";
import EditProfile from "./pages/editProfile";
import Messages from "./pages/messages";
import MyBusiness from "./pages/myBusiness";
import NewBusiness from "./pages/newBusiness";
import Services from "./pages/services";
import Configurations from "./pages/Configurations";
import MailPassword from "./pages/mailPassword";
import NewPassword from "./pages/newPassword";
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
        <Route path="/autodiagnostic" element={<Autodiagnostic />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/myBusiness" element={<MyBusiness />} />
        <Route path="/newBusiness" element={<NewBusiness />} />
        <Route path="/services" element={<Services />} />
        <Route path="/configurations" element={<Configurations />} />
        <Route path="/mailPassword" element={<MailPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/ServiceHiring" element={<ServiceHiring />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
