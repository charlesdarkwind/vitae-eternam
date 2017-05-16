function user(state = {}, action) {
	switch(action.type) {
		case 'SET_USER':
			console.log('Retrieving user info')
			return Object.assign({}, state, {		
				name: action.name,
				email: action.email,
				photoURL: action.photoURL,
				uid: action.uid		
			})
		case 'REMOVE_USER':
			console.log('User deconnecting')
			return Object.assign({}, state, {				
				name: null,
				email: null,
				photoURL: null,
				uid: null,
				adress: {}
			})
		case 'SET_ADRESS':
		console.log('Setting Adress Infos')
		return 
		default:
			return state;
	}
}

export default user;