console.log('player.js is linked successfully')

const videoPlayer = document.getElementById('videoPlayer')
const video = document.getElementById('video-player')
const progress = document.querySelectorAll('.progress')
const videoControls = document.getElementById('videoControls')
const fullSrc = document.getElementById('fullSrc')

const play = document.getElementById('play')
const mute = document.getElementById('mute')
const vol = document.getElementById('vol')

let playedOnce = false

const playBtnOnPlayWindow = document.querySelector('.player-window-btn')

// video slider
let videoProgress = 0
let keyPressed = {}

video.controls = false
// resetting sliders on load
progress[1].value = 40

// resetProgress()

//*** EVENT LISTENERS ***/

progress[0].addEventListener(
  'input',
  function (e) {
    console.log('progress[0].addEventListener')
    // videoProgress = parseInt(this.getAttribute('value'));
    videoProgress = this.value
    // this.setAttribute('value', `${videoProgress}`)
    // console.log('videoProgress', videoProgress)
    // console.log('video.currentTime', video.currentTime)
    // this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress}%, #fff ${videoProgress}%, white 100%)`
    skipVid(videoProgress)
  },
  true
)

// audio slider
progress[1].addEventListener('input', (e) => {
  // console.log('e.target.value', e.target.value)
  let value = e.target.value
  // console.log('value', value)
  // e.target.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  changeVol(value)
})

// progress bar update
video.addEventListener('timeupdate', () => {
  // console.log('playedOnce', playedOnce)
  // console.log('timeupdate - video.currentTime', video.currentTime)
  playedOnce ? playBtnOnPlayWindow.classList.add('hide') : playBtnOnPlayWindow.classList.remove('hide')
  // console.log('video.currentTime', video.currentTime)
  videoProgress = Math.floor((video.currentTime / video.duration) * 100)
  // console.log('timeupdate - videoProgress', videoProgress)
  // progress[0].value = video.currentTime
  progress[0].value = videoProgress
  progress[0].style.background = `linear-gradient(to right, #710707E 0%, #710707 ${videoProgress}%, #fff ${videoProgress}%, white 100%)`
  // progress[0].value = Math.floor((video.currentTime / video.duration) * 100)
  progress[0].setAttribute('value', `${videoProgress}`)
  document.querySelector('.player-control-progress_bar-vid').style.setProperty('--valuePlayer', `${videoProgress}%`)
})

// full screen mode
fullSrc.addEventListener('click', (e) => {
  // console.log('fullSrc', e)
  handleFullSrc(e)
})

// play btn
play.addEventListener('click', (e) => {
  // console.log('playPause event', e)
  playPause()
})

// player vindow on click
video.addEventListener('click', (e) => {
  playPause()
})

// big player button on player window
playBtnOnPlayWindow.addEventListener('click', (e) => {
  playPause()
})

// mute button
mute.addEventListener('click', () => {
  muteVid()
})

//*** control FUN-ctions :P ***/

// reset progress
function resetProgress() {
  console.log('resetProgress')
  progress[0].value = 0
  progress[0].setAttribute('value', `${0}`)
  // progress[0].style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #fff ${0}%, white 100%)`
}

// play pause
function playPause() {
  // console.log('playPause')
  // console.log('video.currentTime')
  if (video.paused || video.ended) {
    video.play()
  } else {
    video.pause()
  }
}

// mute
function muteVid() {
  video.muted = !video.muted
  mute.classList.toggle('muted')
}

// volume control
function changeVol(e) {
  // console.log('e/10', e / 100)
  video.volume = e / 100
}

// skip video
function skipVid(e) {
  // console.log('skipVid', e)
  video.currentTime = (e / 100) * video.duration
}

video.onplaying = () => (playedOnce = true)
