import React from "react";
import "../components/Rightsidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import { FormatAlignCenter } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Rightsidebar = () => {
  const Navigate = useNavigate();
  const [Error, setError] = useState("");

  const ContratarServ = async (event) => {
    event.preventDefault();
    try {
      Navigate("/servicios");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const Proveedores = async (event) => {
    event.preventDefault();
    try {
      Navigate("/proveedores");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const ajustes = async (event) => {
    event.preventDefault();
    try {
      Navigate("/ajustes");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const logOut = async (event) => {
    event.preventDefault();
    try {
      Navigate("/");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  return (
    <div>
      <div className="right-borde-bar">
        <div>
          <div
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="menu">Menú</h3>
          </div>
          {/* <Button 
              variant="contained" 
              style={{ backgroundColor: '#ff5c04', width: '180px', marginRight: '10px', marginLeft: '10px' }}
              endIcon={<ArrowForwardIosIcon style={{ marginLeft: '55px' }} />}>
                Servicios
            </Button> */}

          <Button
            variant="outlined"
            className="servicios"
            endIcon={<ArrowForwardIosIcon className="serforward-arrow" />}
            onClick={ContratarServ}
          >
            Servicios
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            className="proveedores"
            endIcon={<ArrowForwardIosIcon className="provforward-arrow" />}
            onClick={Proveedores}
          >
            Proveedores
          </Button>
          <div>
            <button className="button" onClick={ajustes}>
              <SettingsIcon className="settings-icon" />
            </button>
            <h4 className="ajustes">Ajustes</h4>

            <button className="button" onClick={logOut}>
              <LogoutIcon className="log-out" />
            </button>
            <h4 className="cerrar-sesion">Cerrar sesión</h4>
          </div>
        </div>
      </div>
      {Error && <p>{Error}</p>}
    </div>
  );
};

export default Rightsidebar;
