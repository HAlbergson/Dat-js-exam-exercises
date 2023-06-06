// // ------------------------------------------ exercise 03 -----------------------------
// "use strict";

// window.addEventListener("load", initApp);

// const animals = [];

// function initApp() {
//   createAnimal("Bo", "abe", 22); // test af del 1
//   console.log(animals); // test af del 1
//   // event på formular
//   document.querySelector("#create-form").addEventListener("submit", createFormSubmitted);
// }

// function createAnimal(name, type, age) {
//   // nyt animal objekt med værdier fra argumenter
//   const animal = {
//     name: name,
//     type: type,
//     age: age,
//   };
//   animals.push(animal); // det nye objekt tilføjes den globale liste, animals
//   console.log(animal);
//   return animal;
// }

// function createFormSubmitted(event) {
//   event.preventDefault(); // prevent default submit event

//   const form = event.target; // reference til formularen
//   // få fat i værdier fra formular
//   const name = form.name.value;
//   const type = form.type.value;
//   const age = form.age.value;
//   // kald createAnimal med værdier fra formular
//   createAnimal(name, type, age);
//   console.log(animals); // test animals
//   // sørg for at alle animals vises (+ det nye) ved at kalde showAnimals
//   showAnimals();
// }

// function showAnimals() {
//   // sort animals by name
//   animals.sort(compareName);
//   console.log(animals);
//   // reset tbody
//   document.querySelector("#list-container tbody").innerHTML = "";

//   for (const animal of animals) {
//     const html = /*html*/ `
//             <tr>
//                 <td>${animal.name}</td>
//                 <td>${animal.type}</td>
//                 <td>${animal.age}</td>
//             </tr>
//         `;
//     document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
//   }
// }

// function compareName(a, b) {
//   return a.name.localeCompare(b.name);
// }

// ----------------------------------- Exercise 05 -----------------------------------

"use strict";

window.addEventListener("load", initApp);

let animals = [
  { name: "George", type: "Lion", age: 5 },
  { name: "Michael", type: "Cougar", age: 8 },
  { name: "Henry", type: "Bear", age: 2 },
];

function initApp() {
  showAnimal(animals);
  document.querySelector("#create-form").addEventListener("submit", createFormSubmitted);
}

function showAnimal(animals) {
  animals.sort((a, b) => a.age - b.age);
  document.querySelector("#list-container tbody").innerHTML = "";
  for (const animal of animals) {
    const html = /*html*/ `
      <tr>
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
      </tr>
    `;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
  return animal;
}
function createFormSubmitted(event) {
  event.preventDefault(); // forhindrer standard submit-hændelse

  const form = event.target; // reference til formularen
  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  createAnimal(name, type, age);
  showAnimal(animals);
}
