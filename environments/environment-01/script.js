"use strict";

window.addEventListener("load", initApp);

let users = [];

async function initApp() {
  users = await getUser();
  console.log(users);
  createUser();
}

async function getUser() {
  const response = await fetch("users.json");
  const data = response.json();
  return data;
}

function createUser() {
  let html = "";
  for (const user of users) {
    html += /*html*/ `
    <li>${user.name} - ${user.active} - ${user.role}</li>
    `;
  }
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}
