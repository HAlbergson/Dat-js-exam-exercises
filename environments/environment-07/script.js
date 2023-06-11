// ----------------------------------------------- Exercise 21 ----------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const students = [];

// function initApp() {
//   console.log("is running");
//   document.querySelector("#create-student-form").addEventListener("submit", submitNewStudent);
//   console.log(students);
// }

// function submitNewStudent(event) {
//   event.preventDefault();

//   const form = event.target;

//   const name = form.name.value;
//   const email = form.email.value;
//   const age = Number(form.age.value);
//   createStudent(name, email, age);
//   console.log(students);
//   showStudents(students);
// }

// function createStudent(name, email, age) {
//   const student = { name, email, age };
//   students.push(student);
// }

// function showStudents(students) {
//   document.querySelector("#students-table-body").innerHTML = "";
//   students.sort((a, b) => a.name.localeCompare(b.name));
//   for (const student of students)
//     if (student.age > 18 - 1) {
//       const html = /*html*/ `

//             <td>${student.name}</td>
//             <td>${student.email}</td>
//             <td>${student.age}</td>`;
//       document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
//     }
// }

// ---------------------------------------------- Exercise 20 --------------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const students = [];

// function initApp() {
//   console.log("hallo world");
//   document.querySelector("#create-student-form").addEventListener("submit", submitNewStudent);
// }

// function submitNewStudent(event) {
//   event.preventDefault();

//   const form = event.target;

//   const name = form.name.value;
//   const email = form.email.value;
//   const age = Number(form.age.value);

//   if (checkEmail(email)) {
//     createStudent(name, email, age);
//     console.log(students);
//   } else {
//     console.log("Invalid email address");
//   }
//   removeInvalidStudents();
// }

// function createStudent(name, email, age) {
//   const student = { name, email, age };
//   students.push(student);
// }

// function checkEmail(email) {
//   if (email.length >= 4 && email.endsWith("@stud.kea.dk")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function removeInvalidStudents() {
//   for (let i = students.length - 1; i >= 0; i--) {
//     if (!checkEmail(students[i].email)) {
//       students.splice(i, 1);
//     }
//   }
// }

// --------------------------------------------- Exercise 20 ------------------------------------------------

// ("use strict");

// window.addEventListener("load", initApp);

// const students = [];

// function initApp() {
//   console.log("Hallo World!!!");
//   document.querySelector("#create-student-form").addEventListener("submit", submitNewStudent);
// }

// function submitNewStudent(event) {
//   event.preventDefault();
//   const form = event.target;

//   const name = form.name.value;
//   const email = form.email.value;
//   const age = Number(form.age.value);

//   createStudent(name, email, age);
//   console.log(students);
//   showStudents(students);
// }

// function createStudent(name, email, age) {
//   const student = { name, email, age };
//   students.push(student);
// }

// function showStudents(students) {
//   document.querySelector("#students-table-body").innerHTML = "";
//   students.sort((a, b) => a.age - b.age);
//   for (const student of students) {
//     const html = /*html*/ `
//           <tr>
//             <td>${student.name}</td>
//             <td>${student.email}</td>
//             <td>${student.age}</td>
//           </tr>`;
//     document.querySelector("#students-table-body").insertAdjacentHTML("beforeend", html);
//   }
// }
