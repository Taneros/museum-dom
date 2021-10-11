console.log('✔ gallery-pic-bubble.js is linked')

const galleryImg = document.querySelectorAll('.gallery__img')
const gallerySection = document.querySelector('.gallery')

function bouncer(func, wait = 20, immediate = true) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function bubble(e) {
  galleryImg.forEach((img) => {
    // half way through the image
    const slideImgAt = window.scrollY + window.innerHeight - img.height / 4
    // console.log(`window.scrollY ${window.scrollY}`)
    // console.log(`window.innerHeight ${window.innerHeight}`)

    console.log(`slideInAt ${slideImgAt}`)

    // bottom of the image
    // console.log(`gallerySection.offsetTop ${gallerySection.offsetTop}`)

    const imageBottom = img.offsetTop + img.height + gallerySection.offsetTop
    // console.log(`img.offsetTop ${img.offsetTop}`)

    console.log(`imageBottom ${imageBottom}`)
    const isHalfShow = slideImgAt > img.offsetTop + gallerySection.offsetTop
    console.log(`halfShown ${isHalfShow}`)

    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShow && isNotScrolledPast) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', bouncer(bubble))
