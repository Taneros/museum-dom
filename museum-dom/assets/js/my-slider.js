console.log('✔ my-slider.js is linked')

import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swiperSettings = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  initialSlide: 4,
  enabled: true,
  speed: 500,
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.welcome__slider-controls__right-arrow',
    prevEl: '.welcome__slider-controls__left-arrow',
  },
  pagination: {},
  // pagination: {
  //   el: '.progress-bar',
  //   type: 'bullets',
  //   progressbarFillClass: '.progress-bar',
  // },
}

const swiper = new Swiper('.swiper', swiperSettings)
const slider_box = document.querySelectorAll('.slider__box')
const slider_box_parent = document.querySelector('.welcome__slider-controls__pagination')

slider_box.forEach((el) => el.addEventListener('click', () => {}))

slider_box_parent.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider__box')) {
    swiper.slideTo(e.target.dataset.index)
  }
})

// swiper.slideTo(0)
swiper.onAny(updateBox)

function updateBox() {
  // console.log('swiper.activeIndex', swiper.activeIndex)
  const currentIndex = swiper.activeIndex % 5
  // console.log('currentIndex', currentIndex)
  slider_box.forEach((el, idx) => {
    el.classList.toggle('active-box', idx === currentIndex)
  })
  document.querySelector('#slider__current').textContent = `0${currentIndex + 1}`
}

// export default swiper
