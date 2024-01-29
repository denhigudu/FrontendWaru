import React from 'react';
import './Leftsidebar.css';
import AddBusinessButton from './AddBusiness'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Button from '@mui/material/Button';
import ariss from '../assets/ariss.jpeg';
import candy from '../assets/candy.png';
import persona from '../assets/persona.jpeg';

const leftsidebar = () => { 
  return (
    <div> 

      <div className='bordesbar'> 
      <div>
      <br></br>
        <img 
        className="foto-de-perfil" 
        src= {persona} 
        alt="Foto de perfil" />
      </div>

        {/* <AccountCircleOutlinedIcon className='profileicon'/>  */}
        <br></br>
        <h2 className='username'>Alejandra Vargas</h2>
      
        <br></br> 

          <div className='icon-container'> 
    
            <IconButton className='noticon-container'> <CircleNotificationsIcon className='noticon'/> 
            </IconButton> 
    
            <IconButton className='circleicon-container'> 
              <CircleIcon className='circleicon'/> 
              <EditIcon className='editicon'/> 
            </IconButton> 

            <IconButton className='circleicon-container'> 
              <CircleIcon className='circleicon'/> 
              <ChatBubbleIcon className='chaticon'/>
            </IconButton> 

          </div> 

        <div className='linea'></div> 
        
      
        <StoreIcon className='storeicon'/>
        <h3 className='mis-negocios'>Mis Negocios</h3>

        <div>
          <div>
        <img 
            src={ariss} 
            alt='ejnegocio1'
            style={{ 
                width: '150px', 
                height: '130px',
                position: 'absolute',
                top: '50%',
                right: '25%',
            }}
        />
          </div>
          <IconButton>
        <ArrowForwardIosIcon style={{ position: 'absolute', right: '-800%', top: '230%', transform: 'translateY(270%)' }}
        />
          </IconButton>
        </div>

        <div>
          <div>
        <img 
            src={candy} 
            alt='ejnegocio1'
            style={{ 
                width: '150px', 
                height: '130px',
                position: 'absolute',
                top: '70%',
                right: '25%',
            }}
        /> 
          </div>
          <IconButton>
        <ArrowForwardIosIcon style={{ position: 'absolute', right: '-800%', top: '80%', transform: 'translateY(850%)' }} />
          </IconButton>
        </div>
        

        <AddBusinessButton/>


      </div> 

    </div> 
    
    ); 
    
  };

  export default leftsidebar;