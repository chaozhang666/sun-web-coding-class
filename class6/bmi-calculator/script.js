function calculation() {

  // step 1: Get data 
  let weight = document.getElementById('w').value;
  let height = document.getElementById('h').value;

  // Step 2：Calculate BMI
  let bmi = weight / (height * height);
  alert('You BMI is: ', bmi);

  // Step 3: show the result 
  if (bmi < 18.5) {
    alert("You are underweight ! ");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("You are normal ! ");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("You are overweight ! ");
  } else if (bmi >= 30 && bmi <= 34.9) {
    alert("You are obese ! ");
  } else {
    alert ('You are extremely obese');
  }

}


