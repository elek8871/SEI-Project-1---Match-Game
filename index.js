document.addEventListener('DOMContentLoaded', () => {


// changes text in button to display rules  
const howToPlay = document.getElementById("gameRules")
howToPlay.onclick = function rules() {
   howToPlay.innerText = "Click on any tile to flip the card over. Choose another tile to look for a match. Matching tiles will stay flipped over, otherwise the tile will flip back. Keep clicking until you have matched all the tiles."
}
//  document.getElementsByClassName("displayRules")
const startGame = document.getElementById("gameStart")
const shuffleTiles = document.getElementById("tileShuffle")

// flip tiles over on click
const gameTiles = document.getElementsByClassName("tile")
let gameTilesArray =[...gameTiles]
//   these both return an array, if i grab by parent class it returns 0 items in the array

for (let i = 0; i< gameTilesArray.length; i++) {
    gameTilesArray[i].addEventListener("click", flip)
}
function flip(event) {
    console.dir(event.target.children[0])
    event.target.children[0].classList.toggle("flipTile")
}






// function to randomize tiles
const randomize = ( )=>{
    const backImage = getElementsByClassName("#back")
    backImage.sort(() =>Math.random() *0.5)
    return randomize
    //console.log(randomize)
}


})
//  check for match
// if (flipped tiles are ===){
//     leave backside up
// } else if !=
// flipTiles={}
// if all tiles have matched 
// display ServiceWorkerContainer
// true = either remove tile or leave back side up
// false = flip tile back over


// thanks to https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563 for the handy ...gameTiles array method on line 12