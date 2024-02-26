import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SimpleArrowIcon = ({ top }) => {
  return (
    <ArrowForwardIosIcon 
      style={{ 
        position: "absolute",
        right: "10%",
        top: '${top}%',
        transform: "translateY(-50%)",
      }} 
    />
  );
}

export default SimpleArrowIcon;