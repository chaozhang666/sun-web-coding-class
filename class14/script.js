const message = document.getElementById('msg');

// step 1 - generate random number
const randomNum = Math.floor(Math.random() * 100) + 1
console.log(randomNum);


function checkNumber(msg) {

  // too big ? too small ? correct ! 

  // check if valid number 
  if (Number.isNaN(msg)) {
    alert('!')
    message.innerText = 'That is not a valid number!'
    return 
  }

  // check the range 
  if (num > 100 || num < 1) {
    message.innerText = 'Number must be between 1 and 100'
  }

  if (num === randomNum) {
    message.innerText = 'Bingo !'
  } else if (num > randomNum) {
    message.innerText = 'Go Lower !'
  } else {
    message.innerText = 'Go Higher !'
  }

  // keep playing untill user guessing the correct number
}

// step 2 - start recognition 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

// speak result
recognition.addEventListener('result', (e) => {
  let result = e.results[0][0].transcript;
  message.innerHTML = result;

  // homework:
  // write a function to check the number:
  checkNumber(result);
})

// End SR service
recognition.addEventListener('end', () => recognition.start());

