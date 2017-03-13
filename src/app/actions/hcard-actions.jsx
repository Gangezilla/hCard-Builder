export const updateImg = (result) => {
	console.log(result)
	return {
		type: 'UPDATE_IMG',
		img: result
	}
}