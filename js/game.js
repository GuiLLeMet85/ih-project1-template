class Game {
    constructor() {
        this.images = ['/img/france.png', '/img/norway', '/img/sweden.png']
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