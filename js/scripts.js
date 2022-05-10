window.onload = function() {
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start');
    const europeMap = document.getElementById('europe-page');
    const europeMapNoName= document.getElementById('europe-page-noname');

    startButton.onclick = function() {
        startPage.style = "display: none";
        europeMap.style = "display: flex";
        europeMapNoName.style = "display: none";
        const game = new Game();
        game.start();
    }
}


class CountdownFirstMap {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(this.currentTime-=1,1000);
    }
    
    getSeconds() {
        return Math.floor(this.currentTime%60);
    }

    computeTwoDigitNumber(value) {
        const Number = value.toString()
        if(Number.length === 1 ){
          return `0${Number}`
        } else {
          return Number
        }
      }

    split() {
        const seconds = this.computeTwoDigitNumber(this.getSeconds())
        return `${seconds}`
      }

} 