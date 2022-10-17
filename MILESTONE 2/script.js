const imagesArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imagesContainer = '';

const container = document.querySelector('.container-image');


for(let i = 0; i < imagesArray.length; i++){
  imagesContainer += `
  <img class="hide item" src="img/${imagesArray[i]}" alt="img/${imagesArray[i]}"> `;
}
let counterImages = 0;

container.innerHTML = imagesContainer;

const items = document.getElementsByClassName('item');
items[counterImages].classList.remove('hide');
items[counterImages].classList.add('active');