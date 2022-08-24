document.addEventListener('DOMContentLoaded', () => {

// variables

//buttons
const startGame = document.getElementById("gameStart")
const tileShuffle = document.getElementById("tileShuffle")
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
   howToPlay.innerText = "Click on any tile to flip the card over. Choose another tile to look for a match. Matching tiles will stay flipped over, otherwise the tile will flip back. Keep clicking until you have matched all the tiles."
}

function shuffleArray(){
   for (let i = 0; i=gameTiles.length -1; i++){
      let j= Math.floor(Math.random() - 0.5);
      [gameTiles[i], gameTiles[j] = gameTiles[j],gameTiles[i]]
      console.log("FYS" , gameTiles)
   }
}
 shuffleArray()
// function shuffleTiles () {
//    const array = imageArray.sort(() => Math.random()- 0.5)
// array.forEach(imageTest=> {
//  console.log(imageTest.src)
// })
//    for (let i=0; i<gameTilesArray.length; i++) {
//     gameTilesArray[i].children[0].src = array[i].src

//    }
//  console.log("unique" ,gameTilesArray)
//  }

// shuffleTiles()



// flip tiles on click
for (let i = 0; i< gameTiles.length; i++) {
    gameTiles[i].addEventListener("click", flip)
}
function flip(event) {
    console.log(event.target.children)
   // event.target.children[0].classList.toggle("flipTile")
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
   }, 1000)
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