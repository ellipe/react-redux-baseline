import React from 'react'
import './CheckboxField.css';

const CheckboxField = ({ name, onChange, text, required, icon, disabled}) => {
  return (
    <div className="input-field-checkbox ">
      <label className="checkbox-label"> {icon && <i className={icon} aria-hidden="true"></i>} 
      <input
          disabled={disabled}
          required={required}
          type="checkbox"
          name={name}
          onChange={onChange}
        />
        {text}
      </label>
    </div>
  );
}

export { CheckboxField }
