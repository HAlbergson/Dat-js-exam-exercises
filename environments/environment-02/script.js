// ------------------------------------------ exercise 03 -----------------------------
"use strict";

window.addEventListener("load", initApp);

const animals = [];

function initApp() {
  console.log("Hi World");
  createAnimal("Bonobo", "monkey", 420);
  console.log(animals);
  document.querySelector("#create-form").addEventListener("submit", createFormSubmit);
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

function createFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  createAnimal(name, type, age);
  console.log(animals);
  showAnimals();
}

function showAnimals() {
  animals.sort(compareName);
  document.querySelector("#list-container tbody").innerHTML = "";
  for (const animal of animals) {
    const html = /*html*/ `
            <tr>
            <td>${animal.name}</td>
            <td>${animal.type}</td>
            <td>${animal.age}</td>
            </tr>`;
    document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
  }
}
function compareName(a, b) {
  return a.name.localCompare(b.name);
}
