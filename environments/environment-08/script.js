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
//   { artist: "din mor", title: "er sød", duration: "4:20", vote: 0 },
//   { artist: "din far", title: "er sur", duration: "5:20", vote: 0 },
//   { artist: "din søster", title: "er sød", duration: "3:20", vote: 0 },
//   { artist: "din bror", title: "er smuk", duration: "2:20", vote: 0 },
// ];

// function initApp() {
//   showSongs(songs);
// }

// function showSongs(songs) {
//   document.querySelector("#songlist").innerHTML = "";

//   songs.sort((a, b) => b.vote - a.vote);
//   for (const song of songs) {
//     const html = /*html*/ `
//       <li>${song.artist} ${song.title} ${song.duration}<button>upvote</button></li>
//     `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//     document.querySelector("#songlist li:last-child button").addEventListener("click", () => upVoteButton(song));
//   }
// }

// function upVoteButton(song) {
//   console.log(song);
//   song.vote++;
//   showSongs(songs);
//   console.log(songs);
// }

// ---------------------------------------------------- Exercise 24 ---------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const songs = [
//   { artist: "adin mor", title: "cer sød", duration: "4:20" },
//   { artist: "ddin far", title: "ver sur", duration: "5:20" },
//   { artist: "cdin søster", title: "her sød", duration: "3:20" },
//   { artist: "kdin bror", title: "eer smuk", duration: "2:20" },
// ];

// function initApp() {
//   console.log("World is Running");
//   showSonglist(songs);
//   document.querySelector("#add-song-form").addEventListener("submit", submitForm);
//   document.querySelector("#sort-songs-form").addEventListener("change", sortByClicked);
// }

// function submitForm(event) {
//   event.preventDefault();
//   const form = event.target;

//   const artist = form.name.value;
//   const title = form.title.value;
//   const duration = form.duration.value;

//   createSong(artist, title, duration);
//   showSonglist(songs);
// }

// function createSong(artist, title, duration) {
//   const song = { artist, title, duration };

//   songs.push(song);
// }

// function showSonglist(songs) {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of songs) {
//     const html = /*html*/ `
//     <li>${song.artist} ${song.title} ${song.duration}</li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortByClicked(event) {
//   if (event.target.value == "artist") {
//     songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   } else {
//     songs.sort((a, b) => a.title.localeCompare(b.title));
//   }
//   showSonglist(songs);
// }

// ---------------------------------------------- Exercise 24 ------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// const songs = [
//   { artist: "poamigselv", title: "jeg er bedst", duration: "3:56" },
//   { artist: "mighs", title: "bedsteste venner", duration: "3:36" },
//   { artist: "spørgv", title: "sutt", duration: "3:26" },
// ];

// function initApp() {
//   console.log("noobs");

//   showSongList();

//   document.querySelector("#add-song-form").addEventListener("submit", submitForm);
//   document.querySelector("#sort-songs-form").addEventListener("change", sortBy);
// }
// function submitForm(event) {
//   event.preventDefault();

//   const form = event.target;

//   const artist = form.name.value;
//   const title = form.title.value;
//   const duration = form.duration.value;

//   addNewSongToSongs(artist, title, duration);
//   console.log(songs);
//   showSongList();
// }

// function addNewSongToSongs(artist, title, duration) {
//   const newSong = { artist, title, duration };
//   songs.push(newSong);
// }

// function showSongList() {
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of songs) {
//     const html = /*html*/ `
//     <li>${song.artist} ${song.title} ${song.duration}</li>`;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// function sortBy(event) {
//   if (event.target.value === "artist") {
//     songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   } else {
//     songs.sort((a, b) => a.title.localeCompare(b.title));
//   }
//   showSongList();
// }

// ---------------------------------------- exercise 22 ---------------------------------------

// "use strict";

// window.addEventListener("load", initApp);

// let songs = [];

// async function initApp() {
//   console.log("halloWorld");
//   songs = await getPlaylist();
//   console.log(songs);
//   showPlaylist();
// }

// async function getPlaylist() {
//   const response = await fetch("playlist.json");
//   const data = await response.json();
//   return data;
// }

// function showPlaylist() {
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of songs) {
//     const html = /*html*/ `
//  <li>${song.artist} ${song.title} ${song.duration} <button>Remove</button></li> `;
//     document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//     document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeSong(song));
//   }
// }

// function removeSong(songToRemove) {
//   const i = songs.findIndex((song) => song.title === songToRemove.title);
//   if (i !== -1) {
//     songs.splice(i, 1);
//     showPlaylist();
//   }
// }

// ---------------------------------------------------- exercise 23 -------------------------------------

"use strict";

window.addEventListener("load", initApp);

const songs = [
  { artist: "KOliver", title: "får også 10", duration: "5:20", vote: 0 },
  { artist: "Oliver", title: "får også 12", duration: "3:20", vote: 0 },
  { artist: "HOliver", title: "får også 7", duration: "4:20", vote: 0 },
];

function initApp() {
  console.log("hallo World");
  showSongs();
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";
  songs.sort((a, b) => b.vote - a.vote);
  for (const song of songs) {
    const html = /*html*/ `
    <li>${song.artist} ${song.title} ${song.duration} <button>upvote</button></li>`;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document.querySelector("#songlist li:last-child button").addEventListener("click", () => upVoteButton(song));
  }
}

function upVoteButton(song) {
  console.log(song);
  song.vote++;
  showSongs(songs);
  console.log(songs);
}
