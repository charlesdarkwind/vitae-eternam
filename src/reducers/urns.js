function urns(state = {}, action) {
	switch(action.type) {
		case 'ADD_URN' :
		console.log("Adding Urn")
		return Object.assign({}, state, {		
			...state.urns,
			[action.id]: action.urn		
		})
		default:
			return state;
	}
}

export default urns;
