import React from 'react'
import './InputField.css';

const InputField = ({type, name, value, onChange, placeholder, required, icon}) => {
  return (
    <div className="input-field">
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="input-field-bar"/>
      {placeholder && <label className="input-field-label"> {icon && <i className={icon} aria-hidden="true"></i>} {placeholder}</label>}
    </div>
  );
}

export { InputField };
