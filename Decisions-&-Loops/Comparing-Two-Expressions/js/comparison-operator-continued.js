let score1 = 90;
let score2 = 95;
let highScore1 = 75;
let highScore2 = 95;

let comparison = (score1 + score2) > (highScore1 + highScore2);

let element = document.getElementById('answer');
element.innerHTML = 'New high score: ' + comparison;
