class Game{
  constructor(context) {
    this.ctx = context;
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