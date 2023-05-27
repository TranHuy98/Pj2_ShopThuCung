// change big image src to the small image src on the list

let productList = JSON.parse(localStorage.getItem('MangSanPham'));

console.log(productList);



let listImgBox = document.querySelectorAll('.list-image-item');

console.log(listImgBox);

let listImg = document.querySelectorAll('.list-image-item img');

console.log(listImg);

let changeImage = function(){
    document.getElementById('big-image').src = this.src;  
}

for(let i=0;i<listImg.length; i++){

    listImg[i].addEventListener('click', changeImage);

}


// render

const params = new URLSearchParams(window.location.search);
let imgID = params.get('id') ?? 0;
console.log(imgID);
let bigSrc = productList[imgID].img;
console.log(bigSrc);
document.getElementById('big-image').src = bigSrc;


