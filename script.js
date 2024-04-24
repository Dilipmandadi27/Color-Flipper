// selecting the contents to be targeted

let displaycontent = document.getElementById("wrap"); 
let btn = document.getElementById("btn");
let colortext = document.getElementById("color"); // storing value of color text e.g #FFFFFF
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // hex pattern 16values


// targeting btn for adding functions to change background

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) { // used loop for #hex values in 6digits
    hexColor += randomHex();
  }
  displaycontent.style.backgroundColor = hexColor; // adding css from javascript
  colortext.innerHTML = hexColor; // for getting output in the html
});

// function for random values

function randomHex() {
  let randomIndex = Math.floor(Math.random() * 16);

  return hex[randomIndex];
}
