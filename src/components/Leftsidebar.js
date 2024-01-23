import React from 'react';
import './Leftsidebar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const leftsidebar = () => {
  return (
  <div>
    <div className='bordesbar'>
      <AccountCircleOutlinedIcon className='profileicon'/>
      <CircleNotificationsIcon className='noticon'/>
      <div className='linea'></div>
      <br></br>
      <br></br>
    </div>

    <div>
      <br></br>
      <br></br>
      
    </div>
  </div>
  );
};

export default leftsidebar;