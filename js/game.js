class Game {
    constructor() {      
        // pensar quines propietats s'hauran de guardar.
}

//_hideLearningPage // set timeout en 5 s i console.log 
    _hideLearningPage() {
        setTimeout(() => {this._showSolvingPage()}, 3000);
} 

// seleccionar pagina que amagarem
// seleccionar pagina que mostrarem
    _showSolvingPage() {
        this._hideLearningPage();
        const learnPage = document.getElementById('learn-page');
        learnPage.style = "display: none";
        const solvePage = document.getElementById('solve-page');
        solvePage.style = "display: flex";
        console.log("Hola")
} 

//S'ha de guardar totes les imatges en un array.
//_showRandomElement // triar aleatoriament una de les imatges de mapes i returnar un console.log de la imatge. 

    _showRandomElement() {
        this._showSolvingPage();
      img = new Array()
            img[0] = '/img/france.png';
            img[1] = '/img/norway.png';
            img[2] = '/img/sweden.png';
            console.log("Que tal")
        ran = Math.floor(3 * Math.random());
        document.write('<img src= " " +img[ran] +  " ">');
}

    start() {
        this._hideLearningPage();
    }
}