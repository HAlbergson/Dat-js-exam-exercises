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
