function createProduct(parent, imgUrl, productTitle, textPrice) {
  const product = document.createElement("div");
  product.className = "product";

  createImg(product, imgUrl, productTitle);
  createText(product, productTitle, textPrice);
  parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}



const wrapperProducts = document.querySelector(".wrapper__products");

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price);
  });
}

// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return renderProducts(data);
};

getProductsList();


let counter = 1;
const totImg = 3;
const img1 = "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
const img2 = "https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
const img3 = "https://media.istockphoto.com/photos/fits-perfect-picture-id938463764" 

const heroImage = document.querySelector(".overlay")
setInterval(() => {
  heroImage.style.backgroundImage = `url(${eval("img" + counter)})`
  counter < totImg ? counter++ : counter = 1
}, 3000);  