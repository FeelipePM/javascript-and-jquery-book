let randomNum = Math.floor((Math.random() * 10) + 1);

let element = document.getElementById('info');

element.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';