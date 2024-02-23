import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../layouts/Header";
import "../css/newBusiness-style.css";

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
                type="text"
                id="businessName"
                name="businessName"
                placeholder="nombre del negocio"
              />
              <br />
              <label className="text" for="businessDescription">
                Descripción del negocio:
              </label>
              <br />
              <textarea
                id="businessDescription"
                name="businessDescription"
                placeholder="describe tu negocio"
              />
              <br />
              <label className="text" for="borough">
                Municipio:
              </label>
              <br />
              <input
                type="text"
                id="borough"
                name="borough"
                placeholder="municipio"
              />
              <br />
              <label className="text" for="telephoneNumber">
                telefono del negocio:
              </label>
              <br />
              <input
                type="string"
                id="telephoneNumber"
                name="telephoneNumber"
              />
              <br />
              <label className="text" for="fundationDate">
                ¿Cuándo se fundó tu negocio?
              </label>
              <br />
              <input type="email" id="fundationDate" name="fundationDate" />
            </div>
            <div>
              <label className="text" for="businessLogo">
                Agrega una imagen representativa de tu negocio : <br />{" "}
                (opcional)
              </label>
              <br />
              <input type="file" id="businessLogo" name="businessLogo" />
              <br />
              <label className="text" for="admon">
                ¿Quién puede administrar tu negocio?
              </label>
              <br />
              <label className="text" for="myself">
                Solo yo
              </label>
              <br />
              <input type="radio" id="myself" name="admon" />
              <br />
              <label className="text" for="moreAdmon">
                Más administradores
              </label>
              <input type="radio" id="moreAdmon" name="admon" />
              <br />
              <label className="text">
                Ingresa el email de los otros administradores:
              </label>
              <br />
              <input type="email" id="emailAdmon" name="emailAdmon" />
              <br />
              <button type="button">Agregar otro administrador</button>
              <br />
              <div className="selectButton_c">
                <button className="selectButton" type="submit">Agregar negocio!</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default NewBusiness;
