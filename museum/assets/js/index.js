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
// overlay

function openNav() {
  document.getElementById('book').style.width = '100%'
}

function closeNav() {
  document.getElementById('book').style.width = '0%'
}

// self-check
console.log(`
1. Вёрстка валидная +10
2.Вёрстка семантическая. В коде страницы присутствуют следующие элементы +24
-<header>, <main>, <footer> +2
-семь элементов <section> (по количеству секций) +2
-только один заголовок <h1> +2
-семь заголовков <h2> (по количеству секций) +2
-шесть заголовков <h3> (по количеству карточек) +2
-два элемента <nav> (основная и вспомогательная панель навигации) +2
-три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) +2
-тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) +2
-три тега input type="radio" (в секции Tickets) +2
-два тега input type="number"(в секции Tickets) +2
-два тега input type="range" (громкось и прогрес-бар видео) +2
-для всех элементов <img> указан обязательный атрибут alt +2
3. Вёрстка соответствует макету +40
-блок <header> +5
-секция Welcome +5
-секция Visiting +5
-секция Explore +5
-секция Video +5
-секция Gallery +5
-секция Tickets 5
-секция Contacts +5
-блок <footer> +5
4. Форма покупки билетов +4
-форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей +2
-форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2
-при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select 0
-вёрстка формы соответствует макету 0
-5. Требования к css + 18
-добавлен favicon +2
-для построения сетки используются флексы или гриды +2
-при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
-фоновый цвет каждого блока и секции тянется на всю ширину страницы +2
-иконки добавлены в формате .svg. SVG может быть добавлен любым способом. +2
-расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2
-переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2
-в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2
-в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2
6. Интерактивность, реализуемая через css +25
-плавная прокрутка по якорям +5
-параллакс +5
-при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5
-изменение стиля интерактивных элементов при наведении и клике +10
7. Интерактивность, реализуемая через js +16
-можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2
-кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2
-кнопке "Book" в форме покупки билетов добавлен ripple-эффект Демо +2
-при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке  +10
`)
