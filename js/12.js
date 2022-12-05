const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

form.addEventListener('submit', e => {
	e.preventDefault();
	validateForm();
});

// 表单验证
function validateForm() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordConfirmValue = passwordConfirm.value.trim();
	
	// 验证用户名
	if(usernameValue === '') {
		printError(username, '请输入用户名');
	} else {
		removeError(username);
	}
	
	// 验证邮箱
	if(emailValue === '') {
		printError(email, '请输入邮箱');
	} else if (!validateEmail(emailValue)) {
		printError(email, '邮箱格式有误');
	} else {
		removeError(email);
	}
	
	// 验证密码
	if(passwordValue === '') {
		printError(password, '请输入密码');
	} else {
		removeError(password);
	}
	
	// 验证确认密码
	if(passwordConfirmValue === '') {
		printError(passwordConfirm, '请确认密码');
	} else if(passwordValue !== passwordConfirmValue) {
		printError(passwordConfirm, '两次输入的密码不一致，请重新输入');
	} else{
		removeError(passwordConfirm);
	}
}

// 打印错误提示
function printError(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	formControl.classList.add('error');
	errorMessage.textContent = message;
}

// 删除错误提示（用户输入正确信息）
function removeError(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}

// 验证邮箱格式
function validateEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
