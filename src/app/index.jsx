import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App  from './components/app.jsx'
import rootReducer from './reducers/index.jsx'

const store = createStore(
	rootReducer,
	)

console.log('index: ', store.getState())
store.subscribe(() => {
  	console.log('index: ', store.getState())
})

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'));