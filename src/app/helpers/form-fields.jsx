import React from 'react'

export const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="form-field-container">
    <label className="form-label">{label}</label>
    <div>
      <input className="form-input" {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span className="form-error">{error}</span>) || (warning && <span className="form-warning">{warning}</span>))}
    </div>
  </div>
)

// export const fileInput = ({ input }) => {
//   constructor(props) {
//     super(props)
//     this.onChange = this.onChange.bind(this)
//   }

//   onChange(e) {
//     const { input: { onChange } } = this.props
//     onChange(e.target.files[0])
//   }

//   render() {
//     const { input: { value } } = this.props

//     return (<input
//       type="file"
//       value={value}
//       onChange={this.onChange}
//     />)
//   }
// }