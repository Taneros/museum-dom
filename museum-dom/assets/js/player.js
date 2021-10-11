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
const defaultKeys = ['Space', 'ArrowLeft', 'ArrowRight']

video.controls = false
// resetting sliders on load
progress[1].value = 40
progress[0].value = 0

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
    skipVid(videoProgress)
    document.querySelector('.player-control-progress_bar-vid').style.setProperty('--valuePlayerVid', `${videoProgress}%`)
  },
  true
)

// audio slider
progress[1].addEventListener('input', (e) => {
  // console.log('e.target.value', e.target.value)
  let value = e.target.value
  // console.log('value', value)
  changeVol(value)
})

// progress bar update
video.addEventListener(
  'timeupdate',
  () => {
    // console.log('playedOnce', playedOnce)
    // console.log('timeupdate - video.currentTime', video.currentTime)
    playedOnce ? playBtnOnPlayWindow.classList.add('hide') : playBtnOnPlayWindow.classList.remove('hide')
    // console.log('video.currentTime', video.currentTime)
    videoProgress = Math.floor((video.currentTime / video.duration) * 100)
    // console.log('timeupdate - videoProgress', videoProgress)
    // progress[0].background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress}%, #fff ${videoProgress}%, white 100%)`
    progress[0].style.setProperty('background', `linear-gradient(to right, #710707 0%, #710707 ${videoProgress}%, #fff ${videoProgress}%, white 100%)`)
    document.querySelector('.player-control-progress_bar-vid').style.setProperty('--valuePlayerVid', `${videoProgress}%`)
    progress[0].value = videoProgress
    progress[0].setAttribute('value', `${videoProgress}`)
  },
  true
)

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

// video control keys
document.addEventListener(
  'keydown',
  (e) => {
    console.log('e.code', e.code)
    if (/^Shift.*/.exec(e.code)) keyPressed['Shift'] = true
    // console.log('keyPressed', keyPressed)
    if (defaultKeys.includes(e.code)) {
      e.preventDefault()
      console.log(`prevent default`)
    }
    keyShortCut(e.code)
  },
  true
)

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
    play.classList.remove('pause')
  } else {
    video.pause()
    play.classList.add('pause')
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

// full screen play
function handleFullSrc(e) {
  // console.log('handleFullSrc', e)
  if (!isFullScr()) {
    videoPlayer.requestFullscreen()
  } else {
    if (isFullScr()) {
      document.exitFullscreen()
    }
  }
}

// toggle fullscreen
function isFullScr() {
  return !!document.fullscreenElement
}

//keyboard shortcuts
function keyShortCut(e) {
  switch (e) {
    case 'Space': {
      playPause()
      break
    }
    case 'KeyF': {
      handleFullSrc()
      break
    }
    case 'KeyM': {
      muteVid()
      break
    }
    case 'Comma': {
      if (video.playbackRate === 0) break
      video.playbackRate -= 0.25
      // console.log('playbackRate', video.playbackRate)
      break
    }
    case 'Period': {
      video.playbackRate += 0.25
      // console.log('playbackRate', video.playbackRate)
      break
    }
    case String(e.match(/KeyJ*|ArrowLeft/)): {
      video.currentTime -= 5
      break
    }
    case String(e.match(/KeyL*|ArrowRight/)): {
      video.currentTime += 5
      break
    }
    case String(e.match(/^Digit.*/)): {
      let digit
      // if (/^Digit.*/.exec(e.code)) digit = e.code.toString().slice(-1)
      digit = e.toString().slice(-1)
      digit *= 10
      // console.log('digit', digit)
      skipVid(digit)
      break
    }
    case 'Slash': {
      if (keyPressed['Shift']) overlay.classList.toggle('hide')
      keyPressed['Shift'] = false
      break
    }
  }
}

video.onplaying = () => (playedOnce = true)
