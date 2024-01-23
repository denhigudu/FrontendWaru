import { FormularioLogin } from './pages/Login';
import { FormularioSignUp } from './pages/SignUp';
import Header from './layouts/Header';
import HeaderDash from './layouts/HeaderDash';
import './App.css';
import GoogleForm from './components/GoogleForm';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
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
        navigate("/SignUp");
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
      };
    }
    const dashboard = async (event) => {
      event.preventDefault();
      try {
        navigate("/Dashboard");
      } catch (error) {
        setError("Algo salio mal");
      }
    };


  return (
    <div className="App">
      
     
     
    
      <Header/>
        <form onSubmit={sign_in}>
          <button className='button' type='submit'>registro</button>
        </form>
        <form onSubmit={log_in}>
          <button className='button' type='submit'>ingreso</button>
        </form>
        <form onSubmit={dashboard}>
          <button className='button' type='submit'>dash</button>
        </form>
      {/* <FormularioLogin/>  */}
      <FormularioSignUp/>
      {/* <GoogleForm/>
      <HeaderDash/> */}
      {/* <Formulario_signup/> */}
      

    
    

      
    </div>
  );

}
     
  

export default App;
