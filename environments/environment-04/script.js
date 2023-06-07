// ---------------------------------------------- exercise 10 -------------------------------
import { teachers } from "./teachers.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(teachers);
  // showTeachers(teachers);
  sortByEmail(teachers);
  // sortByName(teachers);
}

function showTeachers(teachers) {
  for (const teacher of teachers) {
    const html = /*html*/ ` 
        <li> ${teacher.name} ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}

function sortByName() {
  teachers.sort((a, b) => a.name.localeCompare(b.name));
  showTeachers(teachers);
}
function sortByEmail() {
  teachers.sort((a, b) => a.email.localeCompare(b.email));
  showTeachers(teachers);
}
