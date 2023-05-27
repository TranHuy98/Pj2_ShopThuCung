///list tam thoi

export const productList = [
    {
        id: 0,
        nameProduct: "Sản phẩm 1",
        img: "./assets/detail/shop-big-01.png",
    },
    {
        id: 1,
        nameProduct: "Sản phẩm 2",
        img: "./assets/detail/shop-big-02.png",
    },
    {
        id: 2,
        nameProduct: "Sản phẩm 3",
        img: "./assets/detail/shop-big-03.png",
    },
    {
        id: 3,
        nameProduct: "Sản phẩm 4",
        img: "./assets/detail/shop-big-04.png",
    },
    {
      id: 4,
        nameProduct: "Sản phẩm 5",
        img: "./assets/detail/shop-big-05.png",
    },
    {
        id: 5,
        nameProduct: "Sản phẩm 6",
        img: "./assets/detail/shop-big-01.png",
    },
    {
        id: 6,
        nameProduct: "Sản phẩm 7",
        img: "./assets/detail/shop-big-03.png",
    },
    {
        id: 7,
        nameProduct: "Sản phẩm 8",
        img: "./assets/detail/shop-big-05.png",
    },
    { 
        id: 8,
        nameProduct: "Sản phẩm 9",
        img: "./assets/detail/shop-big-02.png",
    }
];



localStorage.setItem('MangSanPham', JSON.stringify(productList));

const containerProduct = document.getElementById("product-list");

const renderProducts = (productList) => {
  let stringHTML = "";

  for(let product of productList){
      // console.log(product)
      stringHTML += `
      <div class="product-item">
              <div class="tag">Offer</div>

              <div class="product-image">
                <img src="./assets/shop-list/1.jpg" alt="product image" />
                <div class="detail">
                  <button>+</button>
                  <div class="detail-link">View detail</div>
                </div>
              </div>
              <div class="product-name" id="product-name">${product.nameProduct}</div>
              <div class="product-price">
                <span class="new-price">$25.00</span>
                <span class="old-price">$30.00</span>
              </div>

              <div class="rating">
                <div class="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div class="number">(50)</div>
              </div>
            </div>
      `
  }

  containerProduct.innerHTML = stringHTML;
}

const params = new URLSearchParams(window.location.search);
let page = params.get('page') ?? 1;

const end = productList.length - 1 - (page-1)*4 + 1;
const start = end - 4;
// console.log(start);
// console.log(end);

const test = productList.slice(start, end).reverse()

renderProducts(test);

let productNameList = document.getElementsByClassName('product-name');

console.log(productNameList);

console.log('1');

let pID;

for(let nameItem of productNameList){
    nameItem.onclick = function (){

    let pName = nameItem.innerHTML;
    console.log(pName);

    for(let i=0;i<productList.length;i++){
      if (productList[i].nameProduct === pName){
        console.log(i);
        pID = i;
        break;
      }
    };
    window.location.href = `detail.html?id=${pID}`;
  }
}
