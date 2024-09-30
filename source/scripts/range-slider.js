import noUiSlider from 'nouislider';

const rangeSlider = document.querySelector('.range-slider__range');
const inputMinEl = document.querySelector('.range-slider__price--from');
const inputMaxEl = document.querySelector('.range-slider__price--to');
const inputsEl = [inputMinEl, inputMaxEl];


if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    step: 1,
    connect: true,
    range: {
      'min': [0],
      'max': [980]
    }
  });

  rangeSlider.noUiSlider.on('update', (currentValues, handleIndex) => {
    inputsEl[handleIndex].value = Math.round(currentValues[handleIndex]) || '';
  });

  const setRangeSlider = (input, value) => {
    const rangeValues = [null, null];
    rangeValues[input] = value;
    rangeSlider.noUiSlider.set(rangeValues);
  };

  inputsEl.forEach((input, index) => {
    input.addEventListener('change', (event) => {
      setRangeSlider(index, event.currentTarget.value);
    });
  });
}

