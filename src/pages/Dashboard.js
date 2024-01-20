import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // eliminar función si es necesario cuando funcione react con node
  const brincarEditarPerfil = async (event) => {
    event.preventDefault();
    try {
      navigate("/editarPerfil");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  // eliminar función si es necesario cuando funcione react con node
  const brincarAutodiagnostico = async (event) => {
    event.preventDefault();
    try {
      navigate("/autodiagnostico");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  // eliminar función si es necesario cuando funcione react con node
  const brincarNotificaciones = async (event) => {
    event.preventDefault();
    try {
      navigate("/notificaciones");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Eliminar este button de brincar cuando funcione react con backend */}
      <form onClick={brincarAutodiagnostico}>
        <button>Ir a Autodiagnostico</button>
      </form>
      <form onClick={brincarNotificaciones}>
        <button>Ir a notificaciones</button>
      </form>
      <form onClick={brincarEditarPerfil}>
        <button>Ir a editor de perfil</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Dashboard;
