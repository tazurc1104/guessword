const boxes = document.querySelectorAll(".boxes");
const goButton = document.querySelector(".go-button");
const header = document.querySelector(".page-header");

const words = [
  "GRAPE",
  "MELON",
  "PEACH",
  "MANGO",
  "LEMON",
  "PLUMS",
  "PLACES",
  "PHONE",
  "CLOCK",
  "BOARD",
  "BREAD",
  "ADULT",
  "BLACK",
  "BLAME",
  "BLIND",
  "COVER",
  "CHINA",
  "BROKE",
  "DRIVE",
  "DELAY",
  "RELAY",
  "ENJOY",
  "MOUTH",
  "MOUSE",
  "MOVIE",
  "ROUGH",
  "TIMES",
  "WOUND",
  "WRITE",
  "RIGHT",
  "WHITE",
  "VITAL",
  "VOICE",
  "VIRUS",
  "COVID",

];
const randomIndex = Math.floor(Math.random() * words.length);
const word = words[randomIndex];

let guessLetters = 0;
let startingIndex = 0;
let endingIndex = 5;
var guess = "";
let startingBox = 0;
let correct = 0;




goButton.addEventListener("click", function(){
    const guess = document.getElementById('guess-input').value;
    const letters = guess.split("");
    if (letters.length === 5){
        for (var i = startingIndex; i < endingIndex; i++){
            boxes[startingBox].innerHTML = letters[i].toUpperCase();
            if (boxes[startingBox].innerHTML === word[i]){
              boxes[startingBox].style.backgroundColor = "green";
              correct++;
            }
            else {
              for (var j = 0; j < word.length; j++){
                if (boxes[i].innerHTML === word[j] && i !== j){
                  boxes[startingBox].style.backgroundColor = "yellow";
                }
              }
            }
            startingBox++;
            
        }
        if (correct === 5){
          header.innerHTML = "You Won";
          setTimeout(function() {
            location.reload();
          }, 3000); // 3000 milliseconds = 3 seconds
        }
        }
        correct = 0;
        guess ='';
        
    
});

