// Selecting elements
const title = document.getElementById("mainHeading");
console.log(title);

// Styling the element
title.style.color = "red";

// Selecting all list items by class name
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// Changing font size for all list items (this will not work as is because listItems is an HTMLCollection)
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "2rem";
}

// Query selector for container div
const container = document.querySelector(".container");
console.log(container);

// Using querySelectorAll for multiple divs
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

// Styling multiple elements using querySelectorAll and looping through them
allDivs.forEach((div) => {
  div.style.backgroundColor = "lightblue";
});

//Parent traversal
let ul = document.querySelector("ul");
console.log(ul.parentNode); // returns the parent node, even if it's not an element
console.log(ul.parentElement); // returns only the parent element

//child traversal
console.log(ul.childNodes); // includes text nodes (like spaces)
console.log(ul.children); // only element nodes
console.log(ul.firstChild); // might return a text node
console.log(ul.firstElementChild); // returns the first child element (li)

//sibling traversal
console.log(ul.previousSibling); // may return a text node
console.log(ul.previousElementSibling); // returns the previous element

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function toggleContent() {
  if (hiddenContent.classList.contains("show")) {
    hiddenContent.classList.remove("show");
  } else {
    hiddenContent.classList.add("show");
  }
}

revealBtn.addEventListener("click", toggleContent);

// Grab the unordered list element
const sportsList = document.querySelector("#sports");

// Event delegation: Attach the listener to the parent (ul)
sportsList.addEventListener("click", function (e) {
  const target = e.target;

  // Check if the clicked element is an 'li'
  if (target.matches("li")) {
    console.log(`${target.textContent} is clicked`);

    // Change background color of the clicked list item
    target.style.backgroundColor = "lightgray";
  }
});

// Dynamically add a new list item (Rugby)
const addSportBtn = document.querySelector("#add-sport");
addSportBtn.addEventListener("click", function () {
  const newSport = document.createElement("li");
  newSport.id = "rugby";
  newSport.textContent = "Rugby";
  sportsList.appendChild(newSport);
});
