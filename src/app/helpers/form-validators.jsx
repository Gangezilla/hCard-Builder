const required = value => value ? undefined : 'Required';

const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined;

const postcode = value =>
value && !/^\d{3,4}$/i.test(value) ?
'Invalid post code' : undefined;

const validators = {
	required,
	email,
	postcode,
}

export { validators };