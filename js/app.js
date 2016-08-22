var order = {
		name: null,
		email: null,
		message: null
	};

function isEmpty(el) {
	if (!$('#' + el).val()) {
		return true;
	} else {
		return false;
	};
};

function isFieldValid(el) {
	if (isEmpty(el)) {
		$("#" + el + "Err").show();
	} else {
		$("#" + el + "Err").hide();
	};
};

function assignValue(item){
	if (!isEmpty(item)) {
		order[item] = $('#' + item).val();
	};
};

var name = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

function isFormValid(name, email, message) {
	if(!isEmpty(name)) {
		isFieldValid(name);
		assignValue(name);
	};
};

$('#submit').click(function submitOrder() {
	
	isFieldValid('name');
	isFieldValid('message');
	isFieldValid('email');


	assignValue('name');
	assignValue('email');
	assignValue('message');


});



