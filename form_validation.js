
// Дождаться полной загрузки страницы
// window.addEventListener('load', function() {
//     // Вывести сообщение в консоль о завершении загрузки страницы
//     console.log('Страница полностью загружена');

//     // Выбрать форму для валидации по классу .contact_form
//     const form = document.querySelector('.contact_form form');
//     // Вывести выбранную форму в консоль для отладки
//     console.log('Выбрана форма:', form);

//     // Выбрать поля ввода имени, email и телефона по их именам
//     const nameInput = form.querySelector('#name');
//     const emailInput = form.querySelector('#mail');
//     const telInput = form.querySelector('#tel');
//     // Выбрать элемент для отображения ошибок валидации
//     const errorElement = form.querySelector('.error');

//     // Функция для отображения сообщений об ошибках валидации
//     function showError(message) {
//         errorElement.textContent = message; // Установить текст ошибки
//         errorElement.style.display = 'block'; // Показать элемент с ошибкой
//     }

//     // Функция для скрытия элемента с ошибками валидации
//     function hideError() {
//         errorElement.textContent = ''; // Очистить текст ошибки
//         errorElement.style.display = 'none'; // Скрыть элемент с ошибкой
//     }

//     // Функция для валидации формы
//     function validateForm() {
        
//         let isValid = true; // Флаг для отслеживания валидности формы

//         // Проверка имени
//         const nameValue = nameInput.value.trim(); // Получить значение имени без пробелов
//         if (nameValue === '') { // Если имя пустое
//             showError('Пожалуйста, введите ваше имя.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         } else if (!/^[А-Яа-яЁёA-Za-z\s]+$/.test(nameValue)) { // Если имя содержит недопустимые символы
//             showError('Пожалуйста, введите корректное имя.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         }

//         // Проверка email
//         const emailValue = emailInput.value.trim(); // Получить значение email без пробелов
//         if (emailValue === '') { // Если email пустой
//             showError('Пожалуйста, введите ваш адрес электронной почты.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) { // Если email имеет неверный формат
//             showError('Пожалуйста, введите корректный адрес электронной почты.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         }

//         // Проверка номера телефона
//         const telValue = telInput.value.trim(); // Получить значение телефона без пробелов
//         if (telValue === '') { // Если телефон пустой
//             showError('Пожалуйста, введите ваш номер телефона.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         } else if (!/^\+?[0-9()\s-]{10,}$/.test(telValue)) { // Если телефон имеет неверный формат
//             showError('Пожалуйста, введите корректный номер телефона.'); // Показать сообщение об ошибке
//             isValid = false; // Установить флаг в false, форма не валидна
//         }

//         return isValid; // Вернуть флаг валидности формы
//     }

//     // Функция для очистки полей формы после успешной отправки
//     function clearForm() {
//         // Очистить значения полей ввода
//         nameInput.value = '';
//         emailInput.value = '';
//         telInput.value = '';
//     }

//     // Обработчик события отправки формы
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Предотвратить отправку формы по умолчанию

//         console.log('Обработчик события submit добавлен к форме:', form); // Отладочный вывод

//         console.log('Форма отправлена'); // Вывести сообщение в консоль для отладки

//         hideError(); // Скрыть сообщения об ошибках перед валидацией
//            // Валидация формы
//         if (validateForm()) { // Если форма прошла валидацию, выполняем действия по успешной отправке
//             console.log('Форма прошла валидацию'); // Вывести сообщение в консоль для отладки

//             // Выполнить действия по успешной отправке данных формы
//             clearForm(); // Очистить форму
//             alert('Данные успешно отправлены.'); // Вывести сообщение об успешной отправке
//         } else { // Если форма не прошла валидацию
//             console.log('Форма не прошла валидацию'); // Вывести сообщение в консоль для отладки
//         }
//     });
// });*/

// // Дожидаемся загрузки всего содержимого страницы
// document.addEventListener('DOMContentLoaded', function () {
//     // Получаем ссылки на элементы формы и элемент для отображения ошибок
//     const form = document.querySelector('form'); // Форма
//     const nameInput = document.getElementById('name'); // Поле ввода имени
//     const telInput = document.getElementById('tel'); // Поле ввода телефона
//     const mailInput = document.getElementById('mail'); // Поле ввода почты
//     const errorDiv = document.querySelector('.error'); // Элемент для отображения ошибок

//     // Добавляем обработчик события отправки формы
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Предотвращаем отправку формы по умолчанию

//         // Очищаем сообщения об ошибках перед проверкой
//         errorDiv.textContent = '';

        // Проверка заполнения всех полей формы
        if (nameInput.value.trim() === '' || telInput.value.trim() === '' || mailInput.value.trim() === '') {
            errorDiv.textContent = 'Заполните все поля формы!';
            return; // Прерываем выполнение функции, если поля не заполнены
        }

        // Проверка правильности заполнения имени (с большой буквы)
        if (!/^[А-ЯЁ][а-яё]*$/.test(nameInput.value.trim())) {
            errorDiv.textContent = 'Имя должно начинаться с большой буквы и содержать только буквы русского алфавита!';
            return; // Прерываем выполнение функции, если имя введено неправильно
        }

        // Проверка правильности заполнения телефона
        if (!/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(telInput.value.trim())) {
            errorDiv.textContent = 'Введите корректный номер телефона!';
            return; // Прерываем выполнение функции, если телефон введен неправильно
        }

        // Проверка правильности заполнения почты
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailInput.value.trim())) {
            errorDiv.textContent = 'Введите корректный адрес электронной почты!';
            return; // Прерываем выполнение функции, если почта введена неправильно
        }

        // Если все проверки пройдены успешно, можно отправить форму
        form.submit(); 
        // Раскомментировать эту строку, чтобы отправить форму на сервер

        // Добавление сообщения об успешной отправке
        errorDiv.textContent = 'Форма успешно отправлена!';
    });

    // Добавление подсказки для правильного заполнения формы
    const exampleText = 'Пример: Иванов Иван, +7(XXX)XXX-XX-XX, example@mail.com';
    [nameInput, telInput, mailInput].forEach(input => {
        // При фокусировке на поле отображаем подсказку
        input.addEventListener('focus', function () {
            errorDiv.textContent = exampleText;
        });
        // При потере фокуса убираем подсказку
        input.addEventListener('blur', function () {
            errorDiv.textContent = '';
        });
    });
});