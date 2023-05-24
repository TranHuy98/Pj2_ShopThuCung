//show-hide Password


let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let togglePassword = document.getElementById("toggle-password-button");

togglePassword.addEventListener("click",showPassword);

function showPassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
  }







let users = [];
if (JSON.parse(localStorage.getItem('users')) !== null) {
	users = JSON.parse(localStorage.getItem('users'));
}

document.getElementById('check-signup').onclick = function () {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	let isExistEmail = false;

	if (!validateEmail(email)) {
		alert('Email chưa đúng định dạng');
		return;
	}
	if (password.length < 6) {
		alert('Password chưa đủ mạnh');
		return;
	}

	for (let user of users) {
		if (user.email === email) {
			isExistEmail = true;
		}
	}

	if (isExistEmail === true) {
		alert('Email đã tồn tại');
	} else {
		alert('Đăng ký thành công');
		users.push({
			email: email,
			password: password,
		});

		localStorage.setItem('users', JSON.stringify(users));
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';
	}
};

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

///

document.getElementById("login-page").onclick = function(){
    window.location.href = "login.html";
  }
