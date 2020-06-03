import React from 'react';
import './Container.css'

const UIContainer = ({ children }) =>{
  return(
    <div className="ui-container">
      { children }
    </div>
  )
}

export default UIContainer;