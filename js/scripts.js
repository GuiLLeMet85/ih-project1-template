window.onload = function() {
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const learnPage = document.getElementById('learn-page');
    const solvePage = document.getElementById('solve-page');

    startButton.onclick = function() {
        startPage.style = "display: none";
        learnPage.style = "display: flex";
        solvePage.style = "display: none";
        const game = new Game(learnPage,solvePage);
        game.start();
    }
}
