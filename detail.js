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

///choose amount to buy and calculate sum price

let buyAmount = document.getElementById('buy-amount');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let sumPrice = document.getElementById('sum-price');
let newPrice = document.getElementById('new-price').innerHTML;
let oldPrice = document.getElementById('old-price').innerHTML;

console.log(newPrice);

buyAmount.innerHTML = 1;
let bNum = 1;
plus.onclick = function(){
    bNum +=1;
    buyAmount.innerHTML = bNum;
    sumPrice = bNum*newPrice;
    document.getElementById('sum-price').innerHTML = sumPrice;
}
minus.onclick = function(){
    if (buyAmount.innerHTML == 1){
        bNum = 1;
        buyAmount.innerHTML = bNum;
        sumPrice = bNum*newPrice;
        document.getElementById('sum-price').innerHTML = sumPrice;
    }
    else{
        bNum-=1;
        buyAmount.innerHTML = bNum;
        sumPrice = bNum*newPrice;
        document.getElementById('sum-price').innerHTML = sumPrice;
    }
    
}

document.getElementById('add-to-cart').onclick = function (){

    let userName = localStorage.getItem('userName');
    console.log(userName);
    if(userName === 'undefined' || userName === null){
        alert('not ok');
    }
    else{
        alert('ok');
    }
}