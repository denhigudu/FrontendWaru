import React from "react";
import Header from "./layouts/Header";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material UI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const navigate = useNavigate();

  // VARIABLES
  const [error, setError] = useState("");

  // FUNCIONES
  const sign_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/SignUp");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const log_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/Login");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={sign_in}>
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" className="button" type="submit" color="primary">
            Registrate
          </Button>
        </Stack>
      </form>
      <form onClick={log_in}>
        <button className="button" type="Click">
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
