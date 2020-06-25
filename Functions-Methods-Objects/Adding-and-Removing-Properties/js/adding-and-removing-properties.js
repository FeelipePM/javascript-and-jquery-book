let hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

let elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name;

let elementPool = document.getElementById('pool');
elementPool.className = hotel.pool;

let elementGym = document.getElementById('gym');
elementGym.className = hotel.gym;