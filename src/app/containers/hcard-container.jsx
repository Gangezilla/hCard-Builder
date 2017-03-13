import { connect } from 'react-redux'
import hcard from '../components/hcard-component.jsx'
import { reduxForm, formValueSelector } from 'redux-form'
import { updateImg } from '../actions/hcard-actions.jsx'


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
    avatar: state.hcardReducer.avatar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAttachment: (e) => {
      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      console.log(reader)
      setTimeout(() => dispatch(updateImg(reader.result)), 1000)
      
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