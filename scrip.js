const cars = [
  {
    brand: 'Audi',
    model: 'A6',
    engine: '2.0L TFSI',
    color: 'Black',
    hp: 261,
    price: 55000,
    image: 'images/audi.jpg'
  },
  {
    brand: 'BMW',
    model: 'X5',
    engine: '3.0L I6',
    color: 'White',
    hp: 335,
    price: 65000,
    image: 'images/bmw.jpg'
  },
  {
    brand: 'Range Rover',
    model: 'Velar',
    engine: '2.0L Turbo',
    color: 'Gray',
    hp: 247,
    price: 70000,
    image: 'images/range-rover.jpg'
  },
  {
    brand: 'Mercedes',
    model: 'E-Class',
    engine: '2.0L Turbo',
    color: 'Blue',
    hp: 255,
    price: 62000,
    image: 'images/mercedes.jpg'
  },
  {
    brand: 'Porsche',
    model: '911 Carrera',
    engine: '3.0L Twin-Turbo',
    color: 'Red',
    hp: 379,
    price: 101200,
    image: 'images/porsche.jpg'
  },
  {
    brand: 'Bentley',
    model: 'Continental GT',
    engine: '6.0L W12',
    color: 'Silver',
    hp: 626,
    price: 231000,
    image: 'images/bentley.jpg'
  }
];

const carList = document.getElementById('car-list');
const searchBar = document.getElementById('searchBar');
const sortSelect = document.getElementById('sort');
const modal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const form = document.getElementById('booking-form');
const carInput = document.getElementById('car');

function displayCars(filter = '', sortBy = '') {
  let filteredCars = cars.filter(car =>
    (car.brand + car.model).toLowerCase().includes(filter.toLowerCase())
  );

  if (sortBy === 'price') {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'hp') {
    filteredCars.sort((a, b) => a.hp - b.hp);
  }

  carList.innerHTML = '';
 filtered.forEach((car, index) => {
  const carCard = document.createElement('div');
  carCard.className = 'car';
  carCard.style.setProperty('--i', index); // 🔥 animation delay per card

  carCard.innerHTML = `
    <span class="brand-logo"><img src="${car.logo}" alt="${car.brand} logo" /></span>
    <img src="${car.image}" alt="${car.brand} ${car.model}" />
    <h2>${car.brand} ${car.model}</h2>
    <p><strong>Engine:</strong> ${car.engine}</p>
    <p><strong>Color:</strong> ${car.color}</p>
    <p><strong>Horsepower:</strong> ${car.hp} HP</p>
    <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
    <button onclick="openBooking('${car.brand} ${car.model}')">Book Now</button>
  `;

  carList.appendChild(carCard);
});

}

function openBooking(model) {
  modal.classList.remove('hidden');
  carInput.value = model;
}

closeModal.onclick = () => modal.classList.add('hidden');

form.onsubmit = (e) => {
  e.preventDefault();
  alert(`Booking submitted for ${carInput.value}. We will contact you soon!`);
  modal.classList.add('hidden');
  form.reset();
};

searchBar.addEventListener('input', () => displayCars(searchBar.value, sortSelect.value));
sortSelect.addEventListener('change', () => displayCars(searchBar.value, sortSelect.value));

displayCars();
