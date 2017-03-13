import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form'
import { renderField, FileInput } from '../helpers/form-fields.jsx'
import { validators } from '../helpers/form-validators.jsx';

const hcard = ({
	givenName, surname, email, phone, house, street, suburb, state, postcode, country, onAttachment, avatar
	 }) => {

	return (
		<div className="app-container">
			<div className="card-form">
				<h1 className="top-title"> hCard Builder </h1>
				<form>
					<div>
						<span className="section-title"> Personal Details </span>
						<div className="form-row">
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
						</div>
						<div className="form-row">
							<Field 	name="email"
									component={renderField}
									type="email"
									label="Email"
									validate={[ validators.required, validators.email ]}/>
							<Field 	name="phone"
									component={renderField}
									type="tel"
									label="Phone Number"
									validate={[ validators.required ]}/>
						</div>
						<span className="section-title"> Address </span>
						<div className="form-row">
							<Field 	name="houseName"
									component={renderField}
									type="text"
									label="House Name or #"
									validate={validators.required}/>
							<Field 	name="street"
									component={renderField}
									type="text"
									label="Street"
									validate={validators.required}/>
						</div>
						<div className="form-row">
							<Field 	name="suburb"
									component={renderField}
									type="text"
									label="Suburb"
									validate={validators.required}/>
							<Field 	name="state"
									component={renderField}
									type="text"
									label="State"
									validate={validators.required}/>
						</div>
						<div className="form-row">
							<Field 	name="postcode"
									component={renderField}
									pattern="[0-9]*"
									inputmode="numeric"
									type="text"
									label="Postcode"
									maxLength="4"
									validate={[ validators.required, validators.postcode ]}/>
							<Field 	name="country"
									component={renderField}
									type="text"
									label="Country"
									validate={validators.required}/>
						</div>
					</div>
					<div className="btn-container">
						<label className="file-container btn btn-avatar">
							Upload Avatar
							<input
						        type="file"
						        className="file"
						        onChange={(e) => onAttachment(e)}
						        />
						</label>
						<button className="btn btn-submit"> Create hCard </button>
					</div>
				</form>
			</div>

			<div className="card-container">
				<div className="card">
					<div className="inner-card">
						<span className="preview"> hCard Preview </span>
						<div className="card-title">
							<span className="card-title-span"> {givenName} {surname} </span>
							<img className="card-title-avatar" src={avatar} />
						</div>
						<div className="card-fields">
							<div className="value-container">
								<span className="card-subheading">Email</span>
								<span className="card-value"> {email} </span>
							</div>
							<div className="value-container">
								<span className="card-subheading">Phone</span>
								<span className="card-value">{phone}  </span>
							</div>
							<div className="value-container">
								<span className="card-subheading">Address</span>
								<span className="card-value"> {house} {street}</span>
							</div>
							<div className="value-container">
								<span className="card-value">{suburb}
									<span className={suburb && state ? '' : 'is-hidden'}>, </span>
								{state}</span>
							</div>
							<div className="value-container">
								<div className="inner-value-container">
									<span className="card-subheading">Postcode</span>
									<span className="card-value"> {postcode} </span>
								</div>
								<div className="inner-value-container">
									<span className="card-subheading"> Country </span>
									<span className="card-value"> {country} </span>
								</div>
							</div>
						</div>
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