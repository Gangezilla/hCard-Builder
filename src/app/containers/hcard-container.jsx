import { connect } from 'react-redux'
import hcard from '../components/hcard-component.jsx'
import { reduxForm } from 'redux-form'
//import { addNewRecipe, openRecipeModal, closeRecipeModal, deleteRecipe, editR, openEditModal } from '../actions/recipeIndex-actions.jsx'

const mapStateToProps = (state) => {
  return {
    //values: state.form.hcard.values,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (props) => {

      console.log(props)
    }
  }
}

// const HcardContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(hcard)

// export default HcardContainer

export default connect(mapStateToProps,
                       mapDispatchToProps)(reduxForm({
  form: 'hcard'
})(hcard))