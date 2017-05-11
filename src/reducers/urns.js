function urns(state = {}, action) {
	switch(action.type) {
		case 'ADD_URN' :
		console.log("Adding Urn")
			return Object.assign({}, state, {		
				...state.urns,
				[action.id]: action.urn		
			})
		case 'REMOVE_URN':
		console.log("Removing urn")
		let copy = Object.assign({}, state)
			delete copy[action.key]
			return copy
		case 'UPDATE_URN':
		console.log("Updating urn")
		return Object.assign({}, state, {
			...state.urns,
			[action.key]: action.updatedUrn
		})
		default:
			return state;
	}
}

export default urns;
