import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import hcardReducer from './hcard-reducer.jsx'

const rootReducer = combineReducers ({
	hcardReducer,
	form: formReducer,
})

export default rootReducer