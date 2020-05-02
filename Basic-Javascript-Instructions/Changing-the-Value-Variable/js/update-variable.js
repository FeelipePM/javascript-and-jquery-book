let inStock = true;
let shipping = false;

inStock = false;
shipping = true;

let stock = document.getElementById("stock");
stock.className = inStock;

let ship = document.getElementById("shipping");
ship.className = shipping;
