///list tam thoi

const productList = [
    {
        nameProduct: "Sản phẩm 1",
    },
    {
        nameProduct: "Sản phẩm 2",
    },
    {
        nameProduct: "Sản phẩm 3",
    },
    {
        nameProduct: "Sản phẩm 4",
    },
    {
        nameProduct: "Sản phẩm 5",
    },
    {
        nameProduct: "Sản phẩm 6",
    },
    {
        nameProduct: "Sản phẩm 7",
    },
    {
        nameProduct: "Sản phẩm 8",
    },
    {
        nameProduct: "Sản phẩm 9",
    }
];

const containerProduct = document.getElementById("product-list");
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