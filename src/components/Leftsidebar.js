import React from "react";
import "./Leftsidebar.css";
import AddBusinessButton from "./AddBusiness";
//import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from "@mui/icons-material/Circle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StoreIcon from "@mui/icons-material/Store";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import AddBusinessIcon from '@mui/icons-material/AddBusiness';
//import Button from '@mui/material/Button';
import ariss from "../assets/ariss.jpeg";
import candy from "../assets/candy.png";
import persona from "../assets/persona.jpeg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Leftsidebar = () => {
  const Navigate = useNavigate();
  const [Error, setError] = useState("");
  // functions
  const EditProfile = async (event) => {
    event.preventDefault();
    try {
      Navigate("/EditProfile");
    } catch (error) {
      setError("something is wrong");
    }
  };

  const Notification = async (event) => {
    event.preventDefault();
    try {
      Navigate("/Notification");
    } catch (error) {
      setError("something is wrong");
    }
  };

  const Messages = async (event) => {
    event.preventDefault();
    try {
      Navigate("/Messages");
    } catch (error) {
      setError("something is wrong");
    }
  };

  const newBusiness = async (event) => {
    event.preventDefault();
    try {
      Navigate("/NewBusiness");
    } catch (error) {
      setError("something is wrong");
    }
  };

  return (
    <div>
      {/* cuadro de borde naranja */}
      <div className="bordesbar">
        {/* imagen de perfil */}
        <div>
          <br />
          <img className="foto-de-perfil" src={persona} alt="Foto de perfil" />
        </div>
        {/* figuras de perfil, mi negocio y titulos */}
        {/* <button onClick={EditarPerfil} className="button">
          <AccountCircleOutlinedIcon className="profileicon" />
        </button> */}
        <br />
        <StoreIcon className="storeicon" />
        <br />
        <h3 className="mis-negocios">Mis Negocios</h3>
        <br />
        <h2 className="username">Alejandra Vargas</h2>
        <br />
        {/* botones azules de notificaciones, mensajes, noticias */}
        <div className="icon-container">
          <div className="noticon-container">
            {" "}
            <button onClick={Notification} className="button">
              <CircleNotificationsIcon className="noticon" />
            </button>
          </div>
          <div className="circleicon-container">
            <button className="button" onClick={EditProfile}>
              <CircleIcon className="circleicon" />
              <EditIcon className="editicon" />
            </button>
          </div>
          <div className="circleicon-container">
            <button className="button" onClick={Messages}>
              <CircleIcon className="circleicon" />
              <ChatBubbleIcon className="chaticon" />
            </button>
          </div>
        </div>
        {/* linea naranja de división de logos de empresas */}
        <div className="linea"></div>
        {/* logos de empresas */}
        <div>
          <img
            src={ariss}
            alt="ejnegocio1"
            style={{
              width: "150px",
              height: "130px",
              position: "absolute",
              top: "50%",
              right: "25%",
            }}
          />
          <ArrowForwardIosIcon
            style={{
              position: "absolute",
              right: "10%",
              top: "58%",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <div>
          <img
            src={candy}
            alt="ejnegocio1"
            style={{
              width: "150px",
              height: "130px",
              position: "absolute",
              top: "70%",
              right: "25%",
            }}
          />
          <ArrowForwardIosIcon
            style={{
              position: "absolute",
              right: "10%",
              top: "80%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        <button className="button" onClick={newBusiness}>
          <AddBusinessButton />
        </button>
      </div>
      {Error && <p>{Error}</p>}
    </div>
  );
};

export default Leftsidebar;
