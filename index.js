const letterButtons = document.querySelectorAll(".letters-buttons");
const boxes = document.querySelectorAll(".boxes");
const goButton = document.querySelector(".go-button");
const eraseButton = document.querySelector(".erase-button");
const header = document.querySelector(".page-header");
const words = [
  "GRAPE",
  "MELON",
  "PEACH",
  "MANGO",
  "LEMON",
  "PLUMS",
  "DOORS",
  "FOODS",
  "PLACES",
  "GREEN",
  "YELLOW",
 
];
const randomIndex = Math.floor(Math.random() * words.length);
const word = words[randomIndex];

let guessLetters = 0;
let startingIndex = 0;
let endingIndex = 5;
var guess = "";
let startingBox = 0;
let correct = 0;
letterButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (startingIndex < endingIndex) {
      boxes[startingIndex].textContent = button.textContent;
      startingIndex++;
    }
  });
});

eraseButton.addEventListener("click", function() {
  boxes[startingIndex-1].textContent = '';
  startingIndex--;
});



goButton.addEventListener("click", function(){
  if (startingIndex === endingIndex){
    for (var i = guessLetters; guessLetters < endingIndex; guessLetters++){
      guess += boxes[guessLetters].innerHTML;
    }
    endingIndex += 5;
    for (var i = 0; i < word.length; i++){
      if (guess[i] === word[i]){
        boxes[startingBox].style.backgroundColor = "green";
        correct++;
        if (correct === 5) {
          header.innerHTML = "You Won";
          setTimeout(function() {
            location.reload();
          }, 3000); // 3000 milliseconds = 3 seconds
        }
      }
      startingBox++;
    }
  }
  correct = 0;
  guess = ""
});

