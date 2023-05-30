let userImage;
let userName;


if (localStorage.getItem('userLogin') !== null){
    userImage = localStorage.getItem('userLogin');
    userName = localStorage.getItem('userName');
    console.log(userImage);
    console.log(userName);
    if(userImage === 'undefined'){
        document.getElementById('user-icon').innerHTML = `<i class="fa-solid fa-user"></i>`;
    }
    else{
        document.getElementById('user-icon').innerHTML = `<img src="${userImage}" alt="">`;
    };
    
    document.getElementById('user-name').innerHTML = `${userName}`;
}

if (localStorage.getItem('userLogin') === null){
    document.getElementById('user-icon').innerHTML = `<i class="fa-solid fa-user"></i>`;
    document.getElementById('user-name').innerHTML = `<a href="./login.html">Login</a>`;
}


///mobi menu

document.getElementById('mobi-menu').onclick = function(){
    let mobiMenu = document.getElementById('main-menu');

    if(mobiMenu.style.display == "none"){
        mobiMenu.style.display = "flex";
        this.style.borderRadius = "50%";
    }
    else{
        mobiMenu.style.display = "none";
        this.style.borderRadius = "0px";
    }
}