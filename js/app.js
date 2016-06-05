var order = {
		name: null,
		email: null,
		message: null
	};

var valid = {
	 	name: false,
	 	email: false,
	 	message: false
	};

function isRequired(el) {
	if ($('#' + el).prop('required')) {
		return true;
	} else {
		return false;
	};
};

function isEmpty(el) {
	if (!$('#' + el).val()) {
		return true;
	} else {
		return false;
	};
};


function isFormValid(el) {
	if (isRequired(el)) {
		if(!isEmpty(el)){
			valid[el] = true;
		};
	};
};

function errorMsg(el) {
	$("#" + el + "Err").show();
	$('.errormsg').show();
};

function removeErrorMsg(el) {
	$("#" + el + "Err").hide();
	$('.errormsg').hide();
};

$('#submit').click(function submitOrder() {

	order.name = $('#name').val();
	order.email = $('#email').val();
	order.message = $('#message').val();

	console.log(order);

	isFormValid('name');
	isFormValid('email');
	isFormValid('message');

	if (valid.name == false) {
		errorMsg('name');
	} else {
		removeErrorMsg('name');
	};
	if (valid.email == false) {
	errorMsg('email');
	} else {
		removeErrorMsg('email');
	};
	if (valid.message == false) {
		errorMsg('message');
	} else {
		removeErrorMsg('message');
	};
});



