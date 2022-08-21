//  needed game buttons:
const rules = document.getElementById("gameRules")
const startGame = document.getElementById("gameStart")
const shuffleTiles = document.getElementById("tileShuffle")

let tileArray = document.getElementsByClassName("#gameTiles")
// array of get tiles- not sure how to make the array an empty arrayof tiles
//const tiles = tileArray.length
//console.log(tiles)

// function to randomize tiles
const randomize = ( )=>{
    tileArray.sort(() =>Math.random() *0.5)
    return randomize
    // console.log(randomize)
}
// add event listener for tile click
const toggleCards = () =>{
    tileArray.addEventListener("click", )
}
//  check for match
// true = either remove tile or leave back side up
// false = flip tile back over
// when all tiles are matched display winner msg
