import React from "react";
import images from "../../constants/images";
// Custom Style
const style = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '1rem',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '1rem',
    
}

const ConfirmedBooking = () => {
    return (
    <div style={style}>
        <img src={images.bookingConfirmed} alt="" />
        <h1>Confirmed</h1>
    </div>);
}

export default ConfirmedBooking;