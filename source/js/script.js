
const inputMin = document.querySelector('#price-min');
const inputMax = document.querySelector('#price-max');
const inputs = [inputMin, inputMax]


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

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const rangeSlider = document.querySelector('.filter__price');

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    step: 1,
    connect: true,
    range: {
        'min': [0],
        'max': [1000]
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

const map = L.map('map').setView([59.968137, 30.316272], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
