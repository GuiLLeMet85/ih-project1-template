class Game {
    constructor(learnPage,solvePage) {      
    // pensar quines propietats s'hauran de guardar.
}

//_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
        setTimeout(() => {this._showSolvingPage()}, 5000);
} 

// seleccionar pagina que amagarem
// seleccionar pagina que mostrarem
    _showSolvingPage(learnPage, solvePage) {
     
    } 

//_showRandomElement // triar aleatoriament una de les imatges de mapes i returnar un console.log de la imatge. S'ha de guardar totes les imatges en un array.

    start() {
        this._hideLearningPage();
    }
}