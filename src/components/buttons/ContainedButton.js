import React from 'react';
import '../buttons/buttons.css';
import Button from '@mui/material/Button';


const ContainedButton = ({ text, startIcon, endIcon,  ...props }) => { 
  return (
    <div className="contained-button-container">
        
        <Button 
            variant="contained"
            className="contained-button"
            endIcon= {endIcon}
            startIcon= {startIcon}
            {...props}
        >
            {text}  
        </Button>
    </div>
    );  
  };

  export default ContainedButton;