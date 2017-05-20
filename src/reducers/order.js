function order(state = {}, action) {
	switch(action.type) {
		case 'SET_ORDER_ITEM' :
			console.log("Setting current item into order array")
			return [...state,	action.urn];
		case 'REMOVE_ORDER_ITEM' :
			console.log("Removing from order")
			return Object.assign({}, state.order, {[
			....state.order.slice(0, action.i),
			state.order.slice(action.i + 1)
			}];
		default:
			return state;
	}
}

export default order;