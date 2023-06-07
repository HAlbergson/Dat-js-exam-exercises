// ----------------------------- evxercise 06 --------------------------------------
// "use strict";

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log(products);
//   showProducts(products);
//   document.querySelector("#create-form").addEventListener("submit", createProduct);
// }
// const products = [
//   { name: "kasse", price: 30, inStock: true },
//   { name: "box", price: 50, inStock: true },
//   { name: "bord", price: 100, inStock: false },
// ];

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";

//   for (const product of products)
//     if (product.inStock === true) {
//       console.log(product);
//       const html = /*html*/ `
//         <li> ${product.name} ${product.price} ${product.inStock} </li>`;
//       document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//     }
// }

// function createProduct(event) {
//   event.preventDefault();

//   const productName = document.querySelector("#product-name").value;
//   const productPrice = Number(document.querySelector("#product-price").value);
//   const inStock = document.querySelector("#stock").checked;

//   const newProduct = { name: productName, price: productPrice, inStock: inStock };
//   products.push(newProduct);

//   showProducts(products);

//   document.querySelector("#product-name").value = "";
//   document.querySelector("#product-price").value = "";
//   document.querySelector("#stock").checked = false;
// }

// ---------------------------------------- exercise 07 -------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const products = [
//   { name: "kasse", price: 30, inStock: true },
//   { name: "box", price: 50, inStock: false },
//   { name: "bord", price: 100, inStock: true },
// ];

// function initApp() {
//   showProducts(products);
//   document.querySelector("#create-form").addEventListener("submit", createProduct);
// }

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";
//   products.sort((a, b) => b.inStock - a.inStock);
//   for (const product of products) {
//     const html = /*html*/ `
//     <li>${product.name} ${product.price} ${product.inStock}</li>`;
//     document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//   }
// }

// function createProduct(event) {
//   console.log("createProduct");
//   event.preventDefault();

//   const name = document.querySelector("#product-name").value;
//   const price = Number(document.querySelector("#product-price").value);
//   const inStock = document.querySelector("#stock").checked;

//   const newProduct = {
//     name: name,
//     price: price,
//     inStock: inStock,
//   };
//   products.push(newProduct);

//   showProducts(products);
// }

// ----------------------------------------- exercise 08 ----------------------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const products = [
//   { name: "Nintendo Switch", price: [2500], inStock: true },
//   { name: "Playstation 5", price: [5200], inStock: false },
//   { name: "Xbox Series X", price: [4500], inStock: true },
// ];

// function initApp() {
//   showProducts(products);
//   document.querySelector("#select-sort-by").addEventListener("change", sortByProducts);
// }

// function showProducts(products) {
//   document.querySelector("#list-container").innerHTML = "";
//   for (const product of products) {
//     const html = /*html*/ `
//   <li>${product.name} ${product.price} ${product.inStock}</li>`;
//     document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortByProducts() {
//   const sortBy = document.querySelector("#select-sort-by").value;

//   if (sortBy === "name") {
//     products.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortBy === "price") {
//     products.sort((a, b) => a.price - b.price);
//   } else if (sortBy === "inStock") {
//     products.sort((a, b) => a.inStock - b.inStock);
//   }

//   showProducts(products);
// }
