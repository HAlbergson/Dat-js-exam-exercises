// ----------------------------------------------------------- Exercise 11 -----------------------------------------

// import { courses } from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   //   showCourses(courses);
//   createNewCourse("hjalte er bedst", 10, "Hjalte");
// }

// function showCourses(courses) {
//   for (const course of courses) {
//     const html = /*html*/ `
//         <li>${course.name} ${course.ectsPoints} ${course.teacher}</li>`;
//     document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
//   }
// }

// function createNewCourse(name, ectsPoints, teacher) {
//   const newCourse = { name: name, ectsPoints: ectsPoints, teacher: teacher };
//   courses.push(newCourse);
//   showCourses(courses);
// }

// ------------------------------------------------------ Exercise 12 ---------------------------------------------

// import { courses } from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   showCourses(courses);
// }

// function showCourses(courses) {
//   sortByEctsPoints();
//   for (const course of courses) {
//     const html = /*html*/ `
//         <li>${course.name} ${course.ectsPoints}</li>`;
//     document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortByEctsPoints() {
//   courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
// }

// ---------------------------------------- exercise 13 -----------------------------------------------

// import { courses } from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   showCourses(courses);
//   document.querySelector("#select-filter-ects").addEventListener("change", filter);
// }

// function showCourses(courses) {
//     document.querySelector("#courses-list").innerHTML=""
//   for (const course of courses) {
//     const html = /*html*/ `
//     <li>${course.name} ${course.ectsPoints}</li>`;
//     document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
//   }
// }
// function filter(event) {
//   const selectedEcts = event.target.value;
//   const filteredCourses = courses.filter((course) => course.ectsPoints.toString() === selectedEcts);
//   showCourses(filteredCourses);
// }

// --------------------------------------------------------- Exercise 14 --------------------------------------

// import { courses } from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   // showCourses(courses);
//   sortByStartDate(courses);
// }

// function showCourses(courses) {
//   for (const course of courses) {
//     const html = /*html*/ `
//     <li>${course.name} ${course.ectsPoints} ${course.startDate}</li>`;
//     document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortByStartDate() {
//   courses.sort((a, b) => a.startDate.localeCompare(b.startDate));
//   showCourses(courses);
// }

