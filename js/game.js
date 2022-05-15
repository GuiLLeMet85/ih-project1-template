class Game {
    constructor() {
        this.currentMap = [{
                src: '/img/france.png',
                solution: 'France',
                points: 1
            },
            {
                src: '/img/norway.png',
                solution: 'Norway',
                points: 1
            },
            {
                src: '/img/sweden.png',
                solution: 'Sweden',
                points: 1
            }
        ]
        this.displayedMap = undefined;
        this.points = 0;
    }

    instuctionPage () {
        const learnPage = document.getElementById('start-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('intructions-page');
        solvePage.style = "display: flex";
    }


    //_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
        setTimeout(() => { this._showSolvingPage() }, 60000);
    }

    // seleccionar pagina que amagarem i seleccionar pagina que mostrarem
    _showSolvingPage() {
        const learnPage = document.getElementById('intructions-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: flex";
        console.log('_showSolvingPage');
        this._showRandomElement();
        this._printSolutions();
    }

    //Save all countries pictures in an array.
    //_showRandomElement // triar aleatoriament una de les imatges de mapes i returnar un console.log de la imatge. 

    _showRandomElement() {
        const countryMap = this.currentMap[Math.floor(Math.random() * this.currentMap.length)];
        this.displayedMap = countryMap;
        return document.getElementById('country-picture').src = countryMap.src;
    }

    _printSolutions() {
        const solutions = document.getElementById('solve-page');
        arrayEuroCountries.forEach(country => {
            let button = document.createElement('button');
            button.innerText = country;
            button.onclick = () => {
                this._checkAnswer(country);
            };
            solutions.appendChild(button);
        });

        // agafa l'array de assets europeanCountries.forEach(contry => createelement('button'), button.innertext = country; responses.appendchild(btn))
        // assigna un onclick a cada botó i aquest onclick crida a checkAnswer amb el paísque hem clicat
    }

    _showWin(){
        alert("You rock!!")
    }

    _checkAnswer(country) {
        if (this.displayedMap.solution == country) {
            this.points += this.displayedMap.points;
            this._showRandomElement();
            if (this.points === 10) {
                this._showWin();
            }
        } else {
            this.points -= 0.5;
        }
        document.getElementById('score').innerText = this.points;
    }


    start() {
        this._hideLearningPage();
    }

    howTo() {
        this._hideLearningPage();
    }

}