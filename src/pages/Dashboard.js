import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";
import HeaderDash from "../layouts/HeaderDash";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";
import Middletopcont from "../components/Middletopcont";
import MidBottomcont from "../components/MidBottomcont";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const Navigate = useNavigate();
  const [error, setError] = useState("");

  const NotificationsPage = () => {
    try {
      Navigate("/notificaciones");
    } catch (error) {
      setError("something is wrong");
    }
  };
  const EditProfilePage = () => {
    try {
      Navigate("/editarPerfil");
    } catch (error) {
      setError("something is wrong");
    }
  };
  const MessagesPage = () => {
    try {
      Navigate("/notificaciones");
    } catch (error) {
      setError("something is wrong");
    }
  };
  return (
    // contenedor1
    <div className="*">
      <HeaderDash />
      {/* contenedor2 */}
      <div className="*">
        <Leftsidebar />
        {/* contenedor3 */}
        <div className="*">
          <Middletopcont />
          <MidBottomcont />
        </div>
        <Rightsidebar />
      </div>
      {/* move buttons to leftsidebar in case that the buttons are useless, erased */}
      <div className="perfil">
        <form onClick={NotificationsPage}>
          <button className="button">Ir a notificaciones</button>
        </form>
        <form onClick={EditProfilePage}>
          <button className="button">Ir a editor de perfil</button>
        </form>
        <form onClick={MessagesPage}>
          <button className="button">Ver mensajes</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Dashboard;
