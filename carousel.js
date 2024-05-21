const travelJson = `[{
    "type": "Автобусный тур",
    "src": "/assets/img/slider11.jpg",
    "h3": "Обзорная по Сочи (из Адлера)",
    "time": "6 часов",
    "price": "618",
    "info":"Приглашаем вас на экскурсию \\"Обзорная по Большому Сочи\\": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева..."
  },{
    "type": "Конный тур",
    "src": "/assets/img/slider12.jpg",
    "h3": "Конные прогулки",
    "time": "1.5 часа",
    "price": "1809",
    "info":"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..."
  },{
    "type": "Квадротур",
    "src": "/assets/img/slider13.jpg",
    "h3": "Пасть дракона",
    "time": "2.5 часа",
    "price": "3515",
    "info":"Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или \\"Пасть Дракона\\" (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."
  },{
    "type": "Конный тур",
    "src": "/assets/img/slider12.jpg",
    "h3": "Конные прогулки",
    "time": "1.5 часа",
    "price": "1809",
    "info":"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..."
  },
  {
    "type": "Автобусный тур",
    "src": "/assets/img/slider11.jpg",
    "h3": "Обзорная по Сочи (из Адлера)",
    "time": "6 часов",
    "price": "618",
    "info":"Приглашаем вас на экскурсию \\"Обзорная по Большому Сочи\\": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева..."
  },{
    "type": "Квадротур",
    "src": "/assets/img/slider13.jpg",
    "h3": "Пасть дракона",
    "time": "2.5 часа",
    "price": "3515",
    "info":"Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или \\"Пасть Дракона\\" (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."
  }]`;
const travels = JSON.parse(travelJson);
const images = [];
for (let travel of travels) {
  images.push(travel);
}

let activeImage = 0;
const sliderPlace = document.querySelector(".slider-line"); //линия картинок
const widthOffset = document.querySelector(".slider").clientWidth;
const heightOffset = document.querySelector(".slider").clientHeight;
sliderPlace.style.width = 3 * widthOffset + "px";
sliderPlace.style.height = heightOffset + "px";
sliderPlace.style.left = "-" + widthOffset + "px";
let flag = true;

const initSlider = () => {
  let sliderCard = document.createElement("div"); //формируем карточку слайдера
  sliderCard.classList.add("slider-card"); //присваиваем класс

  let sliderCardContainer = document.createElement("div"); //формируем контейнер для карточки слайдера
  sliderCardContainer.classList.add("slider-card-container");

  sliderCard.appendChild(sliderCardContainer); //вкладываем контейнер в карточку
  sliderPlace.appendChild(sliderCard); //вкладываем карточку в лист, где все карточки
  sliderCardContainer.innerHTML = `<div class="slider-card__type">${images[activeImage].type}</div>
        <h3 class="slider-card__h3">${images[activeImage].h3}</h3>
        <p class="slider-card__text">${images[activeImage].info}</p>
        `; //заполняем контентом контейнер карточки
  sliderCard.style.backgroundImage = `url(${images[activeImage].src})`; //присваиваем картинку бэграунд для карточки
  sliderPlace.append(sliderCard);

  nextImageGenerate();
  prevImageGenerate();
};

const nextImageGenerate = () => {
  let nextImage = activeImage + 1;
  if (nextImage >= images.length) {
    nextImage = 0;
  }
  let sliderCard = document.createElement("div"); //формируем карточку слайдера
  sliderCard.classList.add("slider-card"); //присваиваем класс

  let sliderCardContainer = document.createElement("div"); //формируем контейнер для карточки слайдера
  sliderCardContainer.classList.add("slider-card-container");

  sliderCard.appendChild(sliderCardContainer); //вкладываем контейнер в карточку
  sliderPlace.appendChild(sliderCard); //вкладываем карточку в лист, где все карточки
  sliderCardContainer.innerHTML = `<div class="slider-card__type">${images[nextImage].type}</div>
        <h3 class="slider-card__h3">${images[nextImage].h3}</h3>
        <p class="slider-card__text">${images[nextImage].info}</p>
        `; //заполняем контентом контейнер карточки
  sliderCard.style.backgroundImage = `url(${images[nextImage].src})`; //присваиваем картинку бэграунд для карточки
  sliderPlace.append(sliderCard);
};

const prevImageGenerate = () => {
  let prevImage = activeImage - 1;
  if (prevImage < 0) prevImage = images.length - 1;
  let sliderCard = document.createElement("div"); //формируем карточку слайдера
  sliderCard.classList.add("slider-card"); //присваиваем класс

  let sliderCardContainer = document.createElement("div"); //формируем контейнер для карточки слайдера
  sliderCardContainer.classList.add("slider-card-container");

  sliderCard.appendChild(sliderCardContainer); //вкладываем контейнер в карточку
  sliderPlace.appendChild(sliderCard); //вкладываем карточку в лист, где все карточки
  sliderCardContainer.innerHTML = `<div class="slider-card__type">${images[prevImage].type}</div>
        <h3 class="slider-card__h3">${images[prevImage].h3}</h3>
        <p class="slider-card__text">${images[prevImage].info}</p>
        `; //заполняем контентом контейнер карточки
  sliderCard.style.backgroundImage = `url(${images[prevImage].src})`; //присваиваем картинку бэграунд для карточки
  sliderPlace.prepend(sliderCard);
};

nextSide = () => {
  activeImage++;
  if (activeImage >= images.length) activeImage = 0;
  document.querySelector(".slider-line div").remove();
  nextImageGenerate();
};
prevSide = () => {
  activeImage--;
  if (activeImage < 0) activeImage = images.length - 1;
  document.querySelector(".slider-card:last-child").remove();
  prevImageGenerate();
};

initSlider();

document.querySelector(".next-button__1").addEventListener("click", nextSide);
document.querySelector(".prev-button__1").addEventListener("click", prevSide);

const reviuwJson = `[{
  "src": "assets/img/carousel21.png",
  "h3": "Иван Иванов, 25лет",
  "info": "Поход на два дня: через горы в Балаклаву — прекрасный поход, дарящий море впечатлений. Потрясающая природа Крыма, горы, море. Особая благодарность гиду Вадиму, который показал нам эту красоту, рассказал об истории, природе и сделал этот поход максимально комфортным и незабываемым!"
},
{
  "src": "assets/img/carousel22.png",
  "h3": "Семен Семенович, 27лет",
  "info": "Отличный тур чтобы полюбоваться красотой природы Крыма (красивые виды моря, разнообразие растительности, приятные запахи трав) и испытать свои физические возможности, ведь надо несколько часов подниматься в гору, а потом спускатья извилистыми тропами (только удобная закрытая обувь). "
},
{
  "src": "assets/img/carousel23.jpg",
  "h3": "Мария Ивановна, 29лет",
  "info": "Поход на два дня: через горы в Балаклаву — прекрасный поход, дарящий море впечатлений. Потрясающая природа Крыма, горы, море. Особая благодарность гиду Вадиму, который показал нам эту красоту, рассказал об истории, природе и сделал этот поход максимально комфортным и незабываемым!"
},
{
  "src": "assets/img/carousel22.png",
  "h3": "Владимир Петрович, 20лет",
  "info": "Отличный тур чтобы полюбоваться красотой природы Крыма (красивые виды моря, разнообразие растительности, приятные запахи трав) и испытать свои физические возможности, ведь надо несколько часов подниматься в гору, а потом спускатья извилистыми тропами (только удобная закрытая обувь). "
}]`;

const travels2 = JSON.parse(reviuwJson);
const images2 = [];
for (let travel1 of travels2) {
  images2.push(travel1);
}

let step = 0;
let offset = 0;
let slider2 = document.querySelector(".slider-2");

function drawPrev() {
  let sliderLine2 = document.createElement("div"); //формируем внешнюю карточку слайдера
  sliderLine2.classList.add("slider-line-2");

  let sliderCardReview = document.createElement("div"); //формируем внутреннюю карточку слайдера
  sliderCardReview.classList.add("slider__review"); //присваиваем класс

  let imgReview = document.createElement("img");
  imgReview.classList.add("img__review");
  imgReview.src = images2[step].src;

  sliderCardReview.appendChild(imgReview);

  let sliderCardContainerReciew = document.createElement("div"); //формируем контейнер для карточки слайдера, где текст и заголовок
  sliderCardContainerReciew.classList.add("slider2__info");

  let h2Review = document.createElement("h2");
  h2Review.classList.add("reviews__h3");
  h2Review.innerHTML = images2[step].h3;
  let pReview = document.createElement("p");
  pReview.classList.add("reviews__p");
  pReview.innerHTML = images2[step].info;

  sliderCardContainerReciew.appendChild(h2Review); //вкладываем в контейнер заголовок
  sliderCardContainerReciew.appendChild(pReview); //вкладываем в контейнер текст

  sliderCardReview.appendChild(sliderCardContainerReciew);
  sliderLine2.appendChild(sliderCardReview);
  sliderLine2.style.left = offset * 740 + "px";
  slider2.append(sliderLine2);
  if (step + 1 == images2.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function prev() {
  let vizibleCards = document.querySelectorAll(".slider-line-2");
  console.log(vizibleCards);
  let offset2 = 0;
  for (let i = 0; i < vizibleCards.length; i++) {
    vizibleCards[i].style.left = offset2 * 740 - 740 + "px";
    offset2++;
  }
  vizibleCards[0].remove();
  drawPrev();
}

document.querySelector(".prev-button__2").addEventListener("click", prev);
drawPrev();
drawPrev();
