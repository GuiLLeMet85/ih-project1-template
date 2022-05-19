class Map {
    constructor(src, solution, points) {
        this.src = src;
        this.solution = solution;
        this.points = points;
    }
}

class Game {
    constructor() {
        this.allMaps = [];
        this.displayedMap = undefined;
        this.points = 0;
    }
    createMaps() {
        arrayCountryInfo.forEach((map)=> {
            let newMap = new Map(map.src, map.solution, map.points);
            this.allMaps.push(newMap);
        });
    }

    //_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
            setTimeout(() => { this._showSolvingPage() }, 4000);
            this._chronometerLearn();
        }
        /*
            _hideLearningPage() {
                if(document.getElementById('play').clicked == false) {
                    setTimeout(() => { this._showSolvingPage() }, 6000);
                this._chronometerLearn();
                }
                else {
                    this._showSolvingPage;
                }
                console.log("hello")
            }
            */

    _chronometerLearn() {
        const intervalId = setInterval(() => {
            document.getElementById('secUni').innerText = counter;
            counter -= 1;
        }, 1000);
        let counter = 4;
        setTimeout(() => { clearInterval(intervalId) }, 4000);
    }

    // seleccionar pagina que amagarem i seleccionar pagina que mostrarem
    _showSolvingPage() {
        const startPage = document.getElementById('start-page');
        startPage.style = "display: none";
        const learnPage = document.getElementById('learn-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: flex";
        this._showRandomElement();
        this._printSolutions();
    }

    //Save all countries pictures in an array.
    /*
        _showPendingCountries() {
            const countryPending = this.allMaps.status

        }
    */

    _showRandomElement() {
        const countryMap = this.allMaps[Math.floor(Math.random() * this.allMaps.length)];
        this.displayedMap = countryMap;
        document.getElementById('country-picture').src = countryMap.src;
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

   /* _checkAnswer(country) {
        if (this.displayedMap.solution == country) {
            this.points += this.displayedMap.points;
            this.allMaps.slice(this.displayedMap);
            this._showRandomElement();
            if (this.points >= 10) {
                this._showWin();
            } else {
                this.points -= 0.5;
            }
        }
        document.getElementById('score-points').innerText = this.points;
    }

    */

    _checkAnswer(country) {
        if (this.displayedMap.solution == country) {
            this.points += this.displayedMap.points;
            this.allMaps.slice(this.displayedMap);
            this._showRandomElement();
            if (this.points >= 10) {
                this._showWin();
            }
            else {

            } 
           }
            
            else {
                this.points -= 0.5;
            } 
        document.getElementById('score-points').innerText = this.points;
    }




    start() {
        this._hideLearningPage();
        this.createMaps();
    }

    play() {
        const playButton = document.getElementById('play');
        this._showSolvingPage();
    }

    _showWin() {
        alert("You rock!!")
        // document.getelementbyloquesiguide lapagina de joc i display none
        //document.getelementalksdjalksdj la pagina de wuin i display: block
    }

    _showLose() {
        alert("You need to study!")
    }
}