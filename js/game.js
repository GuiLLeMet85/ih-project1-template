class Game {
    constructor() {
        this.images = [{
            src: '/img/france.png',
            solution: 'france',
            options: [{
                option1: "",
                option2: "",
                option3: "",
                option4: ""
            }],

            src: '/img/norway.png',
            solution: 'norway',
            options: [{
                option1: "",
                option2: "",
                option3: "",
                option4: ""
            }],

            src: '/img/sweden.png',
            solution: 'sweden',
            options: [{
                option1: "",
                option2: "",
                option3: "",
                option4: ""
            }],

        }]
    }

    //_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
        setTimeout(() => { this._showSolvingPage() }, 3000);
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

    //S'ha de guardar totes les imatges en un array.
    //_showRandomElement // triar aleatoriament una de les imatges de mapes i returnar un console.log de la imatge. 

    _showRandomElement() {
        const countryMap = this.images[Math.floor(Math.random() * this.images.length)];
        return document.getElementById('country-picture').src = countryMap;
        console.log('patata');
    }


    start() {
        this._hideLearningPage();
    }
}