import React from 'react';
import './Events.css'

const Events = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      paddingTop: '100px'  
    }}>
      <h1 className ="title">Check Out Our Events!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=YWNtdy5zY3VnaXJsc0BnbWFpbC5jb20&color=%230083c6"
          style={{ border: 'solid 1px #777' }} 
          width="800" 
          height="600" 
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Events;
