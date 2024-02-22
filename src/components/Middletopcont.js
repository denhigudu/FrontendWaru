import React from 'react';
import '../components/Middletopcont.css';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import GoogleForm from './GoogleForm';


const Middletopcont = () => { 
  return (
    <div>
        <div className='middlecont'>
        <div> 
            <h1 className='mis-diagnosticos'> Autodiágnósticos</h1>
            <DynamicFormIcon className='diaicon'/>
            <div className='lineadia'></div> 
            <Button 
              variant="outlined"
              className="resultado1"
              endIcon={<ArrowForwardIosIcon className="res1-forward-arrow" />}
            >
              Resultados Autodiagnóstico 1
            </Button>
            <br></br> <br></br>
            <Button 
              variant="outlined"
              className="resultado1"
              endIcon={<ArrowForwardIosIcon className="res1-forward-arrow" />}
            >
              Resultados Autodiagnóstico 2
            </Button>


            <br></br> <br></br>
            <GoogleForm/>



        </div>
        </div>
    </div>

    
    ); 
    
  };

  export default Middletopcont;