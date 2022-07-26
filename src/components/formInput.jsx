import './formInput.css';
import React, { useState } from 'react';  

const FormInput = (props) => {          

  const [focused, setFocused] = useState(false);    

  const {id, onChange, label, errorMessage, ...inputProps} = props;
  
  const handleFocus = (e) => {
    setFocused(true);
  }      
   return (
    <div className="formInput">      
        <label> {label} </label> 
        <input className="form" {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()} />
        <span> {errorMessage} </span>
    </div>
  )
}

export default FormInput