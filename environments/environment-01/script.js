// ----------------------------------------- exercise 01 -----------------------------------
// "use strict";

// window.addEventListener("load", initApp);

// let users = [];

// async function initApp() {
//   users = await getUser();
//   console.log(users);
//   createUser(users);
//   displayAdmins(users);
// }
// async function getUser() {
//   const response = await fetch("users.json");
//   const data = response.json();
//   return data;
// }

// function createUser(listOfUsers) {
//   for (const user of listOfUsers) {
//     const html = /*html*/ `
//     <li>${user.name} - ${user.active} - ${user.role}</li>
//     `;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//   }
// }
// function displayAdmins(users) {
//   const admins = users.filter((user) => user.role === "admin");
//   document.querySelector("#admin-count").textContent = admins.length;
// }
// ------------------------------------------- exercise 02 --------------------------------------------
// "use strict";

// window.addEventListener("load", initApp);
// let users = [];
// async function initApp() {
//   users = await getUser();
//   console.log("hi world");

//   createUserList(users);
//   displayRoleCount(users);
// }

// async function getUser() {
//   const response = await fetch("users.json");
//   const data = response.json();
//   console.log(data);
//   return data;
// }

// function createUserList(listOfUsers) {
//   for (const user of listOfUsers) {
//     const html = /*html*/ `
//     <li>${user.name} - ${user.active} - ${user.role}</li>`;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function displayRoleCount(users) {
//   const adminCount = users.filter((user) => user.role === "admin");
//   console.log(adminCount);
//   document.querySelector("#admin-count").textContent = adminCount.length;
//   const userCount = users.filter((user) => user.role === "user");
//   console.log(userCount);
//   document.querySelector("#user-count").textContent = userCount.length;
//   const guestCount = users.filter((user) => user.role === "guest");
//   console.log(guestCount);
//   document.querySelector("#guest-count").textContent = guestCount.length;
// }

// ------------------------------------------------ Exercise 04 ----------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// let users = [];

// async function initApp() {
//   users = await getUsers();

//   createUser("john", true, "guest");
// }

// async function getUsers() {
//   const response = await fetch("users.json");
//   const data = response.json();
//   console.log(data);
//   return data;
// }

// function displayActiveUsers(users) {
//   for (const user of users)
//     if (user.active === true) {
//       const html = /*html*/ `
//     <li>${user.name} ${user.role}</li>`;
//       document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//     }
// }

// function createUser(name, active, role) {
//   //   preventDeafaul();
//   const newUser = {
//     name: name,
//     active: active,
//     role: role,
//   };
//   users.push(newUser);

//   displayActiveUsers(users);
// }

"use strict";

window.addEventListener("load", initApp);

let users = [];

async function initApp() {
  console.log("hallo World");
  users = await getUsers();
  console.log(users);
  showUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = response.json();
  return data;
}

function showUsers() {
  const admins = filterAdmin();

  for (const user of admins) {
    const html = /*html*/ `
        <li>${user.name} ${user.active} ${user.role}</li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function filterAdmin() {
  const admins = users.filter((user) => user.role === "admin");
  return admins;
}
