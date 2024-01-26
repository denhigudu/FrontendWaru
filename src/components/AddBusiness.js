import React from 'react';
import './Leftsidebar.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Button from '@mui/material/Button';



const AddBusinessButton = () => { 
  return (
    <div> 


<Button 
        variant="contained" 
        style={{ 
        backgroundColor: '#ff5c04', width: '200px', marginRight: '10px', marginLeft: '-95px',
        fontFamily: 'Avenir, sans-serif', 
        textTransform:'capitalize', 
        fontSize: '12px', 
        top: '92%',
        textAlign: 'end',
        position: 'absolute',
        borderRadius: '15px',
        }}
        startIcon={<AddBusinessIcon style={{
        position:'absolute',
        top:'20%',
        marginLeft: '-15px',
        }}/>}
        // endIcon={<ArrowForwardIosIcon style={{ 
        //   position:'absolute', top:'20%', 
        //   marginLeft: '10%' }} />}
        >Agregar otro negocio
        </Button>

</div>

); 
    
  };

  export default AddBusinessButton;