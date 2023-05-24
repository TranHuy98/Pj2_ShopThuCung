//du lieu tam thoi
// let users = [{
//     "id": 1,
//     "first_name": "Lorilee",
//     "last_name": "Adame",
//     "email": "ladame0@guardian.co.uk",
//     "password": "12345678"
//   }, {
//     "id": 2,
//     "first_name": "Gannon",
//     "last_name": "Manwell",
//     "email": "gmanwell1@naver.com",
//     "password": "12345678"
//   }, {
//     "id": 3,
//     "first_name": "Christiana",
//     "last_name": "Dowtry",
//     "email": "cdowtry2@mapy.cz",
//     "password": "12345678"
//   }, {
//     "id": 4,
//     "first_name": "Warden",
//     "last_name": "Ansteys",
//     "email": "wansteys3@yahoo.com",
//     "password": "12345678"
//   }, {
//     "id": 5,
//     "first_name": "Claybourne",
//     "last_name": "Barbosa",
//     "email": "cbarbosa4@si.edu",
//     "password": "12345678"
//   }, {
//     "id": 6,
//     "first_name": "Zita",
//     "last_name": "Triner",
//     "email": "ztriner5@youku.com",
//     "password": "12345678"
//   }, {
//     "id": 7,
//     "first_name": "Orsa",
//     "last_name": "Pilcher",
//     "email": "opilcher6@surveymonkey.com",
//     "password": "12345678"
//   }, {
//     "id": 8,
//     "first_name": "Lyn",
//     "last_name": "Fockes",
//     "email": "lfockes7@answers.com",
//     "password": "12345678"
//   }, {
//     "id": 9,
//     "first_name": "Harv",
//     "last_name": "Olifaunt",
//     "email": "holifaunt8@jalbum.net",
//     "password": "12345678"
//   }, {
//     "id": 10,
//     "first_name": "Nikita",
//     "last_name": "Duncanson",
//     "email": "nduncanson9@harvard.edu",
//     "password": "123"
//   }];


//du lieu tam thoi

// let users;

// if (JSON.parse(localStorage.getItem('users')) !== null) {
// 	users = JSON.parse(localStorage.getItem('users'));
// }

let users = JSON.parse(localStorage.getItem('users'));


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


//check policy




//check Login

  let isEmailExist = false;
  let isPasswordTrue = false;
  let isLoginSuccess = false;
  let isLoginInfoFull = true;

  document.getElementById("check-login").addEventListener("click", checkLogin);

  function checkLogin(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    for(let user of users){

        if(email === "" || password === ""){
            isLoginInfoFull = false;
            break;
        }
        if(user.email === email && user.password === password){
            isLoginSuccess = true;
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
            window.location.href = "shop-list.html";
        }
        else{
            alert(`Thong tin tai khoan khong chinh xac`);
        }
    }    
  }


  ///

  document.getElementById("signup-page").onclick = function(){
    window.location.href = "signup.html";
  }