// animal project 

function buyAnimal() {
  var animals = ['dog', 'cat', 'bear', 'fish']
  var animal;
  animal = prompt('Which animal do you wanna buy ? we have dog, cat, bear and fish !')
  if (animal === 'dog') {
    alert('Dog for $ 500')
  } else if (animal === 'cat') {
    alert('Cat for $ 300 !')
  } else if (animal === 'bear') {
    alert('bear for $ 100000 !')
  } else if (animal === 'fish') {
    alert('fish for $ 20!')
  } else {
    alert('Sorry, we dont have your aniaml !')
  }
}

function sayHello() {
  alert('Hello !')
}

