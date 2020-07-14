let pass = 50;
let score = 90;

let hasPassed = score >= pass;

let element = document.getElementById('answer');
element.innerHTML = 'Level passed: ' + hasPassed;