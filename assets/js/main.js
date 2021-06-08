// 1. Добавляем обработчики на кнопки "Add to card", реализуем делегирование
// 2. Реализуем счетчик добавленных в корзину товаров.
// 3. Реализуем двухсекундную блокировку свех кнопок между нажатиями.
// 4. Получим цену из родительской ноды, распарсим ее с помощью регулярки.
// 5. Цену выведем в кнопку вместо основкного текста на время блокировки,
//    затем восстановим исходное сообщение
// 6. Реализуем счет всех товаров, добавленных в корзину,
//    учесть ошибку JS при рабте с дробной частью

// 1. Добавляем обработчики на кнопки "Add to card", реализуем делегирование

const buttonsContainer = document.querySelector('#content-container');

const btnClickHandler = (e) => {
    const target = e.target;

    if (target && target.matches('button.item-actions__cart')) console.log('clicked');
};

buttonsContainer.addEventListener('click', btnClickHandler);


