const cards = document.querySelectorAll(".tile")

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard () {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flipTile");
        if (!hasFlippedCard) {
    // first click
            hasFlippedCard = true;
            firstCard =this 
        } else {
        // second click
            hasFlippedCard = false;
            secondCard = this;
    // check for match
        checkforMatch ()
     }

function checkforMatch (){
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards()
     } else {
       unFlipCards()
     }
}}

function disableCards (){
    // cards match : disable flip card
    firstCard.removeEventListener ("click", flipCard)
    secondCard.removeEventListener ("click", flipCard)  
}

function unFlipCards (){
    lockBoard= true
    setTimeout ( () => {
        firstCard.classList.remove ("flipTile")
        secondCard.classList.remove ("flipTile")
        lockBoard= false
        }, 1500) 
}

cards.forEach(card => card.addEventListener('click', flipCard) )