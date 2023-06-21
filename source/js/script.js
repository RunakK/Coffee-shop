
const inputMin = document.querySelector('#price-min');
const inputMax = document.querySelector('#price-max');
const inputs = [inputMin, inputMax]

//slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//range slider

const rangeSlider = document.querySelector('.filter__price');

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    step: 1,
    connect: true,
    range: {
        'min': [0],
        'max': [1100]
    }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value =  Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  rangeSlider.noUiSlider.set(arr)
}

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    console.log(index);
    setRangeSlider(index, e.currentTarget.value);
  });
});
}

//Карта

const map = L.map('map').setView([59.968137, 30.316272], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var greenIcon = L.icon({
  iconUrl: './img/marker-icon.png',
  iconSize:     [38, 50], // size of the icon
});

L.marker([59.968137, 30.316272], {icon: greenIcon}).addTo(map);

//открытие-закрытие меню
const headerMenu = document.querySelector('.header__menu');
const headerToggle= document.querySelector('.header__toggle-menu');
const headerNav = document.querySelector('.header__nav');

headerMenu.classList.remove('header__menu--nojs');

headerToggle.addEventListener('click',  function() {
  if (headerNav.classList.contains('header__nav--closed')) {
    headerNav.classList.remove('header__nav--closed');
    headerNav.classList.add('header__nav--opened');
  } else {
    headerNav.classList.add('header__nav--closed');
    headerNav.classList.remove('header__nav--opened');
  }
});
