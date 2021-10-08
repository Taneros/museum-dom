console.log('my-slider.js is linked successfully')

// const slider_box = document.querySelectorAll('.slider__box')
// console.log(slider_box)
// const slider_box_parent = document.querySelector('.welcome__slider-controls__pagination')
// console.log(slider_box_parent)

// slider_box.forEach((el) =>
//   el.addEventListener('click', () => {
//     console.log()
//   })
// )

// slider_box_parent.addEventListener('click', (e) => {
//   console.log(e.target)
//   if (e.target.classList.contains('slider__box')) {
//     console.log(1)
//     console.log(e.target.dataset.index)
//   }
// })

const swiperSettings = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.welcome__slider-controls__pagination',
  //   type: 'fraction',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.welcome__slider-controls__right-arrow',
    prevEl: '.welcome__slider-controls__left-arrow',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
}

export default swiperSettings
