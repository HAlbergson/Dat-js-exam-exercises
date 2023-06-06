// evxercise 07
"use strict";

const products = [
  {
    name: "kasse",
    price: 30,
    inStock: true,
  },
  { name: "box", price: 50, inStock: true },
  { name: "bord", price: 100, inStock: false },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(products);
  showProducts(products);
  //   document.querySelector("#select-sort-by").addEventListener("change", sortByProducts);
}

function showProducts(listOfProducts) {
  for (const product of listOfProducts) {
    console.log(product);
    const html = /*html*/ `
        <li> ${product.name} ${product.price} ${product.inStock} </li>`;
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html);
  }
}

// ===================== Virker Ikke =========================
// function sortByProducts() {
//   const sortValue = document.querySelector("#select-sory-by").value;
//   const products = showProducts();
//   let results = [];
//   if (sortValue === price) {
//     results = products.sort(products);
//   } else if (sortValue === inStock) {
//     results = products.sort();
//   } else {
//     results = products.sort((product) => product[sortValue] === "true");
//   }
//   showProducts(results);
// }
