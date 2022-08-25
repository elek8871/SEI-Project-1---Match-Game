document.addEventListener('DOMContentLoaded', () => {

// variables
   //buttons
const howToPlay = document.getElementById("gameRules")
const startGame = document.getElementById("gameStart")
const tileShuffle = document.getElementById("shuffle")
   //modals
const rulesModal = document.getElementById("rulesModal")
const rulesSpan = document.getElementsByClassName("close")[0]
const startModal = document.getElementById("startModal")
const startSpan = document.getElementsByClassName("start")[0]
   // game vars
const gameBoard = document.getElementById("gameTiles")
const gameTiles = document.querySelectorAll(".tile")
const gameTilesArray =[...gameTiles]
const gameScreen = document.getElementById("gameTiles")
let winMsg = document.querySelector(".header")
let hasFlippedTile = false
let firstTile, secondTile
let score = 0

//rules modal
howToPlay.onclick = function(){
   rulesModal.style.display = "block"
}
rulesSpan.onclick = function(){
   rulesModal.style.display = "none"
}
window.onclick= function(event){
   if(event.target === rulesModal){
   rulesModal.style.display = "none"
   }
}

//start modal
startGame.onclick = function(){
   startModal.style.display = "block"
}
startSpan.onclick = function(){
   startModal.style.display = "none"
}
window.onclick= function(event){
   if(event.target === startModal){
   startModal.style.display = "none"
   }
}



// restart game
tileShuffle.onclick =function(){
   location.reload()
    shuffle()
}

// shuffle
function shuffle(){
   gameTiles.forEach(gameTiles =>{
      let randomImg = Math.floor(Math.random() *12)
      gameTiles.style.order = randomImg
   })
}
shuffle()

// flip tiles on click
for (let i = 0; i< gameTiles.length; i++) {
    gameTiles[i].addEventListener("click", flip)
}
function flip(event) {
    console.log(event.target.children)
    event.target.children[0].classList.add("flipTile")
   
   if (!hasFlippedTile) {
      hasFlippedTile = true;
      firstTile = event.target.children[0];
      return;
   }
   secondTile =  event.target.children[0];
   hasFlippedTile = false;

   checkforMatch(firstTile, secondTile)

   checkForWIn()
}

function checkforMatch(firstImage, secondImage){
   if (firstImage.src === secondImage.src) {
      disableCards()
      score +=1
   }else {
      unflipTiles()
   } 
   }
   function checkForWIn(){
   if (score === 8){
      winMsg.innerText = " 🏒 YOU WIN 🏒"
    }
}

function disableCards() {
   firstTile.removeEventListener("click",flip )
   secondTile.removeEventListener("click", flip)
}

function unflipTiles() {
   setTimeout (() =>{
      firstTile.classList.remove("flipTile")
      secondTile.classList.remove("flipTile")
   }, 500)
}


})