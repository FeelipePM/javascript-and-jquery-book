let today = new Date();

let year = today.getFullYear();

let element = document.getElementById('footer');

element.innerHTML = '<p>Copyright &copy;' + year + '</p>';