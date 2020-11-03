function start() {
  // generate random number
  var num1 = Math.floor(Math.random() * 6 ) + 1; 
  var num2 = Math.floor(Math.random() * 6 ) + 1;
  // change the images
  $('#img1').attr('src', './dice' +  num1  + '.png');
  $('#img2').attr('src', './dice' +  num2  + '.png');
}





