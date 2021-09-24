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
