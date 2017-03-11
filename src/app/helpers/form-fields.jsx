import React from 'react'

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div>
    <label className="form-label">{label}</label>
    <div>
      <input className="form-input" {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
)

export default renderField