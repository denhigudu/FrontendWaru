import { FormularioLogin } from './pages/Login';
import { FormularioSignUp } from './pages/SignUp';
import Header from './layouts/Header';
import HeaderDash from './layouts/HeaderDash';
import './App.css';
import GoogleForm from './components/GoogleForm';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import './Dashboard';
//import { useState } from 'react';


function App( ) {
    const navigate = useNavigate();
    // VARIABLES
    const [error, setError] = useState("");

    // FUNCIONES
    const sign_in = async (event) => {
      event.preventDefault();
      try {
        navigate("/ASignin");
      } catch (error) {
        setError("Algo salio mal");
      }
    };

    const log_in = async (event) => {
      event.preventDefault();
      try {
        navigate("/ALogin");
      } catch (error) {
        setError("Algo salio mal");
      }
    }


  return (
    <div className="App">
     
     
    
      <Header/>
      <FormularioLogin/> 
      <FormularioSignUp/>
      <GoogleForm/>
      <HeaderDash/>
      {/* <Formulario_signup/> */}
      

    
    

      
      </div>
  );

}
     
  

export default App;
