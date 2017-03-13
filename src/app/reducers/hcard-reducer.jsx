const hcardReducer = (state, action) => {
	if (state === undefined) {
		return {
			values: '',
			avatar: 'https://static.domain.com.au/content/web/residential/icon/profile-icon.png',
		}
	}

	switch (action.type) {

		case 'UPDATE_IMG':
			return Object.assign({}, state, {
				avatar: action.img
			})

    	default:
      		return state
  	}
}
export default hcardReducer