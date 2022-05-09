window.onload = function () {

  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const europeMap = document.getElementById('europe-page');
  
  startButton.onclick = function () {
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }
}