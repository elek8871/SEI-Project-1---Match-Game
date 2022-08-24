document.addEventListener('DOMContentLoaded', () => {

// variables

//buttons
const startGame = document.getElementById("gameStart")
const tileShuffle = document.getElementById("shuffle")
const howToPlay = document.getElementById("gameRules")
// 
const gameTiles = document.querySelectorAll(".tile")
const gameTilesArray =[...gameTiles]
const images = document.querySelectorAll(".back")
const imageArray = [...images]
let hasFlippedTile = false
let firstTile, secondTile


// changes text in button to display rules  
howToPlay.onclick = function rules() {
   howToPlay.innerText = "Select and two tiles to look for a match. Matching tiles will stay flipped over, otherwise the tiles will flip back. Keep trying until all tiles are matched "
}
tileShuffle.addEventListener("click",shuffle)
startGame.addEventListener("click", shuffle)

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
   console.log(secondTile)
   hasFlippedTile = false;

   checkforMatch(firstTile, secondTile)
}

function checkforMatch(firstImage, secondImage){
   console.log(firstImage)
   if (firstImage.src === secondImage.src) {
      disableCards()
      console.log("it's a match")
      return
   }
   unflipTiles()
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











//  function that checks how many cards are clicked then
// checks for match and flip backover or leave img side up if matched

// function checkMatch (){
//     const choiceOne = gameTilesArray[0]
//     const choiceTwo = gameTilesArray[1]

//     if (choiceOne === choiceTwo){
//         //leave cards overturned
//     } else {
//         flip
//     }
// }
// checkMatch()
 

//if () {
    //2 tiles are clicked

    // check for match

    // if match -> leave tiles turned
    
    // else -> flip tiles

    //check if all tiles are matched

 //let randomize = gameTiles

//  function shuffleTiles(array) {
//     let currentIndex = gameTilesArray.length, temporaryValue, randomIndex;
//     while (0 !== currentIndex) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = gameTilesArray[currentIndex];
//       gameTilesArray[currentIndex] = array[randomIndex];
//       gameTilesArray[randomIndex] = temporaryValue;
//     }
//     return gameTilesArray;
//   }
// function shuffleTiles (gameTilesArray) {
//     gameTilesArray.sort(() => Math.random()- 0.5);
//  }
//  shuffleTiles(gameTilesArray)
//  console.log(shuffleTiles)
 






})
// thanks to https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563 for the handy ...gameTiles array method on line 12