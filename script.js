function selectFilter(filter) {
    var selectedFilterElement = document.getElementById('selected-filter');
    selectedFilterElement.textContent = filter;
    // Здесь можно добавить код для обработки выбранного фильтра
}

const ratingItems = document.querySelectorAll('.rating-item');

ratingItems.forEach((ratingItem) => {
    const ratingInputs = ratingItem.querySelectorAll('.stars input[type="radio"]');
    const ratingLabels = ratingItem.querySelectorAll('.stars label');

    ratingInputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            const selectedRating = parseInt(input.value);

            ratingLabels.forEach((label, labelIndex) => {
                if (labelIndex < selectedRating) {
                    label.style.backgroundImage = 'url("assets/cactus-online.svg")';
                } else {
                    label.style.backgroundImage = 'url("assets/cactus-offline.svg")';
                }
            });
        });
    });
});

// Получаем элементы из DOM
const priceSlider = document.querySelector('.price-slider');
const priceFromInput = document.querySelector('#price-from');
const priceToInput = document.querySelector('#price-to');

// Обработчик события изменения положения ползунка
priceSlider.addEventListener('input', function() {
    // Получаем текущее значение ползунка
    const sliderValue = priceSlider.value;

// Обновляем значения в полях ввода
    priceFromInput.value = parseInt(priceSlider.value);
    priceToInput.value = parseInt(priceSlider.value) + 250;
});


const checkboxes = document.querySelectorAll(".characteristics-filter input[type='checkbox']");
const ratingRadios = document.querySelectorAll(".rating-filter input[type='radio']");

// Задаем дефолтные значения для фильтров
const defaultPrice = 500;
const defaultFrom = ""; // Замените на дефолтное значение "ОТ"
const defaultTo = ""; // Замените на дефолтное значение "ДО"

const defaultCheckboxes = [false, false, false]; // Замените на дефолтные значения чекбоксов

const defaultRating = 1; // Замените на дефолтное значение рейтинга

// Функция для сброса значений фильтров
function resetFilters() {
    priceSlider.value = defaultPrice;
    priceFromInput.value = defaultFrom;
    priceToInput.value = defaultTo;

    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = defaultCheckboxes[index];
    });


}

// Обработчик события для кнопки "СБРОСИТЬ"
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetFilters);







