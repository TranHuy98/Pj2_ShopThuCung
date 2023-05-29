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
        "password": "12345678",
        "img": "./assets/homepage/1.png",
      }, {
        "id": 2,
        "first_name": "Gannon",
        "last_name": "Manwell",
        "email": "gmanwell1@naver.com",
        "password": "12345678",
        "img": "./assets/homepage/2.png",
      }, {
        "id": 3,
        "first_name": "Christiana",
        "last_name": "Dowtry",
        "email": "cdowtry2@mapy.cz",
        "password": "12345678",
        "img": "./assets/homepage/3.png",
      }, {
        "id": 4,
        "first_name": "Warden",
        "last_name": "Ansteys",
        "email": "wansteys3@yahoo.com",
        "password": "12345678",
        "img": "./assets/homepage/4.png",
      }, {
        "id": 5,
        "first_name": "Claybourne",
        "last_name": "Barbosa",
        "email": "cbarbosa4@si.edu",
        "password": "12345678",
        "img": "./assets/homepage/5.png",
      }, {
        "id": 6,
        "first_name": "Huy",
        "last_name": "Tran",
        "email": "huy123@gmail.com",
        "password": "12345678",
        "img": "./assets/homepage/6.png",
      } 
    ];
};



localStorage.setItem('MangNguoiDung', JSON.stringify(users));

let togglePassword = document.getElementById('toggle-password-button');

togglePassword.onclick =  function() {   

  
  let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
  };

  let togglePassword2 = document.getElementById('toggle-password-button2');

togglePassword2.onclick =  function() {   

  
  let passwordInput = document.getElementById("confirm-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword2.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
        passwordInput.type = "password";
        togglePassword2.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
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
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const confirmPass = document.getElementById('confirm-password').value;
	let isExistEmail = false;

	if(firstName.length>255 || lastName.length>255){
		alert('Tên không được dài hơn 255 kí tự!');
		return;
	}
	if (!validateEmail(email)) {
		alert('Email chưa đúng định dạng');
		return;
	}
	if (password.length < 8) {
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
	}
	else if(confirmPass != password){
		alert('Password chưa trùng khớp!')
	} else {
		alert('Đăng ký thành công');
		let newLength = users.length + 1;
		console.log(newLength);
		users.push({
			id: newLength,
			first_name: firstName,
			last_name: lastName,
			email: email,
			password: password,
		});

		localStorage.setItem('MangNguoiDung', JSON.stringify(users));
		document.getElementById('email').value = '';
		document.getElementById('password').value = '';
		document.getElementById('confirm-password').value = '';
		document.getElementById('first-name').value = '';
		document.getElementById('last-name').value = '';

    window.location.href = "login.html";
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
