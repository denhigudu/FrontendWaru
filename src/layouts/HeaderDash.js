import DashboardIcon from '@mui/icons-material/Dashboard';
import './DashHeader.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import waru3 from '../assets/waru3.png';

function DashHeader() {

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
            {/* <DashboardIcon style={{ 
                color: 'white',
                position: 'absolute', 
                top: '25%', 
                left: '35%',
                alignItems: 'center',
                }} /> */}
            {/* <h4 className='dashboard-title'>Dashboard</h4> */}
            <div className="dashboard-container">
                <DashboardIcon className="dashboard-icon" />
                <h4 className="dashboard-title">Dashboard</h4>
            </div>

        
        </div>
    );
    }

export default DashHeader