import { connect } from 'react-redux'
import hcard from '../components/hcard-component.jsx'
import { reduxForm, formValueSelector } from 'redux-form'

const mapStateToProps = (state) => {
  return {
    givenName: formValueSelector('hcard')(state, 'givenName'),
    surname: formValueSelector('hcard')(state, 'surname'),
    email: formValueSelector('hcard')(state, 'email'),
    phone: formValueSelector('hcard')(state, 'phone'),
    house: formValueSelector('hcard')(state, 'houseName'),
    street: formValueSelector('hcard')(state, 'street'),
    suburb: formValueSelector('hcard')(state, 'suburb'),
    state: formValueSelector('hcard')(state, 'state'),
    postcode: formValueSelector('hcard')(state, 'postcode'),
    country: formValueSelector('hcard')(state, 'country'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    imageUpload: (e) => {
      e.preventDefault();
      
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )
(reduxForm({
  form: 'hcard'
})(hcard))