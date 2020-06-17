let hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; 
  }
};

let elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name;

let elementRooms = document.getElementById('rooms');
elementRooms.textContent = hotel.checkAvailability();