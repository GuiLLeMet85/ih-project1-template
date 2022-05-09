window.onload = function() {

    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const europeMap = document.getElementById('europe-page');

    startButton.onclick = function() {
        startPage.style = "display: none";
        europeMap.style = "display: flex";
        const game = new Game();
        game.start();
    }
}