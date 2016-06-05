var order = {
		name: null,
		email: null,
		message: null
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

function isFormValid(obj) {
		if (isRequired(obj)) {
			if(!isEmpty(obj)){
				return true;
			};
		} else {
			return true;
		};
		return false;
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
	if (!isFormValid('name')) {
		errorMsg('name');
		return;
	} else {
		removeErrorMsg('name');
	};

	if (!isFormValid('email')) {
		errorMsg('email');
		return;
	} else {
		removeErrorMsg('email');
	};

	if (!isFormValid('message')) {
		errorMsg('message');
		return;
	} else {
		removeErrorMsg('message');
	};


	order.name = $('#name').val();
	order.email = $('#email').val();
	order.message = $('#message').val();

});



