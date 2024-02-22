import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../layouts/Header";

function NewBusiness() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  return (
    <div>
      <Header />
      <h1>Agregar negocio</h1>
      <main>
        <section className="formulario">
          <h2>Información del negocio</h2>
          <form>
            <label for="businessName">Nombre del negocio:</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="nombre del negocio"
            />
            <label for="businessLogo">Imagen del negocio:</label>
            <input type="file" id="businessLogo" name="businessLogo" />
            <label for="businessDescription">Descripción del negocio:</label>
            <textarea
              id="businessDescription"
              name="businessDescription"
              placeholder="describe tu negocio"
            />
            <label for="borough">Municipio:</label>
            <input type="text" id="borough" name="borough" placeholder="municipio"/>
            <label for="admon">¿Quién puede administrar tu negocio?</label>
            <div className="admonOptions">
              <input type="radio" id="myself" name="admon" />
              <label for="myself">Solo yo</label>
              <input type="radio" id="moreAdmon" name="admon"/>
              <label for="moreAdmon">Más administradores</label>
            </div>
            <div>
              <label>Ingresa el email de los otros administradores:</label>
              <input type="email" id=""/>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default NewBusiness;
