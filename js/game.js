class Game {
    constructor() {
     this.currentMap = [{
            src: '/img/france.png',
            solution: 'france',
        },
        {
            src: '/img/norway.png',
            solution: 'norway',
        },
        {   
            src: '/img/sweden.png',
            solution: 'sweden',
        }]
    }

    //_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
        setTimeout(() => { this._showSolvingPage() }, 4000);
    }

    // seleccionar pagina que amagarem i seleccionar pagina que mostrarem
    _showSolvingPage() {
        const learnPage = document.getElementById('learn-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: flex";
        console.log('_showSolvingPage');
        this._showRandomElement();
    }

    //Save all countries pictures in an array.
    //_showRandomElement // triar aleatoriament una de les imatges de mapes i returnar un console.log de la imatge. 

    _showRandomElement() {
        const countryMap = this.currentMap[Math.floor(Math.random() * this.currentMap.length)];
       // this.currentMap = country que estiguem fent de mapa
        return document.getElementById('country-picture').src = countryMap.src;
        console.log('patata');
    }


    _printSolutions() {
        const solutions = document.getElementById('solve-page');
        arrayEuroCountriesCountries.forEach(country => createElement('button');button.innerText = country;button.onclick = function() {
            _checkAnswer();}; solutions.appendchild(btn));


    // agafa l'array de assets europeanCountries.forEach(contry => createelement('button'), button.innertext = country; responses.appendchild(btn))
    // assigna un onclick a cada botó i aquest onclick crida a checkAnswer amb el paísque hem clicat
    }



    _checkAnswer(answer){
            // check si answer === currentmap
            //if si , cridar metode sumPoints
            // if no,  cridar metode lesspoints
   }


    start() {
        this._hideLearningPage();
    }
}