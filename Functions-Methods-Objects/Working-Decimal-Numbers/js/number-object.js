let originalNumber = 10.23456;

let msg = '<h2>original number</h2><p>' + originalNumber + '</p>';

msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';

msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

let element = document.getElementById('info');

element.innerHTML = msg;