'use strict'

function slideSelect(evt) {
  evt.stopPropagation();

  const sliderList = document.querySelectorAll('.completed-slider__select');

  setTimeout(() => {
    if (window.location.href.includes('slide-2')) {
      sliderList[1].classList.add('completed-slider__select--selected');
      sliderList[0].classList.remove('completed-slider__select--selected');
    } else if (window.location.href.includes('slide-1')) {
      sliderList[0].classList.add('completed-slider__select--selected');
      sliderList[1].classList.remove('completed-slider__select--selected');
    }
  }, 0);
}

document.querySelector('.completed-projects').addEventListener('click', slideSelect);
