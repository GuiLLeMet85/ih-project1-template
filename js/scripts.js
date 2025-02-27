window.onload = function() {
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const learnPage = document.getElementById('learn-page');
    const solvePage = document.getElementById('solve-page');
    const playButton = document.getElementById('play');
    const backButton = document.getElementById('back');
    const backButtonLearn = document.getElementById('back2');
    const winnerPage = document.getElementById('winner-page');
    const backToInitialButton= document.getElementById('backToInitial');

    startButton.onclick = function() {
        startPage.style = "display: none";
        learnPage.style = "display: flex";
        solvePage.style = "display: none";
        winnerPage.style = "display: none";
        const game = new Game();
        game.start();
    }

    backToInitialButton.onclick=function() {
        startPage.style = "display: block";
        learnPage.style = "display: none";
        solvePage.style = "display: none";
        winnerPage.style = "display: none";
        const game = new Game();
        game.start();
    }
}