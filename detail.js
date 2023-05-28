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
let detailName = productList[imgID].nameProduct;
document.getElementById('big-image').src = bigSrc;
document.getElementById('detail-product-name').innerHTML = detailName;

///choose amount to buy

let buyAmount = document.getElementById('buy-amount');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

buyAmount.innerHTML = 1;
let bNum = 1;
plus.onclick = function(){
    bNum +=1;
    buyAmount.innerHTML = bNum;
}
minus.onclick = function(){
    if (buyAmount.innerHTML == 1){
        bNum = 1;
        buyAmount.innerHTML = bNum;
    }
    else{
        bNum-=1;
        buyAmount.innerHTML = bNum;
    }
    
}

