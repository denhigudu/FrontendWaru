import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../buttons/buttons.css';


const OutlinedButton = ({ text, ...props }) => { 
  return (
    <div className="outlined-button-container">
        
        <Button 
            variant="outlined"
            className="outlined-button"
            endIcon={<ArrowForwardIosIcon className="forward-arrow" />}
            {...props}
        >
            {text}  
        </Button>
     
          

    
    </div>

    
    ); 
    
  };

  export default OutlinedButton;