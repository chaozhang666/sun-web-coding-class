$('#w').click(function() {
  let audio = new Audio('./sounds/tom-1.mp3')
  audio.play()
})

$('#a').click(function() {
  let audio = new Audio('./sounds/tom-2.mp3')
  audio.play()
})

$('#s').click(function() {
  let audio = new Audio('./sounds/tom-3.mp3')
  audio.play()
})

$('#d').click(function() {
  let audio = new Audio('./sounds/tom-4.mp3')
  audio.play()
})

$('#j').click(function() {
  let audio = new Audio('./sounds/crash.mp3')
  audio.play()
})

document.addEventListener('keypress', function(e) {

  if (e.key === 'w') {
    let audio = new Audio('./sounds/tom-1.mp3')
    audio.play()
  }

  if (e.key === 'a') {
    let audio = new Audio('./sounds/tom-2.mp3')
    audio.play()
  }

  if (e.key === 's') {
    let audio = new Audio('./sounds/tom-3.mp3')
    audio.play()
  }

  if (e.key === 'd') {
    let audio = new Audio('./sounds/tom-4.mp3')
    audio.play()
  }

  if (e.key === 'j') {
    let audio = new Audio('./sounds/crash.mp3')
    audio.play()
  }

  if (e.key === 'k') {
    let audio = new Audio('./sounds/kick-bass.mp3')
    audio.play()
  }

  if (e.key === 'l') {
    let audio = new Audio('./sounds/snare.mp3')
    audio.play()
  }

})


