import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IndexHeader.css';
import waru3 from '../assets/waru3.png';
// Material UI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function IndexHeader() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const sign_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/SignUp");
    } catch (error) {
      setError("Algo salió mal");
    }
  };

  const log_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/Login");
    } catch (error) {
      setError("Algo salió mal");
    }
  };

  return (
    <div className="index-header">
      <img
        src={waru3}
        alt="logoblanco"
        style={{
          width: "150px",
          height: "40px",
          position: "absolute",
          top: "6px",
          left: "0",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "30px",
          position: "absolute",
          top: 0,
          right: 0,
          padding: "10px",
        }}
      >
        <br />
        <form onClick={log_in}>
          <Stack spacing={2} direction={"row-reverse"}>
            <Button
              variant="outlined"
              className="button"
              type="submit"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "#ffff",
                backgroundColor: "transparent",
                color: "#ffff",
                width: "150px",
                height: "35px",
                fontFamily: "Avenir, sans-serif",
                textTransform: "capitalize",
                top: "4px",
                right: "20px",
              }}

              // endIcon={<SendIcon />}
            >
              Log In
            </Button>
          </Stack>
        </form>

        <form onSubmit={sign_in}>
          <Stack spacing={2} direction={"row-reverse"}>
            <Button
              variant="contained"
              className="button"
              type="submit"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "#ffff",
                backgroundColor: "#ffff",
                color: "#ff5c04",
                width: "150px", // Ajusta el ancho según tus necesidades
                height: "35px", // Ajusta la altura según tus necesidades
                fontFamily: "Avenir, sans-serif",
                textTransform: "capitalize",
                top: "3px",
                right: "20px",
              }}

              // endIcon={<SendIcon />}
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default IndexHeader;
