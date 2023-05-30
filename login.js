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


//show-hide Password


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


//check policy




//check Login

  let isEmailExist = false;
  let isPasswordTrue = false;
  let isLoginSuccess = false;
  let isLoginInfoFull = true;

  let checkLogin = document.getElementById("check-login");

  checkLogin.onclick =  function() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    for(let user of users){

        if(email === "" || password === ""){
            isLoginInfoFull = false;
            break;
        }
        if(user.email === email && user.password === password){
            isLoginSuccess = true;
            localStorage.setItem("userLogin", user.img );
            localStorage.setItem("userName", `${user.first_name} ${user.last_name}` );
            console.log(user.img);
            break;
            
        }
    }

    if(!isLoginInfoFull){
        document.getElementById("login-alert").style.display = "block";
    }
    else{
        document.getElementById("login-alert").style.display = "none";
        
        if(isLoginSuccess){
            alert(`Dang nhap thanh cong`);
            isLoginSuccess = false;
            window.location.href = "index.html";
        }
        else{
            alert(`Thong tin tai khoan khong chinh xac`);
        }
    }    
  };


  ///

  document.getElementById("signup-page").onclick = function(){
    window.location.href = "signup.html";
  };

  document.getElementById('user-icon').innerHTML = `<i class="fa-solid fa-user"></i>`;
    document.getElementById('user-name').innerHTML = `<a href="./login.html">Login</a>`;