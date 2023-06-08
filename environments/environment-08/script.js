// -------------------------------------------------------------- Exercise 22 ----------------------------------------------

// "use strict";

// let songs = [];
// window.addEventListener("load", initApp);

// async function initApp() {
//   songs = await getSongs();
//   console.log(songs);
//   showSongs();
// }

// async function getSongs() {
//   const response = await fetch("playlist.json");
//   const data = await response.json();
//   return data;
// }

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = " ";
//   for (const song of songs) {
//     const html = /*html*/ `
// <li>${song.artist} ${song.title} ${song.duration} <button>Remove</button></li>
// `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//     document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
//   }
// }

// function removeSong(songToRemove) {
//   const i = songs.findIndex((song) => song.title === songToRemove.title);
//   if (i !== -1) {
//     songs.splice(i, 1);
//     showSongs();
//   }
// }

// ------------------------------------------------ Exercise 23 ----------------------------------------------

"use strict";

window.addEventListener("load", initApp);

const songs = [
  { artist: "din mor", title: "er sød", duration: "4:20" },
  { artist: "din far", title: "er sur", duration: "5:20" },
  { artist: "din søster", title: "er sød", duration: "3:20" },
  { artist: "din bror", title: "er smuk", duration: "2:20" },
];

function initApp() {
  console.log("Hallo world!!");
  showSongs(songs);
}

function showSongs(songs) {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    const html = /*html*/ `
  <li>${song.artist} ${song.title} ${song.duration}<button>upvote</button></li>
  `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}
