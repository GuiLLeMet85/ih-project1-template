window.onload = function() {
    const startPage = document.getElementById('start-page');
    const howToButton = document.getElementById('howto');
    const startButton = document.getElementById('start');
    const instuctionPage = document.getElementById('intructions-page');
    const learnPage = document.getElementById('learn-page');
    const solvePage = document.getElementById('solve-page');

    howToButton.onclick = function() {
        startPage.style = "display: none";
        instuctionPage.style = "display: flex";
        learnPage.style = "display: none";
        solvePage.style = "display: none";
        const game = new Game();
        game.howTo();
    }

    startButton.onclick = function() {
        startPage.style = "display: none";
        instuctionPage.style = "display: none";
        learnPage.style = "display: flex";
        solvePage.style = "display: none";
        const game = new Game();
        game.start();
    }
}