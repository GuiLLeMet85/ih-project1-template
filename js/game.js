class Game {
    constructor() {

    }

    _assignControls() {

    }

    _update() {
        window.requestAnimationFrame(() => this._update());
    }

    start() {
        this._assignControls();
        this._update();
    }
}