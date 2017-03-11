import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form'
import renderField from '../helpers/form-fields.jsx'
import { validators } from '../helpers/form-validators.jsx';

const hcard = ({
	
	 }) => {
	return (
		<div>
			<div className="card-form">
				<h1> hCard Builder </h1>
				<form>
					<div>
						<span className="section-title"> Personal Details </span>
						<Field 	name="givenName"
								component={renderField}
								type="text"
								placeholder="Given Name"
								label="Given Name"
								validate={validators.required}/>
						<Field 	name="surname"
								component={renderField}
								type="text"
								placeholder="Surname"
								label="Surname"
								validate={validators.required}/>
						<Field 	name="email"
								component={renderField}
								type="email"
								placeholder="Email"
								label="Email"
								validate={[ validators.required, validators.email ]}/>
						<Field 	name="phone"
								component={renderField}
								type="number"
								placeholder="Phone Number"
								label="Phone Number"
								validate={[ validators.required ]}/>
						<span className="section-title"> Address </span>
						<Field 	name="houseName"
								component={renderField}
								type="text"
								placeholder="House Name or #"
								label="House Name or #"
								validate={validators.required}/>
						<Field 	name="Street"
								component={renderField}
								type="text"
								placeholder="Street"
								label="Street"
								validate={validators.required}/>
						<Field 	name="Suburb"
								component={renderField}
								type="text"
								placeholder="Suburb"
								label="Suburb"
								validate={validators.required}/>
						<Field 	name="State"
								component={renderField}
								type="text"
								placeholder="State"
								label="State"
								validate={validators.required}/>
						<Field 	name="Postcode"
								component={renderField}
								type="text"
								placeholder="Postcode"
								label="Postcode"
								validate={[ validators.required, validators.postcode ]}/>
						<Field 	name="Country"
								component={renderField}
								type="text"
								placeholder="Country"
								label="Country"
								validate={validators.required}/>
						<button> Upload Avatar </button>
						<button> Create hCard </button>
					</div>
				</form>
			</div>
			<div className="card">

			</div>
		</div>
	)
}

export default hcard