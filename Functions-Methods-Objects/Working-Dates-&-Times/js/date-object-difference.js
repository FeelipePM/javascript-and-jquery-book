let today = new Date();

let year = today.getFullYear();

let est = new Date('Apr 16, 1996 15:45:55');

let difference = today.getTime() - est.getTime();

difference = (difference / 31556900000);

let elementMsg = document.getElementById('message');

elementMsg.textContent = Math.floor(difference) + ' years of online travel advice';