// "use strict";

// const menu = document.querySelector(".menu-icon");
// const sideBar = document.querySelector(".left--sidebar");

// menu.addEventListener("click", () => {
//   menu.classList.toggle("show-nav");
//   sideBar.classList.toggle("show-nav");
//   // sideBar.classList.add('show-nav')
//   console.log("icon clicked");
// });

// // Hide sidebar when clicking outside of it
// document.addEventListener("click", (event) => {
//   // Check if the click was outside the sidebar and menu icon
//   if (!sideBar.contains(event.target) && !menu.contains(event.target)) {
//     sideBar.classList.remove("show-nav");
//   }
// });

"use strict";

const menu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".left--sidebar");
const iframe = document.querySelector("iframe");
const sidebarLinks = document.querySelectorAll(".left--sidebar a");

// Toggle sidebar visibility when the menu icon is clicked
menu.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click from propagating
  sideBar.classList.toggle("show-nav"); // Toggle sidebar visibility
});

// Prevent sidebar from hiding when clicking on any sidebar link
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation(); // Stop propagation to prevent hiding
  });
});

// Hide sidebar when clicking outside of it in the main document
document.addEventListener("click", (event) => {
  if (!sideBar.contains(event.target) && !menu.contains(event.target)) {
    sideBar.classList.remove("show-nav"); // Hide sidebar
  }
});

// Hide sidebar when clicking inside the iframe
iframe.contentWindow.addEventListener("click", () => {
  sideBar.classList.remove("show-nav"); // Hide sidebar
});

// Close the menu when a navigation link is clicked
document.querySelectorAll(".left--sidebar ul a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-nav");
    sideBar.classList.remove("show-nav");
  });
});
