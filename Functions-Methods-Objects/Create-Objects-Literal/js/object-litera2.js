// Set up the object
let hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
  checkAvailability: function () {
    return this.rooms - this.booked;
  }
};


let elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name;                

let elementRooms = document.getElementById('rooms');   
elementRooms.textContent = hotel.checkAvailability();
