// Terminal

// # process api
// fetch('https://restcountries.eu/rest/v2/name/china').then(
//   function(response) {
//     console.log(response);
//   }
// )

// Vanilla Javascript

function change() {
  // change html
  document.getElementById("name").innerText = "China";
  document.getElementById("cap").innerText = "Beijing";

  document.getElementsByClassName("student")[0].innerHTML = "Leo";
  document.getElementsByClassName("student")[1].innerHTML = "Jerry";
  document.getElementsByClassName("student")[2].innerHTML = "Hudson";

  // change css
  document.getElementById("name").style.color = "red";
  document.getElementById("cap").style.backgroundColor = "yellow";
}

