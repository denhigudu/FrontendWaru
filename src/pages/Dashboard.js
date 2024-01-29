import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css"
import HeaderDash from '../layouts/HeaderDash';
import Leftsidebar from '../components/Leftsidebar';
import Rightsidebar from '../components/Rightsidebar';
import Footer from "../layouts/Footer";
import Middletopcont from "../components/Middletopcont";
import MidBottomcont from "../components/MidBottomcont";


function Dashboard() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const Notificaciones = async (event) => {
    event.preventDefault();
    try {
      navigate("/notificaciones");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const EditarPerfil = async (event) => {
    event.preventDefault();
    try {
      navigate("/editarPerfil");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const mensajes = async (event) => {
    event.preventDefault();
    try {
      navigate("/mensajes");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const misNegocios = async (event) => {
    event.preventDefault();
    try {
      navigate("/misnegocios");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const Autodiagnostico = async (event) => {
    event.preventDefault();
    try {
      navigate("/autodiagnostico");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const nuevoNegocio = async (event) => {
    event.preventDefault();
    try {
      navigate("/nuevoproyecto");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const contratarServ = async (event) => {
    event.preventDefault();
    try {
      navigate("/servicios");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const ajustes = async (event) => {
    event.preventDefault();
    try {
      navigate("/ajustes");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const logOut = async (event) => {
    event.preventDefault();
    try {
      navigate("/");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  return (
    <div>
    <div>
      <HeaderDash/>
      <Leftsidebar/>
      <Rightsidebar/>
      <Middletopcont/>
      <MidBottomcont/>
      
    </div>
    
      <div className="perfil">
        <form onClick={Notificaciones}>
          <button className="button">Ir a notificaciones</button>
        </form>
        <form onClick={EditarPerfil}>
          <button className="button">Ir a editor de perfil</button>
        </form>
        <form onClick={mensajes}>
          <button className="button">Ver mensajes</button>
        </form>
      </div>
      <form onClick={misNegocios}>
        <button>Agregar otro negocio</button>
      </form>
      <form onClick={Autodiagnostico}>
        <button>Ir a Autodiagnostico</button>
      </form>
      <form onClick={nuevoNegocio}>
        <button>Nuevo proyecto</button>
      </form>
      <form onClick={contratarServ}>
        <button>Contratar servicios</button>
      </form>
      <form onClick={ajustes}>
        <button>Ajustes</button>
      </form>
      <form onClick={logOut}>
        <button>Cerrar sesión</button>
      </form>
      {error && <p>{error}</p>}
      
    </div>
  );
}

export default Dashboard;
