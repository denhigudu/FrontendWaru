import React from 'react';
import '../components/Rightsidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
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
      setError("somethings is wrong");
    }
  };

  const Proveedores = async (event) => {
    event.preventDefault();
    try {
      Navigate("/proveedores");
    } catch (error) {
      setError("somethings is wrong");
    }
  };

  const Ajustes = async (event) => {
    event.preventDefault();
    try {
      Navigate("/ajustes");
    } catch (error) {
      setError("somethings is wrong");
    }
  };

  const LogOut = async (event) => {
    event.preventDefault();
    try {
      Navigate("/");
    } catch (error) {
      setError("somethings is wrong");
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
            <button className="button" onClick={Ajustes}>
              <SettingsIcon className="settings-icon" />
            </button>
            <h4 className="ajustes">Ajustes</h4>
            <br></br>
            <br></br>
            <Button 
              variant="outlined"
              className="proveedores"
              endIcon={<ArrowForwardIosIcon className="provforward-arrow" />}
            >
              Proveedores
            </Button>
            <div>
            </div>
            <IconButton>
                <SettingsIcon className='settings-icon'/>
                <h4 className='ajustes'>Ajustes</h4>
            </IconButton>

            <IconButton>
                <LogoutIcon className='log-out' onClick={LogOut}/>
                <h4 className='cerrar-sesion'>Cerrar sesión</h4>
            </IconButton>
        
        </div> 
        </div>
      </div>
      {Error && <p>{Error}</p>}
    </div>
  );
};

export default Rightsidebar;
