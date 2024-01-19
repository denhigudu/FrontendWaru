import Button from '@mui/material/Button';

const ButtonSignUp = () => {
    const estiloBoton = {
      backgroundColor: '#FF5C04',  // Puedes cambiar este color a tu preferencia
      color: '#FFFFFF',  // Puedes cambiar este color a tu preferencia
    };
  
    return (
      <Button variant="contained" style={estiloBoton}>
        Registrarse
      </Button>
    );
  };
  
  export default ButtonSignUp;