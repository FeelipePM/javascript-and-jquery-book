const today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
  greeting = "Good Evening!";
} else if (hourNow > 12) {
  greeting = "Good Afternoon!";
} else if (hourNow > 0) {
  greeting = "Good Morning!";
} else {
  greeting = "Welcome!";
}

let title = document.querySelector("h3");
let text = document.createTextNode(greeting);
title.appendChild(text);
