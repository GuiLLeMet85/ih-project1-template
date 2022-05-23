class Game {
    constructor() {
        this.allMaps = [];
        this.displayedMap = undefined;
        this.points = 0;
    }
    createMaps() {
        arrayCountryInfo.forEach((map) => {
            let newMap = new Map(map.src, map.solution, map.points);
            this.allMaps.push(newMap);
        });
    }




    _hideLearningPage(onlyShowOnce) {
        setTimeout(() => { this._showSolvingPage() }, 9000);
        this._chronometerLearn();
        console.log("hello")
    }

    _chronometerLearn() {
        const intervalId = setInterval(() => {
            document.getElementById('secUni').innerText = counter;
            counter -= 1;
        }, 1000);
        let counter = 9;
        setTimeout(() => { clearInterval(intervalId) }, 9000);
    }

    _showSolvingPage() {
        const startPage = document.getElementById('start-page');
        startPage.style = "display: none";
        const learnPage = document.getElementById('learn-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: flex";
        const winnerPage = document.getElementById('winner-page');
        winnerPage.style = "display: none";
        this._showRandomElement();
        this._printSolutions();
    }

    _showRandomElement() {
        const countryMap = this.allMaps[Math.floor(Math.random() * this.allMaps.length)];
        this.displayedMap = countryMap;
        document.getElementById('country-picture').src = countryMap.src;
        e.view.removeEventListener(e.type, _showRandomElemen());
    }

    _justOneTime() {
        var something = (function(_printSolutions) {
            var executed = false;
            return function() {
                if (!executed) {
                    executed = true;
                    // do something
                }
            };
        })();
        

    }


    _printSolutions() {
        const solutions = document.getElementById('posible-solutions');
        arrayEuroCountriesSort.forEach((country, i) => {
            let button = document.createElement('button');
            button.innerText = country;
            button.onclick = () => {
                this._checkAnswer(country);
            };
            solutions.appendChild(button);
            if (i % 2 !== 0) {
                const breakLine = document.createElement('br');
                breakLine.classList.add('breakLine');
                solutions.appendChild(breakLine);
            }
        });
    }

    _playTimeCounter() {
        setTimeout(() => { this.losePage() }, 30000);
        this._chronometerSolve();
    }

    _chronometerSolve() {
        const intervalId = setInterval(() => {
            document.getElementById('minuts').innerText = counter;
            counter -= 1;
        }, 30000);
        let counter = 50;
        setTimeout(() => { clearInterval(intervalId) }, 30000);
    }

    _checkAnswer(country) {
        if (this.displayedMap.solution == country) {
            this.points += this.displayedMap.points;
            this.allMaps.slice(this.displayedMap);
            this._showRandomElement();
            if (this.points >= 10) {
                this._showWin();
            } else {

            }
        } else {
            this.points -= 0.5;
        }
        document.getElementById('score-points').innerText = this.points;
    }

    start() {
        this._hideLearningPage();
        this.createMaps();
    }

    _showWin() {
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: none";
        const winnerPage = document.getElementById('winner-page');
        winnerPage.style = "display: flex";
    }
}