import React from "react";
import "../components/MidBottomcont.css";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WorkIcon from "@mui/icons-material/Work";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MidBottomcont = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  const serviceHiring = ()=>{
    try{
      Navigate("/ServiceHiring")
    } catch (error){
      setError("somethins is wrong");
    }
  }
  return (
    <div>
      <div className="midbotcont">
        <div>
          <h1 className="mis-pedidos"> Mis Pedidos</h1>
          <WorkIcon className="servicon" />
          <div className="lineaserv"></div>
          <Button
            variant="outlined"
            className="servicio"
            endIcon={<ArrowForwardIosIcon className="serv-solicitados-arrow" />}
          >
            Servicios Solicitados
          </Button>
          <br />
          <br />
          <Button
            variant="outlined"
            className="servicio"
            endIcon={<ArrowForwardIosIcon className="serv-activos-arrow" />}
          >
            Servicios Activos
          </Button>
          <br></br> <br></br>
          <Button
            variant="outlined"
            className="servicio"
            endIcon={<ArrowForwardIosIcon className="serv-archivados-arrow" />}
          >
            Servicios Archivados
          </Button>
          <br></br> <br></br>
          <Button
            onClick={serviceHiring}
            variant="contained"
            style={{
              backgroundColor: "#ff5c04",
              width: "550px",
              marginRight: "10px",
              marginLeft: "100px",
              fontFamily: "Avenir, sans-serif",
              textTransform: "capitalize",
              fontSize: "16px",
              top: "82%",
              textAlign: "end",
              position: "absolute",
              borderRadius: "15px",
            }}
            startIcon={
              <HandshakeIcon
                style={{
                  position: "absolute",
                  top: "20%",
                  marginLeft: "-15px",
                }}
              />
            }
            // endIcon={<ArrowForwardIosIcon style={{
            //   position:'absolute', top:'20%',
            //   marginLeft: '10%' }} />}
          >
            Contratar nuevo servicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MidBottomcont;
