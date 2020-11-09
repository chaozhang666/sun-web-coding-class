function start() {
  // generate random number
  var num1 = Math.floor(Math.random() * 6 ) + 1; 
  var num2 = Math.floor(Math.random() * 6 ) + 1;
  // change the images
  $('#img1').attr('src', './dice' +  num1  + '.png');
  $('#img2').attr('src', './dice' +  num2  + '.png');

  if (num1 > num2) {
    $('h1').text(' 🚩 Player 1 win !')
  } else if (num2 > num1) {
    $('h1').text('Player 2  win ! 🚩')
  } else {
    $('h1').text('Draw !')
  }

}





