// exercise 10
import { teachers } from "./teachers.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(teachers);
  showTeachers(teachers);
}

function showTeachers(listOfTeachers) {
  for (const teacher of listOfTeachers) {
    const html = /*html*/ ` 
        <li> ${teacher.name} ${teacher.email}</li>`;
    document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", html);
  }
}
