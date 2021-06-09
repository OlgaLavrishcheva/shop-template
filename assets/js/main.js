// Пошаговый план реализации интерактивности:
// 1. Добавляем обработчики на кнопки "Add to card", реализуем делегирование
// 2. Реализуем счетчик добавленных в корзину товаров.
// 3. Реализуем двухсекундную блокировку всех кнопок между нажатиями.
// 4. Получим цену из родительской ноды, распарсим ее с помощью регулярки.
// 5. Цену выведем в кнопку вместо основкного текста на время блокировки,
//    затем восстановим исходное сообщение
// 6. Реализуем счет всех товаров, добавленных в корзину,
//    учесть ошибку JS при рабте с дробной частью

const buttonsContainer = document.querySelector('#content-container');
const cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;

const btnClickHandler = (e) => {
    const target = e.target;

    if (target && target.matches('.item-actions__cart')) {
        cartCounterLabel.innerHTML = `${++cartCounter}`;
        if (cartCounter === 1)
        cartCounterLabel.style.display = 'block';

        buttonsContainer.removeEventListener('click', btnClickHandler);
        target.disabled = true;

        setTimeout (() => {
            target.disabled = false;
            buttonsContainer.addEventListener('click', btnClickHandler);
            }, 2000);
    }
};

buttonsContainer.addEventListener('click', btnClickHandler);


