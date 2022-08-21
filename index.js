//  needed game buttons:
const rules = document.getElementById("gameRules")
const startGame = document.getElementById("gameStart")
const shuffleTiles = document.getElementById("tileShuffle")


//

let tileArray = document.getElementsByClassName("#tile")
// array of get tiles- not sure how to make the array an empty array of tiles
//const tiles = tileArray.length
//console.log(tiles) this gives me a value of 0

// function to randomize tiles
const randomize = ( )=>{
    const backImage = getElementsByClassName("#back")
    backImage.sort(() =>Math.random() *0.5)
    return randomize
    //console.log(randomize)
}
const gameTiles = document.getElementsByClassName("#tile")

const flipTiles = () =>{
    this.classList.toggle ('flip')
// gameTiles.forEach(tile => tile.addEventListener("click", flipTiles))
//or
// gameTiles.forEach(tileArray => tileArray.addEventListener("click", flipTiles))
}


//  check for match
// if (flipped tiles are ===){
//     leave backside up
// } else if !=
// flipTiles={}
// if all tiles have matched 
// display ServiceWorkerContainer
// true = either remove tile or leave back side up
// false = flip tile back over

let displayRules = document.getElementById("gameRules")
rules.addEventListener("click", displayRules)
