// query product element
const divProductsEle = document.querySelector("#product")
console.log(divProductsEle)

// add product


function product (id,name,color,price,stock) {
    this.productId = id;
    this.productName = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}

let products = []


let product1 = new product("I6001","iphon6","green",3000,20);
let product2 = new product("I6002","iphon6","white",3000,20);
let product3 = new product("I6003","iphon6","red",3000,20);

products.push(product1,product2,product3);

console.log(products)













//1 create div element and its id attribute

const divProductEle = document.createElement('div');
// <div> </div>

divProductEle.setAttribute("id",product.productId);
// <div id = 'P001' </div>


const pProdcutIdEle = document.createElement('p')
pProdcutIdEle.textContent=product.productId
// <p> P001 </p>

const pProdcutNameEle = document.createElement('p')
pProdcutNameEle.textContent=product.productName
// <p> iphone </p>


const pProdcutPriceEle = document.createElement('p')
pProdcutPriceEle.textContent=product.price + " bath";
// <p> 10000 </p>


//ตอนนี้ยังเป็นโนตลอยๆอยู่


//add p to div

divProductEle.appendChild(pProdcutIdEle);

// --> <div id='p001'> <p> p001 </p> </div>

divProductEle.appendChild(pProdcutNameEle);
divProductEle.appendChild(pProdcutPriceEle);



// add div to tree (add product ot products)
divProductsEle.appendChild(divProductEle);
