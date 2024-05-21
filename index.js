const container = document.querySelector(".container1");
/*Функция получает ответ апи и строит Дом дерево */
function getRequest() {
  let url =
    "https://openexchangerates.org/api/latest.json?app_id=7ddae1833312467ab3c6cb3c9f077d25";

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let currency = result.rates;
      let euro = result.rates.EUR;
      createDiv(currency);
      console.log(currency);
    })
    .catch((error) => console.log("error", error));
}

getRequest();

function createDiv(obj) {
  let entries = Object.entries(obj);
  //console.log(Object.prototype.toString.call(keys))
  for (let i = entries.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [entries[i], entries[j]] = [entries[j], entries[i]];
  }

  // Берем первые 5 элементов из перемешанного массива
  let limit = entries.slice(0, 5);
  limit.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `Валюта ${element[0]} Курс  ${element[1]}`;
    container.appendChild(div);
  });
  // Выводим на экран выбранные пары
  console.log(limit);
}
