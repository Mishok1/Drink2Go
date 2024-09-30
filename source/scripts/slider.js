
const sliderButtonPrev = document.querySelector('.slider-button-prev');
const sliderButtonNext = document.querySelector('.slider-button-next');
const sliderPaginationButtons = document.querySelectorAll('.slider__pagination-button');
const slides = document.querySelectorAll('.slider__item');
let currentSlideValue = 0;

function setCurrentPaginationButton(currentValue) {
  for (let i = 0; i < sliderPaginationButtons.length; i++) {
    sliderPaginationButtons.forEach((button) => {
      button.classList.remove('slider__pagination-button--current');
    });
    switch (currentValue) {
      case 0:
        sliderPaginationButtons[0].classList.add('slider__pagination-button--current');
        break;
      case -100:
        sliderPaginationButtons[1].classList.add('slider__pagination-button--current');
        break;
      case -200:
        sliderPaginationButtons[2].classList.add('slider__pagination-button--current');
        break;
      default:
        sliderPaginationButtons[0].classList.add('slider__pagination-button--current');
        break;
    }
  }
}

function disableButtons(currentValue) {
  if (currentValue <= -200) {
    sliderButtonNext.disabled = true;
    sliderButtonPrev.disabled = false;
  } else if (currentValue >= 0) {
    sliderButtonPrev.disabled = true;
    sliderButtonNext.disabled = false;
  } else {
    sliderButtonNext.disabled = false;
    sliderButtonPrev.disabled = false;
  }
}

const heroSection = document.querySelector('.hero');

function changeBackgroundColor(currentValue) {
  switch (currentValue) {
    case 0:
      heroSection.style.backgroundColor = '#f3ebe1';
      break;
    case -100:
      heroSection.style.backgroundColor = '#EAE6FC';
      break;
    case -200:
      heroSection.style.backgroundColor = '#E5E6E8';
      break;
    default:
      heroSection.style.backgroundColor = '#f3ebe1';
      break;
  }
}

function moveSlides(currentValue) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${currentValue}%)`;
  });
}


if (currentSlideValue >= 0) {
  sliderButtonPrev.disabled = true;
}


sliderPaginationButtons.forEach((button, i) => {
  button.addEventListener('click', (evt) => {
    sliderPaginationButtons.forEach((btn) => {
      btn.classList.remove('slider__pagination-button--current');
    });
    evt.preventDefault();
    switch (i) {
      case 0:
        currentSlideValue = 0;
        button.classList.add('slider__pagination-button--current');
        changeBackgroundColor(currentSlideValue);
        moveSlides(currentSlideValue);
        break;
      case 1:
        currentSlideValue = -100;
        button.classList.add('slider__pagination-button--current');
        changeBackgroundColor(currentSlideValue);
        moveSlides(currentSlideValue);
        break;
      case 2:
        currentSlideValue = -200;
        button.classList.add('slider__pagination-button--current');
        changeBackgroundColor(currentSlideValue);
        moveSlides(currentSlideValue);
        break;
      default:
        currentSlideValue = 0;
        button.classList.add('slider__pagination-button--current');
        changeBackgroundColor(currentSlideValue);
        moveSlides(currentSlideValue);
        break;
    }
    disableButtons(currentSlideValue);
  });
});


sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();

  currentSlideValue += 100;

  moveSlides(currentSlideValue);
  setCurrentPaginationButton(currentSlideValue);
  disableButtons(currentSlideValue);
  changeBackgroundColor(currentSlideValue);
});


sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();

  currentSlideValue -= 100;

  moveSlides(currentSlideValue);
  setCurrentPaginationButton(currentSlideValue);
  disableButtons(currentSlideValue);
  changeBackgroundColor(currentSlideValue);
});


