let hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

let elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name; 

let elementRooms = document.getElementById('rooms');

elementRooms.textContent = hotel.checkAvailability();