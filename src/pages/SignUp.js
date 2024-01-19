import "./formulario_login.css";
import axios from 'axios';
import {useState} from "react"
import "./SignUp.css";
import Button from "../components/button"
import waru1 from "../assets/img/waru1.png";
//import waru1 from "./assets/img/waru1.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";


 export function FormularioSignUp (){
    const navigate = useNavigate();
    //variables a usar
    const[username, setUsername] = useState ("");
    const[mail, setMail] = useState ("");
    const[password, setPassword] = useState ("");
    const[error, setError]= useState('');
    //funciones a usar
    const SignUp = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/api/signin",{
                username,
                password,
                mail,
            });
            if (response.data.success === true) {
                console.log(response.data);
                navigate("/Dashboard");
            } else {
                console.log(response.data); 
                alert("no se pudo ingresar al sistema");
            }
        } catch (error) {
            setError("correo usado, cambiar de correo electrónico")
        }
    }


//todo lo que este arriba de return serán funciones a ejecutar
//todo lo que este abajo de return sera lo que ve el usuario en su pantalla
    return(
        <section>
            <br></br>
            <br></br>
            <div className="borde">

        <form onSubmit={SignUp}>
            <div style={{
                    display: "flex",
                    alignItems: "center",
                    }}>

            <h1 className="title">SIGN UP</h1>
            <img className="logo"
                        src={waru1} 
                         
                            />
            </div>

            <div className="formulario"/>
            
                <label className="user">
                    Nombre de Usuario:
                    <br></br>
                        <input
                            className="input"
                            type="text"
                            placeholder= "Ingresa tu nombre de Usuario"
                            value={String}
                            onChange={(event)=> setUsername(event.target.value)}
                        />
                </label>
                <br></br>
                    <br></br>


                <label className="email">
                    Email:
                    <br></br>
                    
                        <input 
                            className="input" 
                            type="text"
                            placeholder= "Ingresa tu email"
                            value={mail}
                            onChange={(event)=>setMail(event.target.value)}
                        />
                </label>
                <br></br>
                <br></br>
                <label className="password">
                    Contraseña:
                    <br></br>
                    
                        <input 
                            className="input"
                            type="password"
                            placeholder= "Ingresa tu contraseña"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                    
                </label>
                <br></br>
                <br></br>
                {/* <label>
                    Confirma tu contraseña:
                    <br></br>
                    <br></br>
                        <input 
                            type="password"
                            placeholder= "Ingresa tu contraseña"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />
                    
                </label>
                <br></br>
                <br></br> */}

                
                {/* <Button variant="contained">Contained</Button> */}
                <Button/>
                {/* <img src={waru1}/> */}

                
                
    

                {/* {error && <p>{error}</p>}
            </form> */}
                </form>
            </div>
        
        </section>
    )
}

export default FormularioSignUp;