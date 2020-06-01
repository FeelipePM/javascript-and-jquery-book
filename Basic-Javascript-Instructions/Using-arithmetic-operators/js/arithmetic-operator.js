let subtotal =  (13 + 1) * 5;

let shipping = 0.5 * (13 + 1);

let total = subtotal + shipping;

let elementSub = document.getElementById('subtotal');
elementSub.textContent = subtotal;

let elementShip = document.getElementById('shipping');
elementShip.textContent = shipping;

let elementTotal = document.getElementById('total');
elementTotal.textContent = total;