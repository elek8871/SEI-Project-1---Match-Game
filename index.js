//  needed game buttons:
const rules = document.getElementById("gameRules")
const startGame = document.getElementById("gameStart")
const shuffleTiles = document.getElementById("tileShuffle")


// add event listener for tile click
//  check for match
// true = either remove tile or leave back side up
// false = flip tile back over
// when all tiles are matched display winner msg
// function to randomize tiles