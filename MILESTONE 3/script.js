const imagesArray = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imagesContainer = '';
let circlesBox = '';

const container = document.querySelector('.container-image');
const circles = document.querySelector('.box-circles');

for(let i = 0; i < imagesArray.length; i++){
  imagesContainer += `
  <img class="item hide" src="img/${imagesArray[i]}" alt="img/${imagesArray[i]}"> `;

  circlesBox += '<div class= "circle" ></div>'; 
}
let counterImages = 0;

const next = document.querySelector('.right');
const back = document.querySelector('.left');
back.classList.add('hide');

container.innerHTML = imagesContainer;
circles.innerHTML = circlesBox;

const items = document.getElementsByClassName('item');
const circlesItem = document.getElementsByClassName('circle');

 items[counterImages].classList.remove('hide'); 
 items[counterImages].classList.add('active');
 circlesItem[counterImages].classList.add('active');

next.addEventListener('click', function(){
  items[counterImages].classList.add('hide');
  items[counterImages].classList.remove('active');
  counterImages++;
  items[counterImages].classList.add('active');

  back.classList.remove('hide');

  if(counterImages === imagesArray.length - 1){
    next.classList.add('hide');
  }
});

back.addEventListener('click', function(){
  items[counterImages].classList.add('active');
  items[counterImages].classList.remove('active');
  counterImages--;
  items[counterImages].classList.add('active');
  
  next.classList.remove('hide');
  if(counterImages === 0){
    back.classList.add('hide');
  }
});