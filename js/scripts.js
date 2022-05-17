window.onload = function() {
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const learnPage = document.getElementById('learn-page');
    const solvePage = document.getElementById('solve-page');
    const instructions = document.getElementById('instructions');
    const playButton = document.getElementById('play');

    startButton.onclick = function() {
        startPage.style = "display: none";
        learnPage.style = "display: flex";
        solvePage.style = "display: none";
        const game = new Game();
        game.start();
    }

    playButton.onclick = function() {
        startPage.style = "display: none";
        learnPage.style = "display: none";
        instructions.style = "display: none";
        solvePage.style = "display: flex";

    }
}