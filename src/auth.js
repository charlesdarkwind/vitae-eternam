import base from './base';

export function authHandler(context, err, authData) {
    if(err) {
      console.error(err);
      return; 
    }

    // grab the cart/order info
    const orderRef = base.database().ref(context.props.uid); //NEED SOME ID REFERING TO CURRENT ORDER CART
    // query the firebase ref once for the cart data and set the state
    orderRef.once('value', (snapshot) => {
     	const data = snapshot.val()  || {};
      	context.setState({
        	user: {
            uid: authData.user.uid,
            name: authData.user.displayName,
            email: authData.user.email,
            photo: authData.user.photoURL
          } 
      	});
   	});   
}

