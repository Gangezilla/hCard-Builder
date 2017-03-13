import React from 'react'

export const renderField = ({ maxLength, input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="form-field-container">
    <label className="form-label">{label}</label>
    <div>
      <input maxLength={maxLength} className="form-input" {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
)