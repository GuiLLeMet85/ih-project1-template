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
            },
            {
                src: '/img/germany.png',
                solution: 'Germany',
                points: 1
            },
            {
                src: '/img/spain.png',
                solution: 'Spain',
                points: 1
            },
            {
                src: '/img/italy.png',
                solution: 'Italy',
                points: 1
            },
            {
                src: '/img/andorra.png',
                solution: 'Andorra',
                points: 2
            },
            {
                src: '/img/netherlands.png',
                solution: 'Netherlands',
                points: 1
            }, {
                src: '/img/uk.png',
                solution: 'United Kingdom',
                points: 1
            }, {
                src: '/img/ireland.png',
                solution: 'Ireland',
                points: 2
            }, {
                src: '/img/poland.png',
                solution: 'Poland',
                points: 2
            }, {
                src: '/img/switzerland.png',
                solution: 'Switzerland',
                points: 2
            }, {
                src: '/img/finland.png',
                solution: 'Finland',
                points: 2
            }, {
                src: '/img/czech-republic.png',
                solution: 'Czech Republic',
                points: 2
            }, {
                src: '/img/greece.png',
                solution: 'Greece',
                points: 1
            }, {
                src: '/img/austria.png',
                solution: 'Austria',
                points: 1
            }, {
                src: '/img/slovakia.png',
                solution: 'Slovakia',
                points: 2
            }, {
                src: '/img/slovenia.png',
                solution: 'Slovenia',
                points: 2
            }, {
                src: '/img/montenegro.png',
                solution: 'Montenegro',
                points: 3
            }, {
                src: '/img/serbia.png',
                solution: 'Serbia',
                points: 2
            }, {
                src: '/img/croatia.png',
                solution: 'Croatia',
                points: 1
            }, {
                src: '/img/bosnia.png',
                solution: 'Bosnia',
                points: 2
            }, {
                src: '/img/bulgaria.png',
                solution: 'Bulgaria',
                points: 1
            }, {
                src: '/img/macedonia.png',
                solution: 'Macedonia',
                points: 2
            }, {
                src: '/img/hungary.png',
                solution: 'Hungary',
                points: 2
            }, {
                src: '/img/romania.png',
                solution: 'Romania',
                points: 1
            }, {
                src: '/img/malta.png',
                solution: 'Malta',
                points: 3
            }, {
                src: '/img/portugal.png',
                solution: 'Portugal',
                points: 1
            }, {
                src: '/img/iceland.png',
                solution: 'Iceland',
                points: 2
            }, {
                src: '/img/belarus.png',
                solution: 'Belarus',
                points: 2
            }, {
                src: '/img/lithuania.png',
                solution: 'Lithuania',
                points: 2
            }, {
                src: '/img/latvia.png',
                solution: 'Latvia',
                points: 2
            }, {
                src: '/img/estonian.png',
                solution: 'Estonian',
                points: 2
            }, {
                src: '/img/denmark.png',
                solution: 'Denmark',
                points: 1
            }, {
                src: '/img/monaco.png',
                solution: 'Monaco',
                points: 2
            }, {
                src: '/img/belgium.png',
                solution: 'Belgium',
                points: 2
            }, {
                src: '/img/luxembourg.png',
                solution: 'Luxembourg',
                points: 2
            }, {
                src: '/img/albania.png',
                solution: 'Albania',
                points: 2
            }, {
                src: '/img/san-marino.png',
                solution: 'San Marino',
                points: 3
            }, {
                src: '/img/vatican.png',
                solution: 'Vatican',
                points: 2
            }, {
                src: '/img/liechtenstein.png',
                solution: 'Liechtenstein',
                points: 3
            }, {
                src: '/img/ukraine.png',
                solution: 'Ukraine',
                points: 2
            }, {
                src: '/img/kosovo.png',
                solution: 'Kosovo',
                points: 3
            }, {
                src: '/img/cyprus.png',
                solution: 'Cyprus',
                points: 3
            }
        ]
        this.displayedMap = undefined;
        this.points = 0;
    }

     //_hideLearningPage // set timeout en 5 s i console.log 
     _hideLearningPage() {
        setTimeout(() => { this._showSolvingPage() }, 6000);
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
         },1000 );  
         let counter = 6;
         setTimeout(()=> {clearInterval(intervalId)}, 6000); 
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

    _showRandomElement() {
        const countryMap = this.currentMap[Math.floor(Math.random() * this.currentMap.length)];
       this.displayedMap = countryMap;
       return document.getElementById('country-picture').src = countryMap.src;
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
            if (i%2 !== 0) {
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
          },30000 );  
          let counter = 50;
          setTimeout(()=> {clearInterval(intervalId)}, 30000); 
    }



    _showWin() {
        alert("You rock!!")
    }

    _showLose() {
        alert("You need to study!")
    }

    _checkAnswer(country) {
        if (this.displayedMap.solution == country) {
            this.points += this.displayedMap.points;
            this._showRandomElement();
            if (this.points >= 70) {
                this._showWin();

            }
            else if (this.points >= 40){
                this._showWin();
            } 
            else {
            this.points -= 0.5;
            }
        }
        document.getElementById('score-points').innerText = this.points;
    }
    start() {
        this._hideLearningPage();
    }

    play() {
        const playButton = document.getElementById('play');
        this._showSolvingPage();
    }


    back() {

    }

}