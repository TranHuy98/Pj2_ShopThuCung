let users;

if (JSON.parse(localStorage.getItem('MangNguoiDung')) !== null) {
	users = JSON.parse(localStorage.getItem('MangNguoiDung'));
};

if (JSON.parse(localStorage.getItem('MangNguoiDung')) === null){
   users = [{
	   "id": 1,
	   "first_name": "Lorilee",
	   "last_name": "Adame",
	   "email": "ladame0@guardian.co.uk",
	   "password": "12345678"
	 }, {
	   "id": 2,
	   "first_name": "Gannon",
	   "last_name": "Manwell",
	   "email": "gmanwell1@naver.com",
	   "password": "12345678"
	 }, {
	   "id": 3,
	   "first_name": "Christiana",
	   "last_name": "Dowtry",
	   "email": "cdowtry2@mapy.cz",
	   "password": "12345678"
	 }, {
	   "id": 4,
	   "first_name": "Warden",
	   "last_name": "Ansteys",
	   "email": "wansteys3@yahoo.com",
	   "password": "12345678"
	 }, {
	   "id": 5,
	   "first_name": "Claybourne",
	   "last_name": "Barbosa",
	   "email": "cbarbosa4@si.edu",
	   "password": "12345678"
	 }, {
	   "id": 6,
	   "first_name": "Zita",
	   "last_name": "Triner",
	   "email": "ztriner5@youku.com",
	   "password": "12345678"
	 }, {
	   "id": 7,
	   "first_name": "Orsa",
	   "last_name": "Pilcher",
	   "email": "opilcher6@surveymonkey.com",
	   "password": "12345678"
	 }, {
	   "id": 8,
	   "first_name": "Lyn",
	   "last_name": "Fockes",
	   "email": "lfockes7@answers.com",
	   "password": "12345678"
	 }, {
	   "id": 9,
	   "first_name": "Harv",
	   "last_name": "Olifaunt",
	   "email": "holifaunt8@jalbum.net",
	   "password": "12345678"
	 }, {
	   "id": 10,
	   "first_name": "Nikita",
	   "last_name": "Duncanson",
	   "email": "nduncanson9@harvard.edu",
	   "password": "123"
	 }];
};



localStorage.setItem('MangNguoiDung', JSON.stringify(users));


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
  };




///


// let users = [];
// if (JSON.parse(localStorage.getItem('users')) !== null) {
// 	users = JSON.parse(localStorage.getItem('users'));
// }

///

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
  };
