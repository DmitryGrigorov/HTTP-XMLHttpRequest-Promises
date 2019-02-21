function getJSON(url) {
  // возвращаем promise
  return new Promise(function (resolve, reject) {
    // инициализируем запрос
    const request = new XMLHttpRequest();

    // говорим на каком  URL-e работает запрос
    request.open("GET", url);

    // обработчик событий на уже загруженный запрос
    request.onload = function () {
      try {
        if(this.status == 200 ){
          // На успешное выполнение возвращаем ответ(response) от запроса
          resolve(JSON.parse(this.response));
        } else {
          // На не успешное выполнение возвращаем статус запроса и его текст
          reject(this.status + " " + this.statusText);
        }
      } catch(e){
        reject(e.message);
      }
    };
  
    // Отлавливаем ошибки
    request.onerror = function () {
      reject(this.status + " " + this.statusText);
    };

    // Отправляем запрос
    request.send();
  });
};

// Получаем JSON объекты с помощью промисов
const p1 = getJSON("./js/example1.json");
const p2 = getJSON("./js/exampe2.json");
const p3 = getJSON("./js/example3.json");

// перебираем массив промисов
Promise.all([p1, p2, p3]).then(values => {
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
  console.log("done")
}, function(reason) {
  console.log("reason", reason);
});

