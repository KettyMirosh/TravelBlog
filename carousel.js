const travelJson = `[{
    "type": "Автобусный тур",
    "src": "/assets/img/slider11.jpg",
    "h3": "Обзорная по Сочи (из Адлера)",
    "info":"Приглашаем вас на экскурсию \\"Обзорная по Большому Сочи\\": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева..."
  },{
    "type": "Конный тур",
    "src": "/assets/img/slider12.jpg",
    "h3": "Конные прогулки",
    "info":"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..."
  },{
    "type": "Квадротур",
    "src": "/assets/img/slider13.jpg",
    "h3": "Пасть дракона",
    "info":"Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или \\"Пасть Дракона\\" (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."
  },{
    "type": "Конный тур",
    "src": "/assets/img/slider12.jpg",
    "h3": "Конные прогулки",
    "info":"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..."
  },
  {
    "type": "Автобусный тур",
    "src": "/assets/img/slider11.jpg",
    "h3": "Обзорная по Сочи (из Адлера)",
    "info":"Приглашаем вас на экскурсию \\"Обзорная по Большому Сочи\\": Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева..."
  },{
    "type": "Квадротур",
    "src": "/assets/img/slider13.jpg",
    "h3": "Пасть дракона",
    "info":"Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или \\"Пасть Дракона\\" (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."
  }]`;
const travels = JSON.parse(travelJson);
console.log(travels);
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

  // const img = document.createElement("img");
  // img.src = `${images[activeImage]}`;
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

document.querySelector(".next-button").addEventListener("click", nextSide);
document.querySelector(".prev-button").addEventListener("click", prevSide);
