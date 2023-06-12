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

// "use strict";

// window.addEventListener("load", initApp);

// const songs = [
//   { artist: "din mor", title: "er sød", duration: "4:20" },
//   { artist: "din far", title: "er sur", duration: "5:20" },
//   { artist: "din søster", title: "er sød", duration: "3:20" },
//   { artist: "din bror", title: "er smuk", duration: "2:20" },
// ];

// function initApp() {
//   console.log("Hallo world!!");
//   showSongs(songs);
// }

// function showSongs(songs) {
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of songs) {
//     const html = /*html*/ `
//   <li>${song.artist} ${song.title} ${song.duration}<button>upvote</button></li>
//   `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// ------------------------------------- exercise 22 ------------------------------------
// "use strict";

// window.addEventListener("load", initApp);

// let songs = [];

// async function initApp() {
//   console.log("Hallo World");
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
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of songs) {
//     const html = /*html*/ `
//     <li>${song.artist} ${song.title} ${song.duration} <button>upvote</button></li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//     document.querySelector("#songlist li:last-child button").addEventListener("click", upVote);
//     const songID = songs.indexOf(song);
//     function upVote() {
//       if (songID !== 0) {
//         songs.splice(songID, 1);
//         songs.splice(songID - 1, 0, song);
//         showSongs();
//       }
//     }
//   }
// }

// function removeSong(songToRemove) {
//   const i = songs.findIndex((song) => song.title === songToRemove.title);
//   if (i !== -1) {
//     songs.splice(i, 1);
//     showSongs();
//   }
// }

// -------------------------------------- exercise 24 ---------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const songs = [
//   { artist: "Bon Iver", title: "flume", duration: "4:23" },
//   { artist: "Bon Iver", title: "skinny love", duration: "3:23" },
//   { artist: "rhcp", title: "snow", duration: "4:20" },
// ];

// function initApp() {
//   console.log("hallo World");
//   showSongs();
//   document.querySelector("#add-song-form").addEventListener("submit", sumbitForm);
//   document.querySelector("#sort-songs-form").addEventListener("change", sortSongs);
// }

// function sumbitForm(event) {
//   event.preventDefault();

//   const form = event.target;

//   const artist = form.name.value;
//   const title = form.title.value;
//   const duration = Number(form.duration.value);

//   createSong(artist, title, duration);
//   console.log(songs);
//   showSongs();
// }

// function createSong(artist, title, duration) {
//   const newSong = { artist, title, duration };
//   songs.push(newSong);
// }

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of songs) {
//     const html = /*html*/ `
//         <li>${song.artist} ${song.title} ${song.duration}</li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortSongs(event) {
//   if (event.target.value === "artist") {
//     songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   } else {
//     songs.sort((a, b) => a.title.localeCompare(b.title));
//   }
//   showSongs();
// }

// -------------------------------------------------------- exercise 24 ----------------------------------------
// "use strict";
// window.addEventListener("load", initApp);

// let songs = [];

// async function initApp() {
//   console.log("Hallo World");
//   songs = await getSongs();
//   console.log(songs);
//   showSongs();
//   document.querySelector("#sort-songs-form").addEventListener("change", sortSongs);
// }

// async function getSongs() {
//   const response = await fetch("playlist.json");
//   const data = await response.json();
//   return data;
// }

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of songs) {
//     const html = /*html*/ `
//         <li>${song.artist} ${song.title} ${song.duration}</li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }
// function sortSongs(event) {
//   if (event.target.value === "artist") {
//     songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   } else {
//     songs.sort((a, b) => a.title.localeCompare(b.title));
//   }
//   showSongs();
// }
