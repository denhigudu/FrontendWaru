import React from 'react';
import Button from '@mui/material/Button';
import '../buttons/buttons.css';


const OutlinedButton = ({ text, startIcon, endIcon, ...props }) => { 
  return (
    <div className="outlined-button-container"> 
        <Button 
            variant="outlined"
            className="outlined-button"
            endIcon= {endIcon}
            startIcon= {startIcon}
            {...props}
        >
            {text}  
        </Button>
    </div>
    ); 
  };

  export default OutlinedButton;