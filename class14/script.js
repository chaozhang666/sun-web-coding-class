const message = document.getElementById('msg');

// step 1 - generate random number
const randomNum = Math.floor(Math.random() * 100) + 1
console.log(randomNum);

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
  // too big ? too small ? correct ! 
  // keep playing untill user guessing the correct number

})

// End SR service
recognition.addEventListener('end', () => recognition.start());

