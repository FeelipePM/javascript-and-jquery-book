let colors = ['white', 'black', 'custom'];

colors[2] = 'beige';

let elementColor = document.getElementById("colors");

elementColor.textContent = colors[2];
