# SEI-Project-1-Match-Game
### https://elek8871.github.io/SEI-Project-1---Match-Game/

## Game Description
##### This is intended to be a simple memory match game in which the user clicks on a tile to flip them over and tries to match the pairs. The cards will show different colors when flipped. The basic game settings will include a start game and a reset game button with 16 tiles.  Time permitting I will add graphics/images to the tiles and add options for a larger deck of tiles. I would also like to add an option to change the tiles. Allowing the user to choose from different deck styles.

##### The game will be developed using HTML, CSS, and Javascript with DOM manipulation. 
---



![My project-1](https://user-images.githubusercontent.com/110848452/185546129-62f1bcfb-3d8b-4493-97a0-770b4b6a062c.png)

# MVP
--- 
- #### Create an interactive game screen
- #### Render game screen that will contain:
- #### [x] A button which when pressed will supply game direction. 
  This was originally done by changing the inner text of my button. I changed it to a modal and I think it looks much more professional
- #### [x] A button to start the game : refreshes the screen and displays a how to play modal
- #### [~] A button to reshuffle/restart the game
  8/25: Currently has the same functionality as start game button, I haven't been succesful in getting the modal to not pop up. 
- ##### [x] A set of tiles that will flip over on click
  Initailly the cards array was shuffling but not the images, even though they were in the same div. Changed the code to tiles.forEach and that fixed it.
- #### [x] The tiles will have varying colors on the back side
  I actually decided to use images from the get go. 
- #### [x] display a win message. 
  I accomplished this by changing the header text



---
# Strech Goals:
- ##### Add the ability to select from different decks sizes
- ##### Add graphic or images on the tiles - Imgs were added in the beginning stages
- ##### Allow the user to choose between different tile designs

###### I used this tutorial as a reference point:
https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae