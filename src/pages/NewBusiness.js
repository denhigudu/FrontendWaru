import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../layouts/Header";
import "../css/newBusiness-style.css";
import OutlinedButton from "../components/buttons/OutlinedButton";
import ContainedButton from "../components/buttons/ContainedButton";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//RadioButtons
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { blue } from "@mui/material/colors";

function NewBusiness() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  return (
    <div className="general">
      <Header />
      <main>
        <section className="formulario">
          <form>
            <div>
              <label className="text" for="businessName">
                Nombre del negocio:
              </label>
              <br />
              <input
                className="input"
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Nombre del negocio"
              />
              <br /> <br />
              <label className="text" for="businessDescription">
                Descripción del negocio:
              </label>
              <br /> 
              <textarea
                className="input"
                id="businessDescription"
                name="businessDescription"
                placeholder="Describe tu negocio"
              />
              <br /> <br />
              <label className="text" for="borough">
                ¿En qué municipio te encuentras?
              </label>
              <br />
              <input
                className="input"
                type="text"
                id="borough"
                name="borough"
                placeholder="Ingresa tu Municipio"
              />
              <br /> <br />
              
              <label className="text" for="telephoneNumber">
                Teléfono del negocio:
              </label>
              <br /> 
              <input
                className="input"
                type="string"
                id="telephoneNumber"
                name="telephoneNumber"
                placeholder="ej: (123) 456 7890"
              />
              <br /> <br />
              <label className="text" for="fundationDate">
                ¿Cuándo se fundó tu negocio?
              </label>
              <br />
              <input 
              className="input"
              type="email" id="fundationDate" name="fundationDate"
              placeholder="xx/xx/xxxx"
               />
            </div>
            <div>
              <label className="text" for="businessLogo">
                Agrega una imagen representativa de tu negocio : <br />{" "}
                (opcional)
              </label>
              <br />
              <input 
              className="input"
              type="file" 
              id="businessLogo" name="businessLogo" />
              <br /><br />
              <label className="text" for="admon">
                ¿Quién puede administrar tu negocio?
              </label>
              <br />
              <FormControl style={{Size:"14px", width: "fit-content", color: "#040B5E" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="Solo yo" 
                  control={<Radio />} label="Solo yo" 
                  />
                  <FormControlLabel value="mas adminidtradores" control={<Radio/>} label="Más administradores" 
                  />
                </RadioGroup>
            </FormControl>
            <div>
              <label className="text">
                Ingresa el email de los otros administradores:
              </label>
              <br />
              <input 
              placeholder="ejemplo@example.com"
              className="input"
              type="email" 
              id="emailAdmon" name="emailAdmon" />
              <br />
              <OutlinedButton
              text={"Agregar otro Administrador"}
              startIcon={<AddCircleIcon/>}/>
            </div>
              <br /> 

              <div style={{
                
                //  justifyContent: 'center',
                //  alignItems: 'center',
                //  marginLeft: '-100%'
                //  position: 'relative',
                //  bottom: '20px', // Ajusta la distancia desde la parte inferior según sea necesario
                //  right: '20px',
                }}>
                <ContainedButton
                text={"Agregar Negocio"}
                startIcon={<AddBusinessIcon/>}
                style={{ fontSize: '1.2em',  }}
                />

              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default NewBusiness;
