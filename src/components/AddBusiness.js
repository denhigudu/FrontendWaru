import { React, useState } from "react";
import "./Leftsidebar.css";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../css/addBusiness-style.css";

const AddBusinessButton = () => {
  const Navigate = useNavigate();
  const [error, setError] = useState("");
  // function to change another page
  const changeNewBusiness = async (event) => {
    event.preventDefault();
    try {
      Navigate("/newBusiness");
    } catch (error) {
      setError("Algo salio mal");
    }
  };
  return (
    <div>
      <Button
        onClick={changeNewBusiness}
        variant="contained"
        className="button-select"
        startIcon={<AddBusinessIcon className="button-select__icon" />}
      >
        Agregar otro negocios
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddBusinessButton;
