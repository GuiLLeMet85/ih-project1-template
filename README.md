# Game name

<img src="./img/pscreenshot-game.png">

## Description

The game shows a map with the names of countries/continents for 10 seconds. The player must memorize it. 

Then, the following screen show a picture with a part of this map. At the bottom, there will be several buttons with all names of the countries that show it before on the map. 

The player has to select the correct option. There are three kinds of puntuations depending the difficulty: Easy, 1 point,  Middle, 2 point and Difficult 3 points. If the player is wrong, 0.5 points are deducted. 

When the game starts, click the correct answers and score until 10 points.

## User stories MVP

Minimum user stories:

User can:
- hit play button and see the game screen.
- do the quiz of countries/continents.
- see the scoring board on screen.


## File structure

- <code>game.js</code>: contains all the elements for the game to work. Methods: start(), _showWin, _checkAnswer(country),     _chronometerSolve(),  _chronometerSolve(), _playTimeCounter(), _printSolutions(), _showRandomElement(), _showSolvingPage(), _chronometerLearn(), reateMaps() 
- <code>scripts.js</code>: contains all the DOM manipulation code to start the game.
- <code>assets.js</code>: contains all countries information.
- <code>mapss.js</code>: contains Constructor countries.


## Useful links

<!-- When you finish, add these links and commit -->

- Presentation sliders: https://slides.com/guillemb/minimal
- Deployed game: https://guillemet85.github.io/ih-project1-template/
