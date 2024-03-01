import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/IndexHeader.css";
import waru3 from "../../assets/waru3.png";
// Material UI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.6rem",
    padding: ".6rem 1.2rem",
    border: ".2rem solid",
    width: "15rem",
    lineHeight: 1.2,
    backgroundColor: "#ff5c04",
    borderColor: "#ffff",
    color: "#ffff",
    fontFamily: ["Avenir", "Arial"].join(","),
    "&:hover": {
      backgroundColor: "#ff5c40",
      borderColor: "#ffff",
      boxShadow: "none",
    },
  });

  return (
    <div className="index-header">
      <img src={waru3} alt="logoblanco" className="waru3" />
      <div className="buttonSelection">
        <br />
        <form onClick={log_in}>
          <Stack spacing={2} direction="row">
            <BootstrapButton variant="contained" type="submit" size="large">
              Log In
            </BootstrapButton>
          </Stack>
        </form>

        <form onSubmit={sign_in}>
          <Stack spacing={2} direction="row">
            <BootstrapButton variant="contained" type="submit" size="large">
              Sign Up
            </BootstrapButton>
          </Stack>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default IndexHeader;
