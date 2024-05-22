$(document).ready(function () {
  let scr_video = {
    1: "./video/video2.mp4",
    2: "./video/video.mp4",
    3: "./video/video3.mp4",
    4: "./video/video2.mp4",
    5: "./video/video.mp4",
  };

  let scr_video_img = {
    1: "./img/preview2.png",
    2: "./img/preview1.png",
    3: "./img/preview3.png",
    4: "./img/preview2.png",
    5: "./img/preview1.png",
  };

  // let $slider = $(".slider");
  // let item = $(".item");
  // let bg_video = $(".source");
  // let video = $("#bgplayvideo");
  // let video_container = document.getElementById("bgplayvideo");

  const play_btn = document.createElement('i');
  play_btn.className = 'fas fa-play-circle';

  jQuery(document).ready(function ($) {
    $(".slider").slick({
      dots: false,
      infinite: false,
      speed: 500,
      centerMode: true,
      focusOnSelect: true,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      variableWidth: true,
      swipe: false,
    });
  });
  let updateSliderCounter = function (slick, currentIndex, nextSlide) {
    let current = slick.slickCurrentSlide() + 1;
    let next = nextSlide + 1;

    video_container.style.backgroundImage = `url(${scr_video_img[next]})`;
    video_container.style.backgroundPosition = "center";
    video_container.style.backgroundRepeat = "no-repeat";
    video_container.style.backgroundSize = "cover";

    bg_video.attr("src", scr_video[next]);
    video.load();
  };
  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    updateSliderCounter(slick, currentSlide, nextSlide);
  });
});

jQuery(document).ready(function ($) {
  $(".popular_slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    initialSlide: 1,
    arrows: true,
    slideToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    swipe: true,
    dotsClass: "custom-dots",
    prevArrow: $(".btn_prev"),
    nextArrow: $(".btn_next"),
  });
});

jQuery(document).ready(function ($) {
  $(".comment_slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    initialSlide: 1,
    arrows: true,
    slideToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    swipe: true,
    dotsClass: "custom-dots",
    prevArrow: $(".btn_prevv"),
    nextArrow: $(".btn_nextt"),
  });
});

jQuery(document).ready(function ($) {
  $("#description_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1666,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1258,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
});

let sortPricePlus = document.querySelector("#price_plus_sort");
let priceBtnSort = document.querySelector(".title_price_sort");
let priceSortContent = document.querySelector(".price_sort_content");

priceBtnSort.addEventListener("click", function (){
  if (sortPricePlus.className == "fas fa-plus") {
    priceSortContent.style.display = "contents";
    sortPricePlus.classList.remove("fa-plus");
    sortPricePlus.classList.add("fa-minus");
  } else {
    priceSortContent.style.display = "none";
    sortPricePlus.classList.remove("fa-minus");
    sortPricePlus.classList.add("fa-plus");
  }
});

let lowerChange = document.querySelector("#lower");
let upperChange = document.querySelector("#upper");

let lowerValue = lowerChange.value;
let upperValuer = upperChange.value;

$("#slider").slider({
  values: [lowerValue, upperValuer],
  range: true,
  min: 0,
  max: 10000,
  create: displaySliderValues,
  slide: displaySliderValues,
});

let values;
lowerChange.addEventListener("input", (e) => {
  values = $("#slider").slider("values");
  $("#slider").slider("values", [e.target.value, values[1]]);
});
upperChange.addEventListener("input", (e) => {
  values = $("#slider").slider("values");
  $("#slider").slider("values", [values[0], e.target.value]);
});

function displaySliderValues() {
  $("#lower").val($("#slider").slider("values", 0));
  $("#upper").val($("#slider").slider("values", 1));
}

let sortCountPlus = document.querySelector("#count_plus_sort");
let countBtnSort = document.querySelector(".title_count_sort");
let countSortContent = document.querySelector(".count_sort_content");

countBtnSort.addEventListener("click", () => {
  if (sortCountPlus.className == "fas fa-plus") {
    countSortContent.style.display = "contents";
    sortCountPlus.classList.remove("fa-plus");
    sortCountPlus.classList.add("fa-minus");
  } else {
    countSortContent.style.display = "none";
    sortCountPlus.classList.remove("fa-minus");
    sortCountPlus.classList.add("fa-plus");
  }
});

let sortCountryPlus = document.querySelector("#country_plus_sort");
let countryBtnSort = document.querySelector(".title_country_sort");
let countrySortContent = document.querySelector(".country_sort_content");

countryBtnSort.addEventListener("click", () => {
  if (sortCountryPlus.className == "fas fa-plus") {
    countrySortContent.style.display = "contents";
    sortCountryPlus.classList.remove("fa-plus");
    sortCountryPlus.classList.add("fa-minus");
  } else {
    countrySortContent.style.display = "none";
    sortCountryPlus.classList.remove("fa-minus");
    sortCountryPlus.classList.add("fa-plus");
  }
});

let sortDatePlus = document.querySelector("#date_plus_sort");
let dateBtnSort = document.querySelector(".title_date_sort");
let dateSortContent = document.querySelector(".date_sort_content");

dateBtnSort.addEventListener("click", () => {
  if (sortDatePlus.className == "fas fa-plus") {
    dateSortContent.style.display = "contents";
    sortDatePlus.classList.remove("fa-plus");
    sortDatePlus.classList.add("fa-minus");
  } else {
    dateSortContent.style.display = "none";
    sortDatePlus.classList.remove("fa-minus");
    sortDatePlus.classList.add("fa-plus");
  }
});

let sortDurationPlus = document.querySelector("#duration_plus_sort");
let durationBtnSort = document.querySelector(".title_duration_sort");
let durationSortContent = document.querySelector(".duration_sort_content");

durationBtnSort.addEventListener("click", () => {
  if (sortDurationPlus.className == "fas fa-plus") {
    durationSortContent.style.display = "contents";
    sortDurationPlus.classList.remove("fa-plus");
    sortDurationPlus.classList.add("fa-minus");
  } else {
    durationSortContent.style.display = "none";
    sortDurationPlus.classList.remove("fa-minus");
    sortDurationPlus.classList.add("fa-plus");
  }
});

console.clear()
