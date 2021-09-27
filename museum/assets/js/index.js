const progress = document.querySelectorAll('.progress')

progress.forEach((el) =>
  el.addEventListener('input', function () {
    const value = this.value
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  })
)

const card = document.querySelectorAll('.card')
const cardBr = document.querySelectorAll('.br-card')

card.forEach((el, i) => {
  el.addEventListener('mouseover', function () {
    cardBr[i].classList.add('hover')
  })
})

card.forEach((el, i) => {
  el.addEventListener('mouseout', function () {
    cardBr[i].classList.remove('hover')
  })
})

//** gallery functionality **//
const galleryInnerContainer = document.querySelector('.gallery__inner-container')

const picArr = [
  'assets/img/galery/galery1.jpg',
  'assets/img/galery/galery2.jpg',
  'assets/img/galery/galery3.jpg',
  'assets/img/galery/galery4.jpg',
  'assets/img/galery/galery5.jpg',
  'assets/img/galery/galery6.jpg',
  'assets/img/galery/galery7.jpg',
  'assets/img/galery/galery8.jpg',
  'assets/img/galery/galery9.jpg',
  'assets/img/galery/galery10.jpg',
  'assets/img/galery/galery11.jpg',
  'assets/img/galery/galery12.jpg',
  'assets/img/galery/galery13.jpg',
  'assets/img/galery/galery14.jpg',
  'assets/img/galery/galery15.jpg',
]

function shuffle(picArr) {
  picArr.sort(() => Math.random() - 0.5)
}

shuffle(picArr)

picArr.map((picArr, index) => {
  const img = document.createElement('img')
  img.classList.add('gallery__img')
  img.src = picArr
  img.alt = ``
  galleryInnerContainer.append(img)
})

//** ripple effect **//
const button = document.querySelectorAll('[id=ripple]')

button.forEach((el) =>
  el.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY
    const rect = e.target.getBoundingClientRect()
    const btnTop = rect.top
    const btnLeft = rect.left
    const xInside = x - btnLeft
    const yInside = y - btnTop
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    this.appendChild(circle)
    setTimeout(() => {
      const circles = this.querySelectorAll('.circle')
      circles.forEach((el) => el.parentNode.removeChild(el))
    }, 350)
  })
)
