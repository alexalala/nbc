var order = {
		name: null,
		email: null,
		message: null
	};



$('#submit').click(function submitOrder() {

	if (order.email == null) {
		console.warn('yay', order.email);
	} else {
		console.warn('boo');
	};
});