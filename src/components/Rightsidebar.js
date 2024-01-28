import React from 'react';
import '../components/Rightsidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import { FormatAlignCenter } from '@mui/icons-material';

const rightsidebar = () => { 
  return (
    <div>
        <div className='right-borde-bar'>
        <div> 
            
            <div style={{alignContent:'center', justifyContent:'center', alignItems:'center'}}>
            <h3 className='menu'>Menú</h3>
            </div>
            {/* <Button 
              variant="contained" 
              style={{ backgroundColor: '#ff5c04', width: '180px', marginRight: '10px', marginLeft: '10px' }}
              endIcon={<ArrowForwardIosIcon style={{ marginLeft: '55px' }} />}>
                Servicios
            </Button> */}

            <Button 
              variant="outlined"
              className="servicios"
              endIcon={<ArrowForwardIosIcon className="serforward-arrow" />}
            >
              Servicios
            </Button>

            <br></br>
            <br></br>

            <Button 
              variant="outlined"
              className="proveedores"
              endIcon={<ArrowForwardIosIcon className="provforward-arrow" />}
            >
              Proveedores
            </Button>

            <div>
              



            </div>

            {/* <div className='linea-menu'></div>  */}
            <div>
                <SettingsIcon className='settings-icon'/>
                <h4 className='ajustes'>Ajustes</h4>
                
                <LogoutIcon className='log-out'/>
                <h4 className='cerrar-sesion'>Cerrar sesión</h4>
            </div>
        
        </div> 
        </div>
    </div>

    
    ); 
    
  };

  export default rightsidebar;