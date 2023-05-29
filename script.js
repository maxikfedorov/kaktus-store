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








