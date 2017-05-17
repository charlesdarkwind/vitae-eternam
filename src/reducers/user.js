function user(state = {}, action) {
	switch(action.type) {
		case 'SET_USER':
			console.log('Retrieving user info')
			return Object.assign({}, state, {		
				name: action.name,
				email: action.email,
				photoURL: action.photoURL,
				uid: action.uid,
				adress: action.adress
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
		return {
			...state,
			adress: {
				firstName: action.firstName,
    			lastName: action.lastName,
    			adress: action.adress,
    			city: action.city,
    			state: action.state,
    			ZIP: action.ZIP,
    			phone: action.phone
			}
		}
		default:
			return state;
	}
}

export default user;

/*
return Object.assign({}, state, {
			...state.user.adress,
			firstName: action.firstName,
    		lastName: action.lastName,
    		adress: action.adress,
    		city: action.city,
    		state: action.state,
    		ZIP: action.ZIP,
    		phone: action.phone
		})
    		*/