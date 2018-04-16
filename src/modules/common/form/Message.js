import React from 'react'
import './Message.css';

const Message = ({header, message}) => {
  return(
    <div className="form-message">
      {header && (<h1> {header} </h1>)}
      {message && (<p> {message}</p>)}
    </div>
  );
}

export { Message };
