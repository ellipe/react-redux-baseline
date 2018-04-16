import React from 'react'
import './Splash.css';


const Splash = (props) => {
  return (
    <div className="container middle">
      <div className="row">
        <div className="splash center no-padding col-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export { Splash } ;
