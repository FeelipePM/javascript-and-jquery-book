let msg = '<p><b>page title: </b>' + document.title + '<br />';

msg += '<b>page address: </b>' + document.URL + '<br />';

msg += '<b>last modified: </b>' + document.lastModified + '</p>';


let element = document.getElementById('footer');

element.innerHTML = msg;