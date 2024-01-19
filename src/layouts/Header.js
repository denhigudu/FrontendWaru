import './Header.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import waru3 from '../assets/img/waru3.png';

function Header() {

    return(
        <div 
        className="Header"
        
        >
    
            <ArrowBackIosNewIcon style={{ 
                color: 'white',
                position: 'absolute', 
                top: '15', 
                left: '5',
                }} />
            <img 
            src={waru3} 
            alt='logoblanco'
            style={{ 
                width: '150px', 
                height: '40px',
                position: 'absolute',
                top: '5px',
                right: '0',
            }} 
            /> 

            
        </div>
    );
    }

export default Header