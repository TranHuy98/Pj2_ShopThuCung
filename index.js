let userImage;
let userName;


if (localStorage.getItem('userLogin') !== null){
    userImage = localStorage.getItem('userLogin');
    userName = localStorage.getItem('userName');
    console.log(userImage);
    console.log(userName);
    document.getElementById('user-icon').innerHTML = `<img src="${userImage}" alt="">`;
    document.getElementById('user-name').innerHTML = `${userName}`;
}

if (localStorage.getItem('userLogin') === null){
    document.getElementById('user-icon').innerHTML = `<i class="fa-solid fa-user"></i>`;
    document.getElementById('user-name').innerHTML = `<a href="./login.html">Login</a>`;
}