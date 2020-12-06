const words = ['happy', 'ball', 'warlike', 'dependent', 'silver', 'superficial', 'telecommunication', 'juice'];
let score = 0;
let time = 10;
let randomWord;

function generateRandomWord() {
  let randomNumber = Math.floor(Math.random() * words.length); 
  randomWord = words[randomNumber];
  $('#word').html(randomWord);
}

generateRandomWord()

$('#text').on('input', (e) => {
  if (randomWord === e.target.value) {
    generateRandomWord()
    e.target.value = '';
  }
})


