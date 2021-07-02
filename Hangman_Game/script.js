const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "programming",
  "wizard",
  "interface",
  "computer",
  "money",
  "fishing",
  "science",
  "mathematics",
  "software",
  "movie",
  "study",
  'gmail',
  'coffee',
  'flow'
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];


function displayWord() {
    wordEl.innerHTML = `
      ${selectedWord
        .split('')
        .map(
          letter => `
            <span class="letter">
              ${correctLetters.includes(letter) ? letter : ''}
            </span>
          `
        )
        .join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g,'');        
    /*console.log(wordEl.innerText);*/
    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You Won! 🤩';
        popup.style.display ='flex';
    }
}

displayWord();
