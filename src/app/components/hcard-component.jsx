import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form'
import renderField from '../helpers/form-fields.jsx'
import { validators } from '../helpers/form-validators.jsx';

const onSubmit = (values, dispatch, props) => {
	console.log('Submit');
	document.getElementById('CheckGVBalance').submit()
}

const hcard = ({
	handleSubmit
	 }) => {
	return (
		<div className="app-container">
			<div className="card-form">
				<h1 className="top-title"> hCard Builder </h1>
				<form>
					<div>
						<span className="section-title"> Personal Details </span>
						<Field 	name="givenName"
								component={renderField}
								type="text"
								label="Given Name"
								validate={validators.required}/>
						<Field 	name="surname"
								component={renderField}
								type="text"
								label="Surname"
								validate={validators.required}/>
						<Field 	name="email"
								component={renderField}
								type="email"
								label="Email"
								validate={[ validators.required, validators.email ]}/>
						<Field 	name="phone"
								component={renderField}
								type="number"
								label="Phone Number"
								validate={[ validators.required ]}/>
						<span className="section-title"> Address </span>
						<Field 	name="houseName"
								component={renderField}
								type="text"
								label="House Name or #"
								validate={validators.required}/>
						<Field 	name="Street"
								component={renderField}
								type="text"
								label="Street"
								validate={validators.required}/>
						<Field 	name="Suburb"
								component={renderField}
								type="text"
								label="Suburb"
								validate={validators.required}/>
						<Field 	name="State"
								component={renderField}
								type="text"
								label="State"
								validate={validators.required}/>
						<Field 	name="Postcode"
								component={renderField}
								type="text"
								label="Postcode"
								validate={[ validators.required, validators.postcode ]}/>
						<Field 	name="Country"
								component={renderField}
								type="text"
								label="Country"
								validate={validators.required}/>
						<button className="btn btn-avatar" onClick=""> Upload Avatar </button>
						<button className="btn btn-submit"> Create hCard </button>
					</div>
				</form>
			</div>

			<div className="card">
				<span> hCard Preview </span>
				<div className="card-title">
					<span className="card-title-span"> </span>
					<img className="card-title-avatar"/>
				</div>
				<div className="card-fields">
					<div className="value-container">
						<span className="card-subheading">Email</span>
						<span className="card-value"> </span>
					</div>
					<div className="value-container">
						<span className="card-subheading">Phone</span>
						<span className="card-value"> </span>
					</div>
					<div className="value-container">
						<span className="card-subheading">Address</span>
						<span className="card-value"> </span>
					</div>
					<div className="value-container">
						<span className="card-value"> </span>
					</div>
					<div className="value-container">
						<span className="card-subheading">Postcode</span>
						<span className="card-value"> </span>
						<span className="card-subheading"> Country </span>
						<span className="card-value"> </span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default hcard

//Things to do:
//STYLE!
//bring form field values from state into component props.
//SUBMITTING DOESNT NEED TO WORK. STRETCH GOAL?