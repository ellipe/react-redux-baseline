import React from 'react'
import './SubmitField.css';

const SubmitField = ({value, icon}) => {
  return (
    <div className="form-field-submit">
          <input
            className="bg-dark-blue text-light"
            type="submit"
            name="submit"
            value={value}
          />
    </div>
  );
}

export { SubmitField }
