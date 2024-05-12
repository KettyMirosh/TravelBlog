window.addEventListener('load', function() {
    console.log('Страница полностью загружена');

    const form = document.querySelector('.contact_form form');
    console.log('Выбрана форма:', form);

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="mail"]');
    const telInput = form.querySelector('input[name="tel"]');
    const errorElement = form.querySelector('.error');

    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError() {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    function validateForm() {
        let isValid = true;

        // Проверить имя
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            showError('Пожалуйста, введите ваше имя.');
            isValid = false;
        } else if (!/^[А-Яа-яЁёA-Za-z\s]+$/.test(nameValue)) {
            showError('Пожалуйста, введите корректное имя.');
            isValid = false;
        }

        // Проверить email
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            showError('Пожалуйста, введите ваш адрес электронной почты.');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
            showError('Пожалуйста, введите корректный адрес электронной почты.');
            isValid = false;
        }

        // Проверить номер телефона
        const telValue = telInput.value.trim();
        if (telValue === '') {
            showError('Пожалуйста, введите ваш номер телефона.');
            isValid = false;
        } else if (!/^\+?[0-9()\s-]{10,}$/.test(telValue)) {
            showError('Пожалуйста, введите корректный номер телефона.');
            isValid = false;
        }

        return isValid;
    }

    function clearForm() {
        nameInput.value = '';
        emailInput.value = '';
        telInput.value = '';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        console.log('Форма отправлена');
    
        hideError();
    
        if (validateForm()) {
            console.log('Форма прошла валидацию');
    
            // Отправка данных формы
            clearForm();
            alert('Данные успешно отправлены.');
        } else {
            console.log('Форма не прошла валидацию');
        }
    });
});